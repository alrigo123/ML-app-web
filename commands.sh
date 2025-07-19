# SERVER
npm run start:dev

# CLIENT
npm run dev

# PYTHON API (IN src FOLDER)
python -m uvicorn predict_api:app --host 0.0.0.0 --port 8000 --reload

# API PYTHON in the root 
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
