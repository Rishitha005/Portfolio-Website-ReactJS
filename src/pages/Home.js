import React from "react";
import Banner from '../components/Banner'; 
import Nav from '../components/Nav'; 
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
