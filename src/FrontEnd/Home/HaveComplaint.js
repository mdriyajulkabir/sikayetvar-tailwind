import React from "react";

function HaveComplaint() {
  return (
    <div className="relative overflow-hidden md:pt-44 pt-20 md:pb-32 mt-10 mb-20 md:mb-0 bg-white">
      <div className="grid grid-cols-12 gap-x-10">
        <div className="col-span-12 md:col-span-5 pl-6 md:pl-24 pr-6 md:pr-0 md:order-1 order-2 relative">
          <h1 className="text-5xl xl:leading-relaxed text-gray-400 mb-10">
            <span className="span-1 font-medium">have a complaint</span> <br />
            <span className="span-2 font-bold">How does it work?</span>
          </h1>
          <p className="text-gray-400 md:pr-10">
            With Complaintvar, which is a solution and decision-making tool, you
            can relax and take the right decision. 18 million visitors follow
            this path and over 450 thousand complaints are resolved annually!
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 md:order-2 order-1">
          <div className="green-circle md:block hidden" ></div>
          <div className="gray-circle md:block hidden"></div>
          <div className="blue-half-circle md:block hidden"></div>
          <div className="green-half-circle md:block hidden"></div>
          <div className="yellow-circle  md:block hidden"></div>
          <img src="./images/video-cover-image.jpg" className="h-full pl-6 md:pl-0 pr-6 w-full md:w-auto relative pb-14 md:pb-0" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HaveComplaint;
