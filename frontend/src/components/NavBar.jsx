import {React, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
function NavBar() {
   const [user,setuser] = useState(localStorage.getItem("user"))
   const [active,setActive] = useState(false);
   const navigate = useNavigate();
   const shownav = ()=>{
       setActive(!active)
   }
   const logout = () =>{
     localStorage.removeItem("user")
     navigate('/login')
   }

  return(   
 <nav className="fixed w-full border-gray-200 bg-[#D0E8FC] dark:border-gray-700 z-50 h-16">
  <div className="bg-[#D0E8FC]  flex flex-wrap items-center justify-between sm:mx-auto lg:mx-5 md:mx-5">
    <Link to={"/"} className="flex items-center">
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-black">L</span>
        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#193d3d]"> banka <i className='text-2xl'>LIK</i></span>
    </Link>
    <button onClick={shownav} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={active ? "w-full block md:block md:w-auto" : "hidden lg:block md:block"} id="navbar-solid-bg">
      <ul className="flex flex-col  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <Link path="home" to="/">
          <a href="#" className="block py-2 px-3 text-black rounded  bold md:text-blue-700 md:p-0 md:dark:text-black">Home</a>
          </Link>
        </li>
        {user ? (
        <li>
          <a href="javascript:void(0)" onClick={logout} className="block py-2 px-3 text-white rounded hover:bg-gray-700  md:border-0  md:p-0 dark:text-gray-400"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
        </li>
        ):(
         <>
            <li>
          <Link path="Register" to="/Register">
            <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-700  md:border-0  md:p-0 dark:text-gray-400"><i className="fa-solid fa-registered"></i> Register</a>
            </Link>
          </li>
          <li>
          <Link path="Login" to="/login">
            <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-700  md:border-0  md:p-0 dark:text-gray-400"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
          </Link>
          </li>
         </>)}
      </ul>
    </div>
  </div>
</nav> 
    )
  
}
export default NavBar;