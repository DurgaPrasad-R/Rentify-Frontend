import React from "react";
import img1 from "../assets/img1.png";
import {
  MdOutlineBedroomParent,
  MdShower,
  MdLocationOn,
  MdOutlineDirectionsCar,
} from "react-icons/md";

const House = () => {
  return (
    <div className="p-2 bg-white shadow-md">
      <div>
        <img src={img1} alt="HouseImg" />
      </div>
      <div className="mx-2">
        <div>Spacious House in Banjara Hills</div>
        <div className="flex items-center">
          <MdLocationOn /> Banjara Hills, Hyderabad
        </div>
        <div className="flex items-center my-2">
          <div className="font-bold w-10 flex items-center">
            <MdOutlineDirectionsCar />3
          </div>
          <div className="font-bold w-10 flex items-center">
            <MdShower />3
          </div>
          <div className="font-bold w-10 flex items-center">
            <MdOutlineBedroomParent />3
          </div>
        </div>
      </div>
    </div>
  );
};
const HouseCard = () => {
  return (
    <div className="mx-2 bg-[#f7f8f9]">
      <div className="font-bold texxt-xl">Available Properties</div>
      <div className="text-sm md:text-base flex justify-between whitespace-nowrap">
        <div>Sort By: Default Order</div>
        <div>308 Properties</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <House />
        <House />
        <House />
        <House />
      </div>
    </div>
  );
};

export default HouseCard;
