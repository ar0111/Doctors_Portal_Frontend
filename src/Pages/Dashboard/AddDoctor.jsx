import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Components/Loading/Loading';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: specialities = [], isLoading } = useQuery({
        queryKey: ['appointmentSpeciality'],
        queryFn: async()=>{
            const res = await fetch("https://final-server-p20dc2jtt-arafat-rahmans-projects.vercel.app/appointmentSpeciality");
            const data = await res.json();
            return data;
        }
    })
    // const {createUser, updateUser} = useContext(AuthContext);
    // const [signUpError, setSignUpError] = useState('');
    // const navigate = useNavigate();

    const handleAddDoctor = (data) =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('speciality', data.speciality);
        formData.append('image', image);
        // console.log(formData);

        fetch('https://final-server-p20dc2jtt-arafat-rahmans-projects.vercel.app/doctors',{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Doctor Added Successfully')
            }
        })
        
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        
        <div className='w-96 p-7 shadow-2xl rounded-lg bg-base-100'>
            <h3 className='text-xl text-center mt-2'>Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control mb-3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control mb-3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control mb-3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register("speciality")} className="select select-bordered w-full max-w-xs">
                        {
                            specialities.map(speciality => <option 
                                key={speciality._id}
                                value={speciality.name}
                                >{speciality.name}</option>)
                        }
                      
                    </select>
                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control mb-3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: 'Photo is Required'
                    })} placeholder="choose a file" className="input input-bordered" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control mt-3">
                    <button className="btn btn-accent" type='submit'>Add Doctor</button>
                </div>

            </form>
        </div>
       
    );
};

export default AddDoctor;