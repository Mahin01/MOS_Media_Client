import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import "./NavMenu.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const NavMenu = () => {
    const navigator = useNavigate;
    const {user, logOut} = useContext(AuthContext);
    const handleUserLogOut = () => {
        logOut()
        .then(() => {
        <Link to="/login"></Link>
        })
        .catch(error => {console.error(error)
        });
    }
    return (
        <>
            <div className="navbar bg-inherit md:px-10 sm:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    </div>
                    <a href="/">
                        <img className="brand-logo" src="logo.png" />
                    </a>
                        <p className="ps-2 normal-case text-xl font-bold">Mos Media</p>
                    <ul className="menu menu-horizontal px-2 text-gray-400">
                        <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : "")} to={"/classes"}>All Courses </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-center lg:flex">
                    <form className="m-0 p-0">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block max-w-full mt-5 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Courses" required />
                            <button type="submit" className="text-white absolute end-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>

                { user ?
                <div className="navbar-end">
                <div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content">
                        <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : "")} to={"/dashboard"}>Dashboard</NavLink></li>
                    </ul>
                </div>
                    <div className="dropdown dropdown-end user-profile">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><button onClick={handleUserLogOut}>Logout</button></li>
                        </ul>
                            </div>
                    </div>
                    :
                    <div className="navbar-end">
                        <ul className="menu menu-sm dropdown-content">
                            <li className="menu menu-sm dropdown-content">
                                <button className="login-btn btn-sm"><NavLink to={"/login"}>Log in</NavLink></button>
                            </li>
                        </ul>
                        <ul className="menu menu-sm">
                            <li className="menu menu-sm">
                                <button className="signup-btn btn-sm"><NavLink to={"/register"}>Sign up</NavLink></button>
                            </li>
                        </ul>
                    </div>
                    }
                    </div>
        </>
    );
};

export default NavMenu;