import React from "react";
import aboutImg from "../assets/Group 50.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const AboutMeContent = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mt-28">
        <h1 className="text-white text-3xl ">
          <span className="text-primary">/</span>about-me
        </h1>
        <hr className="hidden sm:block w-[320px] border-t-2 text-primary" />
      </div>

      <div className="lg:flex justify-between gap-40 mt-6">
        <div className="lg:w-[515px]">
          <p className="text-white">
            Hello, i’m Elias! <br />
            <br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>

          <button className="group relative overflow-hidden mt-6 px-4 py-2 border border-primary tracking-[.10em] text-primary hover:text-white transition-colors duration-300">
            <span className="absolute inset-0 bg-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
            <span className="select-none flex justify-center items-center relative z-10">
              Read more <MdOutlineArrowRightAlt />
            </span>
          </button>
        </div>

        <div>
          <img className=" h-[510px]" src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMeContent;
