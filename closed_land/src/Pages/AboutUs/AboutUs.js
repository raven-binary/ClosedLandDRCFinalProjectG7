import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import VisionMission from "./VisionMission";
import "./AboutUs.css";
import AccStats from "./AccStats";
import OurStory from "./OurStory";
import WhyNFT from "./WhyNFT";
import Employee from "./Employee";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <VisionMission />
      <AccStats />
      <OurStory />
      <WhyNFT />
      <Employee />
      <Footer />
    </div>
  );
};

export default AboutUs;
