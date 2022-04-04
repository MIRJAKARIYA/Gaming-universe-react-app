import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between p-6 z-10 bg-slate-600 text-white items-center sticky top-0'>
            <div>
                <Link to={'/home'}>
                    <h1 className='text-4xl font-bold'>GAMING UNIVERSE</h1>
                </Link>
            </div>
            <div className='flex mt-3 md:mt-0'>
                <div className='mr-5'>
                    <NavLink className={({ isActive }) => isActive ? 'active-style' : undefined} to={'/home'}>HOME</NavLink>
                </div>
                <div className='mr-5'>
                    <NavLink className={({ isActive }) => isActive ? 'active-style' : undefined} to={'/reviews'}>REVIEWS</NavLink>
                </div>
                <div className='mr-5'>
                    <NavLink className={({ isActive }) => isActive ? 'active-style' : undefined} to={'/dashboard'}>DASHBOARD</NavLink>
                </div>
                <div className='mr-5'>
                    <NavLink className={({ isActive }) => isActive ? 'active-style' : undefined} to={'/blogs'}>BLOGS</NavLink>
                </div>
                <div className='mr-5'>
                    <NavLink className={({ isActive }) => isActive ? 'active-style' : undefined} to={'/about'}>ABOUT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;