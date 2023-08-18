/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { WeatherServiceContext } from '../context/WeatherServiceContext';
import { Bars } from 'react-loader-spinner';

const Forcast = ({ title, items, timezone,loading }) => {

    const { formatToLocalTime, iconUrlForCode } = useContext(WeatherServiceContext);

    return (
        <>
          {!loading ? (
                <div>
                    <div className='flex items-center justify-start mt-6'>
                        <p className='text-white font-medium uppercase'>{title}</p>
                    </div>
                    <hr className='my-2' />
                    <div className='flex flex-row justify-between items-center text-white'>
                        {
                            items &&
                            items?.slice(1, 6)?.map((item, index) => (
                                <div key={index} className='flex flex-col items-center justify-center'>
                                    <p className='text-light text-sm'>{formatToLocalTime(item?.dt, timezone, 'ccc')}</p>
                                    <img src={iconUrlForCode(item?.weather[0]?.icon)} alt="sun" className='w-20' />
                                    <p className='font-medium'>{`${(item?.temp?.day - 273).toFixed()}°`}</p>
                                </div>
                            ))
                        }

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

export default Forcast