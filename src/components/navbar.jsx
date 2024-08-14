import React from "react";
import logo from "../assets/agrwalprops.png";

const Navbar = () => {
  return (
    <nav className=" w-full mx-auto sticky z-20 flex items-center justify-around  bg-zinc-400  bg-opacity-5 shadow-md  h-16 px-10 rounded-b-lg outline-2 outline-black">
      {[
        { name: "home" },
        { name: "about us" },
        {
          name: (
            <div className=" flex items-center justify-center">
              <img src={logo} className="h-10 mx-2 " alt="logo" />{" "}
              <h1 className='  font-["Gilroy-light"]'>Agarwal properties</h1>
            </div>
          ),
        },
        { name: "services" },
        { name: "contact us" },
      ].map((item, index) => {
        return (
          <span className=" mx-5 uppercase text-[#000000] text-2xl font-sans font-thin hover:font-normal hover:scale-98 transition-all cursor-pointer">
            {item.name}
          </span>
        );
      })}
    </nav>
  );
};

export default Navbar;
