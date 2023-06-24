/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState,useContext } from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempratureAndDetails from './components/TempratureAndDetails'
import Forcast from './components/Forcast'
import { WeatherServiceContext } from './context/WeatherServiceContext';
import { Bars } from 'react-loader-spinner';

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
      {!loading ? (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
          <Inputs setCityname={setCityname} city={cityname} />
          <TimeAndLocation weather={weatherObj} />
          <TempratureAndDetails myweather={weatherObj} />
          <Forcast title="Daily forecast" items={weatherObj?.daily} timezone={weatherObj?.timezone} />
        </div>
      ) : (
          <div className='flex justify-center items-center mt-10'>
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
      )}
    </>
  )
}

export default App