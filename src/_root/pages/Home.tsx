import "./../../tailwind.css"; // akses pakai path relatif. jika aktif, beberapa kode akan ditimpammm
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  FaHardHat,
  FaBuilding,
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaIndustry,
  FaPlayCircle,
} from "react-icons/fa";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const texts = [
  {
    title: "Construction & Installation",
    subtitle: "For Your Dream Project",
  },
  {
    title: "Professional Scaffolder",
    subtitle: "We Build Your Machine",
  },
  {
    title: "Insulation",
    subtitle: "For Your City Dream",
  },
];

// Hero Animation Start
const images = [
  "assets/building-construction.jpg",
  "assets/carousel-2.jpg",
  "assets/carousel-3.jpg",
];

// Team Animation Start
const teamMembers = [
  {
    name: "Adam Phillips",
    title: "CEO & Founder",
    image: "img/team-1.jpg",
    social: {
      twitter: "https://twitter.com/adam",
      facebook: "https://facebook.com/adam",
      linkedin: "https://linkedin.com/in/adam",
      instagram: "https://instagram.com/adam",
    },
  },
  {
    name: "Dylan Adams",
    title: "Civil Engineer",
    image: "img/team-2.jpg",
    social: {
      twitter: "https://twitter.com/dylan",
      facebook: "https://facebook.com/dylan",
      linkedin: "https://linkedin.com/in/dylan",
      instagram: "https://instagram.com/dylan",
    },
  },
  {
    name: "Jhon Doe",
    title: "Interior Designer",
    image: "img/team-3.jpg",
    social: {
      twitter: "https://twitter.com/jhon",
      facebook: "https://facebook.com/jhon",
      linkedin: "https://linkedin.com/in/jhon",
      instagram: "https://instagram.com/jhon",
    },
  },
  {
    name: "Josh Dunn",
    title: "Painter",
    image: "img/team-4.jpg",
    social: {
      twitter: "https://twitter.com/josh",
      facebook: "https://facebook.com/josh",
      linkedin: "https://linkedin.com/in/josh",
      instagram: "https://instagram.com/josh",
    },
  },
];


// Team Animation End

// FAQ Animation Start
const faqItems = [
  {
    question: "Apa itu layanan kami?",
    answer:
      "Layanan kami adalah solusi digital untuk bisnis Anda, mulai dari pembuatan website hingga pengembangan sistem.",
  },
  {
    question: "Bagaimana cara menghubungi tim?",
    answer:
      "Anda bisa menghubungi kami melalui halaman kontak atau email support kami.",
  },
  {
    question: "Apakah ada biaya langganan?",
    answer:
      "Tergantung pada paket layanan yang Anda pilih, kami menyediakan opsi gratis dan berbayar.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer: "Biasanya antara 1-3 minggu tergantung kompleksitas proyek.",
  },
  {
    question: "Apakah kami mendapatkan garansi?",
    answer: "Ya, setiap layanan memiliki garansi pengerjaan dan perbaikan.",
  },
  {
    question: "Apakah kami mendapatkan garansi?",
    answer: "Ya, setiap layanan memiliki garansi pengerjaan dan perbaikan.",
  },
  {
    question: "Apakah kami mendapatkan garansi?",
    answer: "Ya, setiap layanan memiliki garansi pengerjaan dan perbaikan.",
  },
  {
    question: "Apakah kami mendapatkan garansi?",
    answer: "Ya, setiap layanan memiliki garansi pengerjaan dan perbaikan.",
  },
  {
    question: "Apakah kami mendapatkan garansi?",
    answer: "Ya, setiap layanan memiliki garansi pengerjaan dan perbaikan.",
  },
  {
    question: "Apakah kami mendapatkan garansi?",
    answer: "Ya, setiap layanan memiliki garansi pengerjaan dan perbaikan.",
  },
];
// FAQ Animation End

const testimonials = [
  {
    name: "Andi Pratama",
    profession: "Manajer Proyek Konstruksi",
    image: "/img/testimonial-1.jpg",
    text: "Kualitas pekerjaan sangat luar biasa. Tim bekerja dengan efisien dan selalu tepat waktu dalam menyelesaikan proyek.",
  },
  {
    name: "Sarah Wijaya",
    profession: "Arsitek",
    image: "/img/testimonial-2.jpg",
    text: "Pelayanan sangat profesional dengan hasil yang melebihi ekspektasi. Saya sangat merekomendasikan layanan ini!",
  },
  {
    name: "David Susanto",
    profession: "Kontraktor",
    image: "/img/testimonial-3.jpg",
    text: "Tim yang berpengalaman dan responsif. Semua detail pekerjaan diperhatikan dengan baik, memberikan hasil yang sempurna.",
  },
];

const services = [
  {
    title: "Building Construction",
    image: "img/service-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.",
    delay: 0.1,
  },
  {
    title: "House Renovation",
    image: "img/service-2.jpg",
    description:
      "Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor.",
    delay: 0.2,
  },
  {
    title: "Architecture Design",
    image: "img/service-3.jpg",
    description:
      "Auctor id gravida condimentum, viverra quis sem. Proin nec fermentum diam.",
    delay: 0.3,
  },
  {
    title: "Interior Design",
    image: "img/service-4.jpg",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    delay: 0.4,
  },
  {
    title: "Fixing & Support",
    image: "img/service-5.jpg",
    description:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    delay: 0.5,
  },
  {
    title: "Painting",
    image: "img/service-6.jpg",
    description: "Et quasi architecto beatae vitae dicta sunt explicabo.",
    delay: 0.6,
  },
];

const blogData = [
  {
    id: 1,
    imageSrc: "img/blog-1.jpg",
    title: "Lorem Ipsum",
    author: "Admin",
    category: "Construction",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae, corrupti laudantium culpa recusandae ab doloremque quis unde. Minus asperiores saepe ab.",
  },
  {
    id: 2,
    imageSrc: "img/blog-2.jpg",
    title: "Dolor Sit Amet",
    author: "Admin",
    category: "Technology",
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.",
  },
  {
    id: 3,
    imageSrc: "img/blog-3.jpg",
    title: "Curabitur Facilisis",
    author: "Admin",
    category: "Design",
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor.",
  },
];


const Home = () => {



  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const extendedSlides = [
    { ...texts[texts.length - 1], src: images[images.length - 1] },
    ...images.map((src, i) => ({ ...texts[i], src })),
    { ...texts[0], src: images[0] },
  ];

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(images.length);
      }, 700);
    } else if (current === images.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [current]);
  // Hero Animation End

  // Fact Animation Start
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
  // Fact Animation End

  // Service Animation Start

  // Service Animation End

  // Video Animation Start
  const [isOpen, setIsOpen] = useState(false);
  // Video Animation End



  const [activeIndex, setActiveIndex] = useState(0);

  const testiPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testiNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-screen sm:h-fit overflow-hidden relative">
        <div
          ref={carouselRef}
          className={`flex ${isTransitioning
            ? "transition-transform duration-700 ease-in-out"
            : ""
            }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-screen sm:h-auto flex-shrink-0 relative"
            >
              <img
                src={slide.src}
                alt={`Carousel ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
                  >
                    <motion.p
                      key={`title-${current}`}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="text-xl sm:text-4xl mb-2"
                    >
                      {texts[current - 1]?.title}
                    </motion.p>

                    <motion.p
                      key={`subtitle-${current}`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl font-bold sm:text-6xl mb-6"
                    >
                      {texts[current - 1]?.subtitle}
                    </motion.p>

                    <motion.button
                      key={`button-${current}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="border-2 border-white text-white px-12 py-3 transition-colors duration-300 hover:bg-[#fdbe33] hover:!text-[#030f27] hover:border-0"
                    >
                      Explore Our Plan
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <button
          onClick={() => {
            handlePrev();
            startAutoSlide();
          }}
          className="absolute top-1/2 left-4 sm:left-23 -translate-y-1/2 bg-transparent bg-opacity-60 hover:bg-opacity-100 p-2 rounded-full text-3xl text-gray-500 hover:text-white"
        >
          <MdOutlineKeyboardArrowLeft className="h-10 w-10" />
        </button>

        <button
          onClick={() => {
            handleNext();
            startAutoSlide();
          }}
          className="absolute top-1/2 right-4 sm:right-23 -translate-y-1/2 bg-transparent bg-opacity-60 hover:bg-opacity-100 p-2 rounded-full text-3xl text-gray-500 hover:text-white"
        >
          <MdOutlineKeyboardArrowRight className="h-10 w-10" />
        </button>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- Feature Start --> */}
      <motion.div
        className="flex flex-wrap w-full mb-12 h-60"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Kolom 1 */}
        <div className="w-full sm:w-1/3 p-6 flex items-center feature-bg-dark">
          <div className="flex items-center space-x-4">
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full text-yellow-400">
              <FaHardHat size={60} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-yellow-400">
                Expert Worker
              </h1>
              <p className="text-sm">
                Skilled and certified professionals you can trust.
              </p>
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="w-full sm:w-1/3 p-6 flex items-center feature-bg-light">
          <div className="flex items-center space-x-4">
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full text-black">
              <FaBuilding size={60} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-black">Quality Work</h1>
              <p className="text-black text-sm">
                Precision and excellence in every project we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Kolom 3 */}
        <div className="w-full sm:w-1/3 p-6 flex items-center feature-bg-dark">
          <div className="flex items-center space-x-4">
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full text-yellow-400">
              <FaPhoneAlt size={60} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-yellow-400">
                24/7 Support
              </h1>
              <p className="text-sm">
                Ready to assist you anytime, day or night.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Feature End */}

      {/* About Start */}
      <motion.div
        className="animate-fade-in-up px-4 py-8 md:py-16"
        initial={{ opacity: 0, y: 50 }} // Awal animasi (tidak terlihat dan bergeser ke bawah)
        animate={{ opacity: 1, y: 0 }} // Animasi akhir (terlihat dan posisinya normal)
        transition={{ duration: 0.6, ease: "easeOut" }} // Durasi animasi dengan easeOut
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
                delay: 0.6, // Menunggu 0.6 detik setelah animasi pertama selesai
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
                delay: 0.8, // Menunggu 0.8 detik setelah animasi pertama selesai
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
                  PT. Star Plus is a steel fabrication and installation company established in 2013 in Tangerang, Indonesia. We specialize in civil construction, steel structure, pipe fabrication, assembly, electrical work, and manpower supply. Our experienced and ISO-certified team ensures high-quality results.
                </p>
                <p>
                  We deliver safe and timely services, supported by complete facilities and strong professional values based on communication, trust, and integrity in working with our partners and clients.
                </p>
              </div>

              <div className="about mt-8">
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* About End */}

      {/* <!-- Fact Start --> */}
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

      {/* <!-- Service Start --> */}
      <section className="bg-white py-16">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold text-lg">Our Services</p>
          <p className="text-5xl font-bold text-gray-900">
            We Provide Services
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.6 }}
              className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white"
            >
              {/* Gambar dengan overlay */}
              <div className="relative group h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#030f27] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-sm px-6 text-center">
                  {service.description}
                </div>
              </div>

              {/* Judul dan tombol */}
              <div
                className="flex justify-between items-center h-16"
                style={{ backgroundColor: "#030f27" }}
              >
                <h5
                  className="text-lg leading-snug px-4 py-4"
                  style={{ color: "#fdbe33" }}
                >
                  {service.title}
                </h5>
                <span
                  style={{
                    backgroundColor: "#fdbe33",
                  }}
                  // Ubah warna teks saat parent di-hover
                  className="flex items-center text-2xl font-bold px-6 transition-colors duration-300 h-full group-hover:text-white text-[#030f27]"
                >
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* <!-- Service End --> */}

      {/* <!-- Video Start --> */}
      <section className="relative h-[500px]">
        {/* Background fixed */}
        <div
          className="w-full h-full bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678134786065-8e264416fa6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="w-full h-full bg-[#030f27]/80 flex items-center justify-center">
            {/* Play Button with pulse animation */}
            <div className="relative">
              <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-75 scale-110"></span>
              <button
                onClick={() => setIsOpen(true)}
                className="relative w-24 h-24 bg-transparent transition flex items-center justify-center shadow-lg z-10"
              >
                <FaPlayCircle className="text-yellow-400 text-8xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition duration-300">
            <div className="relative w-full max-w-4xl aspect-video bg-black">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white text-4xl hover:text-yellow-400 transition"
              >
                &times;
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Cjmv_0T90N4?autoplay=1"
                title="Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
      {/* <!-- Video End --> */}

      {/* <!-- Team Start --> */}
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <p className="text-[#fdbe33] text-lg">Our Team</p>
          <h2 className="text-4xl font-semibold text-yellow-500">
            Meet Our Engineer
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              className="relative team-item overflow-hidden border border-gray-300 bg-[#121518] group hover:bg-[#FDBE33] transition-all duration-300"
            >
              {/* Social Icons - Appear on hover */}
              <div className="absolute top-0 left-0 flex flex-col bg-[#121518] group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-10">
                <a href={member.social.twitter} target="_blank">
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                    <i className="fab fa-twitter text-white" />
                  </div>
                </a>
                <a href={member.social.facebook} target="_blank">
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                    <i className="fab fa-facebook-f text-white" />
                  </div>
                </a>
                <a href={member.social.linkedin} target="_blank">
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                    <i className="fab fa-linkedin-in text-white" />
                  </div>
                </a>
                <a href={member.social.instagram} target="_blank">
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-[#FDBE33] transition">
                    <i className="fab fa-instagram text-white" />
                  </div>
                </a>
              </div>

              {/* Image */}
              <div className="team-img">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Text */}
              <div className="team-text text-center m-4">
                <p className="text-xl font-bold py-2 text-[#FDBE33] group-hover:text-[#121518] transition-all duration-300">
                  {member.name}
                </p>
                <p className="text-white">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <!-- Team End --> */}

      {/* <!-- FAQs Start --> */}
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
      {/* <!-- FAQs End --> */}

      {/* <!-- Testimonial Start --> */}
      <div
        className="w-full mx-auto text-center relative bg-fixed bg-center bg-cover h-128"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678134786065-8e264416fa6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="w-full h-full bg-[#030f27]/80 flex flex-col items-center justify-center">
          {/* Gambar Profil */}
          <div className="flex items-center justify-center">
            {/* Thumbnail Kiri */}
            <img
              src={
                testimonials[
                  (activeIndex - 1 + testimonials.length) % testimonials.length
                ].image
              }
              alt="Previous Testimonial"
              className="w-16 h-16 rounded-full object-cover opacity-50 transition duration-300"
            />

            {/* Gambar Tengah */}
            <motion.img
              key={activeIndex}
              src={testimonials[activeIndex].image}
              alt="Active Testimonial"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Thumbnail Kanan */}
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt="Next Testimonial"
              className="w-16 h-16 rounded-full object-cover opacity-50 transition duration-300"
            />
          </div>

          {/* Konten Testimoni */}
          <motion.div
            key={`text-${activeIndex}`}
            className="mt-6 px-4 text-white max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xl font-semibold text-[#fdbe33]">
              {testimonials[activeIndex].name}
            </span>
            <p className="font-style: italic font-[10px] text-gray-300 pt-1">
              {testimonials[activeIndex].profession}
            </p>
            <p className="mt-2 text-white">{testimonials[activeIndex].text}</p>
          </motion.div>

          {/* Tombol Navigasi */}
          <button
            onClick={testiPrev}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-transparent text-white hover:bg-primary hover:text-[#fdbe33] transition h-16 w-16 flex items-center justify-center rounded-full"
          >
            <HiChevronLeft className="text-5xl" />
          </button>

          <button
            onClick={testiNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-transparent text-white hover:bg-primary hover:text-[#fdbe33] transition h-16 w-16 flex items-center justify-center rounded-full"
          >
            <HiChevronRight className="text-5xl" />
          </button>
        </div>
      </div>

      {/* <!-- Testimonial End --> */}

      {/* <!-- Blog Start --> */}
      <div className="max-w-6xl mx-auto px-4 h-screen py-12">
        <div className="text-center mb-12">
          <p className="text-[#fdbe33] font-semibold">Latest Blog</p>
          <h2 className="text-3xl font-bold">Latest From Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-120"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <img
                src={blog.imageSrc}
                alt={`Blog ${blog.id}`}
                className="w-full h-48 object-cover"
              />
              <div className="w-full h-1/8 flex">
                <div className="w-5/6 h-full flex items-center justify-center text-center bg-[#030f27] text-2xl text-[#fdbe33]">
                  {blog.title}
                </div>
                <div className="w-1/6 bg-[#fdbe33] h-full flex items-center justify-center text-center text-5xl text-[#030f27] hover:text-white transition-colors duration-300">
                  +
                </div>
              </div>
              <div className="w-full h-1/8 flex items-center text-center justify-between px-20">
                <span className="text-sm text-gray-600 hover:text-[#fdbe33] transition-colors duration-300">
                  by {blog.author}
                </span>
                <span className="text-sm text-gray-600 hover:text-[#fdbe33] transition-colors duration-300">
                  in {blog.category}
                </span>
              </div>
              <div className="w-full h-1/3 items-center text-center justify-center flex px-8">
                {blog.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <!-- Blog End --> */}
    </>
  );
};

export default Home;
