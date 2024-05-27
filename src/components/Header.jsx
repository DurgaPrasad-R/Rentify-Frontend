import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#004274] border-box h-16 p-3">
      <img src={logo} alt="logo" className="w-20" />
      <FaRegCircleUser className="text-3xl" />
    </header>
  );
};

export default Header;
