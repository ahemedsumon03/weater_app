/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { WeatherServiceContext } from '../context/WeatherServiceContext';
import { Bars } from 'react-loader-spinner';

const TimeAndLocation = ({ weather,loading }) => {
    
    const { formatTime } = useContext(WeatherServiceContext);
 
    return (
        <>
           {!loading ? (
                <div>
                    <div className='flex items-center justify-center my-6'>
                        <p className='text-white text-xl font-extralight'>
                            {formatTime(weather?.timezone)}
                        </p>
                    </div>

                    <div className='flex items-center justify-center my-3'>
                        <p className='text-white text-3xl font-medium'>{weather?.timezone}</p>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center mt-10'>
                    <Bars
                        height="40"
                        width="40"
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

export default TimeAndLocation