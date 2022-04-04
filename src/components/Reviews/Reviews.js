import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <>
        <h1 className='text-4xl font-bold text-center mt-10'>What player's say!</h1>
        <div className='grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[88%] mx-auto my-16'>
            {
                reviews.map(rev => <Review key={rev.reviewId} rev={rev}></Review>)
            }
        </div>
        </>
    );
};

export default Reviews;<h1>I am review</h1>