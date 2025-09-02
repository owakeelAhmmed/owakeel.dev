import React from "react";
import CardImg from "../assets/Rectangle.jpg";
import { CgArrowsHAlt } from "react-icons/cg";

const Card = ({image, tech, title, description}) => {
  
  return (
    <div>
      <div className="w-[330px] border border-gray text-white">
        <img className="bg-cover bg-center" src={image} alt="" />
        <h2 className="p-2 text-gray">{tech}</h2>
        <hr className="text-gray" />
        <div className="p-4">
          <h1 className="text-2xl">{title}</h1>
          <p className="text-[16px] mt-4 text-gray">{description}</p>
          <button className="select-none mt-4 px-4 py-2 border border-primary flex justify-center items-center gap-3">
            Live
            <CgArrowsHAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
