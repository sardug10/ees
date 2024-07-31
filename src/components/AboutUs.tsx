import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              At Exhibition Excellence Solutions, we are driven by a passion for
              perfection in every aspect of exhibition management. With a
              leadership team comprising trade fair veterans, we have the
              expertise and experience to navigate the intricate world of
              international exhibitions seamlessly. Our mission is simple: to be
              the one-stop solution for all your exhibition needs, whether
              you're an Indian company looking to participate in international
              exhibitions or an international organizer seeking to make your
              mark in India.
              <br />
              We promote India's foreign trade by providing the Indian
              manufacturing industry and exporters with platforms that bring
              together buyers and sellers from around the world through a
              portfolio of exhibitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
