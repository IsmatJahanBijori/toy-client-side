// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { logIn, googleLogin, loading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    if (loading) {
        return <progress className="progress progress-primary w-56" value="100" max="100"></progress>
    }
    const handleSignIn = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // email, password

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
        // event.target.reset()

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <form onClick={handleSignIn} className="hero-content flex-col lg:flex-row my-10 font-serif">
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
                            <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control my-6">
                            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
                        </div>
                        <p><small>New To this site? Go to <Link to='/register'>Registration</Link></small></p>
                    </div>
                </div>
                <div className='p-5'>
                    <p className='bg-red-700'>{error}</p>
                </div>
            </form>
            {/*<div className='p-5'>
        <p className='bg-red-700'>{error}</p>
    </div>*/}
        </div>

    );
};
// https://i.ibb.co/pdTvwZ2/download.jpg
export default Login;