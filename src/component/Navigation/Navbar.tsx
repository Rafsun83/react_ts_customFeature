import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const index = () => {
    return (
        <>
        <nav>
            <ul className='flex justify-center gap-5 p-6 bg-deepGreen text-balck'>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/modal">Modal</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/toast">Toast</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/dropdown">Dropdown</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/selectdropdown">Select Dropdown</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/button">Button</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/form">Form</Link></li>
            </ul>
            </nav>
            <Outlet />
        </>
   
    );
};

export default index;