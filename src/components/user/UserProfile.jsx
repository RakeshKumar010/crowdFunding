import React from "react";
import {MdDashboard} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {IoMdSettings} from 'react-icons/io'
import {RiLogoutBoxFill} from 'react-icons/ri'
const UserProfile = () => {
  return (
    <div className="flex justify-between mb-4 " style={{ minHeight: "77vh" }}>
      <ul className="lg:block hidden">
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md hover:cursor-pointer flex items-center gap-3">
          <MdDashboard/>
          DashBoard
        </li>
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md whitespace-nowrap hover:cursor-pointer flex items-center gap-3">
          <BsFillShieldLockFill/>
          Complate Kyc
        </li>
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md whitespace-nowrap hover:cursor-pointer flex items-center gap-3">
          <IoMdSettings/>
          Account Setting
        </li>
        <li className="mb-1 p-2 px-16 hover:text-teal-400 rounded-md hover:cursor-pointer flex items-center gap-3">
          <RiLogoutBoxFill/>
          Logout
        </li>
      </ul>
      <div className="w-full flex justify-between bg-gray-500/20  rounded-xl lg:mr-10 gap-9 lg:p-9 flex-wrap lg:flex-nowrap h-full ">
        <div className="bg-white lg:w-1/2 w-full rounded-lg  shadow-gray-600 flex items-center flex-col  gap-7 p-4">
          <img
            src="https://img.freepik.com/premium-photo/poor-kid-crying-cute-indian-baby-generative-ai_849906-10315.jpg?w=360"
            alt="..."
            className="rounded-md w-full shadow-gray-600 shadow-lg"
          />

          <div className=" h-full w-full ">
            <h1 className="text-teal-600 text-xl font-bold ">My Profile</h1>
            <div className="flex gap-3 m-2">
              <p>Name:</p>
              <p>Rakesh Kumar</p>
            </div>
            <div className="flex gap-3 m-2">
              <p>Email:</p>
              <p>rakeshkumar748844@gmail.com</p>
            </div>
            <div className="flex gap-3 m-2">
              <p>Phone:</p>
              <p>+91 7091506903</p>
            </div>
            <div className="flex gap-3 m-2">
              <p>Adderss:</p>
              <p> Bander Bagicha, Patna</p>
            </div>
            <div className="flex  mt-4">
              <button className="bg-teal-400 shadow-gray-600 shadow-lg py-2 px-5 text-white rounded-lg m-auto">
                Account Settings
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  gap-9">
          <div className="w-full lg:h-1/2 p-4 rounded-lg  bg-white shadow-gray-600">
            hhd
          </div>
          <div className="w-full lg:h-1/2 p-4 rounded-lg  bg-white shadow-gray-600">
            fdds
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
