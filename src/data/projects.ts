import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-powered-lms",
    title: {
      id: "AI-Powered LMS",
      en: "AI-Powered LMS",
    },
    description: {
      id: "Platform pembelajaran coding berbasis AI dengan eksekusi kode langsung di browser, asisten virtual RAG, dan dashboard multi-tenant untuk dosen — melayani 100+ mahasiswa.",
      en: "AI-driven learning platform for coding practicum with live code execution, RAG-based virtual assistant, and multi-tenant instructor dashboards — serving 100+ students.",
    },
    longDescription: {
      id: "Membangun Learning Management System dari scratch untuk praktikum Algoritma & Struktur Data di ITERA. Platform ini memungkinkan mahasiswa membaca materi interaktif (MDX), menulis dan mengeksekusi kode C/C++ langsung di browser via Monaco Editor dan Wandbox API, serta mendapatkan bimbingan dari AI Senior Lab Assistant berbasis RAG (Google Gemini + pgvector) yang memberikan hint logika tanpa memberikan jawaban jadi. Dilengkapi dashboard multi-tenant untuk admin mengelola kelas (RA-RE), absensi, deadline, dan nilai, serta heatmap kesulitan mahasiswa per topik untuk evaluasi asisten. Auto-ingest pipeline MDX ke pgvector dengan chunking berbasis frontmatter dan sliding window. Dirancang dengan arsitektur modular yang memisahkan modul AI, konten, dan asesmen secara clean.",
      en: "Built a Learning Management System from scratch for the Data Structures & Algorithms practicum at ITERA. The platform enables students to read interactive MDX content, write and execute C/C++ code directly in the browser via Monaco Editor and Wandbox API, and receive guidance from a RAG-based AI Senior Lab Assistant (Google Gemini + pgvector) that provides logic hints without giving away answers. Features a multi-tenant dashboard for admins to manage classes (RA-RE), attendance, deadlines, and grades, plus student difficulty heatmaps per topic for assistant evaluation. Auto-ingest pipeline from MDX to pgvector with frontmatter-based chunking and sliding window. Designed with a modular architecture that cleanly separates AI, content, and assessment modules.",
    },
    image: "/projects/ai-lms.webp",
    screenshots: ["/projects/ai-lms.webp"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Google Gemini",
      "Vercel AI SDK",
      "Wandbox API",
      "Drizzle ORM",
    ],
    liveUrl: "https://algoritma-struktur-data.fdz.web.id",
    githubUrl: "https://github.com/falihdzakwanz/praktikum-algoritma-struktur-data",
    featured: true,
    category: "fullstack",
    date: "2025-09-01",
    role: {
      id: "Fullstack Developer & AI Engineer",
      en: "Fullstack Developer & AI Engineer",
    },
    impact: {
      id: "Membantu 100+ mahasiswa belajar algoritma dan struktur data dengan latihan coding interaktif dan bimbingan AI yang adaptif.",
      en: "Helping 100+ students learn data structures and algorithms through interactive coding exercises and adaptive AI guidance.",
    },
    features: [
      {
        id: "AI Senior Lab Assistant berbasis RAG yang memberikan hint logika, bukan jawaban",
        en: "RAG-based AI Senior Lab Assistant providing logic hints, not answers",
      },
      {
        id: "Live code editor (Monaco) dengan eksekusi C/C++ via Wandbox API",
        en: "Live code editor (Monaco) with C/C++ execution via Wandbox API",
      },
      {
        id: "Dashboard multi-tenant dengan heatmap kesulitan dan analytics real-time",
        en: "Multi-tenant dashboard with difficulty heatmaps and real-time analytics",
      },
    ],
    challenge: {
      id: "Membangun RAG pipeline yang akurat secara kontekstual dengan materi perkuliahan dalam bahasa Indonesia, serta memastikan AI memberikan hint yang mendorong pemikiran kritis bukan spoon-feeding.",
      en: "Building an RAG pipeline that is contextually accurate with Indonesian lecture materials, while ensuring the AI provides hints that encourage critical thinking rather than spoon-feeding.",
    },
    solution: {
      id: "Mengimplementasikan auto-ingest MDX dengan chunking cerdas (frontmatter + sliding window) ke pgvector, dan merancang prompt system yang ketat untuk memastikan AI hanya memberikan arahan logis.",
      en: "Implemented auto-ingest MDX pipeline with intelligent chunking (frontmatter + sliding window) into pgvector, and designed strict system prompts to ensure the AI only provides logical guidance.",
    },
    techRationale: {
      id: "Next.js 16 dipilih untuk App Router + SSR performance, Supabase untuk managed Postgres + pgvector (RAG vector search), dan Vercel AI SDK untuk integrasi Google Gemini yang seamless.",
      en: "Next.js 16 was chosen for App Router and SSR performance, Supabase for managed Postgres with pgvector (RAG vector search), and Vercel AI SDK for seamless Google Gemini integration.",
    },
  },
  {
    id: "harmony-fti",
    title: {
      id: "Harmony FTI",
      en: "Harmony FTI",
    },
    description: {
      id: "Platform digital arsiparis persuratan program studi yang menggantikan alur kerja terfragmentasi — memotong waktu pemrosesan 57% melalui tanda tangan elektronik dan workflow approval multi-level.",
      en: "Unified digital document archiving platform that replaced fragmented workflows — cutting processing time by 57% through electronic signature automation and multi-level approval workflows.",
    },
    longDescription: {
      id: "Memimpin tim 3 orang untuk merombak alur dokumen administrasi yang berserakan di Google Forms, spreadsheet, WhatsApp, dan tanda tangan kertas menjadi satu platform digital terpadu untuk Fakultas Teknologi Industri ITERA. Mengintegrasikan Digisign (BSrE) untuk tanda tangan elektronik otomatis via arsitektur webhook, workflow approval multi-level, dan sistem arsip digital terpusat. Berhasil memproses 219 dokumen (188 terproses) dalam 4.5 bulan dengan metodologi RUP dan Kanban. Tervalidasi melalui UAT berbasis ISO 25010 dengan skor kepuasan 91.3% dari 111 responden.",
      en: "Led a 3-person team to overhaul fragmented document workflows scattered across Google Forms, spreadsheets, WhatsApp, and paper signatures into one unified digital platform for the Faculty of Industrial Technology, ITERA. Integrated Digisign (BSrE) for automated electronic signatures via webhook-driven architecture, multi-level approval workflows, and centralized digital archiving. Successfully processed 219 documents (188 completed) in 4.5 months using RUP and Kanban methodologies. Validated through ISO 25010-based UAT with a 91.3% satisfaction score across 111 respondents.",
    },
    image: "/projects/harmony.webp",
    screenshots: ["/projects/harmony.webp"],
    technologies: [
      "Laravel",
      "React",
      "Inertia.js",
      "MySQL",
      "PHP",
      "Google Drive API",
      "Twilio API",
    ],
    featured: true,
    category: "fullstack",
    date: "2025-09-01",
    role: {
      id: "Lead Fullstack Developer",
      en: "Lead Fullstack Developer",
    },
    impact: {
      id: "Memangkas waktu pemrosesan dokumen 57% (7→3 hari) dengan 91.3% kepuasan pengguna — menangani 219 dokumen lintas program studi.",
      en: "Reduced document processing time by 57% (7→3 days) with 91.3% user satisfaction — handling 219 documents across study programs.",
    },
    features: [
      {
        id: "Workflow approval multi-level untuk pengajuan surat online",
        en: "Multi-level approval workflow for online letter submissions",
      },
      {
        id: "Tanda tangan digital otomatis via Digisign BSrE (webhook-driven)",
        en: "Automated digital signatures via Digisign BSrE (webhook-driven)",
      },
      {
        id: "Arsip digital terpusat dengan tracking disposisi real-time",
        en: "Centralized digital archive with real-time disposition tracking",
      },
    ],
    challenge: {
      id: "Mengintegrasikan standar tanda tangan digital pemerintah (Digisign BSrE) ke dalam alur dokumen yang melibatkan banyak pemangku kepentingan dengan tingkat literasi digital yang berbeda-beda.",
      en: "Integrating government digital signature standards (Digisign BSrE) into document workflows involving multiple stakeholders with varying levels of digital literacy.",
    },
    solution: {
      id: "Merancang arsitektur webhook-driven yang memisahkan proses signing dari antarmuka pengguna, serta menerapkan notifikasi otomatis (email & WhatsApp) untuk memandu pengguna melewati setiap tahap.",
      en: "Designed a webhook-driven architecture that decouples the signing process from the user interface, and implemented automated notifications (email & WhatsApp) to guide users through each stage.",
    },
    techRationale: {
      id: "Laravel dipilih untuk enterprise stability dan ekosistem yang matang, Inertia.js untuk menghubungkan React frontend dengan Laravel backend tanpa perlu API terpisah, dan Digisign API untuk kepatuhan terhadap standar tanda tangan elektronik pemerintah.",
      en: "Laravel was chosen for enterprise stability and a mature ecosystem, Inertia.js to bridge React frontend with Laravel backend without a separate API layer, and Digisign API for compliance with government electronic signature standards.",
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
