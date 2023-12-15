import React from 'react';
import EachReview from './EachReview';
import NoReview from './NoReview';
import CreateReview from './CreateReview';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';

const Reviews = () => {

    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch("https://doctor-portal-server-production-bfcb.up.railway.app/reviews");
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.length > 0 ? reviews.map((review, idx)=>{
                        return <EachReview review={review} key={idx} refetch={refetch}></EachReview>
                    }) : <NoReview></NoReview>
                }
            </div>
            
            <CreateReview></CreateReview>
        </div>
    );
};

export default Reviews;