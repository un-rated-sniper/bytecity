import React from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Discover from './components/Discover';
import TopBar from './components/TopBar';
import Message from './components/Message';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
//import CurrentOffers from './components/CurrentOffers';

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <NavbarComponent />
      <Hero/>
      <Discover />
      <AboutUs />
      <Message />
      <Services />
      <Testimonials/>
      <WhyChooseUs/>
      <Footer />
    </div>
  );
};

export default App;
