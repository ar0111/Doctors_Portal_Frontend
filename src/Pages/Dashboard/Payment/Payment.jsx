import React from 'react';
import {useLoaderData} from "react-router-dom";
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_APP); 

const Payment = () => {

    const booking = useLoaderData();
    const {email, patient, price, slot, appointmentDate, treatment
    } = booking;

    return (
        <div>
            <div>
                <h2 className='text-3xl font-semibold'>Payment for <span className='text-primary'>{treatment}</span></h2>
                <p>Please Pay <b>{price}</b> for your appointment on <strong>{appointmentDate}</strong> at <b>{slot}</b></p>
            </div>
            
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                ></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;