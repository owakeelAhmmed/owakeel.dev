import React from "react";
import headerImg from "../assets/Group 46.png";

const HomeContent = () => {
  return (
    <div className=" lg:flex justify-center items-center text-white gap-[30px]">
      <div className="lg:w-[537px] h-[227px]">
        <h1 className=" font-semibold text-2xl lg:text-[32px]">
          Owakeel Ahmmed is a <span className="text-primary">Crafting Modern</span> Web Experiences with{" "}
          <span className="text-primary">MERN</span>
        </h1>
        <p className="text-gray mt-[32px]">
          Passionate about coding, driven by creativity, and focused on excellence.
        </p>
        <button className="select-none group relative overflow-hidden mt-6 px-4 py-2 border border-primary tracking-[.10em] text-primary hover:text-white transition-colors duration-300">
          <span className="absolute inset-0 bg-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
          <span className="relative z-10">Contact me!!</span>
        </button>
      </div>

      <div className="mt-14">
        <img src={headerImg} alt="" />
        <div className="border border-gray px-4 py-2 flex items-center space-x-2">
          {/* Purple square */}
          <div className="w-4 h-4 px-2 py-2 bg-[#C778DD]"></div>

          {/* Text */}
          <p className="font-fira text-[16px] text-gray-300 tracking-[.10em]">
            Currently working on{" "}
            <span className="font-bold text-white">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
