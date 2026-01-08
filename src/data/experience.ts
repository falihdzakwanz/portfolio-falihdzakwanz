import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "itera-assistant",
    company: {
      id: "Institut Teknologi Sumatera",
      en: "Institut Teknologi Sumatera",
    },
    role: {
      id: "Asisten Praktikum Algoritma dan Struktur Data",
      en: "Data Structures and Algorithms Lab Assistant",
    },
    description: {
      id: "Mengajar dan mendampingi mahasiswa dalam memahami konsep fundamental struktur data seperti Linked List, Stack, Queue, Graph, Tree, Heap, dan Hashing. Merancang studi kasus dan latihan pemrograman untuk memperkuat pemahaman teoritis menjadi solusi kode yang aplikatif.",
      en: "Taught and mentored students in understanding fundamental data structure concepts such as Linked List, Stack, Queue, Graph, Tree, Heap, and Hashing. Designed case studies and programming exercises to strengthen theoretical understanding into applicable code solutions.",
    },
    technologies: ["Data Structures", "Algorithms", "C++", "Python"],
    logo: "/companies/itera.png",
    startDate: "2025-09",
    endDate: "2025-12",
    location: {
      id: "Lampung Selatan, Lampung, Indonesia",
      en: "South Lampung, Lampung, Indonesia",
    },
    type: "parttime",
    locationType: "hybrid",
  },
  {
    id: "kominfo-bandar-lampung",
    company: {
      id: "Dinas Komunikasi dan Informatika Kota Bandar Lampung",
      en: "Department of Communication and Information Technology Bandar Lampung City",
    },
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    description: {
      id: "Mengembangkan SIMAMANG (Sistem Manajemen Magang) dan SIMAS (Sistem Manajemen Surat) untuk digitalisasi proses pendaftaran magang dan pengelolaan surat. Bertanggung jawab penuh atas pengembangan front-end dan back-end menggunakan Laravel, Inertia.js, dan React.js, serta integrasi database untuk memastikan fungsionalitas optimal.",
      en: "Developed SIMAMANG (Internship Management System) and SIMAS (Letter Management System) to digitalize internship registration and correspondence management processes. Fully responsible for front-end and back-end development using Laravel, Inertia.js, and React.js, along with database integration to ensure optimal functionality.",
    },
    technologies: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    logo: "/companies/kominfo.png",
    startDate: "2025-06",
    endDate: "2025-07",
    location: {
      id: "Bandar Lampung, Lampung, Indonesia",
      en: "Bandar Lampung, Lampung, Indonesia",
    },
    type: "internship",
    locationType: "onsite",
  },
];
