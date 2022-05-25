import React from "react";
function Filter() {
  return (
    <div className="bg-slate-900 p-10 rounded-3xl">
      <div className="relative">
        <input
          type="text"
          className="bg-slate-600 w-full py-4 px-6 outline-none rounded-full"
          placeholder="Search within Complaints"
        />
        <i class="fa-solid fa-magnifying-glass absolute text-red-400 top-1/3 right-5"></i>
      </div>
      <div>
        <h1>
          <i class="fa-solid fa-filter"></i>Filter
        </h1>
        <div>
        <label class="filter-container">One
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>
<label class="filter-container">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="filter-container">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
      </div>
      <div>
          <h1><i class="fa-solid fa-arrow-down-short-wide"></i> Sort By</h1>
      </div>
    </div>
  );
}

export default Filter;
