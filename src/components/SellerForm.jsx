import React from "react";

const SellerForm = () => {
  return (
    <div className="bg-[#F3EDE0]">
      <div className="p-5">
        <h2 className="font-bold text-2xl">Add New Post</h2>
        <div className="md:flex md:items-center md:gap-2">
          <div className="md:w-[70vw] md:flex md:flex-col md:gap-10">
            <div className="md:flex md:gap-2 md:justify-between">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="font-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="price" className="font-semibold">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex justify-between">
              <div className="p-2 md:flex md:items-center w-full">
                <div className="flex flex-col w-full">
                  <label htmlFor="desc" className="font-semibold">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    id="desc"
                    rows={6}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  ></textarea>
                </div>
              </div>
              <img
                src="/building.png"
                className="md:w-[300px] md:h-[200px]"
                alt=""
              />
            </div>

            <div className="md:flex md:gap-2 md:justify-between">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="font-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nobed" className="font-semibold">
                    No of Bed Rooms
                  </label>
                  <input
                    type="text"
                    name="nobed"
                    id="nobed"
                    placeholder="No of Bed Rooms"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nobath" className="font-semibold">
                    No of Bath Rooms
                  </label>
                  <input
                    type="text"
                    name="nobath"
                    id="nobath"
                    placeholder="No of Bath Rooms"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex md:gap-2 md:justify-between">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="latitude" className="font-semibold">
                    Latitude
                  </label>
                  <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    placeholder="Latitude"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="longitude" className="font-semibold">
                    Longitude
                  </label>
                  <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    placeholder="Longitude"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="rentorsell" className="font-semibold">
                    Rent or Sell
                  </label>
                  <select
                    name="rentorsell"
                    id="rentorsell"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="Rent">Rent</option>
                    <option value="Sell">Sell</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="md:flex md:gap-2 md:justify-between">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="propertyType" className="font-semibold">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    id="propertyType"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="Apartments">Apartments</option>
                    <option value="Bodegas">Bodegas</option>
                    <option value="Houses">Houses</option>
                    <option value="Buildings">Buildings</option>
                    <option value="Land">Land</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="totalSize" className="font-semibold">
                    Total Size
                  </label>
                  <input
                    type="text"
                    name="totalSize"
                    id="totalSize"
                    placeholder="in Sq ft"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="incomePolicy" className="font-semibold">
                    Income Policy
                  </label>
                  <select
                    name="incomePolicy"
                    id="incomePolicy"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="More than 60K">More than 60K</option>
                    <option value="More than 80K">More than 80K</option>
                    <option value="More than 1Lk">More than 1Lk</option>
                    <option value="More than 5Lk">More than 5Lk</option>
                    <option value="More than 10Lk">More than 10Lk</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="md:flex md:gap-2 md:justify-between">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="utilityPolicy" className="font-semibold">
                    Utility Policy
                  </label>
                  <select
                    name="utilityPolicy"
                    id="utilityPolicy"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="Owner is Responsible">
                      Owner is Responsible
                    </option>
                    <option value="Content Responsibility">
                      Content Responsibility
                    </option>
                    <option value="Transaction Accountability">
                      Transaction Accountability
                    </option>
                    <option value="Maintenance of Listings">
                      Maintenance of Listings
                    </option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="petPolicy" className="font-semibold">
                    Pet Policy
                  </label>
                  <select
                    name="petPolicy"
                    id="petPolicy"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="Not Allowed">Not Allowed</option>
                    <option value="Allowed">Allowed</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="School" className="font-semibold">
                    Nearest School
                  </label>
                  <input
                    type="text"
                    name="School"
                    id="School"
                    placeholder="in Kms"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex md:gap-2 md:justify-between md:items-end">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="BusStop" className="font-semibold">
                    Nearest Bus Stop
                  </label>
                  <input
                    type="text"
                    name="BusStop"
                    id="BusStop"
                    placeholder="in Kms"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="Restaurent" className="font-semibold">
                    Nearest Restaurant
                  </label>
                  <input
                    type="text"
                    name="Restaurent"
                    id="Restaurent"
                    placeholder="in Kms"
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
              <button className="hidden md:block p-2 py-3 bg-black text-white font-semibold rounded-xl w-[200px]">
                Add Post
              </button>
              </div>
            </div>

            <div className="pt-3 flex flex-col justify-center items-center gap-3">
              <button className="md:hidden p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px]">
                Add Photos(6)
              </button>
              <button className="p-5 md:hidden py-3 bg-black text-white font-semibold rounded-xl w-[200px]">
                Add Post
              </button>
            </div>
          </div>

          <div className="md:w-[40vw] hidden md:block h-full md:relative">
            <img
              src={"/buildings-portait.jpg"}
              alt="building"
              className="h-full w-[100%] bg-center bg-cover opacity-60 object-contain"
            />
            <button className="left-[30%] top-[50%] hidden md:block absolute p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px]">
              Add Photos(6)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
