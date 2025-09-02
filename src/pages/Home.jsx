import React from "react";
import Quotebox from "@/components/Quotebox";
import HomeContent from "@/components/HomeContent";
import Projects from "./Projects";
import Img from "../assets/Group 36.png"
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Footer from "./Footer";
import ProjectContent from "@/components/ProjectContent";
import AboutMeContent from "@/components/AboutMeContent";
import ContactHomeContent from "@/components/ContactHomeContent";

const Home = () => {
  return (
    <section className="py-[62px] space-y-24">
      {/* Hero Section */}
      <section id="home" className="scroll-mt-20">
        <HomeContent />
      </section>

      {/* Quote Section */}
      <section id="quote" className="scroll-mt-20">
        <Quotebox />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <ProjectContent />
      </section>

      {/* Skill Section */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <section id="about" className="scroll-mt-20">
        <AboutMeContent />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactHomeContent />
      </section>
    </section>
  );
};

export default Home;
