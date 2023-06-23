/* eslint-disable no-unused-vars */
import React from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempratureAndDetails from './components/TempratureAndDetails'
import Forcast from './components/Forcast'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
      <Inputs />
      <TimeAndLocation />
      <TempratureAndDetails />
      <Forcast title="hourly forecast"/>
      <Forcast title="Daily forecast"/>
    </div>
  )
}

export default App