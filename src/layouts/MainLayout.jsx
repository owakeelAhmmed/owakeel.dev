import Navbar from "@/components/shared/Navbar";
import Footer from "@/pages/Footer";
// import { useEffect, useState } from "react";
// import AnimatedCursor from "react-animated-cursor";

const MainLayout = ({ children }) => {
  // const [isMobile, setMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setMobile(window.innerWidth < 768);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  return (
    <>
      {/* {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color="255, 255, 255"
          outerAlpha={0.3}
          innerScale={1}
          outerScale={2}
        />
      )} */}
      <Navbar />
      <main className="font-fira min-h-screen px-4 md:px-10 lg:px-[171px] bg-[#282C33]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
