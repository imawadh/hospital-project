import { useState } from "react";
import React, { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import { assets, doctors } from '../assets/assets_frontend/assets';


const Appointments = () => {
  const {doctors} = useContext(AppContext);
  const { docId } = useParams();
  console.log(docId);

  // Find the deatils of exact doctor .... 
  const doctor = doctors.find(doc => doc._id === docId)

  return (
    <div>
        <DoctorDetails doctor={doctor} />
        <SelectScheduleSection/>
        <RealetdDoctors speciality={doctor.speciality}/>
    </div>
  )
}
const DoctorDetails = ({ doctor }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-md">
      
      {/* Doctor Image */}
      <div className="shrink-0">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full  md:w-56 h-48 object-cover bg-blue-500 rounded-2xl"
        />
      </div>

      {/* Doctor Info */}
      <div className="flex flex-col gap-3 border rounded-xl p-2 border-gray-400">
        
        <h3 className="text-2xl font-semibold text-gray-800">
          {doctor.name}
        </h3>

        <p className="text-gray-600">
          {doctor.degree} · {doctor.speciality}
          <span className="ml-2 text-sm text-gray-500">
            ({doctor.experience})
          </span>
        </p>

        {/* About Section */}
        <div className="mt-3">
          <h4 className="flex items-center gap-2 font-medium text-gray-700">
            About
            <img
              src={assets.info_icon}
              alt="info"
              className="w-4 h-4"
            />
          </h4>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {doctor.about}
          </p>
        </div>

      </div>
    </div>
  );
};


const SelectScheduleSection = () => {

  const dayCalendar = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  const generateDays = () => {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      days.push({
        date: date.getDate(),
        day: dayCalendar[date.getDay()],
        fullDate: date.toISOString().split("T")[0],
      });
    }
    return days;
  };

  const days = generateDays();

  const timeSlots = [
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
  ];

  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

  return (
    <div className="ms-0 lg:ms-70  mt-8 mb-8">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Booking Slots
      </h3>

      {/* Days */}
        <div className="flex flex-wrap gap-3 pb-2">
          {days.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(item)}
              className={`px-4 py-3 rounded-full border text-sm font-medium 
                ${
                  selectedDay.fullDate === item.fullDate
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
            >
              <div>{item.day}</div>
              <div className="text-xs">{item.date}</div>
            </button>
          ))}
        </div>


      {/* Time Slots */}
      <div className="mt-5 flex flex-wrap gap-3">
        {timeSlots.map((time, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(time)}
            className={`px-4 py-2 rounded-full text-sm border
              ${
                selectedTime === time
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() =>
          console.log(
            "Booked:",
            selectedDay.fullDate,
            selectedTime
          )
        }
        className="mt-6 w-full md:w-64 bg-indigo-500 text-white py-3 rounded-full font-medium hover:bg-indigo-600 transition"
      >
        Book an appointment
      </button>

    </div>
  );
};

const RealetdDoctors = ({speciality}) =>{
  const navigate = useNavigate();
  console.log(speciality);
  return (
    <>
      <div className="font-bold text-center text-4xl m-5">Related Doctors</div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          doctors
            .filter(item => item.speciality === speciality)
            .map((item) => (
              <DoctorCard
                key={item._id}
                onClick={() => {
                  navigate(`/my-appointments/${item._id}`);
                  window.scrollTo(0, 0);
                }}
                item={item}
              />
          ))
        }
      </div>
    </>
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





export default Appointments