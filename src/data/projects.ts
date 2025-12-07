import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bap-photography",
    title: {
      id: "BAP Photography",
      en: "BAP Photography",
    },
    description: {
      id: "Platform web komprehensif untuk bisnis fotografi dengan portofolio, dokumentasi, workshop, dan sistem booking online otomatis dengan integrasi PayPal dan notifikasi email.",
      en: "Comprehensive web platform for photography business featuring portfolio, documentation, workshops, and automated online booking system with PayPal integration and email notifications.",
    },
    longDescription: {
      id: "Mengembangkan platform web komprehensif untuk menyelesaikan kebutuhan bisnis fotografi akan kehadiran digital yang profesional. Saya menyediakan solusi yang mengubah proses manual mereka menjadi platform online yang efisien. Website ini menampilkan portofolio, dokumentasi, workshop, dan sistem booking online otomatis. Dampak & Solusi: Meningkatkan kehadiran profesional dengan menciptakan platform terpusat yang menampilkan karya klien secara profesional, memudahkan pelanggan mengakses informasi dan layanan. Transaksi otomatis melalui integrasi PayPal untuk pembayaran online yang aman dan otomatis untuk booking workshop, menghilangkan kebutuhan invoicing manual. Komunikasi yang efisien menggunakan Resend API untuk membangun sistem notifikasi email otomatis, yang meningkatkan komunikasi pelanggan dan mengurangi beban kerja administratif klien.",
      en: "Developed a comprehensive web platform to solve a photography business's need for a professional, digital presence. I provided a solution that transformed their manual processes into an efficient online platform. The website features a portfolio, documentation, workshops, and an automated online booking system. Impact & Solutions: Boosted professional presence by creating a centralized platform that professionally showcases the client's work, making it easier for customers to access information and services. Automated transactions through PayPal integration to enable secure and automated online payments for workshop bookings, eliminating the need for manual invoicing. Streamlined communication using the Resend API to build an automated email notification system, which improved customer communication and reduced the client's administrative workload.",
    },
    image: "/projects/bapphoto.webp",
    technologies: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "PayPal",
      "Resend",
      "JWT",
    ],
    liveUrl: "https://bapphoto.com",
    featured: true,
    category: "fullstack",
    date: "2025-02-01",
  },
  {
    id: "find-you-journal",
    title: {
      id: "Find You Journal",
      en: "Find You Journal",
    },
    description: {
      id: "Jurnal reflektif digital dengan enkripsi end-to-end untuk penemuan diri, kesadaran emosional, dan pertumbuhan pribadi melalui penulisan terstruktur.",
      en: "Digital reflective journal with end-to-end encryption for self-discovery, emotional awareness, and personal growth through structured writing.",
    },
    longDescription: {
      id: "Proyek ini dimulai ketika saya kesulitan mempertahankan kebiasaan jurnal yang konsisten. Aplikasi yang ada terasa terlalu klinis atau kurang privasi yang saya butuhkan untuk refleksi diri yang jujur. Sebagai developer, saya memutuskan untuk membangun sesuatu yang benar-benar cocok untuk saya - jurnal digital yang menggabungkan panduan thoughtful dengan keamanan yang ketat. Perjalanan teknis berkembang dalam beberapa fase. Saya memulai dengan Next.js untuk kemampuan SSR-nya, mengetahui bahwa waktu loading yang cepat akan sangat penting untuk penggunaan harian. Firebase menjadi tulang punggung untuk autentikasi dan penyimpanan data, tetapi saya segera menyadari keamanan dasar tidak cukup. Setelah meneliti metode enkripsi selama dua minggu, saya mengimplementasikan enkripsi end-to-end menggunakan CryptoJS, memastikan bahkan saya tidak dapat mengakses entri pribadi pengguna.",
      en: "This project began when I found myself struggling to maintain a consistent journaling habit. Existing apps either felt too clinical or lacked the privacy I needed for honest self-reflection. As a developer, I decided to build something that would truly work for me - a digital journal that combines thoughtful guidance with ironclad security. The technical journey unfolded in phases. I started with Next.js for its SSR capabilities, knowing that fast loading times would be crucial for daily use. Firebase became the backbone for authentication and data storage, but I quickly realized basic security wasn't enough. After researching encryption methods for two weeks, I implemented end-to-end encryption using CryptoJS, ensuring even I couldn't access users' private entries.",
    },
    image: "/projects/find-you.webp",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "CryptoJS",
    ],
    liveUrl: "https://find-you-journal.vercel.app",
    githubUrl: "https://github.com/falihdzakwanz/find-you-journal",
    featured: false,
    category: "fullstack",
    date: "2025-05-01",
  },
  {
    id: "quotive",
    title: {
      id: "Quotive",
      en: "Quotive",
    },
    description: {
      id: "Website minimalis untuk motivasi harian melalui kutipan yang dikurasi dengan cermat, dengan fitur unduh wallpaper yang dapat dibagikan.",
      en: "Minimalist website for daily motivation through carefully curated quotes, with downloadable shareable wallpaper features.",
    },
    longDescription: {
      id: "Proyek ini dimulai ketika saya sering screenshot kutipan inspiratif setiap pagi, hanya untuk kehilangannya di camera roll. Aplikasi kutipan yang ada kurang daya tarik visual atau membuat sharing menjadi rumit. Sebagai developer, saya memutuskan untuk membangun sesuatu yang akan mengubah kata-kata bermakna menjadi momen indah yang dapat dibagikan - hanya dengan satu klik. Perjalanan teknis berkembang dalam beberapa fase. Saya memulai dengan Next.js untuk kemampuan App Router-nya, mengetahui transisi seamless akan sangat penting untuk berburu inspirasi harian. ZenQuotes API menjadi sumber data saya, tetapi saya segera menyadari teks statis tidak cukup. Setelah bereksperimen dengan berbagai library, saya mengimplementasikan html2canvas untuk mengubah kutipan menjadi wallpaper yang dapat diunduh - menyelesaikan frustrasi saya dengan screenshot jelek.",
      en: "This project began when I found myself screenshotting inspiring quotes every morning, only to lose them in my camera roll. Existing quote apps either lacked visual appeal or made sharing cumbersome. As a developer, I decided to build something that would turn meaningful words into beautiful, shareable moments - with just one click. The technical journey unfolded in phases. I started with Next.js for its App Router capabilities, knowing seamless transitions would be crucial for daily inspiration hunting. The ZenQuotes API became my data source, but I quickly realized static text wasn't enough. After experimenting with multiple libraries, I implemented html2canvas to transform quotes into downloadable wallpapers - solving my own frustration with ugly screenshots.",
    },
    image: "/projects/quotive.webp",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "html2canvas",
    ],
    liveUrl: "https://quotive.vercel.app",
    githubUrl: "https://github.com/falihdzakwanz/quotive",
    featured: false,
    category: "web",
    date: "2025-05-01",
  },
  {
    id: "simamang",
    title: {
      id: "SIMAMANG - Sistem Manajemen Magang",
      en: "SIMAMANG - Internship Management System",
    },
    description: {
      id: "Sistem manajemen magang berbasis web untuk Dinas Kominfo Bandar Lampung yang mendigitalisasi proses pendaftaran, manajemen data, dan monitoring status.",
      en: "Web-based internship management system for Communication and Information Office of Bandar Lampung City that digitizes registration, data management, and status monitoring.",
    },
    longDescription: {
      id: "Mengembangkan sistem manajemen magang berbasis web untuk Dinas Komunikasi dan Informatika Kota Bandar Lampung. Proyek ini bertujuan untuk mendigitalisasi dan menyederhanakan proses pendaftaran magang, manajemen data, dan monitoring status yang sebelumnya manual. Hasilnya adalah platform efisien yang mengurangi beban administratif dan meningkatkan transparansi bagi calon peserta magang maupun staf departemen.",
      en: "Developed a web-based internship management system for the Communication and Information Office of Bandar Lampung City. This project aimed to digitize and streamline the previously manual processes of internship registration, data management, and status monitoring. The result is an efficient platform that reduces administrative burden and enhances transparency for both prospective interns and department staff.",
    },
    image: "/projects/simamang.webp",
    technologies: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://simamang.bandarlampungkota.go.id/",
    featured: false,
    category: "fullstack",
    date: "2025-07-01",
  },
  {
    id: "simas",
    title: {
      id: "SIMAS - Sistem Manajemen Surat",
      en: "SIMAS - Correspondence Management System",
    },
    description: {
      id: "Sistem manajemen surat elektronik untuk Dinas Kominfo Bandar Lampung yang menyediakan solusi digital untuk arsip, tracking, dan distribusi surat.",
      en: "Electronic correspondence management system for Communication and Information Office of Bandar Lampung City providing digital solution for archiving, tracking, and distribution.",
    },
    longDescription: {
      id: "Membangun sistem manajemen surat elektronik untuk Dinas Komunikasi dan Informatika Kota Bandar Lampung. Proyek ini dirancang untuk mengatasi inefisiensi penanganan surat manual, menyediakan solusi digital untuk arsip, tracking, dan distribusi surat yang efisien. Sistem ini meningkatkan waktu respons, akurasi data, dan mengurangi konsumsi kertas dalam operasional departemen.",
      en: "Built an electronic correspondence management system for the Communication and Information Office of Bandar Lampung City. This project was designed to address inefficiencies in manual correspondence handling, providing a digital solution for efficient archiving, tracking, and distribution of letters. The system improved response times, data accuracy, and reduced paper consumption in the department's operations.",
    },
    image: "/projects/simas.webp",
    technologies: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://simas.bandarlampungkota.go.id/",
    featured: false,
    category: "fullstack",
    date: "2025-07-01",
  },
  {
    id: "expressify",
    title: {
      id: "Expressify",
      en: "Expressify",
    },
    description: {
      id: "Permainan interaktif berbasis deteksi ekspresi wajah yang menantang pemain menunjukkan berbagai ekspresi dengan cepat dan akurat dalam waktu terbatas.",
      en: "Interactive game based on facial expression detection that challenges players to show various expressions quickly and accurately within limited time.",
    },
    longDescription: {
      id: "Expressify adalah permainan interaktif berbasis deteksi ekspresi wajah yang menantang pemain untuk menunjukkan berbagai ekspresi dengan cepat dan akurat! Dalam waktu yang terbatas, Anda akan diberi instruksi acak seperti senyum lebar, cemberut sedih, kaget maksimal, atau wajah datar. Setiap ekspresi yang benar akan menambah skor Anda! Permainan ini dilengkapi dengan musik dan efek unik untuk setiap mood, menciptakan pengalaman bermain yang menyenangkan dan menantang.",
      en: "Expressify is an interactive game based on facial expression detection that challenges players to show various expressions quickly and accurately! Within limited time, you will be given random instructions like broad smile, sad frown, maximum surprise, or flat face. Each correct expression will add to your score! The game is complete with music and unique effects for each mood, creating a fun and challenging gaming experience.",
    },
    image: "/projects/expressify.webp",
    technologies: ["Python", "Pygame", "OpenCV", "Facial Recognition"],
    githubUrl: "https://github.com/Yuuggaa/Expressify",
    featured: false,
    category: "game",
    date: "2025-12-01",
  },
];
