import React from "react";

import HeroSection from "./Components/HeroSection";
import Search from "./Components/Search";
import InfoCard from "./Components/InfoCard";
import Count from "./Components/Count";

import gymImg from "./img/image 2.jpg";
import Services from "./Components/Services";
import Amenities from "./Components/Amenities";
import Neighborhood from "./Components/Neighborhood";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-darkBlue">
      <div className="">
        <HeroSection />
      </div>
      <div className="bg-darkBlue mt-8">
        <Search />
      </div>
      <InfoCard />
      <Count />

      <div className="bg-white">
        <Services />
      </div>

      <div>
        <img src={gymImg} alt="gym" />
      </div>

      <div
        style={{
          background: "#F3F4F9",
        }}
      >
        <Amenities />
      </div>

      <Neighborhood />

      <Contact />

      <Footer />
    </div>
  );
}
