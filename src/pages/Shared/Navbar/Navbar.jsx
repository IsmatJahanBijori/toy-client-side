// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import './Navbar.css'

// Home, All Toys, My Toys, Add A Toy, Blogs
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const navigate=useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="navbar w-full mx-auto bg-slate-200 rounded-md">
            <div className="navbar-start md:px-64">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <img src="https://i.ibb.co/ctkd2qN/art.png" className='h-10' alt="" />
                    </label>
                    {/* small device*/}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-3 shadow rounded-box w-52 lg:hidden bg-slate-300 font-serif text-xl">
                        <Link className='text-black' to='/'>Home</Link>
                        <Link to='/toys'>All Toys</Link>
                        {/*
                            user ? <div>
                                <Link to='/myToys'>My Toys</Link>
                                <Link to="/addToy">Add A Toy</Link>
                            </div> : ''*/}
                        <Link className='mr-5' to='/myToys'>My Toys</Link>
                        <Link className='mr-5' to="/addToy">Add A Toy</Link>
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
                    <Link className='mr-5' to='/toys'>All Toys</Link>
                    <Link className='mr-5' to='/myToys'>My Toys</Link>
                    <Link className='mr-5' to="/addToy">Add A Toy</Link>
                    <Link className='mr-5' to="/blog">Blog</Link>
                </ul>
            </div>
            <div>
                {
                    user ?
                        <div className='flex flex-row'>
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img src={user.photoURL} className='h-10 rounded-lg mr-3' />
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

// https://i.ibb.co/PTmWF3d/profile.jpg
