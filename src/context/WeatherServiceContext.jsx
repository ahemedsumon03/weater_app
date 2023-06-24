/* eslint-disable react/prop-types */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import { DateTime } from 'luxon';
import { createContext } from 'react';

export const WeatherServiceContext = createContext();

const getWeatherData = async (city) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);

    const weatherdata = await response.json();

    const { lon, lat } = weatherdata.coord;

    const reponse1 = await fetch(`${import.meta.env.VITE_OTHER_BASE_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${import.meta.env.VITE_API_KEY}`);

    const detailsWeatherdata = await reponse1.json();

    return { ...weatherdata, ...detailsWeatherdata };
}

const formatTime = (timezone) => (
    DateTime.now().setZone(timezone).endOf("day").toFormat("cccc, dd LLL yyyy")
);

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlForCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;


export const WeatherServiceContextProvider = ({ children }) => { 

    const contextValue = {
        getWeatherData,
        formatTime,
        formatToLocalTime,
        iconUrlForCode
    }

    return (
        <WeatherServiceContext.Provider
            value={contextValue}
        >
            { children }
       </WeatherServiceContext.Provider>
   )
}

