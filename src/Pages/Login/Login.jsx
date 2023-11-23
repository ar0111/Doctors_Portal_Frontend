import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-98 p-3 shadow-2xl rounded-lg'>
                <h3 className='text-xl text-center mt-2'>Login</h3>
                <form className="card-body">
                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-accent">Login</button>
                    </div>

                    <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                    <div className="divider">OR</div>

                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;