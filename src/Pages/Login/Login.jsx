import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIn, forgetPassword} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) =>{
        // console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success("User Login Successfully")
            navigate(from, {replace : true})
        })
        .catch(error=>{
            console.log(error);
            setLoginError(error.message)
        })
    }

    const handleForgetPassword = ()=>{
        if(!userEmail){
            toast.error("Please Enter Your Email Address");
            return;
        }

        forgetPassword(userEmail)
        .then(()=>{
            toast.success("Please Check Your email and reset Your Password.")
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-98 p-3 shadow-2xl rounded-lg'>
                <h3 className='text-xl text-center mt-2'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} onBlur = {(e) => setUserEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required:"Password s Required"
                        })} type="password" placeholder="password" className="input input-bordered" required />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-accent" type='submit'>Login</button>
                    </div>

                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }

                    <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                </form>

                <label className="label justify-center pt-0 pb-6">
                    <button onClick={handleForgetPassword} className="label-text-alt link link-hover text-base font-semibold">Forgot password?</button>
                </label>
            </div>
        </div>
    );
};

export default Login;