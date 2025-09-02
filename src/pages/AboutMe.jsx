import React from "react";
import aboutImg from "../assets/Group 50.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import group53 from "../assets/Group53.png";

const AboutMe = () => {
  return (
    <section className="py-[62px] space-y-24">
      {/* Title */}
      <div>
        <h1 className="text-white text-3xl">
          <span className="text-primary">/</span>about-me
        </h1>
        <p className="text-white mt-3.5">who am i?</p>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-40 mt-16">
        {/* Left Text */}
        <div className="w-full max-w-xl">
          <p className="text-white">
            Hello, I’m Elias! <br />
            <br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="flex items-center text-white gap-2 mt-7 px-4 py-2 border border-primary tracking-[.10em]">
            Read more <MdOutlineArrowRightAlt />
          </button>
        </div>

        {/* Right Image */}
        <div className="">
          <img className="h-auto max-h-[510px]" src={aboutImg} alt="about" />
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-white text-3xl">
            <span className="text-primary">#</span>skills
          </h1>
          <hr className="w-[240px] border-t-2 text-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
          {[
            { title: "Languages", items: "TypeScript Lua Python JavaScript" },
            { title: "Frameworks", items: "React Next.js Tailwind" },
            { title: "Databases", items: "MongoDB PostgreSQL" },
            { title: "Tools", items: "Git GitHub VSCode" },
            { title: "Others", items: "Figma REST API Firebase" },
          ].map((skill, idx) => (
            <div key={idx} className="border border-gray w-full">
              <p className="p-2 text-white">{skill.title}</p>
              <hr className="border-gray" />
              <p className="p-2 text-gray">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div>
        <h1 className="text-white text-3xl">
          <span className="text-primary">#</span>my-fun-facts
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-5">
          {/* Facts List */}
          <div className="text-white flex flex-wrap w-full lg:w-[640px] gap-3">
            {[
              "I like winter more than summer",
              "I often bike with my friends",
              "I like pizza and pasta",
              "I was in Egypt, Poland and Turkey",
              "My favorite movie is The Green Mile",
              "I am still in school",
              "I don’t have any siblings",
            ].map((fact, idx) => (
              <p
                key={idx}
                className="border border-gray-400 px-3 py-1 rounded-md"
              >
                {fact}
              </p>
            ))}
          </div>

          {/* Fun Image */}
          <div className="">
            <img className="" src={group53} alt="fun" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
