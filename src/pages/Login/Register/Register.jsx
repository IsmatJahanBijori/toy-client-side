// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero-content flex-col lg:flex-row my-10 font-serif">
            <div className="text-center lg:text-left w-1/2">
                <h1 className="text-5xl font-bold mb-5">Registration</h1>
                <img src="https://i.ibb.co/pdTvwZ2/download.jpg" className='h-full w-full' alt="" />
            </div>
            <div className="card max-w-sm shadow-2xl  w-1/2">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="photo" name='photo' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                    <p><small>Have a account? Go to <Link to='/login'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;