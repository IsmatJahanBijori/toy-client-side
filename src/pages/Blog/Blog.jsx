// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
    return (
        <div className='mb-20 font-serif text-xxl'>
            {/* The button to open modal */}
            <p><small className='text-indigo-400'>*click on the question</small></p>
            {/* q1 */}
            <div className='bg-indigo-200 p-5 rounded-md my-5 w-3/4 mx-auto'>
                <a href="#my-modal-1" className="">What is an access token and refresh token? How do they work and where should we store them on the client-side?</a>
                <div className="modal" id="my-modal-1">
                    <div className="modal-box">
                        <p className="py-4">Access Token helps authenticate user to access private data which is stored only for security purpose. Thus, unauthorized person cant access the confidential information. It has expire date. Refresh Token helps a client side application to get new access token without asking the user to login again. It has no expire date. We can store these token in local storage and browser cookies. But local storage is not as much secured as it needs. And browser cookie is better than local storage. </p>
                        <div className="modal-action">
                            <a href="#" className="btn">Done!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* q2 */}
            <div className='bg-indigo-200 p-5 rounded-md my-5 w-3/4 mx-auto'>
                <a href="#my-modal-2" className="">Compare SQL and NoSQL databases?</a>
                <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                        <p className="py-4">SQL VS NoSQL</p>
                        <div>
                            <span>1. It is vertically scalable</span>
                            <span className='mx-3 border-slate-500 border'></span>
                            <span>1. It is horizontally scalable</span>
                        </div>
                        <div>
                            <span>1. It is table based database</span>
                            <span className='mx-3 border-slate-500 border'></span>
                            <span>1. It is document, key-value, graph etc based</span>
                        </div>
                        <div>
                            <span>1. It is better for multiple row relation</span>
                            <span className='mx-3 border-slate-500 border'></span>
                            <span>1. It is better for unstructured data</span>
                        </div>
                        <div className="modal-action">
                            <a href="#" className="btn">Done!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* q3 */}
            <div className='bg-indigo-200 p-5 rounded-md my-5 w-3/4 mx-auto'>
                <a href="#my-modal-3" className="">What is express js? What is Nest JS?</a>
                <div className="modal" id="my-modal-3">
                    <div className="modal-box">
                        <p className="py-4">Express JS: It is a framework of node js that helps to create web and android application. It is used to build single page, multiple page and hybrid page. </p>
                        <p className="py-4">Nest JS: It is a framework that helps to create Node JS server-side application. </p>
                        <div className="modal-action">
                            <a href="#" className="btn">Done!</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* q4 */}
            <div className='bg-indigo-200 p-5 rounded-md my-5 w-3/4 mx-auto'>
                <a href="#my-modal-4" className="">What is MongoDB aggregate and how does it work?</a>
                <div className="modal" id="my-modal-4">
                    <div className="modal-box">
                        <p className="py-4">Aggregation refers the process of combining things. Putting some operations on a collection of items is referred as Aggregation. In MongoDB, it defines the process of summarized things. Each stage performs operation on input documents and the documents of output from a stage pass to the next page. It returns results for groups of documents. </p>
                        <div className="modal-action">
                            <a href="#" className="btn">Done!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;