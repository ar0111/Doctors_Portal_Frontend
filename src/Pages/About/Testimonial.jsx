import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Testimonial = () => {
    return (
        <div className='py-24 flex flex-col md:flex-row items-center justify-center mx-10 md:mx-0'>
            <div className='basis-1/3'>
                <img className='mx-auto w-96 h-96' src={treatment} alt="" />
            </div>

            <div className='text-start basis-1/2'>
                <h5 className='text-xl text-blue-700 font-medium mt-6 md:mt-0'>Our Story</h5>
                <h1 className='text-4xl my-6 font-semibold'>Committed to the Dental Excellence</h1>
                <p className='font-bold mb-5'>We are a team of 3 professional dentists with extensive experience with the latest trends and technologies in the dental industry.</p>
                <p>We are known for the most affordable and painless dental treatments that our clients have been loving for years. Whether it is cosmetic dental treatments, root canals, tooth extraction, or more, we assure the best help in a comfortable and friendly environment. We’ve built relationships with thousands of clients for simple consultations and surgeries too.</p>
            </div>
        </div>
    );
};

export default Testimonial;