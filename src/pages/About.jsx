import React from 'react';
import { Link } from 'react-router-dom';

const Crypto = () => {
    return (
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-screen'>
            <nav className='flex flex-row justify-around w-10/12 bg-slate-800 bg-opacity-50 m-auto pt-10 pb-10 font-thin text-xl text-white  font-raleway uppercase'>
                <Link to="/" className='hover:text-purple-600'>Home</Link>
                <Link to="/hash" className='hover:text-purple-600'>Hash</Link>
                <Link to="/crypto" className='hover:text-purple-600'>Crypto</Link>
                <Link to="/about" className='hover:text-purple-600'>About</Link>
            </nav>
            <div className='w-10/12 m-auto flex flex-col justify-center items-center mt-60'>
                <h1 className='text-8xl text-white font-raleway'>~/CrytpoX</h1>
                <p className='text-xl mt-20 text-white font-raleway font-thin text-center w-4/6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam, ducimus inventore cum mollitia modi. Esse, corporis repudiandae illum sed ducimus iure eum laborum quis. Autem, minima blanditiis ratione cupiditate dolor alias officia nobis non nihil nemo sint labore totam expedita, itaque repellat? Labore illum aliquid explicabo, similique.s
                </p>
            </div>

            <nav className='flex flex-row justify-evenly w-10/12 m-auto pt-40 font-thin text-xl text-white font-raleway uppercase'>
                <a href="www.twitter.com">Twitter</a>
                <a href="www.linkedin">LinkedIn</a>
                <a href="www.github.com">Github</a>
                <a href="www.github.com">Contact Us</a>
            </nav>
        </div>
    );
};

export default Crypto;
