import React from "react";
import { RxDashboard } from "react-icons/rx";

import {
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { SlSupport } from "react-icons/sl";
import { FaUserInjured, FaCalendarPlus, FaMoneyCheckAlt } from "react-icons/fa";
import PatientGrid from "./Main";

const Index = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-[1240px] flex bg-[#312E81]  h-full mx-auto ltr">
      <div className="w-1/6 max-h-screen  px-4 bg-[#312E81] text-[#f5f5f5] ">
        <div className="  h-3/6  pl-2 pb-12  flex flex-col justify-between border-b border-[#939393]">
          <div className="py-3 px-4 ">
            <h1 className="text-2xl font-bold font-sans">LOGO</h1>
          </div>
          <div className="flex-col h-2/4 justify-between flex  ">
            <div className=" flex rounded py-2 px-3">
              <div className="mr-4">
                <RxDashboard size={25} />
              </div>
              <div>DashBoard</div>
            </div>
            <div className=" flex rounded py-2 px-3">
              <div className="mr-4">
                <FaUserInjured size={25} />
              </div>

              <div>Patient</div>
            </div>
            <div className=" flex rounded py-2 px-3">
              <div className="mr-4">
                <FaCalendarPlus size={25} />
              </div>
              <div>Appointment</div>
            </div>
            <div className="flex bg-[#9795cd] border rounded py-2 px-3">
              <div className="mr-4">
                <FaMoneyCheckAlt size={25} />
              </div>
              <div>Billing</div>
            </div>
          </div>
        </div>
        <div className="h-3/6 flex flex-col-reverse ">
          <div className=" flex rounded py-2 px-3">
            <div className="mr-4">
              <AiOutlineSetting size={25} />
            </div>

            <div>Setting</div>
          </div>
          <div className=" flex rounded py-2 px-3">
            <div className="mr-4">
              <SlSupport size={25} />
            </div>

            <div>Support</div>
          </div>
        </div>
      </div>
      <div className="w-5/6 min-h-screen  rouned-s-lg ltr">
        <div className="bg-[#f5f5f5] h-full border rounded-s-xl px-5">
          <div className="h-[12%] items-center flex  text-white flex">
            <div className="w-[60%]  flex items-center ">
              <span className="text-[#525252] mr-2 absolute mt-1 ml-2">
                <AiOutlineSearch size={18} />
              </span>
              <input
                type="text"
                name=""
                className="w-full py-2 px-4 text-[#525252] placeholder:text-[#525252] bg-[#ffffff] rounded-full  "
                placeholder="    Search patients"
                disabled
              />
            </div>
            <div className=" flex w-[40%] justify-between px-2 ">
              <button
                className=" px-4 py-2 bg-[#312e81] rounded-full "
                disabled
              >
                Make an Appointment
              </button>
              <button
                className=" px-4 py-2 bg-[#312e81] rounded-full "
                disabled
              >
                Add Patient
              </button>
              <button
                className=" px-[0.4em] bg-[#312e81] rounded-full "
                disabled
              >
                <AiOutlineBell size={25} />
              </button>
            </div>
          </div>
          <div className="h-[10%] ">
            <div className="flex justify-between py-5 p-2 ">
              <h1 className="text-xl font-bold">Billing overview</h1>
              <div className="bg-[#cbe3ff] flex items-center border rounded ">
                <div className="border-4 bg-[#312e81] h-full p-2">
                  <AiOutlineLeft color="white" />
                </div>
                <h1 className=" font-semibold px-6">{formattedDate}</h1>
                <div className="border-4 bg-[#312e81] h-full p-2">
                  <AiOutlineRight color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[77%]  p-2   ">
            <PatientGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
