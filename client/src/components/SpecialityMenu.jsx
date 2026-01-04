import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-3">
        Find By Speciality
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-xl mb-8">
        Simply browse through our extensive list of trusted doctors,
        schedule your appointment hassle-free.
      </p>

      {/* Speciality List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center p-4 rounded-xl hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-20 h-20 object-contain mb-3"
            />
            <p className="text-sm font-medium">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default SpecialityMenu
