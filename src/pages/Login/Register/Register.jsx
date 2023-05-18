// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const { signUp, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    if (loading) {
        return <progress className="progress progress-primary w-56" value="100" max="100"></progress>
    }
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, photo, email, password)

        signUp(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })

        // event.target.reset()
    }
    return (
        <form onSubmit={handleSignUp} className="hero-content flex-col lg:flex-row-reverse my-10 font-serif">
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
                        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Enter your photo" name='photo' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                    <p><small>Have a account? Go to <Link to='/login'>Login</Link></small></p>
                </div>
            </div>
        </form>
    );
};

export default Register;