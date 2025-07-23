import joblib
import os

def load_pickle_model(model_path):
    """
    Carga y retorna un modelo serializado (pickle/joblib) desde la ruta indicada.
    """
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Modelo no encontrado: {model_path}")
    return joblib.load(model_path)
