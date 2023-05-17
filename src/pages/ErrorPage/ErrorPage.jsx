// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="https://i.ibb.co/vcn60jZ/error.webp" className="absolute h-full w-full object-cover" />
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        Oh no chuckles! You got an error!
                    </h1>
                    <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                        404
                    </p>
                    <Link to='/'>
                        <button className='btn-error p-5 rounded-lg text-3xl font-bold text-white leading-tight mt-4'>Back To Home Page</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;