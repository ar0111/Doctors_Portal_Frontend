import React, { useEffect, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = ({booking}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const {price, email, patient, _id} = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:7000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" 
        },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email:email
                },
              },
            },
        );

        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        if(paymentIntent.status === "succeeded"){
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }

            fetch("http://localhost:7000/payments", {
                method: "POST",
                headers: { 
                  "Content-Type": "application/json" 
                },
                body: JSON.stringify(payment),
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    setSuccess("Congratulation! Your payment is Done");
                    setTransactionId(payment.transactionId);
                }
            })
        }

    }
    return (
        <>
            <form className='w-1/3' onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '18px',
                        color: '#424770',
                        '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                />
                <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
                </button>
            </form>
            <p className='text-danger'>{cardError}</p>
            {
                success && <div className='my-5'>
                    <p className='text-success'>{success}</p>
                    <p><b>{transactionId}</b></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;