import React from "react";
import { MdSearch } from "react-icons/md";
const SearchBar = () => {
  return (
    <section className="bg-[#004274] py-4 flex justify-center">
      <div className="flex bg-white items-center border border-[#dce0e0] h-10 rounded w-10/12">
        <MdSearch className="text-[#7b7b7b] size-5 ml-2" />
        <input
          type="text"
          placeholder="Type here"
          className="outline-none text-[#7b7b7b]"
        />
      </div>
    </section>
  );
};

export default SearchBar;
