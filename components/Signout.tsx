'use client'
import React from 'react'

function Signout() {
  return (
    <button onClick={()=>console.log('hello')} className='bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-full'>Signout</button>
  )
}

export default Signout