import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import {
  MdLocationOn,
  MdOutlineBedroomParent,
  MdCurrencyRupee,
  MdShower,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import { PiMapPinAreaLight } from "react-icons/pi";
const PropertyCard = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <div className="w-full mb-1">
          <img
            src={currentImage}
            alt="Current Property"
            className="w-full h-auto border border-gray-300"
          />
        </div>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer border border-gray-300 rounded overflow-hidden"
              onClick={() => handleThumbnailClick(image)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold">Spacious House in Banjara Hills</div>
          <div className="flex items-center">
            {" "}
            <MdLocationOn /> Banjara Hills, Hyderabad
          </div>
        </div>
        <div className="flex font-bold items-center justify-center">
          <MdCurrencyRupee /> 25000/month
        </div>
        <hr className="border my-2" />
        <div className="mx-4">
          <div className="text-xl font-bold">Overview</div>
          <div className="md:flex md:gap-6">
            <div className="flex gap-6 my-2">
              <div className="w-[100px]">
                <div className="font-bold">House</div>
                <div>Property Type</div>
              </div>
              <div>
                <div className="font-bold flex items-center gap-2">
                  <MdOutlineBedroomParent />3
                </div>
                <div>Rooms</div>
              </div>
            </div>
            <div className="flex gap-6 my-2">
              <div className="w-[100px]">
                <div className="font-bold flex items-center gap-2">
                  <MdShower />3
                </div>
                <div>Bathrooms</div>
              </div>
              <div>
                <div className="font-bold flex items-center gap-2">
                  <MdOutlineDirectionsCar />2
                </div>
                <div>Parking lots</div>
              </div>
            </div>
            <div className="flex gap-6 my-2">
              <div className="w-[100px]">
                <div className="font-bold flex items-center gap-2">
                  <PiMapPinAreaLight />
                  350
                </div>
                <div>
                  m<sup>2</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border my-2" />
        <div className="mx-4">
          <div className="font-bold text-xl">Description</div>
          <div className="flex gap-6 my-2">
            Beautiful house for rent located in Col. Altos de Miramontes. This
            property offers an excellent layout with ample spaces. In addition,
            the property enjoys a privileged location, close to the Mall
            Cascadas shopping center and the José Cecilio del Valle University.
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#00aeff] text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-fit">
            I&apos;m Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
