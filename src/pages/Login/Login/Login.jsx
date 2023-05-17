// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="hero-content flex-col lg:flex-row my-10 font-serif">
            <div className="text-center lg:text-left w-1/2">
                <h1 className="text-5xl font-bold mb-5">Login</h1>
                <img src=" https://i.ibb.co/1TDXLdb/download-1.jpg" className='h-full w-full' alt="" />
            </div>
            <div className="card max-w-sm shadow-2xl  w-1/2">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control my-6">
                        <button className="btn btn-primary">Google Login</button>
                    </div>
                    <p><small>New To this site? Go to <Link to='/register'>Registration</Link></small></p>
                </div>
            </div>
        </div>

    );
};
// https://i.ibb.co/pdTvwZ2/download.jpg
export default Login;