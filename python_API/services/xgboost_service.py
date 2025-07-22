# predictor/services/xgboost_service.py

import numpy as np
import pandas as pd
from core.data_loader import load_and_preprocess_data, CSV_PATH
from core.model_loader  import xgb_model

def predict_future_xgboost(n_days: int, variable: str):
    """
    Predecir n_days usando tu XGB preentrenado.
    Pipeline:
      1) Llamar al loader con lags genéricos
      2) Renombrar lag_i → {variable}_lag_i
      3) Renombrar Month/Day_of_Week → month/dayofyear
      4) Autoregresión para las predicciones
    """
    # 1) Carga & preprocesa (10 lags genéricos)
    df, features, _ = load_and_preprocess_data(
        path=CSV_PATH,
        target_variable=variable,
        n_lags=10
    )

    # 2) Renombrar lag_1…lag_10 → Temp_max_lag_1…Temp_max_lag_10 (o el target que toque)
    rename_map = {f"lag_{i}": f"{variable}_lag_{i}" for i in range(1, 11)}

    # 3) Renombrar fechas a como las vio XGB en Colab
    rename_map.update({
        "Month":       "month",
        "Day_of_Week": "dayofyear"
    })

    features = features.rename(columns=rename_map)

    # 4) Generar fechas futuras
    last_date    = df.index[-1]
    future_dates = pd.date_range(
        start= last_date + pd.Timedelta(days=1),
        periods=n_days,
        freq="D"
    )

    # 5) Bucle autoregresivo de predicción
    last_obs = features.iloc[-1].values.copy()
    preds    = []
    for _ in range(n_days):
        row = pd.DataFrame([last_obs], columns=features.columns)
        y   = xgb_model.predict(row)[0]
        preds.append(float(y))
        last_obs = np.roll(last_obs, -1)
        last_obs[-1] = y

    return {
        "dates":       [str(d.date()) for d in future_dates],
        "predictions": preds
    }
