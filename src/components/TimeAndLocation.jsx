/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { WeatherServiceContext } from '../context/WeatherServiceContext';

const TimeAndLocation = ({ weather }) => {
    
    const { formatTime } = useContext(WeatherServiceContext);
 
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {formatTime(weather?.timezone) }
                </p>
            </div>

            <div className='flex items-center justify-center my-3'>
                <p className='text-white text-3xl font-medium'>{ weather?.timezone}</p>
            </div>
        </div>
    )
}

export default TimeAndLocation