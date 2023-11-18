import React from 'react';
import fluoride from '../../../assets/icons/fluoride.png'
import cavity from '../../../assets/icons/cavity.png'
import whitening from '../../../assets/icons/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id:1,
            name:'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening
        }
    ]

    return (
        <div className='container mx-auto text-center mt-32'>
            <h4 className='text-xl font-bold text-secondary'>OUR SERVICES</h4>
            <h3 className='text-3xl text-accent my-12'>Services We Provide</h3>
            <div className='text-left grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;