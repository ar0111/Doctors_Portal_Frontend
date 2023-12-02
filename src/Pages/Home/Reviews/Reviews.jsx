import React from 'react';
import iconComma from '../../../assets/images/Mask Group.png'
import reviewers from '../../../assets/images/people.png'
import Review from './Review';

const Reviews = () => {

    const reviewsData = [
        {
            id:1,
            name:'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:reviewers
        },
        {
            id:2,
            name:'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:reviewers
        },
        {
            id:3,
            name:'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img:reviewers
        }
    ]

    return (
        <div className='mt-28'>
            <div className='flex justify-between'>
                <div className='text-left px-10'>
                    <h5 className="text-secondary">Testimonial</h5>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <img className='pe-10 w-1/3 md:w-1 h-1/3 md:h-1' src={iconComma} alt="" />
            </div>
            
            <div className='px-6 md:px-20 text-left grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {
                    reviewsData.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
            
        </div>
    );
};

export default Reviews;