# src/model_randomforest.py

import numpy as np
import pandas as pd

def prepare_features_for_prediction(df, n_lags, target_column):
    """
    Dado un DataFrame y la cantidad de lags, crea las columnas de lag,
    así como las columnas estacionales, igual que en el entrenamiento.
    """
    # Crear lags
    for lag in range(1, n_lags + 1):
        df[f'lag_{lag}'] = df[target_column].shift(lag)
    df['Month'] = df.index.month
    df['Day_of_Week'] = df.index.dayofweek
    df.dropna(inplace=True)
    return df

def predict_future_random_forest(model, df, n_days=7, n_lags=15, target_column='Temp_max'):
    """
    Realiza predicciones autoregresivas N días hacia el futuro con el modelo Random Forest ya cargado.
    - model: modelo Random Forest cargado
    - df: DataFrame con las columnas originales (incluyendo target_column)
    - n_days: días a predecir
    - n_lags: cantidad de lags creados durante entrenamiento
    - target_column: variable objetivo
    """
    
    if n_days > n_lags:
        raise ValueError(f"El máximo de días de predicción permitidos es {n_lags}.")
    
    df_pred = df.copy()
    # Asegúrate de que el índice sea la fecha
    if not isinstance(df_pred.index, pd.DatetimeIndex):
        df_pred.index = pd.to_datetime(df_pred.index)

    # Prepara los features con los últimos valores
    df_pred = prepare_features_for_prediction(df_pred, n_lags, target_column)
    feature_cols = [f'lag_{i}' for i in range(1, n_lags + 1)] + ['Month', 'Day_of_Week']

    # Inicia con la última fila conocida
    last_known = df_pred.iloc[-1]
    lags = last_known[[f'lag_{i}' for i in range(1, n_lags + 1)]].values
    last_date = df_pred.index[-1]
    preds = []
    future_dates = []

    for i in range(n_days):
        # Prepara las features para el siguiente día
        month = (last_date + pd.Timedelta(days=1)).month
        day_of_week = (last_date + pd.Timedelta(days=1)).dayofweek

        feature_cols = [f'lag_{i}' for i in range(1, n_lags + 1)] + ['Month', 'Day_of_Week']
        feat_input = np.concatenate([lags, [month, day_of_week]]).reshape(1, -1)
        feat_df = pd.DataFrame(feat_input, columns=feature_cols)
        pred = model.predict(feat_df)[0]
        preds.append(float(pred))

        # Actualiza lags para la siguiente iteración
        lags = np.roll(lags, -1)
        lags[-1] = pred
        last_date = last_date + pd.Timedelta(days=1)
        future_dates.append(last_date.strftime("%Y-%m-%d"))

    return {"dates": future_dates, "predictions": preds}
