// src/data/blogs.ts
export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const blogs : Blog[] = [
  {
    id: 1,
    title: "Membangun Gedung yang Efisien",
    description: "Pelajari teknologi terbaru untuk konstruksi gedung yang hemat energi dan ramah lingkungan.",
    image: "img/blog-1.jpg",
    date: "2025-05-01",
    category: "feature",
  },
  {
    id: 2,
    title: "Teknik Konstruksi Modern",
    description: "Mengupas metode konstruksi terbaru untuk meningkatkan efisiensi dan kualitas proyek.",
    image: "img/blog-2.jpg",
    date: "2025-05-05",
    category: "technology",
  },
  {
    id: 3,
    title: "Material Konstruksi Paling Tahan Lama",
    description: "Panduan memilih material terbaik untuk memastikan ketahanan struktur bangunan.",
    image: "img/blog-3.jpg",
    date: "2025-05-10",
    category: "materials",
  },
  {
    id: 4,
    title: "Keselamatan Kerja di Proyek Konstruksi",
    description: "Tips dan regulasi keselamatan untuk mengurangi risiko kecelakaan kerja.",
    image: "img/blog-1.jpg",
    date: "2025-05-15",
    category: "safety",
  },
  {
    id: 5,
    title: "Tren Desain Arsitektur Tahun 2025",
    description: "Menganalisis perkembangan terbaru dalam desain arsitektur dan bagaimana hal itu mempengaruhi konstruksi.",
    image: "img/blog-2.jpg",
    date: "2025-05-20",
    category: "design",
  },
  {
    id: 6,
    title: "Manajemen Proyek Konstruksi yang Efektif",
    description: "Strategi terbaik untuk mengelola proyek konstruksi dari awal hingga akhir.",
    image: "img/blog-3.jpg",
    date: "2025-05-25",
    category: "management",
  },
  {
    id: 7,
    title: "Dampak Teknologi AI dalam Konstruksi",
    description: "Bagaimana AI membantu meningkatkan efisiensi dan akurasi proyek konstruksi.",
    image: "img/blog-1.jpg",
    date: "2025-05-30",
    category: "technology",
  },
  {
    id: 8,
    title: "Cara Menghemat Biaya di Proyek Konstruksi",
    description: "Tips praktis untuk mengontrol biaya tanpa mengorbankan kualitas konstruksi.",
    image: "img/blog-2.jpg",
    date: "2025-06-01",
    category: "finance",
  },
  {
    id: 9,
    title: "Konstruksi Berkelanjutan: Masa Depan Industri",
    description: "Menjelajahi konsep konstruksi hijau yang mengurangi dampak lingkungan.",
    image: "img/blog-3.jpg",
    date: "2025-06-05",
    category: "sustainability",
  },
  {
    id: 10,
    title: "Inovasi Beton dalam Konstruksi",
    description: "Material baru dan teknik dalam penggunaan beton yang lebih kuat dan tahan lama.",
    image: "img/blog-1.jpg",
    date: "2025-06-10",
    category: "materials",
  },
  {
    id: 11,
    title: "Mengenal BIM: Revolusi dalam Perencanaan Konstruksi",
    description: "Bagaimana Building Information Modeling (BIM) meningkatkan efisiensi proyek.",
    image: "img/blog-2.jpg",
    date: "2025-06-15",
    category: "technology",
  },
  {
    id: 12,
    title: "Peran Robot dalam Konstruksi Masa Depan",
    description: "Mempelajari bagaimana robot digunakan untuk mempercepat pekerjaan konstruksi.",
    image: "img/blog-3.jpg",
    date: "2025-06-20",
    category: "automation",
  },
  {
    id: 13,
    title: "Tips Menjadi Kontraktor Sukses",
    description: "Panduan bagi kontraktor untuk sukses dalam bisnis konstruksi.",
    image: "img/blog-1.jpg",
    date: "2025-06-25",
    category: "business",
  },
  {
    id: 14,
    title: "Konstruksi Modular: Solusi Cepat dan Efisien",
    description: "Bagaimana metode konstruksi modular menghemat waktu dan biaya.",
    image: "img/blog-2.jpg",
    date: "2025-06-30",
    category: "innovation",
  },
  {
    id: 15,
    title: "Masa Depan Konstruksi dengan Bahan Daur Ulang",
    description: "Meneliti penggunaan bahan daur ulang untuk menciptakan konstruksi yang lebih ramah lingkungan.",
    image: "img/blog-3.jpg",
    date: "2025-07-05",
    category: "sustainability",
  },
];

export default blogs;
