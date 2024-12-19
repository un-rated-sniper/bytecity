import React, { useState } from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Services from "../components/Services";
import Message from "../components/Message";
import WhyUs from "../components/WhyUs";
import WorkWithUsModal from "../components/WorkWithUsModal";
import WhyChooseUs from "../components/WhyChooseUs";
import TrainingHero from "../components/TrainingHero";
import CustomAccordion from "../components/CustomAccordion";


const Home: React.FC = () => {
    const [showHireUsModal, setShowHireUsModal] = useState(false);

    const handleShowModal = () => setShowHireUsModal(true);
    const handleCloseModal = () => setShowHireUsModal(false);

    return (
        <div>
            <Hero onHireUsClick={handleShowModal} />
            <Discover />
            <CustomAccordion/>
            <Services />
            <Message />
            <WhyUs />
            <TrainingHero />
            <WorkWithUsModal show={showHireUsModal} handleClose={handleCloseModal} />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
