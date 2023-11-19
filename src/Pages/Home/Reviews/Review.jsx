import React from 'react';

const Review = ({review}) => {
    const { name, description, img, location } = review;

    return (
        <div>
            <div className="card shadow-xl bg-base-100 p-10">
                <p>{description}</p>
                <div className='flex gap-4 mt-10'>
                    <img className='rounded-full border-4 border-secondary' src={img} alt={name}/>
                    <div className="">
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Review;