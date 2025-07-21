# # predictor/services/rf_service.py

# import numpy as np
# import pandas as pd
# from core.data_loader import load_and_preprocess_data, CSV_PATH, CSV_PATH_M
# from core.model_loader import rf_model

# def predict_future_random_forest(n_days: int, variable: str, frequency: str = "daily"):
#     path = CSV_PATH if frequency == "daily" else CSV_PATH_M
#     df, features, _ = load_and_preprocess_data(path, target_variable=variable)

#     last = features.iloc[-1].values.copy()
#     future_dates = pd.date_range(
#         start=df['Fecha'].iloc[-1] + pd.Timedelta(days=1),
#         periods=n_days, freq='D'
#     )

#     preds = []
#     for _ in range(n_days):
#         row = pd.DataFrame([last], columns=features.columns)
#         y = rf_model.predict(row)[0]
#         preds.append(float(y))
#         last = np.roll(last, -1)
#         last[-1] = y

#     return {
#         "dates": [str(d.date()) for d in future_dates],
#         "predictions": preds
#     }


import numpy as np
import pandas as pd
from core.data_loader import load_and_preprocess_data, CSV_PATH
from core.model_loader import rf_model

def predict_future_random_forest(n_days: int, variable: str):
    """
    n_days: cuántos días predecir
    variable: 'Temp_max', 'Temp_min', 'Humedad' o 'Precipitacion'
    Siempre usa CSV_PATH (serie diaria).
    """
    # 1) Carga datos
    df, features, _ = load_and_preprocess_data(CSV_PATH, target_variable=variable)

    # 2) Fechas futuras
    last_date    = df['Fecha'].iloc[-1]
    future_dates = pd.date_range(
        start= last_date + pd.Timedelta(days=1),
        periods=n_days,
        freq='D'
    )

    # 3) Predicción autoregresiva
    last_obs = features.iloc[-1].values.copy()
    preds    = []
    for _ in range(n_days):
        row = pd.DataFrame([last_obs], columns=features.columns)
        y   = rf_model.predict(row)[0]
        preds.append(float(y))
        last_obs = np.roll(last_obs, -1)
        last_obs[-1] = y

    return {
        "dates":       [str(d.date()) for d in future_dates],
        "predictions": preds
    }
