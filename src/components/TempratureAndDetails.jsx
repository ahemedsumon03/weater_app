/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { RiCloudWindyFill } from 'react-icons/ri';
import { BsFillSunFill } from 'react-icons/bs';

const TempratureAndDetails = ({ myweather }) => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                {
                    myweather?.weather?.map((item, index) => (
                        <p key={index}>{item?.main }</p>
                    ))
                }
            </div>

            <div className='flex flex-row justify-between text-white py-3'>
                {myweather?.weather?.map((item, index) => (
                    <img key={index} src={`http://openweathermap.org/img/wn/${item?.icon}.png`} alt="sun" className='w-20' />
                ))}
                <p className='text-5xl'>{(myweather?.main?.temp - 273).toFixed()}º</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <FaTemperatureHigh size={18} className='mr-1' />

                        <span>Real fell: <span className='font-medium ml-1'>{(myweather?.main?.feels_like - 273).toFixed()}º</span></span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <WiHumidity size={18} className='mr-1' />

                        <span>Humidity: <span className='font-medium ml-1'>{myweather?.main?.humidity}%</span></span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <RiCloudWindyFill size={18} className='mr-1' />

                        <span>Wind: <span className='font-medium ml-1'>{`${myweather?.wind?.speed.toFixed()}km/h`}</span></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-4 text-white text-sm py-3'>

                <BsFillSunFill />
                <p className='font-light'>High: <span className='font-medium ml-1'>{(myweather?.main?.temp_max - 273).toFixed()}º</span></p>
                <p className='font-light'>|</p>

                <BsFillSunFill />
                <p className='font-light'>Low: <span className='font-medium ml-1'>{(myweather?.main?.temp_min - 273).toFixed()}º</span></p>
            </div>
        </div>
    )
}

export default TempratureAndDetails