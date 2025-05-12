import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";

const directors = [
  {
    name: "John Doe",
    position: "Chief Executive Officer",
    image: "/img/testimonial-1.jpg",
    description:
      "John has led Star Plus since 2015 with a vision to expand regionally and uphold industry standards. With over 20 years of experience in the steel and construction industry, his leadership drives the company’s success.",
  },
  {
    name: "Jane Smith",
    position: "Chief Operating Officer",
    image: "/img/testimonial-2.jpg",
    description:
      "Jane brings operational excellence and strategic oversight, ensuring seamless execution of all projects and maintaining high-quality standards across the board.",
  },
  {
    name: "Michael Lee",
    position: "Chief Technical Officer",
    image: "/img/testimonial-3.jpg",
    description:
      "Michael leads our technology and innovation. His technical acumen and leadership keep us at the forefront of the industry’s evolving needs.",
  },
];

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => setExpanded(!expanded);

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
      <section className="relative w-full min-h-screen sm:h-fit overflow-hidden border-4 border-black text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/assets/about.jpg')",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#030f27] opacity-80 z-10" />

        {/* Content */}
        <div className="relative z-20 px-6 py-12 sm:py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 !text-[#fdbe33]">
            About Us
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            PT. Star Plus is a steel fabrication and installation company
            established in 2013 at Tangerang, Indonesia. Our company is engaged
            and developing in the sector of civil construction, steel structure,
            fabrication pipes, tank fabrication, assembly and erection work...
            {!expanded && (
              <span className="text-blue-300 font-semibold"> (read more)</span>
            )}
          </p>

          {expanded && (
            <div className="text-base sm:text-lg leading-relaxed mt-4 space-y-4">
              <p>
                We are also supported by quality human resources and credibility
                that has been tested and able to make a real contribution in the
                implementation and execution of various projects.
              </p>
              <p>
                STAR PLUS has excellent reputation for quality steel fabrication
                and erection, performance and safety. Our crews are highly
                skilled in steel-related machines, welding, fitting, assembly,
                pumps, piping, motors, rigging, demolition, and more — all
                supported by experienced engineers and capable foremen.
              </p>
              <p>
                Our workshop facility is equipped with machines for steel
                fabrication, shot blasting, painting, assembly, and repair. Our
                trained and certified workers follow ISO standards and are
                always ready to handle even the toughest jobs.
              </p>
              <p>
                We do our best to provide competitive bids, work within scope,
                and deliver projects safely and on time. We value communication,
                trust, and integrity with our partners.
              </p>
              <p>
                In conclusion, STAR PLUS sincerely promises to always serve you
                better and be a company that continuously reforms to offer a
                better working environment and satisfactory benefits to our
                partners and clients.
              </p>
            </div>
          )}

          <button
            onClick={toggleReadMore}
            className="mt-6 px-4 py-2 border border-white text-sm sm:text-base rounded-lg hover:bg-white hover:text-black transition"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>
      <section className="w-full  py-12 px-6 sm:py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 !text-[#fdbe33]">
            Vision and Mission
          </h2>
          {/* Kontainer untuk Visi dan Misi */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-12 ">
            {/* Visi */}
            <div className="w-full sm:w-1/2 bg-[#f9f9f9] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-120">
              <div className="bg-[#030f27] w-full h-16 flex items-center justify-center rounded-t-lg">
                <span className="text-2xl font-semibold !text-[#fdbe33]">
                  Vision
                </span>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <p className="text-base sm:text-lg leading-relaxed text-justify">
                  Making a National Private Company Leading in the Construction
                  Service Industry, Providing Welfare to Employees, Managers,
                  Shareholders, and Other Stakeholders through, Commitment to
                  Good Corporate Governance.
                </p>
              </div>
            </div>

            {/* Garis Pemisah */}
            <div className="hidden sm:block border border-solid border-b-450 border-[#fdbe33]" />
            {/* Misi */}
            <div className="w-full sm:w-1/2 bg-[#f9f9f9] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-120">
              <div className="bg-[#030f27] w-full h-16 flex items-center justify-center rounded-t-lg">
                <span className="text-2xl font-semibold !text-[#fdbe33]">
                  Mission
                </span>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <p className="text-base sm:text-lg leading-relaxed text-justify">
                  Always Maintain Commitment To Provide Customer Satisfaction In
                  Paying Attention To Quality, The Right Price, And The Right
                  Time Of Work On Each Project That Is Performed And Provide
                  Field Opportunities To Potential Human Resources In Their
                  Fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

            {/* Card */}
            <div className="relative bg-transparent rounded-xl transition-shadow duration-300 overflow-hidden w-full max-w-md h-120 shadow-[0_6px_0_rgba(0,0,0,0.1)] hover:shadow-[0_10px_0_rgba(0,0,0,0.2)] mx-12">
              <div className="h-1/7 bg-transparent" />

              {/* Gambar dengan Animasi */}
              <motion.div
                className="absolute left-1/2 z-20 transform -translate-x-1/2 w-24 h-24"
                key={currentIndex} // Memicu animasi saat currentIndex berubah
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
    </>
  );
};

export default About;
