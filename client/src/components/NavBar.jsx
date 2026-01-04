import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const Navigate = useNavigate();

    const links = [
        { name: "Home", path: "/" },
        { name: "All Doctors", path: "/doctors" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const [token,setToken] = useState(true);

  return (
    <header className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>

        <img className='w-44 cursor-pointer' src={assets.logo} onClick={()=>Navigate('/')}  />
        
        <ul className="hidden md:flex gap-5 font-medium">
            {links.map(link => (
                <li key={link.path} className="py-1">
                    <NavLink to={link.path} className={({ isActive }) => isActive ? "py-1 border-b-2 border-b-blue-500 " : "text-gray-600"}>{link.name}</NavLink>
                </li>
            ))}
        </ul>

        <div className='flex items-center justify-center'>
            {
                token 
                ? <div className='flex items-center justify-center gap-2 cursor-pointer group relative'>
                    <img className='w-10 rounded-full' src={assets.profile_pic} alt="" />
                        <div className='absolute top-0 right-0 pt-11 text-base hidden group-hover:block'>
                        <div className='flex flex-col whitespace-nowrap gap-2 bg-gray-200 p-2 rounded-2xl'>
                            <p onClick={()=>{Navigate('/profile')}} className='hover:cursor-pointer hover:bg-amber-100 p-1 rounded'>My Profile</p>
                            <p onClick={()=>{Navigate('/my-appointments')}} className='hover:cursor-pointer hover:bg-amber-100 p-1 rounded'>My Appointments </p>
                            <p onClick={()=>setToken(false)}className='hover:cursor-pointer hover:bg-amber-100 p-1 rounded'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={()=>Navigate('/login')} className='bg-blue-600 text-white px-8 py-2 rounded-full font-light text-bold hover:cursor-pointer'>Create Account</button>
            }
        </div>
    </header>
  )
}

export default NavBar