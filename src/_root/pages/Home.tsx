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


const Home = () => {
  // Hero Animation Start
  const images = [
    "img/carousel-1.jpg",
    "img/carousel-2.jpg",
    "img/carousel-3.jpg",
  ];

  const texts = [
    {
      title: "We Are Professional",
      subtitle: "For Your Dream Project",
    },
    {
      title: "Professional Builder",
      subtitle: "We Build Your Home",
    },
    {
      title: "We Are Trusted",
      subtitle: "For Your Dream Home",
    },
  ];

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
  // Service Animation End

  // Video Animation Start
  const [isOpen, setIsOpen] = useState(false);
  // Video Animation End

  // Team Animation Start
  const teamMembers = [
    {
      name: "Adam Phillips",
      title: "CEO & Founder",
      image: "img/team-1.jpg",
      social: {
        twitter: "",
        facebook: "",
        linkedin: "",
        instagram: "",
      },
    },
    {
      name: "Dylan Adams",
      title: "Civil Engineer",
      image: "img/team-2.jpg",
      social: {
        twitter: "",
        facebook: "",
        linkedin: "",
        instagram: "",
      },
    },
    {
      name: "Jhon Doe",
      title: "Interior Designer",
      image: "img/team-3.jpg",
      social: {
        twitter: "",
        facebook: "",
        linkedin: "",
        instagram: "",
      },
    },
    {
      name: "Josh Dunn",
      title: "Painter",
      image: "img/team-4.jpg",
      social: {
        twitter: "",
        facebook: "",
        linkedin: "",
        instagram: "",
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

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-screen sm:h-fit overflow-hidden relative">
        <div
          ref={carouselRef}
          className={`flex ${
            isTransitioning
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
                      className="text-4xl sm:text-6xl mb-6"
                    >
                      {texts[current - 1]?.subtitle}
                    </motion.p>

                    <motion.button
                      key={`button-${current}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="border border-white text-white px-12 py-3 hover:bg-white hover:text-black"
                    >
                      Get a Quote
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
                Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit
                non
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
                Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit
                non
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
                Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit
                non
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
                src="img/about.jpg"
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
                <p className="text-yellow-500 text-sm uppercase font-semibold tracking-wide">
                  Welcome to Builderz
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  25 Years Experience
                </h2>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem. Curabitur non nisl nec nisi
                  scelerisque maximus. Aenean consectetur convallis porttitor.
                  Aliquam interdum at lacus non blandit.
                </p>
              </div>

              <div className="about">
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
          <h2 className="text-4xl font-bold text-gray-900">
            We Provide Services
          </h2>
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
                <h3
                  className="text-md font-bold leading-snug px-2 py-4"
                  style={{ color: "#fdbe33" }}
                >
                  {service.title}
                </h3>
                <span
                  style={{
                    backgroundColor: "#fdbe33",
                  }}
                  // Ubah warna teks saat parent di-hover
                  className="flex items-center text-2xl font-bold px-6 transition-colors duration-300 h-full group-hover:text-white"
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
            backgroundImage: `url('https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg')`,
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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
          <p className="text-gray-600 text-lg">Our Team</p>
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
                delay: index * 0.3, // Menambahkan delay untuk animasi satu per satu
                ease: "easeOut",
              }}
              className="team-item border border-gray-300 bg-[#121518] group hover:bg-[#FDBE33]"
            >
              <div className="team-img">
                <img
                  src={member.image}
                  alt="Team Image"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="team-text text-center mt-4">
                {/* Menambahkan hover efek untuk teks dan memastikan warna teks kuning pada awal */}
                <h2 className="team-member-name text-xl font-bold py-2 text-[#FDBE33] group-hover:text-[#121518] transition-all duration-300">
                  {member.name}
                </h2>
                <p className="text-white py-1 mt-2">{member.title}</p>
              </div>
              <div className="team-social flex justify-center mt-4">
                {member.social.twitter && (
                  <a className="social-tw mx-2" href={member.social.twitter}>
                    <i className="fab fa-twitter text-xl text-blue-500"></i>
                  </a>
                )}
                {member.social.facebook && (
                  <a className="social-fb mx-2" href={member.social.facebook}>
                    <i className="fab fa-facebook-f text-xl text-blue-600"></i>
                  </a>
                )}
                {member.social.linkedin && (
                  <a className="social-li mx-2" href={member.social.linkedin}>
                    <i className="fab fa-linkedin-in text-xl text-blue-700"></i>
                  </a>
                )}
                {member.social.instagram && (
                  <a className="social-in mx-2" href={member.social.instagram}>
                    <i className="fab fa-instagram text-xl text-pink-500"></i>
                  </a>
                )}
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
            <h2 className="faq-heading">You May Ask</h2>
            <div className="faq-divider"></div>
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

      <div className="w-full items-center justify-center flex flex-col border-4">
        <div className="w-1/2 items-center justify-center flex flex-col relative">
          {" "}
          <img
            className="rounded-full z-10  w-40 h-40"
            src="img/testimonial-1.jpg"
            alt="Testimonial"
          />
          <img
            className="rounded-full ml-30 absolute w-30 h-30"
            src="img/testimonial-2.jpg"
            alt="Testimonial"
          />
          <img
            className="rounded-full mr-30 absolute w-30 h-30"
            src="img/testimonial-3.jpg"
            alt="Testimonial"
          />
        </div>
        <div>"</div>
        <div className="items-center justify-center">halo</div>
        <div className="items-center justify-center">salam</div>
      </div>

      {/* <!-- Testimonial Start --> */}
      <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-slider-nav">
                <div className="slider-nav">
                  <img src="img/testimonial-1.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-2.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-3.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-4.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-1.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-2.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-3.jpg" alt="Testimonial" />
                </div>
                <div className="slider-nav">
                  <img src="img/testimonial-4.jpg" alt="Testimonial" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonial-slider">
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
                <div className="slider-item">
                  <h3>Customer Name</h3>
                  <h4>profession</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem. Curabitur non nisl nec nisi
                    scelerisque maximus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!-- Blog Start --> */}
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Latest Blog</p>
            <h2>Latest From Our Blog</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-1.jpg" alt="Image" />
                </div>
                <div className="blog-title">
                  <h3>Lorem ipsum dolor sit</h3>
                  <a className="btn" href="">
                    +
                  </a>
                </div>
                <div className="blog-meta">
                  <p>
                    By<a href="">Admin</a>
                  </p>
                  <p>
                    In<a href="">Construction</a>
                  </p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate. Aliquam
                    metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-2.jpg" alt="Image" />
                </div>
                <div className="blog-title">
                  <h3>Lorem ipsum dolor sit</h3>
                  <a className="btn" href="">
                    +
                  </a>
                </div>
                <div className="blog-meta">
                  <p>
                    By<a href="">Admin</a>
                  </p>
                  <p>
                    In<a href="">Construction</a>
                  </p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate. Aliquam
                    metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-3.jpg" alt="Image" />
                </div>
                <div className="blog-title">
                  <h3>Lorem ipsum dolor sit</h3>
                  <a className="btn" href="">
                    +
                  </a>
                </div>
                <div className="blog-meta">
                  <p>
                    By<a href="">Admin</a>
                  </p>
                  <p>
                    In<a href="">Construction</a>
                  </p>
                </div>
                <div className="blog-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate. Aliquam
                    metus tortor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}
    </>
  );
};

export default Home;
