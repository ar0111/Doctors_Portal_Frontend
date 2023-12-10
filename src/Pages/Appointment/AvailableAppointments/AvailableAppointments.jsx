import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Components/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    console.log('treatment', treatment);

    // useEffect(() => {
    //     fetch('http://localhost:7000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOption(data))
    // },[])

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:7000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>

    return (
        <div className='container mx-auto'>
            <div className='text-c xnter my-24'>
                <p className='text-secondary'>Available Services on {format(selectedDate, 'PP')}</p>
                <p>Please select a service.</p>

                <div className='text-left grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0'>
                    {
                        appointmentOption.map(appointmentOption => <AppointmentOptions
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                        ></AppointmentOptions>)
                    }
                </div>

                {
                    treatment && <BookingModal
                        treatment = {treatment}
                        selectedDate = {selectedDate}
                        setTreatment = {setTreatment}
                        refetch = {refetch}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;