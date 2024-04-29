import React from 'react';
import Button from '@mui/material/Button';
import { HomeBannerProduct } from '@/components/lib/data';

const Banner = () => {
    return (
        <div>
            {/* Main container for the banner component */}
            <div className='bg-cyan-100 py-72 flex justify-center gap-24'>
                <div className='w-1/2'>
                    <span className="text-gray-800 font-bold text-4xl">Experience in <span className="text-blue-600">mobile app</span> and <span className="text-green-600">website</span> development, advancing website creation.
                    </span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, odit! Similique, aspernatur natus iste repellat, officiis, eum non autem eaque quo incidunt recusandae vero et velit? Quasi officia doloribus adipisci.   
                    <br />
                    <div className='flex gap-12 ml-12 mt-12'>
                        {/* Contact us button */}
                        <Button 
                        variant="contained"                 
                        className="text-black hover:bg-white transition-colors duration-300">
                            Contact us
                        </Button>
                        {/* View more button */}
                        <Button variant="outlined">View more</Button>
                    </div>
                </div>
                <div className='mr-8'>
                    {/* Image */}
                    <img className="max-w-full h-auto" src="https://th.bing.com/th?id=OIP.N2bbmgEjg89Wu3Qi36kV9gHaJQ&w=120&h=120&c=8&rs=1&qlt=80&o=6&dpr=1.1&pid=3.1" alt="foto" />
                </div>
            </div>
            {/* Mapping through banner products */}
            <div className='flex justify-center items-center gap-8 mt-12'>
                
                {HomeBannerProduct.map(prod => (
                    <div key={prod.title} className=' flex flex-row-reverse gap-8 my-12'>
                        <div>
                            <h2>{prod.title}</h2>
                            <h4> Lorem ipsum dolor sit amet consectetur</h4>
                        </div>
                        
                        <div className={`${prod.backgroundColor} rounded-full`}>
                            {prod.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
