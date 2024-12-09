import React, { useState } from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Services from "../components/Services";
import Message from "../components/Message";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import HireUsModal from "../components/HireUsModal";
import WhyChooseUs from "../components/WhyChooseUs";

const Home: React.FC = () => {
    const [showHireUsModal, setShowHireUsModal] = useState(false);

    const handleShowModal = () => setShowHireUsModal(true);
    const handleCloseModal = () => setShowHireUsModal(false);

    return (
        <div >
            <h1>Welcome to ByteCity Tech Solutions</h1>
            <p>Your one-stop tech solutions provider.</p>
            <Hero onHireUsClick={handleShowModal} />
            <Discover />
            <Services />
            <Message />
            <AboutUs />
            <Testimonials />
            <HireUsModal show={showHireUsModal} handleClose={handleCloseModal} />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
