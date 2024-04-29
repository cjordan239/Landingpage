"use client"

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {

    return (
    <footer>
        {/* email subscription is part of footer */}
            <div className='flex flex-col justify-center items-center bg-cyan-100 py-24 gap-12'>
            {/* Text Content */}
            {/* Container for text content with centered alignment */}
            <div className='flex items-center'>
                {/* Paragraph with black text, larger font size, and horizontal padding */}
                <p className='text-black text-xl px-80 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae architecto fuga voluptatum porro nemo iste ducimus illum? Incidunt, ut modi placeat adipisci hic quam ipsa eaque quis id eligendi!
                </p>
            </div>

            {/* Email Input and Subscribe Button */}
            {/* Container for email input field and subscribe button with flex row layout, centered alignment, and gap between children */}
            <div className='flex flex-row gap-6 justify-center items-center'>
                {/* Email Input */}
                {/* TextField component for entering email with specific width */}
                <TextField 
                    id="email"                  
                    label="Email" 
                    variant="filled" 
                    className='w-360' // Set width of TextField
                    
                />
                {/* Subscribe Button */}
                {/* Button component for subscribing with custom styles for background color, text color, font size, padding, and border radius */}
                <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    className="bg-black text-white hover:bg-white hover:text-black font-semibold text-lg px-6 py-3 rounded-lg"
                >
                    Subscribe
                </Button>
            </div>  
        </div>

        {/* footer list of navigation */}
        <div className='flex justify-center items-center py-8 gap-12'>
            <div className='flex flex-col items-center'>
                <span className='text-cyan-400 font-bold text-2xl font-serif'>Logo</span>
                <p className="text-gray-700 mt-2 text-center w-64">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim eius nesciunt esse iste amet eos quis, incidunt explicabo     ipsum       reprehenderit, sint quasi quos expedita laborum aliquam tempore modi? Nihil.
                </p>
            </div>

            <div className='flex flex-col'>
            <h2 className="text-gray-800 font-bold">About us</h2>
            <ul className=''>
                <li> lorem </li>
                <li> lorem </li>
                <li> lorem </li>
            </ul>
            </div>

            <div className='flex flex-col'>
            <h3 className="text-gray-800 font-bold">Contact</h3>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            </div>

            <div className='flex flex-col'>
                <h3 className="text-gray-800 font-bold">Social Media</h3>
                <div className='flex'>
                 <a href="https://www.facebook.com/">
                    <FaFacebookSquare size={45}/>
                 </a>
                    <FaSquareInstagram size={45} />
                    <FaSquareWhatsapp size={45}/>

                </div>
            </div>
        </div>

    </footer> 
    );
};

export default Footer;
