'use client'
// This is a client component, as indicated by "use client";
import React, { useState } from "react";
import axios from "axios";

// Define the structure for the prediction data.
interface PredictionData {
    dates: string[];
    predictions: number[];
}

const PredictionsPage: React.FC = () => {
    // State for the number of days to predict.
    const [n, setN] = useState<number>(1);
    // State for the target weather variable.
    const [variable, setVariable] = useState<string>("Temp_max"); // Default variable
    // State for the selected prediction model.
    const [modelType, setModelType] = useState<string>("RandomForest"); // Default model
    // State to store the prediction results.
    const [prediction, setPrediction] = useState<PredictionData | null>(null);
    // State for loading indicator.
    const [loading, setLoading] = useState<boolean>(false);
    // State for error messages.
    const [error, setError] = useState<string | null>(null);

    // Function to handle form submission and trigger prediction.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior.
        setLoading(true); // Show loading spinner.
        setError(null); // Clear any previous errors.
        setPrediction(null); // Clear previous predictions.

        try {
            // Construct the API URL dynamically based on the selected model.
            // IMPORTANT: For Canvas preview, the API URL is hardcoded.
            // In your Next.js project, you should use:
            // `${process.env.NEXT_PUBLIC_API_URL}/predict/${modelType.toLowerCase()}`
            const apiUrl = `http://localhost:8000/predict/${modelType.toLowerCase()}`;

            // Changed from axios.post to axios.get and passed parameters as query params.
            const { data } = await axios.get(apiUrl, {
                params: {
                    n: n,
                    variable: variable,
                },
            });

            // Assuming the API returns data in the format { dates: [], predictions: [] }
            setPrediction(data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error("payload completo de error:", err.response?.data);
                setError(
                    err.response?.data?.detail
                    || err.response?.data?.error
                    || "Error al obtener la predicción"
                );
            } else {
                setError("Ocurrió un error inesperado.");
            }
        }
    };

    // Function to reset the prediction and show the input form again.
    const resetPrediction = () => {
        setPrediction(null);
        setError(null);
        setN(1);
        setVariable("Temp_max");
        setModelType("RandomForest");
        setLoading(false);
    };

    return (
        // Main container for the prediction page, providing a consistent background and centering.
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-[Inter]">
            {/* Prediction card container.
                Uses Tailwind for background, text color, padding, rounded corners, and shadow. */}
            <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl max-w-4xl w-full">
                {/* Main heading for the prediction section. */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-6 text-center">
                    Predicción Meteorológica
                </h1>

                {/* Conditional rendering based on whether a prediction has been made. */}
                {!prediction && (
                    <>
                        <p className="text-lg text-gray-300 mb-8 text-center">
                            Ingresa el número de días, selecciona la variable y el modelo para ver la predicción.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Model Selection */}
                            <div className="relative mb-4">
                                <label htmlFor="modelType" className="block text-sm font-medium text-gray-300 mb-1">
                                    Modelo de Predicción:
                                </label>
                                <div className="relative">
                                    <select
                                        id="modelType"
                                        value={modelType}
                                        onChange={(e) => setModelType(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none pr-10"
                                    >
                                        <option value="RandomForest">Random Forest</option>
                                        <option value="LSTM">LSTM</option>
                                        <option value="XGBoost">XGBoost</option>
                                        <option value="SARIMA">(S)ARIMA</option>
                                        <option value="HoltWinters">Holt-Winters Exponential Smoothing</option>
                                    </select>
                                    {/* Dropdown arrow icon (inline SVG) */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Number of Days Input */}
                            <div className="mb-4">
                                <label htmlFor="n" className="block text-sm font-medium text-gray-300 mb-1">
                                    Número de días:
                                </label>
                                <div className="relative">
                                    <input
                                        id="n"
                                        type="number"
                                        value={n}
                                        onChange={(e) => setN(Number(e.target.value))}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-10"
                                        min="1" // Ensure at least 1 day is selected
                                        required
                                    />
                                    {/* Calendar icon (inline SVG) */}
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Variable Selection Cards */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"></path>
                                    </svg>
                                    Variable a predecir:
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Temperatura Máxima Card */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3
                                            ${variable === "Temp_max" ? "bg-indigo-700 border-2 border-indigo-500 shadow-lg" : "bg-gray-700 border border-gray-600 hover:bg-gray-600"}`}
                                        onClick={() => setVariable("Temp_max")}
                                    >
                                        {/* Thermometer icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thermometer text-indigo-300">
                                            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                                        </svg>
                                        <span className="text-gray-200">Temperatura Máxima (°C)</span>
                                    </div>

                                    {/* Temperatura Mínima Card */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3
                                            ${variable === "Temp_min" ? "bg-indigo-700 border-2 border-indigo-500 shadow-lg" : "bg-gray-700 border border-gray-600 hover:bg-gray-600"}`}
                                        onClick={() => setVariable("Temp_min")}
                                    >
                                        {/* Thermometer icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thermometer text-indigo-300">
                                            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                                        </svg>
                                        <span className="text-gray-200">Temperatura Mínima (°C)</span>
                                    </div>

                                    {/* Humedad Relativa Card */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3
                                            ${variable === "Humedad" ? "bg-indigo-700 border-2 border-indigo-500 shadow-lg" : "bg-gray-700 border border-gray-600 hover:bg-gray-600"}`}
                                        onClick={() => setVariable("Humedad")}
                                    >
                                        {/* Droplet icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-droplet text-indigo-300">
                                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                        </svg>
                                        <span className="text-gray-200">Humedad Relativa (%)</span>
                                    </div>

                                    {/* Precipitación Card */}
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3
                                            ${variable === "Precipitacion" ? "bg-indigo-700 border-2 border-indigo-500 shadow-lg" : "bg-gray-700 border border-gray-600 hover:bg-gray-600"}`}
                                        onClick={() => setVariable("Precipitacion")}
                                    >
                                        {/* Cloud-rain icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cloud-rain text-indigo-300">
                                            <path d="M16 13v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8c0-1.1-.9-2-2-2h-2a2 2 0 0 0-2 2z"></path>
                                            <line x1="12" y1="13" x2="12" y2="21"></line>
                                            <line x1="12" y1="16" x2="12" y2="21"></line>
                                            <path d="M22 10a4 4 0 0 0-4-4h-3.46A4.98 4.98 0 0 0 8 3a5 5 0 0 0-5 5c0 1.1.9 2 2 2h14"></path>
                                        </svg>
                                        <span className="text-gray-200">Precipitación (mm)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        {/* Simple spinner animation using Tailwind classes. */}
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Generando Predicción...
                                    </span>
                                ) : (
                                    "Mostrar Predicción"
                                )}
                            </button>
                        </form>
                    </>
                )}

                {/* Loading and Error Messages */}
                {loading && (
                    <p className="mt-8 text-center text-indigo-300 flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Cargando...
                    </p>
                )}
                {error && (
                    <div className="mt-8 p-4 bg-red-600 text-white rounded-lg text-center shadow-md">
                        <p className="font-semibold mb-2">Error:</p>
                        <p>{error}</p>
                    </div>
                )}

                {/* Prediction Results Display */}
                {prediction && (
                    <div className="mt-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-6 text-center">
                            Predicción de {variable} para {n} {n === 1 ? "día" : "días"}
                        </h2>

                        {/* Placeholder for Data Visualization (e.g., a Chart) */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-inner mb-8 min-h-[250px] flex items-center justify-center text-gray-400 text-center">
                            [Aquí se mostrará un gráfico interactivo de la predicción.]
                            {/* You can integrate a charting library like Recharts, Chart.js, or D3.js here. */}
                        </div>

                        {/* Prediction Table */}
                        <div className="overflow-x-auto rounded-lg shadow-lg">
                            <table className="min-w-full bg-gray-700 text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-4 bg-gray-600 text-gray-200 uppercase tracking-wider rounded-tl-lg">Fecha</th>
                                        <th className="py-3 px-4 bg-gray-600 text-gray-200 uppercase tracking-wider rounded-tr-lg">Predicción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prediction.dates.map((date, index) => (
                                        <tr key={index} className="border-t border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                                            <td className="py-3 px-4 text-gray-300">{date}</td>
                                            <td className="py-3 px-4 text-gray-300">{prediction.predictions[index].toFixed(2)}</td> {/* Format to 2 decimal places */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Back Button */}
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={resetPrediction}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
                            >
                                Realizar Nueva Predicción
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PredictionsPage;
