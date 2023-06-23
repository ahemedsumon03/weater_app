/* eslint-disable no-unused-vars */
import React from 'react'
import { GoSearch } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';

const Inputs = () => {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type="text"
                    placeholder="Search for city.."
                    className='text-xl font-light p-2 w-full show-xl focus:outline-none capitalize'
                />
                <GoSearch size={25} className='text-white cusrsor-pointer transition ease-out hover:scale-125'/>
                <MdLocationOn size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button type='button' name="metric" className='text-white text-xl font-light'>ºC</button>
                <p className='text-xl mx-1 text-white'>|</p>
                <button type='button' name="metric" className='text-white text-xl font-light'>ºF</button>
            </div>
        </div>
    )
}

export default Inputs