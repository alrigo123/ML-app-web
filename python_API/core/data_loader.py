import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(BASE_DIR, "databases", "TIME_SERIES-Andenes_Diario-13-23.csv")
CSV_PATH_M = os.path.join(BASE_DIR, "databases", "TIME_SERIES-Andenes_Mensual-86-23.csv")

def load_and_preprocess_data(path: str, target_variable: str = "Humedad"):
    # ... tu implementación completa ...
    return df, features, target
