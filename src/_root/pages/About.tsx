import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";

import { directors } from "./../../data/about";
import FactComponent from "../../components/FactComponent";
import FaqComponent from "../../components/FaqComponent";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDirector = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === directors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDirector = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? directors.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">About Us</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      <motion.div
        className="animate-fade-in-up px-4 py-8 md:py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Gambar */}
            <motion.div
              className="md:w-5/12 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.6,
              }}
            >
              <img
                src="assets/experience.jpg"
                alt="Image"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="md:w-7/12 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8,
              }}
            >
              <div className="mb-4">
                <p className="text-[#fdbe33] text-md uppercase font-semibold tracking-wide">
                  Welcome to Starplus
                </p>
                <p className="text-3xl md:text-5xl font-bold text-gray-800">
                  12 Years Experience
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  PT. Star Plus is a steel fabrication and installation company
                  established in 2013 in Tangerang, Indonesia. We specialize in
                  civil construction, steel structure, pipe fabrication,
                  assembly, electrical work, and manpower supply. Our
                  experienced and ISO-certified team ensures high-quality
                  results.
                </p>
                <p>
                  We deliver safe and timely services, supported by complete
                  facilities and strong professional values based on
                  communication, trust, and integrity in working with our
                  partners and clients.
                </p>

                {/* Teks tambahan */}
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <p>
                      With over a decade of industry expertise, Star Plus has
                      successfully completed numerous national and international
                      projects, showcasing our commitment to excellence and
                      continuous innovation.
                    </p>
                    <p>
                      Our vision is to be the most trusted construction and
                      fabrication company in Southeast Asia, delivering
                      sustainable solutions through advanced technologies and
                      skilled workforce.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Tombol toggle */}
              <div className="about mt-8">
                <button
                  onClick={() => setShowMore((prev) => !prev)}
                  className="btn"
                >
                  {showMore ? "Show Less" : "Read More"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* About End */}

      {/* Fact Start */}
      <FactComponent />
      {/* <!-- Fact End --> */}

      {/* <!-- Faq Start --> */}
      <FaqComponent />
      {/* <!-- Faq End --> */}

      {/* <!-- Vision and Mission Start --> */}
      <section className="w-full py-12 px-6 sm:py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 !text-[#fdbe33]">
            Vision and Mission
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8">
            {/* VISION */}
            <div className="relative w-full sm:w-1/2 h-64 bg-[#030f27] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-3xl font-bold group-hover:opacity-0 transition-opacity duration-300">
                  VISION
                </span>
              </div>
              <div className="absolute inset-0 bg-[#f9f9f9] text-black p-6 flex items-center justify-center transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Making a National Private Company Leading in the Construction Service Industry, Providing Welfare to Employees, Managers, Shareholders, and Other Stakeholders through, Commitment to Good Corporate Governance.
                </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="relative w-full sm:w-1/2 h-64 bg-[#030f27] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-3xl font-bold group-hover:opacity-0 transition-opacity duration-300">
                  MISSION
                </span>
              </div>
              <div className="absolute inset-0 bg-[#f9f9f9] text-black p-6 flex items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20">
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Always Maintain Commitment To Provide Customer Satisfaction In Paying Attention To Quality, The Right Price, And The Right Time Of Work On Each Project That Is Performed And Provide Field Opportunities To Potential Human Resources In Their Fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Vision and Mission End --> */}

      {/* Director Start */}
      <section
        className="w-full py-16 px-6 text-black relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/dir.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#030f27] opacity-80 z-10" />

        <div className="max-w-3xl mx-auto text-center z-20 relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 !text-[#fdbe33]">
            Our Director
          </h2>

          {/* Wrapper untuk Card dan tombol */}
          <div className="relative flex items-center justify-center">
            {/* Tombol kiri */}
            <button
              onClick={prevDirector}
              className="absolute left-0 md:-left-10 z-30 text-[#fdbe33] hover:text-white transition"
              aria-label="Previous Director"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Card dengan efek hover membesar */}
            <div
              className="relative bg-transparent rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105 overflow-hidden w-full max-w-md h-120 shadow-[0_6px_0_rgba(0,0,0,0.1)] hover:shadow-[0_10px_0_rgba(0,0,0,0.2)] mx-12"
            >
              <div className="h-1/7 bg-transparent" />

              {/* Gambar dengan animasi */}
              <motion.div
                className="absolute left-1/2 z-20 transform -translate-x-1/2 w-24 h-24"
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={directors[currentIndex].image}
                  alt={directors[currentIndex].name}
                  className="rounded-full border-4 border-[#fdbe33] shadow-md w-full h-full object-cover"
                />
              </motion.div>

              {/* Konten */}
              <div className="h-5/7 rounded-xl bg-[#030f27] text-white p-10 bottom-0 absolute border-3 border-[#fdbe33]">
                <h3 className="text-2xl font-semibold my-2 !text-[#fdbe33]">
                  {directors[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-200 my-4">
                  {directors[currentIndex].position}
                </p>
                <p className="text-base leading-relaxed text-justify">
                  {directors[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Tombol kanan */}
            <button
              onClick={nextDirector}
              className="absolute right-0 md:-right-10 z-30 text-[#fdbe33] hover:text-white transition"
              aria-label="Next Director"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      </section>
      {/* Director End */}
    </>
  );
};

export default About;
