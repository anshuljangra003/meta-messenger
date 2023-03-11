'use client'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../typings';

function Input() {
    const [input, setinput] = useState("")
    const addMessage=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!input) return;
    const messagetosend=input;
    setinput("")
    const id=uuidv4();
    const message: Message={
        id,
        message:messagetosend,
        username:"Andrew Tate",
        created_at:Date.now(),
        email:"anshul.jangra003@gmail.com"
    }

    const uploadtodb=async()=>{
    const res= await fetch('/api/addMessage',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            message
        })
    })
     const data= await res.json();
     console.log("MEssage added <<<",data);
    }
    uploadtodb();
    }
  return (
<form onSubmit={addMessage} className='flex fixed bottom-0 z-50 px-10 py-5 w-full space-x-2 '>
    <input value={input} onChange={(e)=>setinput(e.target.value)}  className='flex-1 px-5 py-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter Message Here...' type="text"/>

    <button disabled={!input} onClick={()=>console.log("hello")} type='submit' className='bg-blue-500 hover:bg-blue-700 disabled:opacity-50 transition duration-150 px-4 py-2 text-white rounded-full'>
        Send
    </button>
</form>
  )
}

export default Input