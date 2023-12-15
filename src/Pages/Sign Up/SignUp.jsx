import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (data) =>{
        // console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success("User created Successfully")
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email)
            })
            .catch(error=>console.log(err))
        })
        .catch(error=>{
            console.log(error);
            setSignUpError(error.message)
        })
    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('https://doctor-portal-server-production-bfcb.up.railway.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/login');
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-98 p-3 shadow-2xl rounded-lg'>
                <h3 className='text-xl text-center mt-2'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required:"Password s Required",
                            minLength:{value:6, message:"password must be 6 characters long"},
                            pattern:{value: /(?=.*?[A-Z])(?=.*?[!@$%&*])(?=.*?[0-9])/, message:"password must have uppercase, special character and number"}
                        })} type="password" placeholder="password" className="input input-bordered" required />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-accent">Sign Up</button>
                    </div>

                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }

                    <p>Already Have an Account? <Link className='text-secondary' to='/login'>Please Sign In</Link></p>
                    <div className="divider">OR</div>

                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>    
    );
};

export default SignUp;