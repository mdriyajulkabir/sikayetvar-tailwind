import React from "react";

function StudyTogether() {
  return (
    <div className="bg-indigo-500 py-24 px-5">
      <h1 className="sm:text-5xl text-4xl font-medium text-center text-white tracking-wide mb-16">
        Consumer experience, your brand
      </h1>
      <h1 className="text-center text-white sm:text-xl text-lg font-medium tracking-wide mb-12">
        Customers who have had a negative shopping experience share this process
        with 250 people. <br />
        To be a part of a customer-oriented culture and create happy customers:
      </h1>
      <div className="lg:w-1/5 md:w-2/4 w-2/4 text-center mx-auto bg-white hover:bg-slate-900 hover:text-white rounded-full">
        <button className="text-xl font-medium py-3">
          Let's Study Together
        </button>
      </div>
    </div>
  );
}

export default StudyTogether;
