import React from "react";
import Hero1 from "../Images/Hero1.jpg";
import Hero2 from "../Images/Hero2.jpg";
import Hero3 from "../Images/Hero3.jpg";
import Hero4 from "../Images/Hero4.jpg";
import Hero5 from "../Images/Hero5.jpg";
import Hero6 from "../Images/Hero6.jpg";
import Hero7 from "../Images/Hero7.jpg";
import Hero8 from "../Images/Hero8.jpg";

const Hero = () => {
  return (
    <section className=" bg-gray-900  border-b-[6px] border-green-400 ">
      <div className="grid max-w-screen-2xl px-10 md:px-10  mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div className="mr-auto place-self-start lg:col-span-7  font-semibold">
          <h1 className="max-w-2xl py-20 mb-4 font-semibold text-2xl md:font-bold tracking-tight leading-none  md:text-4xl xl:text-5xl 2xl:text-6xl text-green-500">
            Affordable, Reliable And Quality
            <span className="text-gray-300"> Network</span> <br />
            <h1 className="text-gray-300 mb-6">
              Equipments For Network Managers.
            </h1>
            <p className="max-w-2xl text-base font-normal -mb-16 font-light text-gray-500  md:text-lg lg:text-xl ">
              Network<span className="text-green-600">Tigers </span>supports
              network managers with quality switches, routers, firewalls and
              PDU's.
            </p>{" "}
          </h1>
          <a
            href="#_"
            className="relative inline-flex items-center px-7 pl-5 py-3 overflow-hidden text-lg font-medium text-green-600 border-2 border-green-600 rounded-lg hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5 ml-4 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="relative text-white">Explore Now</span>
          </a>
        </div>
        <div className="hidden  ml-10 mx-3 xl:mx-0 sm:mx-3  lg:mx-3 grid-cols-12 lg:mt-0  flex  justify-end  lg:col-span-5 lg:flex">
          <div className="-mt-6">
            <div className="w-[14rem] flex  my-10 h-[19rem] mb-3 rounded-lg  border-gray-100 border-[3px]">
              <img src={Hero4} className=""></img>
            </div>
            <div className="w-[14rem] h-[14rem] flex rounded-lg  border-gray-100 border-[3px]">
              <img src={Hero2} className=""></img>
            </div>
          </div>
          <div className="ml-3">
            <div className="w-[14rem] h-[9rem] -mt-[3.7rem] flex mb-3 rounded-lg border-t-0 rounded-t-none border-gray-100 border-[3px]">
              <img src={Hero3} className=""></img>
            </div>
            <div className="w-[14rem] h-[16rem] flex mb-3 rounded-lg  border-gray-100 border-[3px]">
              {" "}
              <img src={Hero7} className=""></img>
            </div>
            <div className="w-[14rem] h-[14rem] flex rounded-lg border-b-0 rounded-b-none border-gray-100 border-[3px]">
              {" "}
              <img src={Hero5} className=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
