# predictor/services/arima_service.py

import pandas as pd
from core.data_loader import load_and_preprocess_data, CSV_PATH, CSV_PATH_M
from core.model_loader import arima_res

def predict_future_arima(
    n_days: int,
    variable: str,
    frequency: str = "daily"
):
    """
    Genera n_days predicciones con el ARIMA preentrenado.
    Usa el mismo CSV para reconstruir las fechas finales.
    """
    # 1) Carga el CSV correcto solo para las fechas
    path = CSV_PATH if frequency == "daily" else CSV_PATH_M
    df, _, _ = load_and_preprocess_data(path, target_variable=variable)
    
    # 2) Fecha de partida
    last_date = df['Fecha'].iloc[-1]
    # Si es mensual, freq='M', si es diario, freq='D'
    freq_str = 'D' if frequency == "daily" else 'M'
    future_dates = pd.date_range(
        start=last_date + pd.Timedelta(days=1),
        periods=n_days,
        freq=freq_str
    )
    
    # 3) Predicción
    preds = arima_res.forecast(steps=n_days)
    
    return {
        "dates": [str(d.date()) for d in future_dates],
        "predictions": [float(x) for x in preds]
    }
