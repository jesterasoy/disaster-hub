import React from "react";

//COMPONENTS
import Navbar from "../components/common/Navbar";
import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";

const Home = () => {
  return (
    <>
      <div className="relative z-0  font-poppins">
        <div className="max-w-screen-2xl mx-auto p-6">
          <Navbar />
          <FirstSection />
          <SecondSection />
        </div>
      </div>
    </>
  );
};

export default Home;
