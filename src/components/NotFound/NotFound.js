import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPic from '../../images/notFoundpic.png';
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <img src={ErrorPic} className="mx-auto mt-[150px]" alt="" />
            <button onClick={()=>navigate('/home')} className='mx-auto block bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 duration-200'>Back to home</button>
        </div>
    );
};

export default NotFound;