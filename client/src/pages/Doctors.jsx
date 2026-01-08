import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext"

const Doctors = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  // derive filtered doctors
  const filteredDoctors = speciality
    ? doctors.filter(doc => doc.speciality === speciality)
    : doctors

  const handleClick = (spec) => {
    if (speciality === spec) {
      navigate('/doctors') // deselect
    } else {
      navigate(`/doctors/${spec}`)
    }
  }

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ]

  return (
    <>
      <p>Browse through the doctors specialist</p>

      <div className="flex mt-8 mb-8 gap-8">
        <div>
          {specialities.map(spec => (
            <p
              key={spec}
              onClick={() => handleClick(spec)}
              className={`border p-2 m-1 rounded cursor-pointer
                ${
                  speciality === spec
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredDoctors.map(item => (
            <DoctorCard
              key={item._id}
              item={item}
              onClick={() => navigate(`/my-appointments/${item._id}`)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const DoctorCard = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className="border rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-40 object-cover rounded-md mb-3 bg-gray-300"
    />
    <div className="text-left">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <p className="text-sm text-green-500 font-bold">Available</p>
      </div>
      <p className="font-medium">{item.name}</p>
      <p className="text-sm text-gray-500">{item.speciality}</p>
    </div>
  </div>
)

export default Doctors
