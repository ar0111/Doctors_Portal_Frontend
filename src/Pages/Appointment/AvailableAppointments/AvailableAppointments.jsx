import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);

    console.log('treatment', treatment);

    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    },[])

    return (
        <div className='container mx-auto'>
            <div className='text-c xnter my-24'>
                <p className='text-secondary'>Available Services on {format(selectedDate, 'PP')}</p>
                <p>Please select a service. {appointmentOption.length}</p>

                <div className='text-left grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0'>
                    {
                        appointmentOption.map(appointmentOption => <AppointmentOptions
                        key={appointmentOption.id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                        ></AppointmentOptions>)
                    }
                </div>

                {
                    treatment && <BookingModal
                        treatment = {treatment}
                        selectedDate = {selectedDate}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;