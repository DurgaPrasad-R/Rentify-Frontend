// import React, { useState } from "react";

// const SellerForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     price: "",
//     address: "",
//     desc: "",
//     city: "",
//     nobed: "",
//     nobath: "",
//     latitude: "",
//     longitude: "",
//     rentorsell: "Rent",
//     propertyType: "Apartments",
//     totalSize: "",
//     incomePolicy: "More than 60K",
//     utilityPolicy: "Owner is Responsible",
//     petPolicy: "Not Allowed",
//     school: "",
//     busStop: "",
//     restaurant: "",
//   });
//   const [photos, setPhotos] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePhotoChange = (e) => {
//     if (e.target.files.length <= 6) {
//       setPhotos(Array.from(e.target.files));
//     } else {
//       alert("You can only upload up to 6 photos");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form Data:", formData);
//     console.log("Photos:", photos);
//   };

//   return (
//     <div className="bg-[#F3EDE0]">
//       <form onSubmit={handleSubmit} className="p-5">
//         <h2 className="font-bold text-2xl">Add New Post</h2>
//         <div className="md:flex md:items-center md:gap-2">
//           <div className="md:w-[70vw] md:flex md:flex-col md:gap-10">
//             <div className="md:flex md:gap-2 md:justify-between">
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="title" className="font-semibold">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     id="title"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="price" className="font-semibold">
//                     Price
//                   </label>
//                   <input
//                     type="text"
//                     name="price"
//                     id="price"
//                     placeholder="Price"
//                     value={formData.price}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="address" className="font-semibold">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     id="address"
//                     placeholder="Address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="md:flex justify-between">
//               <div className="p-2 md:flex md:items-center w-full">
//                 <div className="flex flex-col w-full">
//                   <label htmlFor="desc" className="font-semibold">
//                     Description
//                   </label>
//                   <textarea
//                     name="desc"
//                     id="desc"
//                     rows={6}
//                     value={formData.desc}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   ></textarea>
//                 </div>
//               </div>
//               <img
//                 src="/building.png"
//                 className="md:w-[300px] md:h-[200px]"
//                 alt=""
//               />
//             </div>

//             <div className="md:flex md:gap-2 md:justify-between">
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="city" className="font-semibold">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     placeholder="City"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="nobed" className="font-semibold">
//                     No of Bed Rooms
//                   </label>
//                   <input
//                     type="text"
//                     name="nobed"
//                     id="nobed"
//                     placeholder="No of Bed Rooms"
//                     value={formData.nobed}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="nobath" className="font-semibold">
//                     No of Bath Rooms
//                   </label>
//                   <input
//                     type="text"
//                     name="nobath"
//                     id="nobath"
//                     placeholder="No of Bath Rooms"
//                     value={formData.nobath}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="md:flex md:gap-2 md:justify-between">
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="latitude" className="font-semibold">
//                     Latitude
//                   </label>
//                   <input
//                     type="text"
//                     name="latitude"
//                     id="latitude"
//                     placeholder="Latitude"
//                     value={formData.latitude}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="longitude" className="font-semibold">
//                     Longitude
//                   </label>
//                   <input
//                     type="text"
//                     name="longitude"
//                     id="longitude"
//                     placeholder="Longitude"
//                     value={formData.longitude}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="rentorsell" className="font-semibold">
//                     Rent or Sell
//                   </label>
//                   <select
//                     name="rentorsell"
//                     id="rentorsell"
//                     value={formData.rentorsell}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   >
//                     <option value="Rent">Rent</option>
//                     <option value="Sell">Sell</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="md:flex md:gap-2 md:justify-between">
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="propertyType" className="font-semibold">
//                     Property Type
//                   </label>
//                   <select
//                     name="propertyType"
//                     id="propertyType"
//                     value={formData.propertyType}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   >
//                     <option value="Apartments">Apartments</option>
//                     <option value="Bodegas">Bodegas</option>
//                     <option value="Houses">Houses</option>
//                     <option value="Buildings">Buildings</option>
//                     <option value="Land">Land</option>
//                     <option value="Villa">Villa</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="totalSize" className="font-semibold">
//                     Total Size
//                   </label>
//                   <input
//                     type="text"
//                     name="totalSize"
//                     id="totalSize"
//                     placeholder="in Sq ft"
//                     value={formData.totalSize}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="incomePolicy" className="font-semibold">
//                     Minimum Income Policy
//                   </label>
//                   <select
//                     name="incomePolicy"
//                     id="incomePolicy"
//                     value={formData.incomePolicy}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   >
//                     <option value="More than 60K">More than 60K</option>
//                     <option value="More than 100K">More than 100K</option>
//                     <option value="More than 200K">More than 200K</option>
//                     <option value="More than 500K">More than 500K</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="md:flex md:gap-2 md:justify-between">
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="utilityPolicy" className="font-semibold">
//                     Utility Policy
//                   </label>
//                   <select
//                     name="utilityPolicy"
//                     id="utilityPolicy"
//                     value={formData.utilityPolicy}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   >
//                     <option value="Owner is Responsible">
//                       Owner is Responsible
//                     </option>
//                     <option value="Tenant is Responsible">
//                       Tenant is Responsible
//                     </option>
//                   </select>
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="petPolicy" className="font-semibold">
//                     Pet Policy
//                   </label>
//                   <select
//                     name="petPolicy"
//                     id="petPolicy"
//                     value={formData.petPolicy}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   >
//                     <option value="Not Allowed">Not Allowed</option>
//                     <option value="Allowed">Allowed</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="school" className="font-semibold">
//                     Nearest School
//                   </label>
//                   <input
//                     type="text"
//                     name="school"
//                     id="school"
//                     placeholder="in Kms"
//                     value={formData.school}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="md:flex md:gap-2 md:justify-between md:items-end">
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="busStop" className="font-semibold">
//                     Nearest Bus Stop
//                   </label>
//                   <input
//                     type="text"
//                     name="busStop"
//                     id="busStop"
//                     placeholder="in Kms"
//                     value={formData.busStop}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="restaurant" className="font-semibold">
//                     Nearest Restaurant
//                   </label>
//                   <input
//                     type="text"
//                     name="restaurant"
//                     id="restaurant"
//                     placeholder="in Kms"
//                     value={formData.restaurant}
//                     onChange={handleChange}
//                     className="p-2 rounded-lg focus:outline-none pl-2 w-full"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full md:w-[30%]">
//                 <button
//                   type="submit"
//                   className="hidden md:block p-2 py-3 bg-black text-white font-semibold rounded-xl w-[200px]"
//                 >
//                   Add Post
//                 </button>
//               </div>
//             </div>

//             <div className="pt-3 flex flex-col justify-center items-center gap-3">
//               <label
//                 htmlFor="photos"
//                 className="md:hidden p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px] text-center cursor-pointer"
//               >
//                 Add Photos(6)
//               </label>
//               <input
//                 type="file"
//                 name="photos"
//                 id="photos"
//                 accept="image/*"
//                 multiple
//                 onChange={handlePhotoChange}
//                 className="hidden"
//               />
//               <button
//                 type="submit"
//                 className="md:hidden p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px]"
//               >
//                 Add Post
//               </button>
//             </div>
//           </div>

//           <div className="md:w-[40vw] hidden md:block h-full md:relative">
//             <img
//               src={"/buildings-portait.jpg"}
//               alt="building"
//               className="h-full w-[100%] bg-center bg-cover opacity-60 object-contain"
//             />
//             <label
//               htmlFor="photos"
//               className="left-[30%] top-[50%] hidden md:block absolute p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px] text-center cursor-pointer"
//             >
//               Add Photos(6)
//             </label>
//             <input
//               type="file"
//               name="photos"
//               id="photos"
//               accept="image/*"
//               multiple
//               onChange={handlePhotoChange}
//               className="hidden"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SellerForm;

import React, { useState } from "react";

const SellerForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    desc: "",
    city: "",
    nobed: "",
    nobath: "",
    latitude: "",
    longitude: "",
    rentorsell: "Rent",
    propertyType: "Apartments",
    totalSize: "",
    incomePolicy: "More than 60K",
    utilityPolicy: "Owner is Responsible",
    petPolicy: "Not Allowed",
    school: "",
    busStop: "",
    restaurant: "",
  });
  const [photos, setPhotos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const selectedPhotos = Array.from(e.target.files);
    if (selectedPhotos.length + photos.length <= 6) {
      setPhotos([...photos, ...selectedPhotos]);
    } else {
      alert("You can only upload up to 6 photos in total.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
    console.log("Photos:", photos);
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <div className="bg-[#F3EDE0] font-">
      <form onSubmit={handleSubmit} className="p-5">
        <h2 className="font-bold text-2xl">Add New Post</h2>
        <div className="md:flex md:items-center md:gap-2">
          <div className="md:w-[70vw] md:flex md:flex-col md:gap-10">
            {/* Existing form fields */}
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
                    value={formData.title}
                    onChange={handleChange}
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
                    value={formData.price}
                    onChange={handleChange}
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
                    value={formData.address}
                    onChange={handleChange}
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
                    value={formData.desc}
                    onChange={handleChange}
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
                    value={formData.city}
                    onChange={handleChange}
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
                    value={formData.nobed}
                    onChange={handleChange}
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
                    value={formData.nobath}
                    onChange={handleChange}
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
                    value={formData.latitude}
                    onChange={handleChange}
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
                    value={formData.longitude}
                    onChange={handleChange}
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
                    value={formData.rentorsell}
                    onChange={handleChange}
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
                    value={formData.propertyType}
                    onChange={handleChange}
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
                    placeholder="Total Size"
                    value={formData.totalSize}
                    onChange={handleChange}
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
                    value={formData.incomePolicy}
                    onChange={handleChange}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="More than 60K">More than 60K</option>
                    <option value="More than 70K">More than 70K</option>
                    <option value="More than 80K">More than 80K</option>
                    <option value="More than 90K">More than 90K</option>
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
                    value={formData.utilityPolicy}
                    onChange={handleChange}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="Owner is Responsible">
                      Owner is Responsible
                    </option>
                    <option value="Tenant is Responsible">
                      Tenant is Responsible
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
                    value={formData.petPolicy}
                    onChange={handleChange}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  >
                    <option value="Not Allowed">Not Allowed</option>
                    <option value="Allowed">Allowed</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="school" className="font-semibold">
                    School (Distance in KM)
                  </label>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    placeholder="School (Distance in KM)"
                    value={formData.school}
                    onChange={handleChange}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex md:gap-2 md:justify-between items-end">
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="busStop" className="font-semibold">
                    Bus Stop (Distance in KM)
                  </label>
                  <input
                    type="text"
                    name="busStop"
                    id="busStop"
                    placeholder="Bus Stop (Distance in KM)"
                    value={formData.busStop}
                    onChange={handleChange}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <div className="p-2 w-full md:w-[30%]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="restaurant" className="font-semibold">
                    Restaurant (Distance in KM)
                  </label>
                  <input
                    type="text"
                    name="restaurant"
                    id="restaurant"
                    placeholder="Restaurant (Distance in KM)"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="p-2 rounded-lg focus:outline-none pl-2 w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="hidden md:block  h-10 bg-black text-white font-semibold rounded-xl w-[200px] mb-2"
              >
                Add Post
              </button>
            </div>

            <div className="pt-3 flex flex-col justify-center items-center gap-3">
              <label
                htmlFor="photos"
                className="md:hidden p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px] text-center cursor-pointer"
              >
                Add Photos (6)
              </label>
              <input
                type="file"
                name="photos"
                id="photos"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
              />
              <button
                type="submit"
                className="md:hidden p-5 py-3 bg-black text-white font-semibold rounded-xl w-[300px]"
              >
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
            <label
              htmlFor="photos"
              className="left-[30%] top-[30%] hidden md:block absolute p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px] text-center cursor-pointer"
            >
              Add Photos (6)
            </label>
            <input
              type="file"
              name="photos"
              id="photos"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="hidden"
            />
            <div className="mt-5 absolute left-5 right-5 top-[40%] bg-slate-100 p-4 rounded-xl">
              <h3 className="font-bold">Uploaded Photos:</h3>
              <div className="flex flex-wrap gap-3">
                {photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Uploaded ${index}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white rounded-full flex justify-center items-start"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-gray-600 text-center">
                {photos.length} photo(s) uploaded. {6 - photos.length}{" "}
                remaining.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="pt-3 flex justify-center items-center gap-3">
          <button
            type="submit"
            className="hidden md:block p-5 py-3 bg-black text-white font-semibold rounded-xl w-[200px]"
          >
            Add Post
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default SellerForm;
