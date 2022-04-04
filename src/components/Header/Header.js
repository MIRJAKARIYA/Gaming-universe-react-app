import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between p-6 bg-slate-500 text-white items-center sticky top-0'>
            <div>
                <Link to={'/home'}>
                    <h1 className='text-4xl'>Gaming mania</h1>
                </Link>
            </div>
            <div className='flex'>
                <Link className='mr-5' to={'/home'}>HOME</Link>
                <Link className='mr-5' to={'/reviews'}>REVIEWS</Link>
                <Link className='mr-5' to={'/dashboard'}>DASHBOARD</Link>
                <Link className='mr-5' to={'/blogs'}>BLOGS</Link>
                <Link className='mr-5' to={'/about'}>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;