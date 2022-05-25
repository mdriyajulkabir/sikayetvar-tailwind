import React from "react";

function Banner() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 order-2 md:order-1 h-full">
          <div className="flex flex-col md:pl-10 lg:pl-20 md:mt-40 lg:mt-56 px-5 md:px-0">
            <h1 className="text-6xl  font-normal lg:mb-36 2xl:mb-52 md:mb-20  mb-16 text-gray-600">
              <span className="font-bold">Complaint  for <br /> </span>
              solution
            </h1>
            <div className="relative mb-24 lg:mb-0">
              <input type="text" placeholder="Search for branda, models, products" 
              className="w-full text-xl font-semibold tracking-wider py-3 pl-5 rounded-full outline-none" />
              <button type="submit" className="absolute right-0 h-full bg-green-400 text-white font-semibold px-7 text-xl rounded-full">Search</button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 order-1 md:order-2">
          <img src="./images/home-banner.png" className="md:h-full  h-5/6 w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
