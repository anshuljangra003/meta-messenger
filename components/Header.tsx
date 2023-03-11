import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Signout from './Signout';

function Header() {
    const session=true;
    if(session) return (
        <header className='sticky top-0 z-50 p-10 shadow-md flex items-center justify-between'>
        <div className='flex space-x-2'>
                <Image src="https://links.papareact.com/jne" height={8} width={80} alt="logo"/>
            <div>

                <p className='text-blue-400'>Logged in as:</p>
                <p className='font-bold'>Anshul Jangra</p>
            </div>
               
              
            
        </div>
        <Signout/>
    </header>

    )
  return (
    <header className='sticky top-0 z-50 p-10 shadow-md'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center '>
                <Image src="https://links.papareact.com/jne" height={20} width={60} alt="logo"/>
                <p className='text-blue-400 cursor-default'>Welcome to Messenger</p>
            </div>
            <Link className='mt-3 bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded-full' href="/auth/signin">Sign In</Link>
        </div>
    </header>
  )
}

export default Header