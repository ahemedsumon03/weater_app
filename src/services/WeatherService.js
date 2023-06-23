/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import { DateTime } from 'luxon';

export const getWeatherData = async (city) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);

    const weatherdata = await response.json();

    const { lon, lat } = weatherdata.coord;

    const reponse1 = await fetch(`${import.meta.env.VITE_OTHER_BASE_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${import.meta.env.VITE_API_KEY}`);

    const detailsWeatherdata = await reponse1.json();

    return { ...weatherdata, ...detailsWeatherdata};
}

export const forecastData = (weatherObj) => {
    const { timezone, daily, hourly } = weatherObj;
    
    daily = daily.slice(1, 6).map((day) => {
        return {
            title: formatTime(timezone),
            temp: day.temp.day,
            icon: day.weather[0].icon,
        }
    });
    hourly = hourly.slice(1, 6).map((hour) => { 
        return {
            title: formatTime(timezone),
            temp: hour.temp,
            icon: hour.weather[0].icon,
        }
    });

    return { timezone, daily, hourly };
}

export const formatTime = (timezone) => (
    DateTime.now().setZone(timezone).endOf("day").toFormat("cccc, dd LLL yyyy")
);

