import { motion } from "framer-motion";

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

const Service = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Our Services</a>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Service;
