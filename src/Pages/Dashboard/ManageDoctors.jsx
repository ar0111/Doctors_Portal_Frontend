import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import toast from 'react-hot-toast';

const ManageDoctors = () => {

    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async()=>{
            const res = await fetch("https://final-server-rho.vercel.app/doctors");
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    const deleteDoctor = (user)=>{
        console.log(user);
        const aggree = window.confirm(`Are you want to delete ${user.name}`);
        if(aggree){
            // console.log("Yes Aggree");
            fetch(`https://final-server-rho.vercel.app/doctors/${user._id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Delete User Successfully")
                    refetch();
                }
            })
        }
    }

    return (
        <div>
            {/* <h1 className='text-2xl mb-6'>My Appointment {bookings.length}</h1> */}
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>SPECIALITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        doctors.map((doctor, i) =>  <tr key={i}>
                            <th>{i+1}</th>
                            <td><img className="w-10 rounded-full" src={`data:image/png;base64, ${doctor.image}`} alt="" /></td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.speciality}</td>
                            <td><button onClick={()=> deleteDoctor(doctor)} className='btn btn-sm bg-red-500 text-white'>Delete</button></td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;