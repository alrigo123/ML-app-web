# predictor/core/model_loader.py

import os
import pickle
import joblib

# Directorio raíz del proyecto (ajusta si tu estructura difiere)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS_DIR = os.path.join(BASE_DIR, "models")

# Carga de Random Forest con joblib
rf_model = joblib.load(os.path.join(MODELS_DIR, "rf_model.pkl"))

# Carga de XGBoost con pickle
with open(os.path.join(MODELS_DIR, "xgb_model.pkl"), "rb") as f:
    xgb_model = pickle.load(f)

# Carga de ARIMA
with open(os.path.join(MODELS_DIR, "arima_model.pkl"), "rb") as f:
    arima_res = pickle.load(f)