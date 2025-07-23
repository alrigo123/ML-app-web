# src/predict_api.py

from fastapi import FastAPI, Query, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import os
import pandas as pd

from src.utils.load_model import load_pickle_model
from src.model_randomforest import predict_future_random_forest

from src.utils.load_model import load_pickle_model
from src.model_xgboost import predict_future_xgboost

# 1. Cargar el modelo al iniciar la API
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
RF_MODEL_PATH = os.path.join(BASE_DIR, "models", "rf_model.pkl")
model_rf = load_pickle_model(RF_MODEL_PATH)

XGB_MODEL_PATH = os.path.join(BASE_DIR, "models", "xgboost_model.pkl")
model_xgb = load_pickle_model(XGB_MODEL_PATH)

# 2. Crear instancia de FastAPI
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter(prefix="/predict")

# 3. Endpoint para Random Forest
@router.get("/randomforest")
def get_prediction_random_forest(
    n: int = Query(..., description="Días a predecir (máx. 15)"),
    target: str = Query('Temp_max', description="Variable objetivo (debe coincidir con el entrenamiento)"),
):
    try:
        # 4. Cargar el CSV diario, igual que el entrenamiento
        CSV_PATH = os.path.join(BASE_DIR, "..", "databases", "TIME-SERIES-Diario-13-23.csv")
        df = pd.read_csv(CSV_PATH, parse_dates=['Fecha'])
        df = df.set_index('Fecha')
        # Renombrar columnas igual que en Colab
        df = df.rename(columns={
            "Tｰ Media": "Temp_media",
            "TｰMaxima": "Temp_max",
            "TｰMinima": "Temp_min",
            "Lluvia": "Precipitacion",
            "%Humedad": "Humedad"
        })
        # Dejar solo las columnas necesarias (puedes ajustar esto según tus necesidades)
        df = df[["Temp_max"]] # Si tu modelo fue entrenado solo con esta columna
        # Si necesitas otras columnas, agrégalas aquí

        # 5. Hacer la predicción
        result = predict_future_random_forest(model_rf, df, n_days=n, n_lags=15, target_column=target)
        return result
    except Exception as e:
        return {"error": str(e)}
    
    
    
@router.get("/xgboost")
def get_prediction_xgboost(
    n: int = Query(..., description="Días a predecir (máx. 10)"),
    target: str = Query('Temp_max', description="Variable objetivo (debe coincidir con el entrenamiento)"),
):
    try:
        CSV_PATH = r"D:\Web Development\AI-TS-WEB\databases\TIME-SERIES-Diario-13-23.csv"
        df = pd.read_csv(CSV_PATH)
        df['Fecha'] = pd.to_datetime(df['Fecha'])
        # Renombra igual que el entrenamiento
        df = df.rename(columns={
            "Tｰ Media": "Temp_media",
            "TｰMaxima": "Temp_max",
            "TｰMinima": "Temp_min",
            "Lluvia": "Precipitacion",
            "%Humedad": "Humedad"
        })
        df = df[['Fecha', 'Temp_max']]
        result = predict_future_xgboost(model_xgb, df, n_days=n, n_lags=10, target_column=target)
        return result
    except Exception as e:
        return {"error": str(e)}

app.include_router(router)
