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

export const formatTime = (timezone) => (
    DateTime.now().setZone(timezone).endOf("day").toFormat("cccc, dd LLL yyyy")
);

