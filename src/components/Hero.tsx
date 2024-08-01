import React from "react";
import s1 from "../assets/images/s1.jpeg";

const Hero = () => {
  return (
    <div className="flex  px-6 md:px-20  items-center justify-center bg-hero md:h-[90vh] overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
            Linking You Globally
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            At Exhibition Excellence Solutions, we are driven by a passion for
            perfection in every aspect of exhibition management. With a
            leadership team comprising trade fair veterans, we have the
            expertise and experience to navigate the intricate world of
            international exhibitions seamlessly
          </h3>
          {/* <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start"> */}
          {/*   <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500"> */}
          {/*     Get started */}
          {/*   </button> */}
          {/*   <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500"> */}
          {/*     Watch a Demo */}
          {/*   </button> */}
          {/* </div> */}
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
          <img
            className="rounded-lg shadow-md"
            src={s1}
            alt="girl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
