import React from 'react';
import Navbar from './Navbar';
import LatestNews from './LatestNews';
const LandingPage = () => {
  return (
    <>
    {/* Search Function */}

        <Navbar />
        <hr></hr>
        <section className="py-12 bg-gray-50">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-sky-400 mb-12">
        LATEST NEWS
      </h1>
      </section>
      
        <LatestNews />
        <LatestNews />
        <LatestNews />
        <LatestNews />

 
      
    
    </>
  );
};

export default LandingPage;