import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us">
      <div className="pt-12 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              We know tech, we know finance. We are fintech experts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              At Exhibition Excellence Solutions, we are committed to making
              your exhibition journey seamless, successful, and unforgettable.
              Contact us today to discover how we can elevate your next
              exhibition experience to new heights!
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/525591/user-speak.svg"
                      alt="Experience"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Experience
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  With years of experience in the industry, we bring
                  unparalleled expertise to every project we undertake.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/415362/innovation-idea-bulb.svg"
                      alt="Innovation"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Innovation
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We thrive on innovation, constantly pushing the boundaries to
                  deliver fresh and impactful exhibition solutions.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/486805/quality-report.svg"
                      alt="Quality"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Quality
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  From design concept to execution, we maintain the highest
                  standards of quality, ensuring excellence in every detail.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/486013/customer-report-line.svg"
                      alt="Customers"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Customer Focus
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our clients are at the heart of everything we do. We work
                  closely with you to understand your goals and deliver
                  tailor-made solutions that exceed your expectations.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
