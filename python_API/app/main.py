from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.predict_router import router as predict_router

app = FastAPI(title="Predictor API")

# CORS global
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict_router)

# uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
