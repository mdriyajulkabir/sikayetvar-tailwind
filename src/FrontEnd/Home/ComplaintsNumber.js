import React from "react";

function ComplaintsNumber() {
  return (
    <div className="my-32">
      <h1 className="text-center text-5xl text-gray-400 font-medium mb-24 tracking-wider">Complaints by Numbers</h1>
      <div className="grid grid-cols-12 gap-8 px-5 md:px-20">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white p-8 rounded-3xl flex md:block md:h-72 lg:h-80">
            <img
              src="./images/Number-member.svg"
              className="md:mb-12 md:mr-0 mr-10"
              alt=""
            />
            <div>
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white p-8 rounded-3xl flex md:block md:h-72 lg:h-80">
            <img
              src="./images/Number-brand.svg"
              className="md:mb-12 md:mr-0 mr-10"
              alt=""
            />
            <div>
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white p-8 rounded-3xl flex md:block md:h-72 lg:h-80">
            <img
              src="./images/Number-complaint.svg"
              className="md:mb-12 md:mr-0 mr-10"
              alt=""
            />
            <div>
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-white p-8 rounded-3xl flex md:block md:h-72 lg:h-80">
            <img
              src="./images/Number-visitor.svg"
              className="md:mb-12 md:mr-0 mr-10"
              alt=""
            />
            <div>
              <h1 className="text-lg text-gray-500 mb-2">
                Number of Individual Members
              </h1>
              <h1 className="text-4xl font-semibold">8,238,498</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintsNumber;
