import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
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

export default function FaqComponent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Bagi data ke dua kolom
  const halfway = Math.ceil(faqData.length / 2);
  const leftItems = faqData.slice(0, halfway);
  const rightItems = faqData.slice(halfway);

  const renderItem = (item: FAQItem, index: number) => {
    const isActive = activeIndex === index;

    return (
      <div key={index} className="mb-3">
        <button
          onClick={() => toggle(index)}
          className={`w-full text-left border border-gray-300 px-4 py-3 rounded-md transition-all duration-300 ${isActive ? "bg-yellow-400 text-white" : "bg-white text-gray-800"
            }`}
        >
          <div className="flex justify-between items-center">
            <span>{item.question}</span>
            <span className="text-xl">{isActive ? "−" : "+"}</span>
          </div>
        </button>
        {isActive && (
          <div className="border border-t-0 px-4 py-3 bg-white text-gray-600">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-blue-500 font-semibold">Frequently Asked Question</p>
          <h2 className="text-3xl font-bold">You May Ask</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pr-4">
            {leftItems.map((item, i) => renderItem(item, i))}
          </div>
          <div className="pl-4">
            {rightItems.map((item, i) => renderItem(item, i + halfway))}
          </div>
        </div>
      </div>
    </section>
  );
}
