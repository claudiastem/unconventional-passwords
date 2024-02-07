/* eslint-disable */
// import { useState } from 'react'
import '../dist/output.css'


function App() {

  return (
    <div className='flex justify-center items-center flex-col h-screen w-screen'>

      <div className='flex justify-between items-center flex-col absolute h-5/6 w-72 p-8 rounded-2xl border-2 border-white bg-violet-400 bg-opacity-35'>
        
        <div className='text-white font-prompt font-semibold text-2xl'>
          Register
        </div>

        <div>
          <div className='flex justify-center items-start flex-col'>
            <label for='username' className='text-white font-prompt'>Username</label>
            <input type='text' id='username' className='w-full mb-10 px-4 py-2 rounded-md text-white font-prompt text-base focus:outline-none bg-gray-900 bg-opacity-30'/>
          </div>
          <div className='flex justify-center items-start flex-col'>
            <label for='password' className='text-white font-prompt'>Password</label>
            <input type='password' id='password' className='w-full mb-10 px-4 py-2 rounded-md text-white font-prompt text-base focus:outline-none bg-gray-900 bg-opacity-30' />
          </div>  
        </div>

        <button className='rounded-xl px-4 py-2 border-2 text-white font-prompt bg-violet-400 bg-opacity-40'>Sign Up</button>

      </div>

    </div>
  )
}

export default App