import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(BASE_DIR, "databases", "TIME-SERIES-Diario-13-23.csv")
CSV_PATH_M = os.path.join(BASE_DIR, "databases", "TIME-SERIES-Mensual-86-23.csv")


def load_and_preprocess_data(
    path: str,
    target_variable: str,
    n_lags: int = 15
):
    """
    Reproduce el pipeline de tu notebook de Random Forest:
      - parsea Fecha
      - indexa por Fecha
      - renombra columnas
      - elimina todo excepto el target_variable
      - crea n_lags lags (lag_1 ... lag_n)
      - elimina NaN
      - añade Month y Day_of_Week
    Retorna df completo, features (X) y target (y).
    """
    # 1) Leer y parsear Fecha
    df = pd.read_csv(path, parse_dates=["Fecha"])

    # 2) Hacer Fecha índice
    df = df.set_index("Fecha")

    # 3) Renombrar columnas igual que en Colab
    df = df.rename(columns={
        "Tｰ Media":    "Temp_media",
        "TｰMaxima":    "Temp_max",
        "TｰMinima":    "Temp_min",
        "Lluvia":      "Precipitacion",
        "%Humedad":    "Humedad",
    })

    # 4) Eliminar columnas irrelevantes
    drop_cols = ["Año", "Dia", "Mes", "Temp_media"]
    # Además eliminar todas las variables meteorológicas salvo la que vamos a predecir
    for col in ["Temp_max", "Temp_min", "Humedad", "Precipitacion"]:
        if col != target_variable:
            drop_cols.append(col)
    df.drop(columns=drop_cols, errors="ignore", inplace=True)

    # 5) Crear lags de la variable objetivo
    for lag in range(1, n_lags + 1):
        df[f"lag_{lag}"] = df[target_variable].shift(lag)

    # 6) Quitar filas con NaN (primeros lags)
    df.dropna(inplace=True)

    # 7) Añadir Month y Day_of_Week
    df["Month"]       = df.index.month
    df["Day_of_Week"] = df.index.dayofweek

    # 8) Separar features y target
    features = df.drop(columns=[target_variable])
    target   = df[target_variable]

    return df, features, target