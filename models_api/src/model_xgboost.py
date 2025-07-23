# src/model_xgboost.py

import numpy as np
import pandas as pd

def prepare_features_for_prediction_xgb(df, n_lags, target_column):
    # Crea los lags igual que el entrenamiento
    for lag in range(1, n_lags + 1):
        df[f'{target_column}_lag_{lag}'] = df[target_column].shift(lag)
    df['month'] = df.index.month
    df['dayofyear'] = df.index.dayofyear
    df.dropna(inplace=True)
    return df

def predict_future_xgboost(model, df, n_days=7, n_lags=15, target_column='Temp_max'):
    if n_days > n_lags:
        raise ValueError(f"El máximo de días de predicción permitidos es {n_lags}.")

    df_pred = df.copy()
    if not isinstance(df_pred.index, pd.DatetimeIndex):
        df_pred.index = pd.to_datetime(df_pred['Fecha'])
        df_pred = df_pred.set_index('Fecha')

    # Prepara los features igual que en el entrenamiento
    df_pred = prepare_features_for_prediction_xgb(df_pred, n_lags, target_column)
    feature_cols = [f'{target_column}_lag_{i}' for i in range(1, n_lags + 1)] + ['month', 'dayofyear']

    last_row = df_pred.iloc[-1]
    lags = last_row[[f'{target_column}_lag_{i}' for i in range(1, n_lags + 1)]].values
    last_date = df_pred.index[-1]
    preds = []
    future_dates = []

    for i in range(n_days):
        month = (last_date + pd.Timedelta(days=1)).month
        dayofyear = (last_date + pd.Timedelta(days=1)).dayofyear

        feat_input = np.concatenate([lags, [month, dayofyear]]).reshape(1, -1)
        feat_df = pd.DataFrame(feat_input, columns=feature_cols)
        pred = model.predict(feat_df)[0]
        preds.append(float(pred))

        # Actualiza los lags para la siguiente predicción
        lags = np.roll(lags, -1)
        lags[-1] = pred
        last_date = last_date + pd.Timedelta(days=1)
        future_dates.append(last_date.strftime("%Y-%m-%d"))

    return {"dates": future_dates, "predictions": preds}
