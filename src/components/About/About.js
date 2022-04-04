import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div className=' mt-20'>
            <div>
                <h1 className='text-4xl text-center font-mono'>You can contact us directly if you need..</h1>
            </div>
            <div className='text-center mt-8 font-mono'>
                <Link to='dhakaoffice' className='text-lg bg-green-600 text-white mr-3 px-4 rounded-md py-1'>Dhaka</Link>
                <Link to='newdelhioffice' className='text-lg bg-green-600 text-white mr-3 px-4 rounded-md py-1'>New Delhi</Link>
                <Link to='newyorkoffice' className='text-lg bg-green-600 text-white mr-3 px-4 rounded-md py-1'>New York</Link>
            </div>
            <div className='mt-10 font-mono'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default About;