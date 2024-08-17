import React from "react";
import s2 from "../assets/images/s2.jpeg";
import s3 from "../assets/images/s3.jpeg";
import s4 from "../assets/images/s4.jpeg";
import s5 from "../assets/images/s5.jpeg";
import s6 from "../assets/images/s6.jpeg";
import s7 from "../assets/images/s7.jpeg";
import s8 from "../assets/images/s8.jpeg";
import s9 from "../assets/images/s9.jpeg";

const Services = () => {
  return (
    <div id="services">
      <div className="bg-gray-50">
        <h1 className="text-3xl py-6 text-center font-semibold">
          Our services
        </h1>
        <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">
                  International Exhibition Representation
                </h3>
                <p>
                  As official agents of renowned international exhibition
                  organizers, we facilitate the participation of Indian
                  companies in prestigious exhibitions worldwide. From
                  registration and logistics to booth design and marketing, we
                  handle it all, ensuring a smooth and successful exhibition
                  experience.
                  <br />
                  Our goal is to infuse a scientific and professional approach
                  into the operations of the exhibition and trade fair industry.
                  With extensive experience in both industry workings and the
                  trade fair business, we foster a newfound cohesion that
                  enhances marketing efforts, ensuring guaranteed returns for
                  both exhibitors and visitors alike.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s2}
                  alt="About Us"
                />
              </div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left gap-16 md:space-x-8 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">
                  Indian Exhibition Partnership
                </h3>
                <p>
                  We collaborate with Indian exhibition organizers to attract
                  international participation, adding global flair and diversity
                  to domestic events. By leveraging our extensive network and
                  industry connections, we help elevate Indian exhibitions to
                  international standards.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s3}
                  alt="About Us"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">
                  Booth Construction and Design
                </h3>
                <p>
                  Our in-house team of skilled professionals specializes in
                  booth construction, exhibition stall design, raw space design,
                  and fabrication. With creativity and craftsmanship at the
                  forefront, we create captivating designs that captivate
                  audiences and leave a lasting impression.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s4}
                  alt="About Us"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-0 text-center md:text-left gap-16 md:space-x-8 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">Gifting Solutions</h3>
                <p>
                  We understand the importance of leaving a memorable impression
                  on your clients and partners. That's why we offer
                  comprehensive gifting solutions tailored to suit your brand
                  and budget. From custom merchandise to premium gifts, we have
                  you covered.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s5}
                  alt="About Us"
                />
              </div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">Transportation Support</h3>
                <p>
                  Logistics shouldn't be a headache when preparing for an
                  exhibition. That's why we provide full support for
                  transportation materials, ensuring timely delivery and
                  hassle-free logistics management for exhibitors.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s6}
                  alt="About Us"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-0 text-center md:text-left gap-16 md:space-x-8 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">Hostesses</h3>
                <p>
                  Make your event memorable with our professional and engaging
                  hostesses. Our team is skilled in creating a welcoming
                  atmosphere and providing top-notch guest services. From
                  greeting attendees and assisting with directions to managing
                  check-ins and handling inquiries, our hostesses are trained to
                  enhance every aspect of your event experience. With their
                  exceptional communication skills and professional demeanor,
                  they ensure that every guest feels valued and well-cared-for.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s7}
                  alt="About Us"
                />
              </div>
            </div>
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">Event Registration</h3>
                <p>
                  Streamline your event registration process with our
                  comprehensive registration services. We offer end-to-end
                  solutions to handle all aspects of attendee registration,
                  including online registration setup, on-site check-in, and
                  badge printing. Our team ensures a smooth and efficient
                  process, reducing wait times and enhancing the overall
                  experience for your guests. We handle the administrative
                  details so you can focus on delivering a successful event.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s8}
                  alt="About Us"
                />
              </div>
            </div>

            <div className="space-y-8 md:space-y-0 text-center md:text-left gap-16 md:space-x-8 md:justify-center md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-medium text-2xl">Product Launches</h3>
                <p>
                  Make a powerful impact with a flawless product launch. Our
                  team specializes in orchestrating dynamic product launches
                  that capture attention and drive excitement. From
                  conceptualizing and planning the event to executing the launch
                  with precision, we work closely with you to bring your vision
                  to life. Whether you’re introducing a new product to the
                  market or showcasing innovations to key stakeholders, our
                  expertise ensures that your launch event is executed
                  flawlessly and leaves a lasting impression.
                </p>
              </div>
              <div className="mx-auto w-[75%] md:w-1/2">
                <img
                  className="object-cover w-full rounded-lg shadow-md"
                  src={s9}
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
