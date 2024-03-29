import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';

const MyAppointment = () => {

    const {user} = useContext(AuthContext);

    const url = `https://final-server-rho.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h1 className='text-2xl mb-6'>My Appointment {bookings.length}</h1>
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map((booking, i) =>  <tr key={i}>
                            <th>{i+1}</th>
                            <td>{booking.patient}</td>
                            <td>{booking.treatment}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.slot}</td>
                            <td>
                                {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-sm btn-info'>PAY</button></Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-success'>PAID</span>
                                }
                            </td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;