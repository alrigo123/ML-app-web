from fastapi import APIRouter, Query, HTTPException
from services.xgboost_service import predict_future_xgboost
from services.rf_service import predict_future_random_forest
from services.arima_service import predict_future_arima

router = APIRouter(prefix="/predict", tags=["predict"])

@router.get("/xgboost")
def pred_xgb(
    n: int = Query(..., gt=0, description="Días a predecir"),
    variable: str = Query(..., description="Temp_max, Temp_min, Humedad, Precipitacion"),
    freq: str = Query("daily", regex="^(daily|monthly)$", description="daily o monthly")
):
    try:
        return predict_future_xgboost(n, variable, frequency=freq)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/random_forest")
def pred_rf(
    n: int = Query(..., gt=0),
    variable: str = Query(...),
    freq: str = Query("daily", regex="^(daily|monthly)$")
):
    try:
        return predict_future_random_forest(n, variable, frequency=freq)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/arima")
def pred_arima(
    n: int = Query(..., gt=0, description="Número de períodos a predecir"),
    variable: str = Query(..., description="Temp_max, Temp_min, Humedad o Precipitacion"),
    freq: str = Query("daily", regex="^(daily|monthly)$", description="daily o monthly")
):
    try:
        return predict_future_arima(n, variable, frequency=freq)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))