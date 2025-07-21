# import pandas as pd
# import os

# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# CSV_PATH = os.path.join(BASE_DIR, "databases", "TIME_SERIES-Andenes_Diario-13-23.csv")
# CSV_PATH_M = os.path.join(BASE_DIR, "databases", "TIME_SERIES-Andenes_Mensual-86-23.csv")

# def load_and_preprocess_data(path: str, target_variable: str = "Humedad"):
#     # ... tu implementación completa ...
#     return df, features, target


# predictor/core/data_loader.py

import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(BASE_DIR, "databases", "TIME_SERIES-Andenes_Diario-13-23.csv")
CSV_PATH_M = os.path.join(BASE_DIR, "databases", "TIME_SERIES-Andenes_Mensual-86-23.csv")


def load_and_preprocess_data(path: str, target_variable: str = "Humedad"):
    df = pd.read_csv(path, delimiter=',')
    df['Fecha'] = pd.to_datetime(df['Fecha'])
    
    # 1) Renombrar igual que en Colab
    df = df.rename(columns={
      "TｰMaxima": "Temp_max",
      "TｰMinima": "Temp_min",
      "%Humedad": "Humedad",
      "Lluvia":    "Precipitacion",
      # y si tu CSV ya trae Evapotransp, RadSolar, EnerSolar, PresionBarom, Pto rocio: déjalas
    })
    
    # 2) Agregar EXACTAMENTE los mismos campos de fecha
    df['Day_of_Week'] = df['Fecha'].dt.weekday   # si así lo hiciste en Colab
    df['Month']       = df['Fecha'].dt.month
    
    # 3) (Opcional) Si tenías más variables meteorológicas en tu CSV original,
    #     no las elimines aquí, deja que permanezcan en df para que coincidan
    #     con los nombres que el modelo espera.
    
    # 4) Validación del target y eliminación de columnas irrelevantes, como antes…
    valid_targets = {"Temp_max","Temp_min","Humedad","Precipitacion"}
    if target_variable not in valid_targets:
        raise ValueError("…")
    drop_cols = {"Año","MesNum","Dia", "Temp_media"}  # ajusta a lo tuyo
    drop_cols.discard(target_variable)
    df.drop(columns=drop_cols, errors="ignore", inplace=True)
    
    # 5) Crear lags 1–10 de la variable objetivo
    for lag in range(1, 11):
        df[f"{target_variable}_lag_{lag}"] = df[target_variable].shift(lag)
    
    # 6) Ahora eliminamos NaN y separamos features/target
    df.dropna(inplace=True)
    features = df.drop(columns=['Fecha', target_variable])
    target   = df[target_variable]
    return df, features, target