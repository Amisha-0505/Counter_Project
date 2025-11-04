import React from 'react'
import { useState } from 'react'



function Counter() {
  const[count,setCount]=useState(0);

  const increament=()=>{
    setCount(count+1);
  }

  const decreament=()=>{
    setCount(count-1);
  }

  const reset=()=>{
    setCount(0);
  }
  return (
    <div className="min-h-screen flex items-center bg-gray-100" >
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
       <h1 className="text-2xl font-semibold text-gray-700 mb-4">Counter</h1>
      
      <div className="text-5xl font-bold text-indigo-600 mb-6">
          {count}
      </div>

      <div className="flex justify-center gap-4">
          <button
            onClick={decreament}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 hover:scale-105 transition"
          >
            –
          </button>

          <button
            onClick={increament}
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 transition"
          >
            +
          </button>
        </div>
        <button 
        onClick={reset}
        className="mt-6 w-full px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter