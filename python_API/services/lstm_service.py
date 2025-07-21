# # predictor/services/lstm_service.py

# import numpy as np
# import pandas as pd
# from core.data_loader    import load_and_preprocess_data, CSV_PATH, CSV_PATH_M
# from core.model_loader   import lstm_model, scaler

# # Debe coincidir con el window_size que usaste en Colab
# WINDOW_SIZE = 7

# def predict_future_lstm(n_days: int, variable: str, frequency: str = "daily"):
#     # 1) Escoge CSV solo para reconstruir fechas y target
#     path = CSV_PATH if frequency == "daily" else CSV_PATH_M
#     df, _, target = load_and_preprocess_data(path, target_variable=variable)

#     # 2) Prepara fechas futuras
#     last_date = df['Fecha'].iloc[-1]
#     freq_str  = 'D' if frequency == "daily" else 'M'
#     future_dates = pd.date_range(
#         start= last_date + pd.Timedelta(days=1),
#         periods=n_days,
#         freq=freq_str
#     )

#     # 3) Construye la última ventana de valores escalados
#     #    Usamos target (ya alineado tras dropna de los lags)
#     data_vals   = target.values.reshape(-1, 1)        # (N, 1)
#     data_scaled = scaler.transform(data_vals).flatten() 
#     last_window = data_scaled[-WINDOW_SIZE:]          # (WINDOW_SIZE,)

#     # 4) Reshape para LSTM: (1, WINDOW_SIZE, 1)
#     window = last_window.reshape(1, WINDOW_SIZE, 1)

#     # 5) Bucle autoregresivo de predicciones
#     preds = []
#     for _ in range(n_days):
#         y_norm = float(lstm_model.predict(window)[0, 0])
#         # desnormalizar
#         y_real = float(scaler.inverse_transform([[y_norm]])[0, 0])
#         preds.append(y_real)

#         # actualizar ventana: eliminar primer paso, añadir y_norm
#         new_seq = np.concatenate([window.flatten()[1:], [y_norm]])
#         window = new_seq.reshape(1, WINDOW_SIZE, 1)

#     return {
#         "dates":       [str(d.date()) for d in future_dates],
#         "predictions": preds
#     }
