import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "visicode",
    title: {
      id: "VisiCode",
      en: "VisiCode",
    },
    description: {
      id: "Platform layanan web development yang menawarkan paket pembuatan website mulai dari landing page sederhana hingga aplikasi web lengkap dengan CMS untuk bisnis dan startup.",
      en: "Web development service platform offering website creation packages from simple landing pages to complete web applications with CMS for businesses and startups.",
    },
    longDescription: {
      id: "VisiCode adalah platform layanan web development yang saya bangun untuk membantu bisnis dan startup mewujudkan visi digital mereka. Platform ini menawarkan tiga paket utama: Vision Start (landing page, 3-5 hari), Vision Spark (MVP testing, 1-2 minggu), dan Vision Launch (full website dengan CMS, 4-6 minggu). Website dilengkapi dengan sistem Vision Assessment untuk mengkualifikasi klien, showcase packages, blog, FAQ, dan contact form yang terintegrasi dengan email notification. Saya membangun VisiCode dengan Next.js untuk performa optimal, menggunakan Tailwind CSS untuk desain yang clean dan responsive, serta Resend API untuk mengelola komunikasi email otomatis dengan klien. Fokus utama adalah memberikan solusi yang cepat, profesional, dan scalable untuk berbagai kebutuhan bisnis.",
      en: "VisiCode is a web development service platform I built to help businesses and startups realize their digital vision. The platform offers three main packages: Vision Start (landing page, 3-5 days), Vision Spark (MVP testing, 1-2 weeks), and Vision Launch (full website with CMS, 4-6 weeks). The website is equipped with a Vision Assessment system to qualify clients, package showcase, blog, FAQ, and contact form integrated with email notifications. I built VisiCode with Next.js for optimal performance, using Tailwind CSS for clean and responsive design, and Resend API to manage automated email communication with clients. The main focus is delivering fast, professional, and scalable solutions for various business needs.",
    },
    image: "/projects/visicode.webp",
    screenshots: ["/projects/visicode.webp"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Resend",
    ],
    liveUrl: "https://visicode.vercel.app",
    featured: true,
    category: "fullstack",
    date: "2025-12-11",
    role: {
      id: "Fullstack Developer & Founder",
      en: "Fullstack Developer & Founder",
    },
    impact: {
      id: "Membantu UMKM dan startup memiliki kehadiran digital profesional dengan sistem kualifikasi klien otomatis.",
      en: "Helping SMEs and startups establish a professional digital presence with an automated client qualification system.",
    },
    features: [
      {
        id: "Vision Assessment System untuk kualifikasi klien",
        en: "Vision Assessment System for client qualification",
      },
      {
        id: "Integrasi notifikasi email otomatis via Resend",
        en: "Automated email notification integration via Resend",
      },
      {
        id: "Showcase paket layanan yang dinamis",
        en: "Dynamic service package showcase",
      },
    ],
    challenge: {
      id: "Membangun sistem asesmen yang intuitif namun mampu mengumpulkan data teknis yang cukup dari klien non-teknis.",
      en: "Building an intuitive assessment system capable of gathering sufficient technical data from non-technical clients.",
    },
    solution: {
      id: "Mengimplementasikan multi-step form dengan logika kondisional dan bahasa yang mudah dipahami.",
      en: "Implemented a multi-step form with conditional logic and user-friendly language.",
    },
    techRationale: {
      id: "Next.js dipilih untuk kecepatan loading (LCP) dan integrasi seamless dengan ekosistem Vercel.",
      en: "Next.js was chosen for fast loading speeds (LCP) and seamless integration with the Vercel ecosystem.",
    },
  },
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
    screenshots: ["/projects/bapphoto.webp"],
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
    role: {
      id: "Lead Fullstack Developer",
      en: "Lead Fullstack Developer",
    },
    impact: {
      id: "Mendigitalisasi bisnis fotografi dari proses manual menjadi sistem booking otomatis dengan integrasi pembayaran global.",
      en: "Digitalized a photography business from manual processes to an automated booking system with global payment integration.",
    },
    features: [
      {
        id: "Sistem booking workshop otomatis",
        en: "Automated workshop booking system",
      },
      {
         id: "Integrasi pembayaran PayPal",
         en: "PayPal payment integration",
      },
      {
         id: "Galeri portofolio kategori dinamis",
         en: "Dynamic category portfolio gallery",
      }
    ],
    challenge: {
      id: "Sinkronisasi real-time antara ketersediaan slot workshop dengan sistem pembayaran untuk mencegah double-booking.",
      en: "Real-time synchronization between workshop slot availability and the payment system to prevent double-booking.",
    },
    solution: {
      id: "Menggunakan Firebase Firestore Transaction untuk memastikan atomisitas data saat proses pembayaran.",
      en: "Used Firebase Firestore Transactions to ensure data atomicity during the payment process.",
    },
    techRationale: {
       id: "Firebase dipilih karena kemudahannya dalam menangani data real-time dan autentikasi tanpa beban server yang besar.",
       en: "Firebase was chosen for its ease in handling real-time data and authentication without heavy server overhead.",
    }
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
    screenshots: ["/projects/find-you.webp"],
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
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    impact: {
      id: "Menyediakan ruang refleksi digital yang aman bagi pengguna untuk melacak pertumbuhan pribadi mereka.",
      en: "Providing a safe digital reflection space for users to track their personal growth.",
    },
    features: [
      {
        id: "Enkripsi end-to-end untuk privasi data maksimal",
        en: "End-to-end encryption for maximum data privacy",
      },
      {
        id: "Prompt jurnal reflektif yang thoughtful",
        en: "Thoughtful reflective journal prompts",
      },
      {
        id: "Dashboard personal untuk monitoring mood",
        en: "Personal dashboard for mood monitoring",
      },
    ],
    challenge: {
      id: "Mengimplementasikan enkripsi end-to-end yang kuat tanpa mengorbankan performa aplikasi saat loading data.",
      en: "Implementing strong end-to-end encryption without sacrificing application performance during data loading.",
    },
    solution: {
      id: "Menggunakan library CryptoJS dikombinasikan dengan teknik web worker untuk proses enkripsi/dekripsi di background.",
      en: "Used the CryptoJS library combined with web worker techniques for background encryption/decryption processes.",
    },
    techRationale: {
      id: "Next.js digunakan untuk SSR demi optimasi SEO halaman landing serta performa runtime yang cepat.",
      en: "Next.js was used for SSR for landing page SEO optimization and fast runtime performance.",
    },
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
    screenshots: ["/projects/quotive.webp"],
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
    role: {
      id: "Frontend Developer",
      en: "Frontend Developer",
    },
    impact: {
      id: "Membantu pengguna menemukan inspirasi harian dengan cara yang estetik dan mudah dibagikan.",
      en: "Helping users find daily inspiration in an aesthetic and shareable way.",
    },
    features: [
      {
        id: "Generasi wallpaper kutipan otomatis",
        en: "Automatic quote wallpaper generation",
      },
      {
        id: "Integrasi ZenQuotes API secara real-time",
        en: "Real-time ZenQuotes API integration",
      },
      {
        id: "Desain minimalis yang fokus pada konten",
        en: "Minimalist design focused on content",
      },
    ],
    challenge: {
      id: "Mengonversi elemen DOM yang kompleks menjadi gambar berkualitas tinggi untuk diunduh oleh pengguna.",
      en: "Converting complex DOM elements into high-quality images for user download.",
    },
    solution: {
      id: "Mengoptimalkan penggunaan library html2canvas dengan konfigurasi skala dan logging untuk memastikan hasil render yang presisi.",
      en: "Optimized the use of html2canvas library with scale configuration and logging to ensure precise rendering results.",
    },
    techRationale: {
      id: "Tailwind CSS digunakan untuk mencapai desain minimalis yang responsif dengan cepat dan efisien.",
      en: "Tailwind CSS was used to achieve a responsive minimalist design quickly and efficiently.",
    },
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
    screenshots: ["/projects/simamang.webp"],
    technologies: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://simamang.bandarlampungkota.go.id/",
    featured: false,
    category: "fullstack",
    date: "2025-07-01",
    role: {
      id: "Fullstack Developer (Intern)",
      en: "Fullstack Developer (Intern)",
    },
    impact: {
      id: "Mendigitalisasi pendaftaran magang di Dinas Kominfo, menghemat waktu proses administrasi hingga 60%.",
      en: "Digitalized internship registration at the Communications Office, saving up to 60% of administrative processing time.",
    },
    features: [
      {
        id: "Pendaftaran magang online mandiri",
        en: "Self-service online internship registration",
      },
      {
        id: "Dashboard admin untuk verifikasi berkas",
        en: "Admin dashboard for document verification",
      },
      {
        id: "Notification system status pendaftaran",
        en: "Registration status notification system",
      },
    ],
    challenge: {
      id: "Mengelola aliran data yang kompleks antara pendaftar dan admin departemen dengan hak akses yang terenkripsi.",
      en: "Managing complex data flow between applicants and department admins with encrypted access rights.",
    },
    solution: {
      id: "Memanfaatkan Laravel Policy dan Gates untuk kontrol akses yang ketat serta Inertia.js untuk UX yang seamless.",
      en: "Leveraged Laravel Policy and Gates for tight access control and Inertia.js for a seamless user experience.",
    },
    techRationale: {
      id: "Laravel dipilih karena stabilitasnya dalam menangani aplikasi manajemen enterprise dan database MySQL.",
      en: "Laravel was chosen for its stability in handling enterprise management applications and MySQL databases.",
    },
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
    screenshots: ["/projects/simas.webp"],
    technologies: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://simas.bandarlampungkota.go.id/",
    featured: false,
    category: "fullstack",
    date: "2025-07-01",
    role: {
      id: "Fullstack Developer (Intern)",
      en: "Fullstack Developer (Intern)",
    },
    impact: {
      id: "Mendigitalisasi kearsipan surat di Dinas Kominfo, mengurangi penggunaan kertas dan mempercepat pencarian arsip.",
      en: "Digitalized correspondence archiving at the Communications Office, reducing paper usage and speeding up archive retrieval.",
    },
    features: [
      {
        id: "Manajemen surat masuk dan keluar digital",
        en: "Digital incoming and outgoing letter management",
      },
      {
        id: "Tracking status disposisi surat",
        en: "Letter disposition status tracking",
      },
      {
        id: "Arsip surat berbasis cloud yang aman",
        en: "Secure cloud-based letter archiving",
      },
    ],
    challenge: {
      id: "Membangun sistem penomoran surat otomatis yang sesuai dengan standar regulasi pemerintah daerah.",
      en: "Building an automated letter numbering system that complies with local government regulatory standards.",
    },
    solution: {
      id: "Mengembangkan algoritma generator nomor surat kustom yang fleksibel namun tetap mengikuti aturan baku.",
      en: "Developed a custom letter number generator algorithm that is flexible yet follows standard rules.",
    },
    techRationale: {
      id: "Inertia.js dipilih untuk memberikan pengalaman Single Page Application (SPA) tetap dengan kemudahan backend Laravel.",
      en: "Inertia.js was chosen to provide a Single Page Application (SPA) experience with the ease of a Laravel backend.",
    },
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
    screenshots: ["/projects/expressify.webp"],
    technologies: ["Python", "Pygame", "OpenCV", "Facial Recognition"],
    githubUrl: "https://github.com/Yuuggaa/Expressify",
    featured: false,
    category: "game",
    date: "2025-12-01",
    role: {
      id: "Python Developer",
      en: "Python Developer",
    },
    impact: {
      id: "Menciptakan pengalaman gaming interaktif yang menggabungkan hiburan dengan teknologi computer vision.",
      en: "Creating an interactive gaming experience combining entertainment with computer vision technology.",
    },
    features: [
      {
        id: "Deteksi ekspresi wajah secara real-time",
        en: "Real-time facial expression detection",
      },
      {
        id: "Sistem scoring berdasarkan akurasi ekspresi",
        en: "Scoring system based on expression accuracy",
      },
      {
        id: "Modul musik dan efek suasana dinamis",
        en: "Dynamic music and atmosphere effect modules",
      },
    ],
    challenge: {
      id: "Menyeimbangkan tingkat sensitivitas deteksi OpenCV agar tetap akurat dalam berbagai kondisi pencahayaan.",
      en: "Balancing OpenCV detection sensitivity level to remain accurate under various lighting conditions.",
    },
    solution: {
      id: "Menggunakan teknik histogram equalization untuk pra-pemrosesan citra sebelum klasifikasi ekspresi.",
      en: "Used histogram equalization techniques for image pre-processing before expression classification.",
    },
    techRationale: {
      id: "Python dan OpenCV dipilih karena ekosistem library computer vision yang matang dan handal.",
      en: "Python and OpenCV were chosen for the mature and reliable computer vision library ecosystem.",
    },
  },
];
