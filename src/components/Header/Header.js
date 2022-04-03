import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between p-4 bg-slate-500 text-white items-center'>
            <div>
                <Link to={'/home'}>
                    <h1 className='text-3xl'>Gaming mania</h1>
                </Link>
            </div>
            <div className='flex'>
                <Link className='mr-3' to={'/home'}>HOME</Link>
                <Link className='mr-3' to={'/reviews'}>REVIEWS</Link>
                <Link className='mr-3' to={'/dashboard'}>DASHBOARD</Link>
                <Link className='mr-3' to={'/blogs'}>BLOGS</Link>
                <Link className='mr-3' to={'/about'}>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;