import React from "react";

const Banner = () => {
  return (
    <section className="w-full ">
      <div
        className="w-full md:container mx-auto px-4 bg-local bg-cover bg-center h-[90vh]	bg-serviceBackImage	"
      >
        <div className="grid grid-cols-12 gap-4 h-[100%] ">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center  ml-[195px]">
            <h1 className="text-[58px] font-extrabold leading-[80px]   font-Montserrat text-white  mt-[100px]  ">
              Meet the Best Hospital
            </h1>
            <p className="text-[20px] font-medium leading-[30px] font-Montserrat text-white mt-8 	w-3/5	text-left">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex mt-12 justify-between  items-center w-full flex-wrap ">
              <button className="bg-[#007E85]  pt-[8px] pb-[8px] pl-[1.5rem] pr-[2rem] px-4 rounded-full !text-white !font-Montserrat font-bold text-[14px] leading-[22px]">
                Get Quote Now
              </button>

              <button className="pt-[8px] pb-[8px] px-4 pl-[2rem] pr-[1.5rem] mr-[40%]  rounded-full !text-white !font-Montserrat font-bold text-[14px] leading-[22px] border-[2px] border-[#007E85]">
                <span> Learn More</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center  ">
            <section className="w-full h-full py-[2rem] px-[12rem] ">
              <div className=" w-full h-full ">
                {" "}
                <form className="w-full  bg-white shadow-md  py-[2.5rem] px-[2rem]  rounded-md">
                  <div className="font-Montserrat text-[24px] text-center font-bold leading-[32px]">
                    Book Appointment
                  </div>
                  <div className="mb-3 mt-6">
                    <label
                      className="block text-gray-700  font-semibold text-[14px] leading-[24px] mb-2 font-Montserrat"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[14px] text-gray-400 leading-[28px] focus:outline-none focus:shadow-outline font-Montserrat"
                      id="fullname"
                      type="text"
                      placeholder="Full Name*"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="block text-gray-700 font-semibold text-[14px] leading-[24px] mb-2 font-Montserrat"
                      htmlFor="emailaddress"
                    >
                      Email address *
                    </label>
                    <input
                      className="shadow appearance-none border  rounded w-full py-2 px-3 text-[14px] text-gray-400 leading-[28px] focus:outline-none focus:shadow-outline font-Montserrat"
                      id="emailaddress"
                      type="email"
                      placeholder="example@gmail.com"
                    />
                  
                  </div>
                  <div className="mb-3">
                    <label
                      className="block text-gray-700 font-semibold text-[14px] leading-[24px]  mb-2 font-Montserrat"
                      htmlFor="departement"
                    >
                      Departement *
                    </label>
                    <select
                      className="font-Montserrat block appearance-none w-full bg-gray-200 border border-gray-200 text-[14px] text-gray-400 leading-[28px] py-2 px-3 rounded  focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Orthology</option>
                      <option>Cardiology</option>
                      <option>neurosurgeon</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <label
                      className="block text-gray-700 font-semibold text-[14px] leading-[24px]  mb-2 font-Montserrat"
                      htmlFor="time"
                    >
                      Time *
                    </label>
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-[14px] text-gray-400 leading-[28px] py-2 px-3 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state font-Montserrat"
                    >
                      <option>4:00 Available</option>
                      <option>6:00 Available</option>
                      <option>8:00 Available</option>
                    </select>
                  </div>
                  <div className="w-full border-[3px] ">
                    <button
                      className="w-full bg-primary hover:bg-primary text-white font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline font-Montserrat"
                      type="button"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
