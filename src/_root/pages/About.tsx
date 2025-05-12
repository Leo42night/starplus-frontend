import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";
import {
  FaHardHat,
  FaBuilding,
  FaMapMarkedAlt,
  FaIndustry,
} from "react-icons/fa";

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

const faqItems = [
  {
    question: "Apa saja layanan yang ditawarkan oleh perusahaan Anda?",
    answer:
      "Kami menyediakan layanan konstruksi mekanikal seperti instalasi pipa industri, sistem HVAC, fire protection, dan perawatan fasilitas mekanikal.",
  },
  {
    question: "Bagaimana cara menghubungi tim proyek Anda?",
    answer:
      "Anda dapat menghubungi kami melalui halaman kontak di website atau langsung melalui email dan nomor telepon yang tersedia.",
  },
  {
    question: "Apakah perusahaan menyediakan konsultasi proyek?",
    answer:
      "Ya, kami menyediakan layanan konsultasi teknis dan survei awal sebelum proyek dimulai.",
  },
  {
    question: "Berapa lama durasi pengerjaan proyek biasanya?",
    answer:
      "Durasi tergantung pada skala dan kompleksitas proyek, namun rata-rata proyek kami selesai dalam 2-8 minggu.",
  },
  {
    question: "Apakah ada garansi untuk pekerjaan yang dilakukan?",
    answer:
      "Tentu, kami memberikan garansi kualitas pengerjaan dan perbaikan untuk setiap proyek yang kami tangani.",
  },
  {
    question: "Apakah perusahaan menangani proyek skala besar?",
    answer:
      "Ya, kami berpengalaman dalam menangani proyek industri berskala besar di berbagai sektor seperti manufaktur, energi, dan properti komersial.",
  },
  {
    question: "Apakah perusahaan memiliki sertifikasi resmi?",
    answer:
      "Kami telah memiliki sertifikasi yang dibutuhkan seperti ISO dan sertifikat keselamatan kerja (K3).",
  },
  {
    question: "Bagaimana proses kerja sama dimulai?",
    answer:
      "Proses kerja sama dimulai dengan konsultasi awal, peninjauan lokasi, pengajuan penawaran, lalu penandatanganan kontrak.",
  },
  {
    question:
      "Apakah perusahaan menyediakan perawatan rutin setelah instalasi?",
    answer:
      "Ya, kami menyediakan layanan maintenance rutin maupun darurat untuk memastikan sistem tetap berfungsi optimal.",
  },
  {
    question: "Apakah Anda melayani proyek di luar kota atau pulau?",
    answer:
      "Kami siap menangani proyek di berbagai wilayah Indonesia sesuai dengan kebutuhan klien.",
  },
];

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

  const [expertWorkers, setExpertWorkers] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [runningProjects, setRunningProjects] = useState(0);

  useEffect(() => {
    // Animasi angka untuk Expert Workers
    let count = 0;
    const interval1 = setInterval(() => {
      if (count < 109) {
        count++;
        setExpertWorkers(count);
      } else {
        clearInterval(interval1);
      }
    }, 10);

    // Animasi angka untuk Happy Clients
    count = 0;
    const interval2 = setInterval(() => {
      if (count < 485) {
        count++;
        setHappyClients(count);
      } else {
        clearInterval(interval2);
      }
    }, 10);

    // Animasi angka untuk Completed Projects
    count = 0;
    const interval3 = setInterval(() => {
      if (count < 789) {
        count++;
        setCompletedProjects(count);
      } else {
        clearInterval(interval3);
      }
    }, 10);

    // Animasi angka untuk Running Projects
    count = 0;
    const interval4 = setInterval(() => {
      if (count < 890) {
        count++;
        setRunningProjects(count);
      } else {
        clearInterval(interval4);
      }
    }, 10);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

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

      <div className="fact-section">
        <div className="fact-container">
          {/* Left */}
          <div className="fact-left">
            <div className="fact-grid">
              <div className="fact-item">
                <div className="fact-icon">
                  <FaHardHat />
                </div>
                <div className="fact-text">
                  <h2>{expertWorkers}</h2>
                  <p>Expert Workers</p>
                </div>
              </div>
              <div className="fact-item">
                <div className="fact-icon">
                  <FaBuilding />
                </div>
                <div className="fact-text">
                  <h2>{happyClients}</h2>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="fact-right">
            <div className="fact-grid">
              <div className="fact-item">
                <div className="fact-icon">
                  <FaMapMarkedAlt />
                </div>
                <div className="fact-text">
                  <h2>{completedProjects}</h2>
                  <p>Completed Projects</p>
                </div>
              </div>
              <div className="fact-item">
                <div className="fact-icon">
                  <FaIndustry />
                </div>
                <div className="fact-text">
                  <h2>{runningProjects}</h2>
                  <p>Running Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fact End --> */}

      <div className="faq-container">
        <div className="faq-title-container">
          <div className="faq-title">
            <p className="faq-subtitle">Frequently Asked Question</p>
            <p className="faq-heading">You May Ask</p>
          </div>

          <div className="faq-grid">
            <div className="faq-divider-vertical"></div>

            {faqItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              const direction = isLeft ? -100 : 100;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: direction }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    type: "tween",
                    ease: "easeOut",
                  }}
                  className="faq-item"
                >
                  <button
                    className="faq-item-button"
                    onClick={() => {
                      const content = document.getElementById(`faq-${i}`);
                      if (content) {
                        content.classList.toggle("show");
                      }
                    }}
                  >
                    <span>{item.question}</span>
                    <span className="plus">+</span>
                  </button>
                  <div id={`faq-${i}`} className="faq-item-content">
                    {item.answer}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

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
