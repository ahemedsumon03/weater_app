/* eslint-disable no-unused-vars */
import React from 'react'

const Forcast = ({ title }) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex flex-row justify-between items-center text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-light text-sm'>4.30 AM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-20' />
                    <p className='font-medium'>20º</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-light text-sm'>4.30 AM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-20' />
                    <p className='font-medium'>20º</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-light text-sm'>4.30 AM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-20' />
                    <p className='font-medium'>20º</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-light text-sm'>4.30 AM</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-20' />
                    <p className='font-medium'>20º</p>
                </div>
            </div>
        </div>
    )
}

export default Forcast