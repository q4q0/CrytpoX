import React from 'react'
import { Link } from 'react-router-dom'

const Crypto = () => {
    return (
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-screen'>
            <nav className='flex flex-row justify-around w-10/12 m-auto pt-10 font-thin text-xl text-white  font-raleway uppercase'>
                <Link to="/">Home</Link>
                <Link to="/hash">Hash</Link>
                <Link to="/crypto">Crypto</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Crypto