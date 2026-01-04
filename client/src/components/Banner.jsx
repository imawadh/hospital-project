import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const Navigate = useNavigate();

  return (
    <div className="text-white bg-blue-500 flex flex-col md:flex-row items-center justify-between px-4 md:px-10  rounded-4xl py-4 lg:py-0 max-h-80">

  {/* Left Side */}
  <section className="w-full md:w-1/2 text-center md:text-left">
    <p className="font-bold text-2xl md:text-3xl leading-snug">
      Book Appointments <br /> 100+ with Trusted Doctors
    </p>

      <button onClick={()=>{Navigate("/login"); scrollTo(0,0)}} className="bg-white text-black px-5 py-2 rounded-3xl inline-flex items-center gap-2 hover:cursor-pointer mt-8">
        <span>Create Account</span>
      </button>
    
  </section>

  {/* Right Side */}
  <section className="w-full md:w-1/2 hidden md:block  mt-8 md:mt-0">
    <img
      src={assets.appointment_img}
      alt="Header"
      className="max-w-xs md:max-w-72 h-auto"
    />
  </section>

</div>


  )
}

export default Banner