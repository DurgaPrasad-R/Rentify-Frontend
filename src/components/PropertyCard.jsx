import React, { useState } from "react";
import Map from "./Map";
import lord from "../assets/lord.jpg";
import rupee from "../assets/rupee.png";
import locicon from "../assets/loc-icon.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import tools from "../assets/tools.png";
import pet from "../assets/pet.png";
import income from "../assets/income.png";
import area from "../assets/area.png";
import bed from "../assets/bed.png";
import shower from "../assets/shower.png";
import school from "../assets/school.png";
import busstop from "../assets/busstop.png";
import resto from "../assets/resto.png";
import msg from "../assets/message.png";
import save from "../assets/save.png";

const Thumbnail = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIdx(index);
  };
  return (
    <>
      <div className="w-full p-2">
        <img
          src={images[currentIdx]}
          alt="Current Property"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="flex small-scrollbar overflow-x-scroll p-2 space-x-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none cursor-pointer"
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-auto rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full px-2">
        <div>
          <div className="font-bold md:text-xl">A Cozy Villa in the City</div>
          <div className="location flex items-center">
            <img src={locicon} alt="loc" className="w-3 h-3 md:w-4" />
            <p className="text-xs md:text-base">190 Bharath Nagar, VSP</p>
          </div>
          <div className="flex items-center">
            <img src={rupee} alt="rs" className="w-5" />
            <p className="font-bold text-lg">50,000</p>
          </div>
        </div>
        <div className="profile flex flex-col items-center">
          <div className="rounded-full">
            <img src={lord} alt="pic" className="w-10 rounded-full md:w-12" />
          </div>
          <p className="text-xs">Chefina</p>
        </div>
      </div>
    </>
  );
};

const Amenity = ({ icon, text, subtext }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt="icon" className="object-contain" />
      <div>
        <p className="font-bold text-sm md:text-base">{text}</p>
        <p className="text-sm font-medium md:text-base">{subtext}</p>
      </div>
    </div>
  );
};

const Element = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded">
      <img src={icon} alt="icon" className="object-contain w-5 md:w-8" />
      <p className="font-semibold md:text-md">{text}</p>
    </div>
  );
};

const PropertyCard = () => {
  return (
    <div className="md:flex md:gap-10 bg-[#d3d3d3] md:bg-white">
      <div className="flex flex-col items-center w-full md:w-1/2 bg-[#d3d3d3] md:bg-white md:p-4">
        <Thumbnail />
        <div className="px-2 font-medium">
          <p>
            Welcome to your new home! This cozy two-bedroom villa is now
            available for rent. Situated in a convenient location, this villa
            offers modern amenities and comfort. Featuring a spacious living
            area, a fully equipped kitchen, and a comfy bedroom, it’s the
            perfect space to relax and unwind.
          </p>
          <p className="md:mt-2 hidden md:block">
            With nearby shops, restaurants and public transportation options,
            everything you need is within reach. Don’t miss out the opportunity
            to make this villa your own. Schedule a viewing today.
          </p>
        </div>
      </div>
      <div className="bg-[#d3d3d3] md:w-1/2 md:p-4 p-2">
        <div className="px-2 w-full my-4">
          <p className="font-bold md:text-lg">General</p>
          <div className="flex mt-2 flex-col items-start bg-white rounded-md p-5">
            <Amenity
              icon={tools}
              text={"Utilities"}
              subtext={"Tenant is responsible"}
            />
            <Amenity
              icon={pet}
              text={"Pet Policy"}
              subtext={"Pets are allowed"}
            />
            <Amenity
              icon={income}
              text={"Income Policy"}
              subtext={"Atleast double the rent"}
            />
          </div>
        </div>
        <div className="px-2 w-full">
          <p className="font-bold md:text-lg">Sizes</p>
          <div className="flex flex-wrap md:justify-evenly items-start p-5 md:p-2 gap-4">
            <Element icon={area} text={"100 sqft"} />
            <Element icon={bed} text={"2 Beds"} />
            <Element icon={shower} text={"1 Bath"} />
          </div>
        </div>
        <div className="px-2 w-full py-2">
          <p className="font-bold md:text-lg">Nearby Places</p>
          <div className="flex mt-2 md:gap-3 flex-wrap md:justify-evenly items-start bg-white rounded-md p-1">
            <Amenity icon={school} text={"School"} subtext={"500m away"} />
            <Amenity icon={busstop} text={"Bus Stop"} subtext={"200m away"} />
            <Amenity icon={resto} text={"Restaurant"} subtext={"450m away"} />
          </div>
        </div>
        <div className="px-2 w-full py-2">
          <p className="font-bold md:text-lg">Location</p>
          <Map />
        </div>
        <div className="md:flex md:justify-between md:text-lg">
          <div className="flex items-center px-2 gap-2 mb-2">
            <img src={msg} alt="msg" className="w-6" />
            <p>Send a message</p>
          </div>
          <div className="flex items-center px-2 gap-2">
            <img src={save} alt="save" className="w-6" />
            <p>Save the Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
