import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Awadh Kishor Singh",
    image: assets.profile_pic,
    email: "info@gmail.com",
    phone: "+91 123 456 7890",
    address: {
      line1: "Xyz Colony",
      line2: "Circle, Sqaure Road",
    },
    gender: "Male",
    dob: "2000-06-24",
  });

  const [edit, setEdit] = useState(false);

  return (
    <div className="max-w-xl  p-6 bg-white rounded-lg shadow-md">

      {/* Profile Image */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
        />
        <div>
          {edit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="text-3xl font-bold border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          ) : (
            <h1 className="text-3xl font-bold">{userData.name}</h1>
          )}
        </div>
      </div>

      <hr className="mb-6" />

      {/* Contact Information */}
      <section className="mb-6">
        <h2 className="text-gray-600 uppercase text-xs tracking-wide font-semibold mb-3">
          Contact Information
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-3 items-center">
          <p className="font-medium text-gray-700">Email id:</p>
          <p className="col-span-2 text-indigo-600 underline cursor-pointer">
            {userData.email}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-3 items-center">
          <p className="font-medium text-gray-700">Phone:</p>
          <p className="col-span-2 text-indigo-600 underline cursor-pointer">
            {userData.phone}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <p className="font-medium text-gray-700">Address:</p>
          <div className="col-span-2 space-y-2">
            {edit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        line1: e.target.value,
                      },
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        line2: e.target.value,
                      },
                    })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </>
            ) : (
              <>
                <p>{userData.address.line1}</p>
                <p>{userData.address.line2}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section>
        <h2 className="text-gray-600 uppercase text-xs tracking-wide font-semibold mb-3">
          Basic Information
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-3 items-center">
          <p className="font-medium text-gray-700">Gender:</p>
          <div className="col-span-2">
            {edit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <p className="font-medium text-gray-700">Birthday:</p>
          <div className="col-span-2">
            {edit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData({ ...userData, dob: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            ) : (
              <p>
                {new Date(userData.dob).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Edit / Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => setEdit(!edit)}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition"
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
