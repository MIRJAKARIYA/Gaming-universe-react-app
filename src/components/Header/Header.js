import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='border-2 border-red-500 flex justify-between'>
            <div>
                <Link to={'/home'}>
                    <h4>Gaming mania</h4>
                </Link>
            </div>
            <div className='flex'>
                <Link to={'/home'}>HOME</Link>
                <Link to={'/reviews'}>REVIEWS</Link>
                <Link to={'/dashboard'}>DASHBOARD</Link>
                <Link to={'/blogs'}>BLOGS</Link>
                <Link to={'/about'}>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;