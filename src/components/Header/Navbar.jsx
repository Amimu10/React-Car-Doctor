
import React, { useContext } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
const {user, logOut} = useContext(AuthContext); 


const handleLogOut = () => {
  logOut()
  .then(result => {
    console.log(result.user);
  })
  .catch(error => {
    console.log(error.message);
  })
}
    const navItems = <>
     <li><Link to="/">Home</Link></li>
     <li><a href="#about" >About</a></li>
     <li><a href="#service">Service</a></li>
   {
    user?.email ?   <>
         <li><Link to="/bookings">My Bookings</Link></li>

    <li><Link to="/login"><button onClick={handleLogOut}>Logout</button></Link></li> 
    </>
    : 
    <li><Link to="/login">Login</Link></li> 
   }



    </>
    return (
   <div className="my-8">
   <div className="navbar container mx-auto h-24 ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[18px] font-semibold">
            {navItems}
            </ul>
          </div>
          <Link href="/">
          <img src="/assets/logo.svg"/> 
          </Link> 
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
      <div className="flex items-center space-x-2 text-[20px] mr-6">
      <MdOutlineShoppingBag />
      <IoIosSearch />
      </div>
          <a className="btn btn-outline hover:bg-[#FF3811] text-[#FF3811] text-[18px] hover:text-white px-5">Appointment</a>
        </div>
      </div>
   </div>
    );
};

export default Navbar;