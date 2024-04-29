import React from 'react';
import { links } from '@/components/lib/data';
import Button from '@mui/material/Button';

const NavigationBar = () => {
  return (
    <nav className='bg-white py-4 px-8 flex items-center justify-between'>
      <div className='text-cyan-400 font-bold text-2xl font-serif'>
        LOGO
      </div>

      <div className='flex items-center space-x-6'>
        {links.map(nav => (
          <Button
            key={nav.hash}
            href={nav.hash}
            className='text-black hover:text-gray-600 focus:text-gray-600'>
            {nav.name}
          </Button>
        ))}
      </div>

      <Button
        variant="contained"
        className='text-white bg-cyan-400 hover:bg-cyan-500 focus:bg-cyan-500'
        href='/login'>
        Login
      </Button>
    </nav>
  );
};

export default NavigationBar;
