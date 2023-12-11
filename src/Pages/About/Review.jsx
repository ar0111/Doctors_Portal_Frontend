import React from 'react';
import people from '../../assets/images/people.png'

const Review = ({review}) => {
    return (
        <div className='px-4 md:px-0'>
            <div className="card w-96 bg-base-100 shadow-xl w-full">
                <div className="card-body">
                    <p className='text-start'>{review.message}</p>
                    <div className='flex gap-x-2'>
                        <img src={people} alt="" />
                        <h2 className="card-title">{review.name}</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;