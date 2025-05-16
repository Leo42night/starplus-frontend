import { useState } from "react";
import { motion } from "framer-motion";
import services from "../data/services";

export default function ServiceComponent({ maxItems }: { maxItems?: number }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sortedServices = services.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12">
        <p className="text-yellow-500 font-semibold text-lg">Our Services</p>
        <p className="text-5xl font-bold text-gray-900">We Provide Services</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {sortedServices.slice(0, maxItems).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
            className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white cursor-pointer"
            onClick={() => setSelectedImage(service.image[0])}
          >
            {/* Gambar dengan overlay */}
            <div className="relative group h-96 overflow-hidden">
              <img
                src={service.image[0]}
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
                className="flex items-center text-2xl font-bold px-6 transition-colors duration-300 h-full group-hover:text-white text-[#030f27]"
              >
                +
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Zoom Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-[#fdbe33] text-3xl font-bold z-10 bg-[#030f27]/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#030f27] transition"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
