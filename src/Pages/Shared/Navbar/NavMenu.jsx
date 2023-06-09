import { Link, Navigate, useNavigate } from "react-router-dom";
import "./NavMenu.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const NavMenu = () => {
    const navigator = useNavigate;
    const {user, logOut} = useContext(AuthContext);
    const handleUserLogOut = () => {
        logOut()
        .then(() => {
        <Navigate to="/login"></Navigate>
        })
        .catch(error => {console.error(error)
        });
    }
    return (
        <>
            <div className="navbar bg-base-100 md:px-10 sm:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <img className="brand-logo" src="logo.png" />
                    <a className="btn btn-ghost normal-case text-xl">Mos Media</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li>
                       <Link to={"/instructors"}>Instructors</Link>
                    </li>
                    <li><Link to={"/classes"}>Classes</Link></li>
                    </ul>
                </div>

                { user ?
                <div className="navbar-end">
                <div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content p-2">
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    </ul>
                </div>
                    <div className="dropdown dropdown-end user-profile">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content p-2">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content p-2">
                            <button className="login-btn"><Link to={"/login"}>Login</Link></button>
                        </ul>
                    </ul>
                    </div>
                    }
                    </div>
        </>
    );
};

export default NavMenu;