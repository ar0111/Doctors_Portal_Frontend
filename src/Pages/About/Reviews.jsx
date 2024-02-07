import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import Review from './Review';

const Reviews = () => {

    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch("https://final-server-rho.vercel.app/reviews");
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='py-24'>
            <h4 className='text-xl text-blue-700 font-medium mt-6 md:mt-0'>Testimonials</h4>
            <h1 className='text-3xl my-6 font-semibold'>What Our Clients Say</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.map((review, idx)=>{
                        return <Review review={review} key={idx} refetch={refetch}></Review>
                    })
                }
            </div>
        </div>
    );
};

export default Reviews;