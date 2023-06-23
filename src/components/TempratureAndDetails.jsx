/* eslint-disable no-unused-vars */
import React from 'react'
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { RiCloudWindyFill } from 'react-icons/ri';
import { WiSunset } from 'react-icons/wi';
import { BsFillSunFill } from 'react-icons/bs';

const TempratureAndDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Cloudy And Weather</p>
            </div>

            <div className='flex flex-row justify-between text-white py-3'>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-20' />
                <p className='text-5xl'>34º</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <FaTemperatureHigh size={18} className='mr-1' />

                        <span>Real fell: <span className='font-medium ml-1'>32º</span></span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <WiHumidity size={18} className='mr-1' />

                        <span>Humidity: <span className='font-medium ml-1'>65º</span></span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <RiCloudWindyFill size={18} className='mr-1' />

                        <span>Wind: <span className='font-medium ml-1'>11km/h</span></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-4 text-white text-sm py-3'>
                <BsFillSunFill />
                <p className='font-light'>Rise: <span className='font-medium ml-1'>5.34 AM</span></p>
                <p className='font-light'>|</p>

                <WiSunset />
                <p className='font-light'>Set: <span className='font-medium ml-1'>6.34 PM</span></p>
                <p className='font-light'>|</p>

                <BsFillSunFill />
                <p className='font-light'>High: <span className='font-medium ml-1'>35º</span></p>
                <p className='font-light'>|</p>

                <BsFillSunFill />
                <p className='font-light'>Low: <span className='font-medium ml-1'>25º</span></p>
            </div>
        </div>
    )
}

export default TempratureAndDetails