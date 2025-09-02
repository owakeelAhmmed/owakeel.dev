import React from "react";
import skillImg from "../assets/Group 36.png";

const Skills = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4 ">
        <h1 className="text-white text-3xl ">
          <span className="text-primary">#</span>skills
        </h1>
        <hr className="hidden sm:block w-[240px] border-t-2 text-primary" />
      </div>

      <div className="grid lg:grid-cols-[30%_66%] gap-10 mt-5">
        <div>
          <img src={skillImg} alt="" />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {/* 3 Columns Inside Right Side */}
          <div className="">
            <div className="w-full border border-gray">
              <h1 className="p-2 text-white">Languages</h1>
              <hr className="text-gray" />
              <p className="p-2 text-gray">TypeScript Lua Python JavaScript</p>
            </div>
          </div>

          <div className="">
            <div className="w-full border border-gray">
              <h1 className="p-2 text-white">Languages</h1>
              <hr className="text-gray" />
              <p className="p-2 text-gray">TypeScript Lua Python JavaScript</p>
            </div>
            <div className="w-full border border-gray mt-4">
              <h1 className="p-2 text-white">Languages</h1>
              <hr className="text-gray" />
              <p className="p-2 text-gray">TypeScript Lua Python JavaScript</p>
            </div>
          </div>

          <div className="">
            <div className="w-full border border-gray">
              <h1 className="p-2 text-white">Languages</h1>
              <hr className="text-gray" />
              <p className="p-2 text-gray">TypeScript Lua Python JavaScript</p>
            </div>
            <div className="w-full border border-gray mt-4">
              <h1 className="p-2 text-white">Languages</h1>
              <hr className="text-gray" />
              <p className="p-2 text-gray">TypeScript Lua Python JavaScript</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
