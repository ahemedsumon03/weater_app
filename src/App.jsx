/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState,useContext } from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempratureAndDetails from './components/TempratureAndDetails'
import Forcast from './components/Forcast'
import { WeatherServiceContext } from './context/WeatherServiceContext';

const App = () => {
  
  const [weatherObj, setWeatherObj] = useState({});
  const [cityname, setCityname] = useState("");
  const [loading, setLoading] = useState(false)

  const { getWeatherData } = useContext(WeatherServiceContext);

  useEffect(() => {
    setLoading(true)
    const facedata = async () => { 
      const data = await getWeatherData(cityname || "dhaka");
      setWeatherObj(data);
      setLoading(false);
    }

    facedata();
  }, [cityname]);

  return (
    <>
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
          <Inputs setCityname={setCityname} city={cityname} />
          <TimeAndLocation weather={weatherObj} loading={loading} />
          <TempratureAndDetails myweather={weatherObj} loading={loading} />
          <Forcast title="Daily forecast" items={weatherObj?.daily} timezone={weatherObj?.timezone} loading={loading} />
        </div>
    </>
  )
}

export default App