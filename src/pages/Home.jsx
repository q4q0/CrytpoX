import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-img1 bg-cover  bg-no-repeat h-screen'>
            <nav className='flex flex-row justify-around w-10/12 bg-slate-800 bg-opacity-50 m-auto pt-10 pb-10 font-thin text-xl text-white  font-raleway uppercase'>
                <Link to="/" className='hover:text-purple-600'>Home</Link>
                <Link to="/hash" className='hover:text-purple-600'>Hash</Link>
                <Link to="/crypto" className='hover:text-purple-600'>Crypto</Link>
                <Link to="/about" className='hover:text-purple-600'>About</Link>
            </nav>
            <div className='w-10/12 m-auto flex flex-col justify-center items-center mt-80'>
                <h1 className='text-8xl text-white font-raleway'>
                    ~/CrytpoX
                </h1>
                <p
                    className='text-xl mt-20 text-white font-raleway font-thin bg-black p-3'
                >We go beyond encryption/hashing...</p>
            </div>
        </div>
    )
}

export default Home