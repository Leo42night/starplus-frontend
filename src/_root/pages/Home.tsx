import "./../../tailwind.css"; // akses pakai path relatif. jika aktif, beberapa kode akan ditimpammm
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  FaHardHat,
  FaBuilding,
  FaPhoneAlt,
  FaPlayCircle,
  FaQuoteRight
} from "react-icons/fa";

import TeamsComponent from "../../components/TeamsComponent";
import FaqComponent from "../../components/FaqComponent";
import AboutComponent from "../../components/AboutComponent";
import FactComponent from "../../components/FactComponent";

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

// Team Animation End



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
      "Kami menyediakan layanan konstruksi bangunan dengan spesialisasi pada sistem mekanikal dan instalasi industri.",
    delay: 0.1,
  },
  {
    title: "House Renovation",
    image: "img/service-2.jpg",
    description:
      "Renovasi rumah mencakup perbaikan sistem pipa, ventilasi, dan instalasi mekanikal lainnya sesuai standar keselamatan.",
    delay: 0.2,
  },
  {
    title: "Architecture Design",
    image: "img/service-3.jpg",
    description:
      "Kami bekerja sama dengan arsitek untuk merancang sistem mekanikal yang efisien dan terintegrasi dalam bangunan.",
    delay: 0.3,
  },
  {
    title: "Interior Design",
    image: "img/service-4.jpg",
    description:
      "Desain interior kami mendukung pemasangan sistem HVAC, pipa tersembunyi, dan integrasi peralatan teknis.",
    delay: 0.4,
  },
  {
    title: "Fixing & Support",
    image: "img/service-5.jpg",
    description:
      "Layanan perbaikan dan dukungan teknis untuk sistem mekanikal seperti pompa, valve, dan peralatan industri.",
    delay: 0.5,
  },
  {
    title: "Painting",
    image: "img/service-6.jpg",
    description:
      "Pengecatan akhir dengan bahan khusus yang tahan terhadap panas dan korosi untuk perlindungan sistem mekanikal.",
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

  // Video Animation Start
  const [isOpen, setIsOpen] = useState(false);
  // Video Animation End

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-500px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide setiap 500ms
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

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
      <AboutComponent />
      {/* About End */}

      {/* <!-- Fact Start --> */}
      <FactComponent />
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
      <TeamsComponent maxItems={4} />
      {/* <!-- Team End --> */}

      {/* FAQ Start */}
      <FaqComponent />
      {/* FAQ End */}

      {/* <!-- Testimonial Start --> */}
      <div
        ref={containerRef}
        className="w-full mx-auto text-center relative bg-fixed bg-center bg-cover h-128"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678134786065-8e264416fa6f?q=80&w=1170&auto=format&fit=crop')`,
        }}
      >
        <div className="w-full h-full bg-[#030f27]/80 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Gambar Profil */}
          <div className="flex items-center justify-center relative">
            {/* Thumbnail Kiri */}
            <img
              src={
                testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].image
              }
              alt="Previous"
              className="w-16 h-16 rounded-full object-cover opacity-50 transition duration-300"
            />

            {/* Gambar Utama + Ikon Kutipan */}
            <div className="relative mx-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`image-${activeIndex}`}
                  src={testimonials[activeIndex].image}
                  alt="Active"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#fdbe33] shadow-lg"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
              <FaQuoteRight className="text-[#fdbe33] text-3xl absolute -bottom-4 -right-4" />
            </div>

            {/* Thumbnail Kanan */}
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt="Next"
              className="w-16 h-16 rounded-full object-cover opacity-50 transition duration-300"
            />
          </div>

          {/* Konten Testimoni */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              className="mt-6 px-4 text-white max-w-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xl font-semibold text-[#fdbe33]">
                {testimonials[activeIndex].name}
              </span>
              <p className="italic text-sm text-gray-300 pt-1">
                {testimonials[activeIndex].profession}
              </p>
              <p className="mt-2 text-white">{testimonials[activeIndex].text}</p>
            </motion.div>
          </AnimatePresence>
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
