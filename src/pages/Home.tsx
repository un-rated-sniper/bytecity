import React, { useState } from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Services from "../components/Services";
import Message from "../components/Message";
import WhyUs from "../components/WhyUs";
import LetsTeachYou from "../components/LetsTeachYou";
import HireUsModal from "../components/HireUsModal";
import WhyChooseUs from "../components/WhyChooseUs";

const Home: React.FC = () => {
    const [showHireUsModal, setShowHireUsModal] = useState(false);

    const handleShowModal = () => setShowHireUsModal(true);
    const handleCloseModal = () => setShowHireUsModal(false);

    return (
        <div >
            <Hero onHireUsClick={handleShowModal} />
            <Discover />
            <Services />
            <Message />
            <WhyUs />
            <LetsTeachYou />
            <HireUsModal show={showHireUsModal} handleClose={handleCloseModal} />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
