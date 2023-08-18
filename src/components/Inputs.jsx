/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Inputs = ({ setCityname }) => {

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type="text"
                    placeholder="Search for city.."
                    // call debounce method in onChange handler for prevent request to each chracter change
                    onChange={(e) => setTimeout(() => { 
                        setCityname(e.target.value)
                    },4000)}
                    className='text-xl font-light p-2 w-full show-xl focus:outline-none capitalize'
                />
            </div>
        </div>
    )
}

export default Inputs