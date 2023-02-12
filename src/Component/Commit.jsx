import React from "react";

const Commit = () => {
  return (
    <section className="max-w-screen-4xl -mt-10 px-10 2xl:px-56 bg-gray-100 mx-auto ">
      <div className=" relative mr-auto place-self-start  lg:col-span-7  font-semibold">
        <div className="  absolute bg-gray-300 w-40 h-40 border-green-900 opacity-50" />
        <div class="absolute mt-10 left-3/4  xl:left-[60%] -ml-0.5 w-0.5 h-[40rem] bg-green-500"></div>
        <h1 className="text-gray-500 pt-20 px-5  text-black">
          Shipping Policy
        </h1>
        <div className="-mt-[4.5rem]  ">
          <h1 className=" py-20 px-5 mb-4 font-semibold text-2xl md:font-bold  md:text-2xl xl:text-3xl 2xl:text-4xl drop-shadow-xl text-gray-900">
            Network<span className="text-green-600">Tigers</span> Service
            Commitments
            <p className="max-w-2xl mt-8 md:mt-16 text-base font-normal -mb-16 font-light text-gray-600  md:text-lg lg:text-xl ">
              Connect with Network
              <span className="text-green-600">Tigers </span> for in stock,
              quality network equipment with a fast deliver Network.
            </p>{" "}
          </h1>
        </div>
        <a href="#_" className="relative inline-block text-base mx-5 group">
          <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-green-600 transition-colors duration-300 ease-out border-2 border-green-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-green-100" />
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-600 group-hover:-rotate-180 ease" />
            <span className="relative">Know More</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-800 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          />
        </a>
      </div>
      {/* <section className="md:py-10 grid-cols-12 lg:mt-0  flex  justify-start  lg:col-span-5 lg:flex"> */}
        <div className="md:py-10 grid-cols-12 lg:mt-0  flex  justify-start  lg:col-span-5 lg:flex">
          <div className="bg-gray-200   max-w-xs md:p-5 border-b-[4px] border-green-400">
            <h1 className="text-black text-lg mb-2 font-semibold">
              Commitment is what transforms a promise into a reality.
            </h1>
            <ui className="text-gray-700 ">
              Connect with NetworkTigers for in stock, fast delivery, quality
              network equipment.
            </ui>
          </div>
          {/* --------------------1st-------------------------------------------- */}
          <div className=" bg-green-500 text-center w-[14rem] max-w-xs md:p-5 border-b-[4px] border-green-400">
            <h1 className="text-white text-lg mb-2 font-semibold">
              Over-Night Shipping options
            </h1>
            <ui className="text-gray-300 text-sm  ">
              Connect with NetworkTigers for in stock, fast delivery, quality
              network equipment.
            </ui>
          </div>
        
        {/* --------------------2nd-------------------------------------------- */}
        <div className="-mt-20">
        <div className="grid-cols-12   flex  justify-start  lg:col-span-5 lg:flex">
          <div className=" bg-green-700  text-center w-[14rem] max-w-xs md:p-5 border-b-[4px] border-green-400">
            <h1 className="text-white text-lg mb-2 font-semibold">
              Over-Night Shipping options
            </h1>
            <ui className="text-gray-300 text-sm  ">
              Connect with NetworkTigers for in stock, fast delivery, quality
              network equipment. 
            </ui>
          </div>
          {/* --------------------3rd-------------------------------------------- */}
          <div className="-mt-20">
          <div className="  bg-green-900 text-center w-[14rem] max-w-xs md:p-5 border-b-[4px] border-green-400">
            <h1 className="text-white text-lg mb-2 font-semibold">
              Over-Night Shipping options
            </h1>
            <ui className="text-gray-300 text-sm  ">
              Connect with NetworkTigers for in stock, fast delivery, quality
              network equipment.
            </ui>
          </div>
        </div>
        </div>
        </div></div>
        {/* --------------------4th-------------------------------------------- */}
      </section>
    // </section>
  );
};

export default Commit;
