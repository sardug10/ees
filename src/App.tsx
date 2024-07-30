import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <Footer/>
    </div>
  );
}

export default App;
