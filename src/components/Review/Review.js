import React from 'react';
const Review = ({rev}) => {
    const {name, rating, review, userImg} = rev;
    return (
        <div className="max-w-sm bg-[#406882] text-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-2">
            <div className="flex flex-col items-center">
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={userImg} alt=""/>
                <h5 className="mb-1 text-xl font-medium dark:text-white">{name}</h5>
                <p className="text-sm dark:text-gray-400 w-[90%]">{review}</p>
            </div>
            <p className='w-[90%] mx-auto mt-1'><small>Rating: {rating}</small></p>

        </div>
    );
};

export default Review;