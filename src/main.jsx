import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WeatherServiceContextProvider } from './context/WeatherServiceContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherServiceContextProvider>
      <App />
    </WeatherServiceContextProvider>
  </React.StrictMode>,
)
