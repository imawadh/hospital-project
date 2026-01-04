import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-semibold mb-2">Top Doctors to Book</h1>
      <p className="text-gray-600 mb-6">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {doctors.slice(0, 8).map((item, index) => (
          <DoctorCard
            onClick={() => navigate(`/my-appointments/${item._id}`)}
            item={item}
            key={index}
          />
        ))}
      </div>

      <button
        onClick={() => {navigate('/doctors'); scrollTo(0,0)} }
        className="text-center mt-4 m-2 p-1 px-2 hover:cursor-pointer rounded-2xl bg-gray-300"
      >
        See all Doctors
      </button>
    </div>
  )
}

const DoctorCard = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-xl p-4 text-center hover:shadow-lg transition hover:cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md mb-3 bg-gray-300"
      />
      <div className="text-left">
        <div className="flex items-center gap-2 mb-1">
          <p className="w-2 h-2 rounded-full bg-green-500"></p>
          <p className="text-sm text-green-500 font-bold">Available</p>
        </div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">{item.speciality}</p>
      </div>
    </div>
  )
}

export default TopDoctors
