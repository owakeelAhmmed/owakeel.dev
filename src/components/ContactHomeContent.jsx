import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const ContactHomeContent = () => {
  return (
    <section>
      <div className="flex items-center gap-4 mt-28">
        <h1 className="text-white text-3xl ">
          <span className="text-primary">#</span>contacts
        </h1>
        <hr className="hidden sm:block w-[127px] border-t-2 text-primary" />
      </div>

      <div className="lg:flex justify-between mt-11">
        <div className="text-gray lg:w-[505px]">
          <p>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="border border-gray w-[250px] p-4 text-white mt-6 lg:mt-0">
          <h3>Message me here</h3>
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span>
                <MdOutlineMarkEmailRead />
              </span>
              <a
                href=""
                className=" text-sm hover:text-primary transition-all duration-300 "
              >
                owakeel.ahmmed@gmailcom
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span>
                <FaLinkedinIn />
              </span>
              <a
                href="https://www.linkedin.com/in/owakeel-ahmmed-b162a9241/"
                className=" text-sm hover:text-primary transition-all duration-300 "
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHomeContent;
