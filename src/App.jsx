/* eslint-disable */
// import { useState } from 'react'
import '../dist/output.css'

function App() {

  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen bg-blue-950">

      <div className="flex justify-between items-center flex-col absolute p-8 bg-violet-400 rounded-2xl h-2/3 min-w-8 w-1/2 ">
        
        <div class="form-title">
          Registration Form
        </div>

        <div>
          <div className="flex justify-center items-start flex-col">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="flex justify-center items-start flex-col">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
        </div>

        <div></div>

      </div>

    </div>
  )
}

export default App