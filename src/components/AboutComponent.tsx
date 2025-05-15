import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
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
            </div>

            <div className="about mt-8">
              <a href="/about" className="btn">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}