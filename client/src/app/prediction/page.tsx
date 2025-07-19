'use client'
import Link from "next/link";
// This is a client component, as indicated by "use client";
import React from "react";

// Define the structure for the prediction data.
const PredictionInfoPage: React.FC = () => {

    return (
        // Main container for the prediction page, providing a consistent background and centering.
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-[Inter]">
            {/* Prediction card container.
                Uses Tailwind for background, text color, padding, rounded corners, and shadow. */}
            <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl max-w-4xl w-full">
                {/* Main heading for the prediction section. */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-6 text-center">
                    Predicción Meteorológica AQUI ES DONDE VA LA INFO Y UN BUTTON QUE REDIRIGA
                </h1>

                <Link
                    href="/prediction/predictions"
                    className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 inline-flex items-center space-x-2"
                >
                    <span>PREDECIR</span>
                </Link>

            </div>
        </div>
    );
};

export default PredictionInfoPage;
