import React from "react";
import PropertyCard from "./../components/PropertyCard";
import HouseCard from "../components/HouseCard";
import Filter from "../components/Filter";

const Home = () => {
  const HomeImage =
    "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <div className="relative mb-10">
        <div
          className="h-[85vh] bg-cover"
          style={{ backgroundImage: `url(${HomeImage})` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-[85vh] bg-sky-300 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl font-bold text-white">
            The best Real Estate portal
          </h1>
          <p className="text-white font-semibold text-center">
            Buying, selling and renting has never been easier. We simplify the
            world of real estate with the best property search engine in
            Honduras.
          </p>
        </div>
        <dir className="absolute left-1/2 -translate-x-1/2 bottom-[-10vh] shadow-[0px_6px_16px_10px_#00000024] pl-0">
          <Filter />
        </dir>
      </div>
      {/* <HouseCard /> */}
    </div>
  );
};

export default Home;
