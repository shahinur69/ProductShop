import { Link } from "react-router-dom";
import logo from "../../images/foodlogo.avif";
//import { getAuth, signOut } from "firebase/auth";
//import { useState } from "react";
const Navbar = () => {
    /* const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    const [success, setSuccess] = useState('');
    const [logoutError, setLogoutError] = useState('');
    const handleLogOut = () => {
        setSuccess('');
        setLogoutError('');
        signOut(auth)
          .then(() =>{
            setSuccess("Logged out successfully!");
            setUser(null);
        })
        .catch((error) => {
            console.error(error);
            setLogoutError(error.message);
        });
    }; */
    const navLinks = <>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/order">Order</Link></li>
        <li><Link to = "/contact">Contact Us</Link></li>
        <li><Link to = "/register">Register</Link></li>
        <li><Link to = "/login">Log In</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <img className = "w-24 rounded-full" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://www.othoba.com/food-grocery?srsltid=AfmBOopqrvZDS92n9RA9Fco3ApH1_12jD3EggA_zdnh2DE0H2pbxG5YA" 
                    className="btn btn-warning text-lg font-bold">Explore!
                </a>
                {/* {user ? (
                    <>
                       <span>Welcome, {user.email}</span>
                       <button onClick={handleLogOut}>Log Out</button>
                    </>
                ): ( 
                    <Link to="/login" className="btn">Log In</Link>
                )} */}
            </div>
           {/*  {success && (
                <p className="text-green-500 text-center mt-2">{success}</p>
            )}
             {logoutError && (
                <p className="text-red-500 text-center mt-2">{logoutError}</p>
            )} */}
        </div>
    );
};

export default Navbar;