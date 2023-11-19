import React from 'react';
import appointment from "../../../assets/images/bg-blue.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import FormInput from '../../FormInput/FormInput';

const ContactUs = () => {
    return (
        <section className="mt-32" style={{backgroundImage: `url(${appointment})`}}>
            <div className='container mx-auto py-16'>
                <h5 className="text-secondary">Contact Us</h5>
                <h1 className="text-3xl text-white">Stay connected with us</h1>
                <div className='my-6'>
                    <FormInput name='email' type='email' placeholder='Email Address'></FormInput>
                    <FormInput name='subject' type='text' placeholder='Subject'></FormInput>
                    <textarea className = "border rounded-md p-3 mt-3" name="message" cols="47" rows="3" required placeholder='Your message'></textarea>
                </div>
                
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;