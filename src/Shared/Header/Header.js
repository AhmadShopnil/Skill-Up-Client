import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, IconName } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState("Light")

    const handleToggle = () => {


        if (toggle == "Light") {
            setToggle("Dark")
        }
        else {
            setToggle("Light")
        }
    }


    const handleLogOut = () => {
        logOut()
            .then(result => {
                alert('Log Out Success')

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <FaBookOpen className='ml-20'></FaBookOpen>
                            <a className="btn btn-ghost normal-case text-lg ">Skill Up</a>


                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/faq'>Faq </Link></li>
                        </ul>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <FaBookOpen className=''></FaBookOpen>
                    <a className="btn btn-ghost normal-case text-lg  mr-9">Skill Up</a>
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/faq'>Faq </Link></li>

                    </ul>

                </div>
                <div className="navbar-end">
                    <button onClick={handleToggle} className="btn btn-active btn-accent ">{toggle}</button>
                    {
                        user?.uid ?
                            <>
                                <div className="tooltip tooltip-bottom " data-tip={user?.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Log Out</button>
                            </>
                            :
                            <>
                                <Link className="btn ml-1" to='/login'>Login</Link>
                                <Link className="btn ml-1" to='/signup'>Sign Up</Link>
                            </>
                    }
                </div>
            </div>


        </div>
    );
};

export default Header;