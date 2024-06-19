import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="bg-white p-10 flex gap-5 rounded">
        <select className="border-2 border-grey- font-semibold w-[15vw] rounded px-3 pr-3">
          <option className="">Kind of Property</option>
          <option className="">For Rent</option>
        </select>
        <select className="border-2 border-grey- font-semibold w-[15vw] rounded px-3 pr-3">
          <option>Location</option>
          <option>For Rent</option>
        </select>
        <select className="border-2 border-grey- font-semibold w-[15vw] rounded px-3 pr-3">
          <option>No. Rooms</option>
          <option>For Rent</option>
        </select>
        <select className="border-2 border-grey- font-semibold w-[15vw] rounded px-3 pr-3">
          <option>Budget</option>
          <option>For Rent</option>
        </select>
        <button className="bg-sky-400 text-white w-[15vw] py-3 font-semibold rounded">
          Look for
        </button>
      </div>
    </div>
  );
};

export default Filter;
