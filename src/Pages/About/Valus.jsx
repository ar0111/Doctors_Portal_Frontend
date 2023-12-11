import React from 'react';
import { Link } from 'react-router-dom';

const Valus = () => {
    return (
        <div className='py-24'>
            <h4 className='text-xl text-blue-700 font-medium mt-6 md:mt-0'>Our Values</h4>
            <h1 className='text-3xl my-6 font-semibold'>Our Work Is Heavily Shaped by Our Core Values</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 px-5 md:px-0'>
                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body text-start">
                        <h4 className="card-title text-xl text-blue-700 font-medium">01.</h4>
                        <h1 className='text-2xl my-2 font-semibold'>Compassion</h1>
                        <p>We aim at understanding and caring for patients and colleague’s needs and wants, by attentive listening and putting ourselves in people’s shoes.</p>
                    </div>
                </div>

                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body text-start">
                        <h4 className="card-title text-xl text-blue-700 font-medium">02.</h4>
                        <h1 className='text-2xl my-2 font-semibold'>Progression</h1>
                        <p>We want to keep adapting to different situations, with a desire to learn and striving to be better. Learning new trends and technologies in the industry.</p>
                    </div>
                </div>

                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body text-start">
                        <h4 className="card-title text-xl text-blue-700 font-medium">03.</h4>
                        <h1 className='text-2xl my-2 font-semibold'>Respect</h1>
                        <p>Respect everyone we meet and treat them like we want to be treated. Whether it is a colleague or a patient, understanding and respect matter.</p>
                    </div>
                </div>

                <div className="card w-full md:w-2/3 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body text-start">
                        <h4 className="card-title text-xl text-blue-700 font-medium">04.</h4>
                        <h1 className='text-2xl my-2 font-semibold'>Courage</h1>
                        <p>We are the experts in our field. Therefore, it is important to have the courage to do what is right knowing that it is for the better good of the person ahead.</p>
                    </div>
                </div>
            </div>

            <Link to='/appointment'><button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-lg my-10">Book an Appointment</button></Link>
        </div>
    );
};

export default Valus;