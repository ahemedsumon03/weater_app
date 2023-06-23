/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { formatTime } from '../services/WeatherService';

const TimeAndLocation = ({ weather  }) => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {formatTime(weather?.timezone) }
                </p>
            </div>

            <div className='flex items-center justify-center my-3'>
                <p className='text-white text-3xl font-medium'>Berlin,DE</p>
            </div>
        </div>
    )
}

export default TimeAndLocation