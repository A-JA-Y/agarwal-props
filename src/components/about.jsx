import React from "react";
import logo from "../assets/agrwalprops.png";

const About = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      <h1 className="text-6xl text-center border-t-2 pt-3 border-zinc-500 mb-3 font-thin">
        About Us
      </h1>
      <div className="container grid grid-cols-2 py-8 px-5">
        <div className="left w-1/3">
          <h1 className=" text-8xl font-extrabold text-zinc-900 outline-zinc-500 drop-shadow-md z-10">
            We believe <br /> in <br />
            Comfort...
          </h1>
        </div>
        <div className="right  w-2/3 flex flex-col items-center justify-center ">
          <img
            src={logo}
            alt=""
            className=" rounded-full border-black border-2 hover:border-4 shadow-lg w-full hover:scale-105 transition-all"
          />
          
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default About;
