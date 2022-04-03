import 'flowbite';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImage from '../../images/pubg-01.jpg';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
const Home = () => {
    const [reviews, setReviews] = useReviews();
    const [threeReviews, setThreeReviews] = useState([]);
    const navigate = useNavigate();
    useEffect( ()=>{
        const slicedThreeReviews = reviews.slice(0,3);
        setThreeReviews([...slicedThreeReviews]);
    },[reviews])
    
    return (
        <div>
            <div className='flex md:flex-row flex-col-reverse justify-between w-[80%] mx-auto mt-10 p-5 bg-slate-300 rounded-lg shadow-lg'>
                <div className='md:w-1/2 place-self-center md:mr-8 md:mt-0 mt-4'>
                    <h1 className='text-4xl font-bold'>Best First And Third Person Shooting Game.</h1>
                    <h2 className='text-xl font-bold mt-2'>Play And Conquer The Battlefield.</h2>
                    <p className='mt-2'>Free to play online multiplayer battle royale game developed and published by PUBG Studios,a subsidiary of Krafton.The game is based on previous mods that were created by Brendan "PlayerUnknown" Greene for other games,inspired by the 2000 Japanese film Battle Royale,and expanded into a standalone game under Greene's..</p>
                    <button className='mt-6 text-xl text-white hover:bg-orange-700 duration-300 px-6 py-3 rounded-md bg-orange-600 block ml-6'>Buy Now</button>
                </div>
                <div className='md:w-1/2'>
                    <img src={mainImage} className='h-full w-full rounded-lg max-h-[600px]' alt="" />
                </div>
            </div>
            <div className='w-[80%] mx-auto mt-16'>
                <h1 className='text-3xl font-semibold text-center'>Player review's</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:w-[85%] justify-items-center mx-auto mt-6'>
                        {
                            threeReviews.map(rev => <Review key={rev.reviewId} rev={rev}></Review>)
                        }
                    </div>
            </div>
            <div>
            <button type="button" onClick={()=>navigate('/reviews')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block mx-auto my-10">SEE ALL REVIEWS</button>

            </div>
        </div>
    );
};

export default Home;