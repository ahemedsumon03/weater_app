/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempratureAndDetails from './components/TempratureAndDetails'
import Forcast from './components/Forcast'
import { getWeatherData } from './services/WeatherService';

const App = () => {
  
  const [weatherObj, setWeatherObj] = useState({});
  const [cityname, setCityname] = useState("");

  useEffect(() => {
    const facedata = async () => { 
      const data = await getWeatherData(cityname || "dhaka");
      setWeatherObj(data);
    }

    facedata();
  }, [cityname]);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
      <Inputs setCityname={setCityname} city={cityname} />
      <TimeAndLocation weather={weatherObj} />
      <TempratureAndDetails myweather={weatherObj} />
      <Forcast title="Daily forecast" items={weatherObj?.daily} timezone={ weatherObj?.timezone} />
    </div>
  )
}

export default App