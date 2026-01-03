import React from 'react'
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
            <button onClick={()=>Navigate('/login')} className='bg-blue-600 text-white px-8 py-2 rounded-full font-light text-bold hover:cursor-pointer'>Create Account</button>
        </div>
    </header>
  )
}

export default NavBar