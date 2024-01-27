import {FaSearch} from 'react-icons/fa';
import{Link} from'react-router-dom';
import React from 'react'

export default function header() {
  return (
    <header className="bg-stone-950 shadow-md">
            <div className='flex justify-between items-center font-serif max-w-6xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=' text-teal-400 text-3xl'>
                Real 
            </span>
            <span className='text-teal-200 text-3xl'>
                &nbsp;Estate
            </span>
            </h1>
            </Link>
                <form className=' bg-teal-50 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' className='bg-transparent  font-normal text-teal-600 border-spacing-1 border-cyan-50 focus:outline-none w-24 sm:w-64'/>
                    < FaSearch className='text-teal-600'/>
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                    <li className='hidden sm:inline text-teal-200 hover:underline'>Home</li>
                    4</Link>
                    <Link to='/About'>
                    <li className='hidden sm:inline text-teal-200 hover:underline'>About</li>
                    </Link>
                    <Link to='/Signin'>
                    <li className='hidden sm:inline text-teal-200 hover:underline'>Sign In</li>
                    </Link>
                </ul>
            </div>
    </header>
  )
}
