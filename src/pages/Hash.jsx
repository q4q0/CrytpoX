import React from 'react'
import { Link } from 'react-router-dom'

const Hash = () => {
    return (
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-screen'>
            <nav className='flex flex-row justify-around w-10/12 bg-slate-800 bg-opacity-50 m-auto pt-10 pb-10 font-thin text-xl text-white  font-raleway uppercase'>
                <Link to="/" className='hover:text-purple-600'>Home</Link>
                <Link to="/hash" className='hover:text-purple-600'>Hash</Link>
                <Link to="/crypto" className='hover:text-purple-600'>Crypto</Link>
                <Link to="/about" className='hover:text-purple-600'>About</Link>
            </nav>
        </div>
    )
}

export default Hash