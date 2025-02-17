import React, { useState } from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Services from "../components/Services";
import Message from "../components/Message";
import WhyUs from "../components/WhyUs";
import HireUsModal from "../components/HireUsModal";
import PortfolioGallery from "../components/PortfolioGallery";
import TrainingHero from "../components/TrainingHero";
import CustomAccordion from "../components/CustomAccordion";

const Home: React.FC = () => {
  const [showHireUsModal, setShowHireUsModal] = useState(false);

  const handleShowModal = () => setShowHireUsModal(true);
  const handleCloseModal = () => setShowHireUsModal(false);

  return (
    <div>
      <Hero />
      <Discover onHireUsClick={handleShowModal} /> {/* Pass the function here */}
      <CustomAccordion />
      <Services />
      <Message />
      <WhyUs />
      <TrainingHero />
      <HireUsModal show={showHireUsModal} handleClose={handleCloseModal} />
      <PortfolioGallery />
    </div>
  );
};

export default Home;
