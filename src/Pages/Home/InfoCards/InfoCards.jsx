import React from 'react';
import clock from '../../../assets/icons/clock.png'
import marker from '../../../assets/icons/marker.png'
import phone from '../../../assets/icons/phone.png'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id:1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name: 'Our Location',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='container text-left mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;