import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const Navigate = useNavigate();

  return (
    <div className="text-white bg-blue-500 flex flex-col md:flex-row items-center justify-between px-4 md:px-10  rounded-4xl py-4 lg:py-0">

  {/* Left Side */}
  <section className="w-full md:w-1/2 text-center md:text-left">
    <p className="font-bold text-2xl md:text-3xl leading-snug">
      Book Appointments <br />with Trusted Doctors
    </p>

    <div className='lg:flex items-center justify-center gap-4 px-3 py-3 mb-3 hidden'>
      <img 
        src={assets.group_profiles}
        alt=""
        className="w-20"
      />

      <p className="text-sm ">
        Simply browse through our extensive list of trusted doctors,
        schedule your appointments hassle-free.
      </p>
    </div>

    <a href="#speciality">
      <button className="bg-white text-black px-5 py-2 rounded-3xl inline-flex items-center gap-2 hover:cursor-pointer">
        <span>Book Appointments</span>
        <img
          src={assets.arrow_icon}
          alt="arrow"
          className="w-4 h-4"
        />
      </button>
    </a>


      
   
  </section>

  {/* Right Side */}
  <section className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
    <img
      src={assets.header_img}
      alt="Header"
      className="max-w-xs md:max-w-full h-auto"
    />
  </section>

</div>


  )
}

export default Header