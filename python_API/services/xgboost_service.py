# predictor/services/xgboost_service.py

import numpy as np
import pandas as pd
from core.data_loader import load_and_preprocess_data, CSV_PATH, CSV_PATH_M
from core.model_loader import xgb_model

def predict_future_xgboost(n_days: int, variable: str, frequency: str = "daily"):
    # Selecciona el CSV según frecuencia
    path = CSV_PATH if frequency == "daily" else CSV_PATH_M
    df, features, _ = load_and_preprocess_data(path, target_variable=variable)

    # Punto de partida: última fila de features
    last = features.iloc[-1].values.copy()
    future_dates = pd.date_range(
        start=df['Fecha'].iloc[-1] + pd.Timedelta(days=1),
        periods=n_days, freq='D'
    )

    preds = []
    for _ in range(n_days):
        row = pd.DataFrame([last], columns=features.columns)
        y = xgb_model.predict(row)[0]
        preds.append(float(y))
        last = np.roll(last, -1)
        last[-1] = y

    return {
        "dates": [str(d.date()) for d in future_dates],
        "predictions": preds
    }
