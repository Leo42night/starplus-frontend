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
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Services</p>
            <h2>We Provide Services</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-1.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Building Construction</h3>
                  <a
                    className="btn"
                    href="img/service-1.jpg"
                    data-lightbox="service"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-2.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>House Renovation</h3>
                  <a
                    className="btn"
                    href="img/service-2.jpg"
                    data-lightbox="service"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-3.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Architecture Design</h3>
                  <a
                    className="btn"
                    href="img/service-3.jpg"
                    data-lightbox="service"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-4.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Interior Design</h3>
                  <a
                    className="btn"
                    href="img/service-4.jpg"
                    data-lightbox="service"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-5.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Fixing & Support</h3>
                  <a
                    className="btn"
                    href="img/service-5.jpg"
                    data-lightbox="service"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-6.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Painting</h3>
                  <a
                    className="btn"
                    href="img/service-6.jpg"
                    data-lightbox="service"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Video Start --> */}
      <div className="video wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <button
            type="button"
            className="btn-play"
            data-toggle="modal"
            data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=OPwzuYHXP2MkEIrf"
            data-target="#videoModal"
          >
            <span></span>
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  // src=""
                  id="video"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video End --> */}

      {/* <!-- Team Start --> */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Team</p>
            <h2>Meet Our Engineer</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-1.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>CEO & Founder</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-fb" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="social-li" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="social-in" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-2.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Dylan Adams</h2>
                  <p>Civil Engineer</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-fb" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="social-li" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="social-in" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-3.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Jhon Doe</h2>
                  <p>Interior Designer</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-fb" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="social-li" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="social-in" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-4.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Josh Dunn</h2>
                  <p>Painter</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="social-fb" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="social-li" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="social-in" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- FAQs Start --> */}
      <div className="faqs">
        <div className="container">
          <div className="section-header text-center">
            <p>Frequently Asked Question</p>
            <h2>You May Ask</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div id="accordion-1">
                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseOne"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseTwo"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseThree"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseFour"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseFive"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-parent="#accordion-1"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div id="accordion-2">
                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseSix"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    data-parent="#accordion-2"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseSeven"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse"
                    data-parent="#accordion-2"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseEight"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseEight"
                    className="collapse"
                    data-parent="#accordion-2"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseNine"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseNine"
                    className="collapse"
                    data-parent="#accordion-2"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseTen"
                    >
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseTen"
                    className="collapse"
                    data-parent="#accordion-2"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQs End --> */}

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
