// // // "use client";
// // // import { Cloud, BarChart3, Brain, Zap, LineChart } from "lucide-react";

// // // const models = [
// // //   {
// // //     name: "Random Forest",
// // //     icon: <BarChart3 className="w-8 h-8 text-green-400" />,
// // //     desc: "An ensemble machine learning algorithm that combines many decision trees for robust, reliable predictions.",
// // //     maxDays: 7,
// // //   },
// // //   {
// // //     name: "LSTM",
// // //     icon: <Brain className="w-8 h-8 text-purple-400" />,
// // //     desc: "A type of deep neural network designed to capture complex patterns in time series data.",
// // //     maxDays: 10,
// // //   },
// // //   {
// // //     name: "XGBoost",
// // //     icon: <Zap className="w-8 h-8 text-yellow-400" />,
// // //     desc: "A high-performance gradient boosting model, excellent for tabular and time series predictions.",
// // //     maxDays: 7,
// // //   },
// // //   {
// // //     name: "ARIMA",
// // //     icon: <LineChart className="w-8 h-8 text-blue-400" />,
// // //     desc: "A classic statistical approach for time series forecasting, especially for data with trends or seasonality.",
// // //     maxDays: 5,
// // //   },
// // //   {
// // //     name: "Holt-Winters",
// // //     icon: <Cloud className="w-8 h-8 text-sky-400" />,
// // //     desc: "A smoothing method for capturing trends and seasonality in weather data.",
// // //     maxDays: 5,
// // //   },
// // // ];

// // // export default function PredictionInfoPage() {
// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 py-12">
// // //       {/* Hero Section */}
// // //       <div className="max-w-3xl mx-auto text-center px-4 mb-12">
// // //         <h1 className="text-5xl font-extrabold text-indigo-300 mb-4">Weather AI</h1>
// // //         <p className="text-xl text-gray-200 mb-6">
// // //           Predict future weather variables with advanced Machine Learning and Statistical Models.
// // //         </p>
// // //         <p className="text-lg text-gray-400">
// // //           Select a model, choose a variable, and see weather forecasts up to 10 days in advance.
// // //         </p>
// // //       </div>

// // //       {/* About Section */}
// // //       <div className="max-w-2xl mx-auto bg-gray-800/90 rounded-2xl shadow-xl p-8 mb-16">
// // //         <h2 className="text-3xl font-bold text-indigo-200 mb-4">About This App</h2>
// // //         <p className="text-gray-300 mb-4">
// // //           Weather AI empowers anyone to generate accurate, AI-powered weather predictions for variables such as temperature, humidity, and precipitation. You can experiment with multiple models to compare their forecasting ability and learn about time series prediction.
// // //         </p>
// // //         <p className="text-gray-400">
// // //           <span className="font-bold text-indigo-300">Why only 5–10 days ahead?</span> Due to the chaotic nature of weather and model limitations, forecast accuracy drops off after several days. We limit predictions to a maximum of <span className="font-bold text-indigo-200">10 days</span> to ensure meaningful, realistic results.
// // //         </p>
// // //       </div>

// // //       {/* Models Cards Section */}
// // //       <div className="max-w-5xl mx-auto px-4">
// // //         <h3 className="text-2xl text-indigo-200 font-bold mb-8 text-center">Our Prediction Models</h3>
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {models.map((model) => (
// // //             <div
// // //               key={model.name}
// // //               className="bg-gray-800/90 rounded-xl shadow-lg p-6 text-center hover:bg-indigo-800/70 transition"
// // //             >
// // //               <div className="mb-4 flex justify-center">{model.icon}</div>
// // //               <h4 className="text-xl font-semibold text-indigo-100 mb-2">{model.name}</h4>
// // //               <p className="text-gray-300 mb-4">{model.desc}</p>
// // //               <div className="mb-2 text-gray-400">
// // //                 <span className="font-semibold text-indigo-200">Max days ahead:</span>{" "}
// // //                 <span className="font-mono">{model.maxDays} days</span>
// // //               </div>
// // //               <div className="text-xs text-gray-500">
// // //                 {model.maxDays >= 7
// // //                   ? "Best for short-term to 1-week forecasts"
// // //                   : "Best for 1–5 day predictions"}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* How it Works */}
// // //       <div className="max-w-2xl mx-auto mt-16 px-4 text-gray-300 text-center">
// // //         <h3 className="text-xl font-bold text-indigo-200 mb-2">How does it work?</h3>
// // //         <ol className="list-decimal list-inside space-y-1 text-left mx-auto max-w-md">
// // //           <li>Choose your prediction model.</li>
// // //           <li>Select the variable to predict (temperature, humidity, precipitation, etc).</li>
// // //           <li>Enter the number of days ahead (up to 10).</li>
// // //           <li>Review your forecast and compare different models!</li>
// // //         </ol>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // This is a client component, as indicated by "use client";
// // import Link from 'next/link';
// // import React from 'react';

// // const PredictionInfoPage: React.FC = () => {
// //     return (
// //         // Main container for the models info page, providing overall padding and background.
// //         <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-[Inter]">
// //             {/* Page Title and Description */}
// //             <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl max-w-5xl w-full text-center mb-8">
// //                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-400 mb-4 leading-tight">
// //                     Nuestros Modelos de Predicción Meteorológica
// //                 </h1>
// //                 <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
// //                     En MiWeb, utilizamos una suite avanzada de modelos de inteligencia artificial y estadística para ofrecer predicciones precisas del clima en Andenes, Cusco-Perú. Nuestro objetivo es proporcionar pronósticos confiables con hasta 5-10 días de anticipación, cruciales para la planificación agrícola y la vida diaria en la región.
// //                 </p>
// //                 <p className="text-md text-gray-400">
// //                     La capacidad de predecir con varios días de antelación es vital para la toma de decisiones, permitiendo a las comunidades prepararse mejor para las condiciones climáticas futuras.
// //                 </p>
// //             </div>

// //             {/* Grid for Model Cards */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
// //                 {/* Random Forest Card */}
// //                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
// //                     <div className="flex items-center justify-center mb-4">
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-branch text-green-400">
// //                             <line x1="6" y1="3" x2="6" y2="15"></line>
// //                             <circle cx="18" cy="6" r="3"></circle>
// //                             <circle cx="6" cy="18" r="3"></circle>
// //                             <path d="M18 9a9 9 0 0 1-9 9"></path>
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-green-300 mb-3 text-center">Random Forest</h2>
// //                     <p className="text-gray-400 text-center">
// //                         Un algoritmo de aprendizaje automático versátil que construye múltiples árboles de decisión y fusiona sus resultados para obtener una predicción más precisa y estable. Es excelente para capturar relaciones no lineales en los datos meteorológicos.
// //                     </p>
// //                 </div>

// //                 {/* LSTM Card */}
// //                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
// //                     <div className="flex items-center justify-center mb-4">
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu text-blue-400">
// //                             <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
// //                             <rect x="9" y="9" width="6" height="6"></rect>
// //                             <line x1="9" y1="1" x2="9" y2="4"></line>
// //                             <line x1="15" y1="1" x2="15" y2="4"></line>
// //                             <line x1="9" y1="20" x2="9" y2="23"></line>
// //                             <line x1="15" y1="20" x2="15" y2="23"></line>
// //                             <line x1="20" y1="9" x2="23" y2="9"></line>
// //                             <line x1="20" y1="15" x2="23" y2="15"></line>
// //                             <line x1="1" y1="9" x2="4" y2="9"></line>
// //                             <line x1="1" y1="15" x2="4" y2="15"></line>
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-blue-300 mb-3 text-center">LSTM</h2>
// //                     <p className="text-gray-400 text-center">
// //                         Las Redes de Memoria a Largo Corto Plazo (LSTM) son un tipo de red neuronal recurrente (RNN) especialmente diseñadas para procesar secuencias de datos, como las series temporales meteorológicas. Son excelentes para aprender dependencias a largo plazo.
// //                     </p>
// //                 </div>

// //                 {/* XGBoost Card */}
// //                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
// //                     <div className="flex items-center justify-center mb-4">
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up text-red-400">
// //                             <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
// //                             <polyline points="17 6 23 6 23 12"></polyline>
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-red-300 mb-3 text-center">XGBoost</h2>
// //                     <p className="text-gray-400 text-center">
// //                         Un algoritmo de potenciación de gradiente optimizado que es altamente eficiente, flexible y portátil. Es conocido por su velocidad y rendimiento en problemas de regresión y clasificación, ideal para predicciones meteorológicas complejas.
// //                     </p>
// //                 </div>

// //                 {/* (S)ARIMA Card */}
// //                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
// //                     <div className="flex items-center justify-center mb-4">
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-yellow-400">
// //                             <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-yellow-300 mb-3 text-center">(S)ARIMA</h2>
// //                     <p className="text-gray-400 text-center">
// //                         Modelos de Media Móvil Integrada AutoRegresiva (SARIMA) son métodos estadísticos clásicos para el análisis y pronóstico de datos de series temporales. Son particularmente efectivos para datos con patrones estacionales recurrentes.
// //                     </p>
// //                 </div>

// //                 {/* Holt-Winters Exponential Smoothing Card */}
// //                 <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
// //                     <div className="flex items-center justify-center mb-4">
// //                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-line-chart text-purple-400">
// //                             <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
// //                         </svg>
// //                     </div>
// //                     <h2 className="text-2xl font-bold text-purple-300 mb-3 text-center">Holt-Winters</h2>
// //                     <p className="text-gray-400 text-center">
// //                         Un método de suavizado exponencial que es ideal para series temporales con componentes de tendencia y estacionalidad. Proporciona pronósticos precisos al dar más peso a las observaciones recientes y adaptarse a los cambios en los patrones.
// //                     </p>
// //                 </div>
// //             </div>
// //                     <Link
// //                         href="/prediction/predictions"
// //                         className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 inline-flex items-center space-x-2"
// //                     >
// //                         <span>PREDECIR</span>
// //                     </Link>
// //         </div>
// //     );
// // };

// // export default PredictionInfoPage;

// "use client";

// export default function PredictionInfoPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <section className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Weather Prediction App for Andenes, Cusco
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//             Our goal is to provide accurate weather forecasts for Andenes, Cusco, Peru, using advanced AI and statistical models. Explore how each model predicts weather time series and their respective limitations.
//           </p>
//         </section>

//         {/* Models Section */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Random Forest Card */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">Random Forest</h2>
//             <p className="text-gray-600 mb-4">
//               A machine learning model that combines multiple decision trees to predict weather variables with high accuracy. Ideal for capturing complex patterns in temperature and precipitation.
//             </p>
//             <p className="text-gray-600">
//               <strong>Max Prediction:</strong> 10 days. Limited by the model's reliance on historical data patterns, which become less reliable beyond this period.
//             </p>
//           </div>

//           {/* LSTM Card */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">LSTM (Long Short-Term Memory)</h2>
//             <p className="text-gray-600 mb-4">
//               A type of recurrent neural network designed for time series forecasting, excelling at modeling long-term dependencies in weather data like humidity and temperature trends.
//             </p>
//             <p className="text-gray-600">
//               <strong>Max Prediction:</strong> 10 days. Accuracy decreases beyond 10 days due to the complexity of long-term weather dynamics.
//             </p>
//           </div>

//           {/* XGBoost Card */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">XGBoost</h2>
//             <p className="text-gray-600 mb-4">
//               An optimized gradient boosting model that provides precise predictions by iteratively improving on errors, suitable for short-term weather forecasts.
//             </p>
//             <p className="text-gray-600">
//               <strong>Max Prediction:</strong> 10 days. Beyond this, the model's performance degrades due to increasing uncertainty in weather patterns.
//             </p>
//           </div>

//           {/* (S)ARIMA Card */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">(S)ARIMA</h2>
//             <p className="text-gray-600 mb-4">
//               A statistical model for analyzing and forecasting time series data, effective for stationary weather variables like temperature and precipitation.
//             </p>
//             <p className="text-gray-600">
//               <strong>Max Prediction:</strong> 5 days. Limited by the assumption of stationarity, which breaks down over longer periods due to seasonal shifts.
//             </p>
//           </div>

//           {/* Holt-Winters Card */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">
//               Holt-Winters Exponential Smoothing
//             </h2>
//             <p className="text-gray-600 mb-4">
//               A statistical method that handles seasonality and trends in weather data, providing smooth forecasts for variables like humidity.
//             </p>
//             <p className="text-gray-600">
//               <strong>Max Prediction:</strong> 5 days. Accuracy diminishes beyond 5 days as seasonal patterns become harder to predict.
//             </p>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="text-center mt-12">
//           <p className="text-lg text-gray-600 mb-4">
//             Predictions are tailored for Andenes, Cusco, with limits set to ensure reliability based on model capabilities and weather complexity. Start exploring now!
//           </p>
//           <a
//             href="/prediction"
//             className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Try Predictions
//           </a>
//         </section>
//       </div>
//     </div>
//   );
// }




"use client";
import { useState } from 'react';
import { Brain, TrendingUp, Zap, BarChart3, Clock, Target, MapPin, Calendar, ChevronRight, Info, CheckCircle, AlertTriangle } from 'lucide-react';

export default function InfoPredictionPage() {
  const [selectedModel, setSelectedModel] = useState(0);

  const models = [
    {
      name: 'Random Forest',
      icon: '🌲',
      category: 'Ensemble Learning',
      accuracy: '92.5%',
      strengths: ['Robust to outliers', 'Handles missing data well', 'Provides feature importance'],
      weaknesses: ['Can overfit with noisy data', 'Less interpretable than single trees'],
      bestFor: 'Stable short-term predictions (1-3 days)',
      description: 'Random Forest combines multiple decision trees to create a robust ensemble model. Each tree votes on the final prediction, reducing overfitting and improving accuracy.',
      technicalDetails: 'Uses bootstrap aggregating (bagging) with random feature selection at each split. Typically employs 100-500 trees with controlled depth to prevent overfitting.',
      useCase: 'Excellent for capturing non-linear relationships in weather patterns and handling missing sensor data from weather stations.'
    },
    {
      name: 'LSTM',
      icon: '🧠',
      category: 'Deep Learning',
      accuracy: '94.2%',
      strengths: ['Captures long-term dependencies', 'Excellent for sequences', 'Handles temporal patterns'],
      weaknesses: ['Requires large datasets', 'Computationally intensive', 'Black box model'],
      bestFor: 'Medium to long-term forecasting (3-7 days)',
      description: 'Long Short-Term Memory networks are specialized neural networks designed to learn from sequential data and remember important patterns over time.',
      technicalDetails: 'Uses forget gates, input gates, and output gates to selectively remember and forget information. Architecture includes 2-3 LSTM layers with dropout for regularization.',
      useCase: 'Perfect for learning seasonal weather patterns and complex temporal dependencies in Andenes climate data.'
    },
    {
      name: 'XGBoost',
      icon: '⚡',
      category: 'Gradient Boosting',
      accuracy: '93.8%',
      strengths: ['High performance', 'Feature importance', 'Handles irregularities well'],
      weaknesses: ['Sensitive to hyperparameters', 'Can overfit easily', 'Requires tuning'],
      bestFor: 'High-accuracy short-term predictions (1-4 days)',
      description: 'Extreme Gradient Boosting builds models sequentially, where each new model corrects errors from previous ones, resulting in highly accurate predictions.',
      technicalDetails: 'Implements gradient boosting with advanced regularization techniques. Uses tree-based learners with L1 and L2 regularization to prevent overfitting.',
      useCase: 'Ideal for capturing complex interactions between multiple weather variables and achieving maximum prediction accuracy.'
    },
    {
      name: 'ARIMA',
      icon: '📈',
      category: 'Statistical Time Series',
      accuracy: '89.3%',
      strengths: ['Interpretable', 'Works with limited data', 'Statistical foundation'],
      weaknesses: ['Assumes stationarity', 'Limited with non-linear patterns', 'Manual parameter selection'],
      bestFor: 'Short-term linear trend prediction (1-3 days)',
      description: 'AutoRegressive Integrated Moving Average is a classical statistical method that models time series data using its own past values and forecast errors.',
      technicalDetails: 'Combines autoregression (AR), differencing (I), and moving average (MA) components. Parameters (p,d,q) are selected using AIC/BIC criteria.',
      useCase: 'Excellent baseline model for understanding underlying trends and providing interpretable weather forecasts.'
    },
    {
      name: 'Holt-Winters',
      icon: '🔄',
      category: 'Exponential Smoothing',
      accuracy: '87.6%',
      strengths: ['Handles seasonality well', 'Simple and fast', 'Good for regular patterns'],
      weaknesses: ['Limited with irregular patterns', 'Sensitive to outliers', 'Assumes constant seasonality'],
      bestFor: 'Seasonal pattern prediction (1-5 days)',
      description: 'Holt-Winters method uses exponential smoothing to capture level, trend, and seasonal components in time series data.',
      technicalDetails: 'Triple exponential smoothing with separate smoothing parameters for level (α), trend (β), and seasonality (γ). Supports both additive and multiplicative seasonality.',
      useCase: 'Perfect for capturing daily and weekly weather patterns, especially temperature variations in Andenes.'
    }
  ];

  const appGoals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Accurate Weather Prediction',
      description: 'Provide reliable weather forecasts for Andenes, Cusco using advanced AI models with 90%+ accuracy.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Location-Specific Insights',
      description: 'Tailored predictions considering Andenes\' unique geographical and climatic characteristics at 3,399m elevation.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Model Comparison',
      description: 'Compare different AI approaches to understand which performs best for various weather conditions and timeframes.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Multi-horizon Forecasting',
      description: 'Provide forecasts from 1 to 7 days ahead, with different models optimized for different prediction horizons.'
    }
  ];

  const predictionLimits = [
    {
      days: '1-2 Days',
      accuracy: '94-96%',
      models: ['XGBoost', 'Random Forest', 'LSTM'],
      confidence: 'Very High',
      description: 'Highest accuracy period with all models performing excellently. Weather patterns are most predictable in the immediate future.'
    },
    {
      days: '3-5 Days',
      accuracy: '88-92%',
      models: ['LSTM', 'XGBoost', 'ARIMA'],
      confidence: 'High',
      description: 'Good reliability with LSTM showing superior performance due to its ability to capture medium-term temporal patterns.'
    },
    {
      days: '6-7 Days',
      accuracy: '82-86%',
      models: ['LSTM', 'Holt-Winters'],
      confidence: 'Moderate',
      description: 'Reasonable accuracy for weekly planning. LSTM\'s long-term memory capabilities become most valuable here.'
    },
    {
      days: '8+ Days',
      accuracy: '<80%',
      models: ['Not Recommended'],
      confidence: 'Low',
      description: 'Beyond the practical prediction horizon. Atmospheric chaos theory limits accuracy beyond 7-10 days for local weather.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Our AI Models
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover how we combine five powerful AI models to deliver accurate weather predictions for Andenes, Cusco
          </p>
        </div>
      </div>

      {/* App Goals Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Weather AI aims to revolutionize weather forecasting for high-altitude locations using cutting-edge machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {appGoals.map((goal, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{goal.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Models Grid */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI Model Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Each model brings unique strengths to our ensemble approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                selectedModel === index ? 'ring-2 ring-blue-500 bg-white/10' : ''
              }`}
              onClick={() => setSelectedModel(index)}
            >
              <div className="p-8">
                {/* Model Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{model.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                      <p className="text-blue-400 text-sm">{model.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{model.accuracy}</div>
                    <div className="text-xs text-gray-300">Accuracy</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{model.description}</p>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>
                  <p className="text-white font-medium">{model.bestFor}</p>
                </div>

                {/* Strengths & Weaknesses */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {model.strengths.map((strength, idx) => (
                        <li key={idx} className="text-sm text-gray-300">• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-orange-400 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Limitations
                    </h4>
                    <ul className="space-y-1">
                      {model.weaknesses.map((weakness, idx) => (
                        <li key={idx} className="text-sm text-gray-300">• {weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expandable Details */}
                {selectedModel === index && (
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Technical Details:</h4>
                      <p className="text-sm text-gray-300">{model.technicalDetails}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Use Case:</h4>
                      <p className="text-sm text-gray-300">{model.useCase}</p>
                    </div>
                  </div>
                )}

                {/* Expand Indicator */}
                <div className="flex justify-center mt-4">
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedModel === index ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prediction Horizons */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Prediction Horizons
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding accuracy and reliability across different forecast periods
          </p>
        </div>

        <div className="space-y-6">
          {predictionLimits.map((limit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-white mb-2">{limit.days}</div>
                  <div className={`text-sm px-3 py-1 rounded-full inline-block ${
                    limit.confidence === 'Very High' ? 'bg-green-500/20 text-green-400' :
                    limit.confidence === 'High' ? 'bg-blue-500/20 text-blue-400' :
                    limit.confidence === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {limit.confidence} Confidence
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{limit.accuracy}</div>
                  <div className="text-xs text-gray-400">Expected Accuracy</div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-300 mb-2">Recommended Models:</div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {limit.models.map((model, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded text-blue-300">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-300">{limit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why 7 Days Limit */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="text-center space-y-4">
            <Info className="w-12 h-12 text-blue-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Why 7 Days Maximum?</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Weather prediction is fundamentally limited by <strong>chaos theory</strong> and the <strong>butterfly effect</strong>. 
              Small changes in initial conditions can lead to drastically different outcomes over time. While our AI models can 
              identify patterns and trends, the atmosphere's inherent unpredictability makes accurate forecasts beyond 7-10 days 
              extremely challenging. We focus on the 1-7 day horizon where our models can provide reliable, actionable insights 
              for Andenes' unique high-altitude climate.
            </p>
          </div>
        </div>
      </div>

      {/* Location Context */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <div className="text-center space-y-6">
            <MapPin className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="text-3xl font-bold text-white">Andenes, Cusco - Peru</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-400">3,399m</div>
                <div className="text-gray-300">Elevation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">-13.5°, -71.9°</div>
                <div className="text-gray-300">Coordinates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">Highland</div>
                <div className="text-gray-300">Climate Zone</div>
              </div>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our models are specifically trained on data from this unique high-altitude location, 
              accounting for the distinct weather patterns, temperature variations, and atmospheric 
              conditions characteristic of the Peruvian Andes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}