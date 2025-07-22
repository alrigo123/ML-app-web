import numpy as np
import pandas as pd
from core.data_loader import load_and_preprocess_data, CSV_PATH
from core.model_loader import rf_model

def predict_future_random_forest(n_days: int, variable: str):
    """
    Utiliza tu RandomForest preentrenado (rf_model.pkl) para generar predicciones
    de n_days pasos, usando el mismo pipeline de lags (n_lags=15).
    """
    # 1) Carga y preprocesa exactamente como en Colab
    df, features, _ = load_and_preprocess_data(
        path=CSV_PATH,
        target_variable=variable,
        n_lags=15
    )

    # 2) Punto de partida: última fila de features
    last_obs = features.iloc[-1].values.copy()

    # 3) Generar las fechas futuras
    future_dates = pd.date_range(
        start=df.index[-1] + pd.Timedelta(days=1),
        periods=n_days,
        freq="D"
    )

    # 4) Bucle autoregresivo
    preds = []
    for _ in range(n_days):
        row = pd.DataFrame([last_obs], columns=features.columns)
        y   = rf_model.predict(row)[0]
        preds.append(float(y))

        # desplazar y meter predicción al final
        last_obs = np.roll(last_obs, -1)
        last_obs[-1] = y

    # 5) Devolver JSON
    return {
        "dates":       [str(d.date()) for d in future_dates],
        "predictions": preds
    }
