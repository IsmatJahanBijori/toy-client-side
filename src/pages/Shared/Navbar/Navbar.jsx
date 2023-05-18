// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import './Navbar.css'

// Home, All Toys, My Toys, Add A Toy, Blogs
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="navbar bg-slate-200 rounded-md" style={{ overflowX: 'hidden' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <img src="https://i.ibb.co/ctkd2qN/art.png" className='h-10' alt="" />
                    </label>
                    {/* small device*/}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow rounded-box w-52 lg:hidden bg-slate-300 font-serif text-xxl">
                        <Link className='text-black' to='/'>Home</Link>
                        <Link to='allToys'>All Toys</Link>
                        {
                            user ? <div>
                                <Link to='/myToys'>My Toys</Link>
                                <Link to="/addToy">Add A Toy</Link>
                            </div> : ''
                        }
                        <Link to="/blog">Blog</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </div>
                <h1 className="btn btn-ghost normal-case font-serif text-2xl">ToyJoy</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* large device*/}
                <ul className="menu menu-horizontal px-1 font-serif text-2xl">
                    <Link className='mr-5' to='/'>Home</Link>
                    <Link className='mr-5' to='allToys'>All Toys</Link>
                    {
                        user ? <div>
                            <Link className='mr-5' to='/myToys'>My Toys</Link>
                            <Link className='mr-5' to="/addToy">Add A Toy</Link>
                        </div> : ''
                    }
                    <Link className='mr-5' to="/blog">Blog</Link>
                </ul>
            </div>
            <div>
                {
                    user ?
                        <div className='flex flex-row'>
                            <div>
                                <img src="https://i.ibb.co/PTmWF3d/profile.jpg" className='h-10 rounded-lg mr-3' />
                            </div>
                            <div>
                                <button onClick={handleLogout} className='btn'>Logout</button>
                            </div>
                        </div>
                        :
                        <div><Link to='/login'><button className='btn'>Login</button></Link></div>
                }
            </div>
        </div>
    );
};


export default Navbar;
{/*<div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/PTmWF3d/profile.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/logout'>Logout</Link>
                        </ul>
            </div>*/}