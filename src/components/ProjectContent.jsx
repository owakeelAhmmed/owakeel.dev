import Card from "@/components/Card";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import {cardData} from "../data/cardData"
import { NavLink } from "react-router-dom";

const ProjectContent = () => {
  return (
      <div className="mt-[150px]">
        <div className="flex justify-between items-center">
          <div className="lg:flex justify-center items-center gap-4 w-[700px]">
            <h1 className="text-white text-3xl ">
              <span className="text-primary">#</span>Projects
            </h1>
            <hr className="hidden sm:block w-[510px] border-t-2 text-primary" />
          </div>
          <NavLink
            to="/projects"
            className="select-none text-[16px] text-white flex justify-center items-center gap-2 cursor-pointer hover:text-primary transition-colors duration-300"
            
          >
            View all <MdOutlineArrowRightAlt />
          </NavLink>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-12 gap-4">
            {
              cardData.slice(0, 3).map((item) =>{
                return(
                  <Card 
                  key={item.id}
                  image={item.image}
                  tech={item.tech}
                  title={item.title}
                  description={item.description}
                />
                )

              })
            }
          </div>
        </div>
      </div>
  );
};

export default ProjectContent;
