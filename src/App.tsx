import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Nav />
      <Hero />
      <Services />
      <AboutUs />
      {/* <Testimonials /> */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
