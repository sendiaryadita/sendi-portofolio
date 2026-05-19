import Image from "next/image";
import Link from "next/link";
import { FaDatabase, FaLightbulb, FaNetworkWired, FaServer } from "react-icons/fa";
import CertificateGrid from "./certificate-grid";
import {
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiReact,
} from "react-icons/si";
import {
  HeroAnchor,
  HeroDiv,
  HeroH1,
  HeroP,
  ScrollReveal,
  StaggerAnchor,
  StaggerArticle,
  StaggerDiv,
  StaggerGroup,
} from "./animated";

const skills = [
  { name: "HTML", Icon: SiHtml5, iconClassName: "text-[#e34f26]", level: "Intermediate" },
  { name: "CSS", Icon: SiCss, iconClassName: "text-[#1572b6]", level: "Intermediate" },
  { name: "JavaScript", Icon: SiJavascript, iconClassName: "text-[#b89100]", level: "Basic" },
  { name: "React", Icon: SiReact, iconClassName: "text-[#149eca]", level: "Learning" },
  { name: "Django", Icon: SiDjango, iconClassName: "text-[#0c4b33]", level: "Basic" },
  { name: "Laravel", Icon: SiLaravel, iconClassName: "text-[#e53b2c]", level: "Basic" },
  { name: "Database", Icon: FaDatabase, iconClassName: "text-[#334155]", level: "Basic" },
  { name: "REST API", Icon: FaServer, iconClassName: "text-[#2563eb]", level: "Basic" },
  { name: "Git", Icon: SiGit, iconClassName: "text-[#f05032]", level: "Basic" },
  {
    name: "Cisco Packet Tracer",
    Icon: FaNetworkWired,
    iconClassName: "text-[#2563eb]",
    level: "Learning",
  },
  {
    name: "Jaringan Komputer",
    Icon: FaNetworkWired,
    iconClassName: "text-[#0f766e]",
    level: "Intermediate",
  },
  {
    name: "Problem Solving",
    Icon: FaLightbulb,
    iconClassName: "text-[#ca8a04]",
    level: "Intermediate",
  },
];

const projects = [
  {
    title: "DayaDesa",
    category: "Web GIS Platform",
    status: "Featured Project",
    visualType: "map",
    description:
      "Sistem informasi geospasial ketahanan energi desa untuk menampilkan data desa, peta energi, dan Energy Security Index.",
    stack: ["Django", "Bootstrap", "Leaflet", "PostgreSQL"],
  },
  {
    title: "Smart Parking System",
    category: "Python Application",
    status: "College Project",
    visualType: "parking",
    description:
      "Sistem simulasi parkir berbasis Python dengan konsep OOP, validasi input, subclass kendaraan, dan manajemen slot parkir.",
    stack: ["Python", "OOP", "CLI"],
  },
  {
    title: "Wi-Fi Network Optimization",
    category: "Network Analysis",
    status: "Research Project",
    visualType: "wifi",
    description:
      "Analisis dan optimasi jaringan Wi-Fi kampus berdasarkan SSID, RSSI, channel, dan performa koneksi.",
    stack: ["Wi-Fi Analyzer", "Network Analysis", "Documentation"],
  },
  {
    title: "Cisco Network Topology",
    category: "Computer Network",
    status: "Lab Project",
    visualType: "network",
    description:
      "Perancangan topologi jaringan menggunakan Cisco Packet Tracer dengan subnetting, routing, switch, router, dan PC client.",
    stack: ["Cisco Packet Tracer", "Subnetting", "Routing"],
  },
  {
    title: "Personal Portfolio Website",
    category: "Web Development",
    status: "In Progress",
    visualType: "website",
    description:
      "Website portofolio pribadi untuk menampilkan profil, skill, sertifikat, project, dan kontak profesional.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "IoT Sensor Concept",
    category: "Internet of Things",
    status: "Concept Project",
    visualType: "sensor",
    description:
      "Konsep pengembangan sensor IoT untuk membaca kondisi lingkungan secara otomatis dan real-time.",
    stack: ["IoT", "Sensor", "Automation"],
  },
];

const portfolioContents = [
  {
    title: "Profil Mahasiswa TI",
    body: "Mahasiswa Teknologi Informasi yang sedang membangun fondasi teknis lewat kuliah, praktikum, dan project digital.",
  },
  {
    title: "Fokus Web & Backend",
    body: "Tertarik membuat aplikasi web yang rapi, mudah digunakan, serta didukung logika backend dan alur data yang jelas.",
  },
  {
    title: "Jaringan Komputer",
    body: "Mempelajari routing, switching, wireless, Linux, dan konsep jaringan sebagai dasar sistem internet modern.",
  },
  {
    title: "Portofolio & Pengembangan Diri",
    body: "Menggunakan portofolio ini untuk mencatat project, tugas kuliah, sertifikat, dan proses belajar yang terus berkembang.",
  },
];

const certificates = [
  {
    slug: "ccna-introduction-to-networks",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    description:
      "Diberikan oleh Politeknik Negeri Lampung (POLINELA) melalui program Cisco Networking Academy.",
    completionDate: "01 Aug 2025",
    images: [
      {
        src: "/certificates/ccna-introduction-to-networks-sendi-aryadita.png",
        width: 2067,
        height: 1400,
      },
    ],
  },
  {
    slug: "ccna-switching-routing-wireless-essentials",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    description:
      "Diberikan oleh Politeknik Negeri Lampung (POLINELA) melalui program Cisco Networking Academy.",
    completionDate: "08 Jan 2026",
    images: [
      {
        src: "/certificates/ccna-switching-routing-wireless-essentials-sendi-aryadita.png",
        width: 2067,
        height: 1400,
      },
    ],
  },
  {
    slug: "linux-essentials",
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    description:
      "Diberikan oleh Politeknik Negeri Lampung (POLINELA) melalui program Cisco Networking Academy.",
    completionDate: "01 Aug 2025",
    images: [
      {
        src: "/certificates/linux-essentials-sendi-aryadita.png",
        width: 2067,
        height: 1400,
      },
    ],
  },
  {
    slug: "dicoding-belajar-dasar-ai",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    description:
      "Sertifikat kompetensi kelulusan kelas Belajar Dasar AI. Sertifikat ini memiliki dua halaman dan ditampilkan dalam satu kartu.",
    completionDate: "07 Februari 2026",
    images: [
      {
        src: "/certificates/dicoding-belajar-dasar-ai-sendi-aryadita-1.png",
        width: 1871,
        height: 1323,
      },
      {
        src: "/certificates/dicoding-belajar-dasar-ai-sendi-aryadita-2.png",
        width: 1871,
        height: 1323,
      },
    ],
  },
  {
    slug: "microsoft-word-lanjutan",
    title: "Kelas Microsoft Word Lanjutan",
    issuer: "Skillpedia Indonesia",
    description:
      "Sertifikat program pembelajaran skill secara daring untuk kelas Microsoft Word Lanjutan.",
    completionDate: "27 Maret 2026",
    images: [
      {
        src: "/certificates/microsoft-word-lanjutan-sendi-aryadita.png",
        width: 3000,
        height: 2223,
      },
    ],
  },
  {
    slug: "digital-marketing-fundamentals",
    title: "Kelas Digital Marketing Fundamentals",
    issuer: "Skillpedia Indonesia",
    description:
      "Sertifikat program pembelajaran skill secara daring untuk kelas Digital Marketing Fundamentals.",
    completionDate: "13 September 2025",
    images: [
      {
        src: "/certificates/digital-marketing-fundamentals-sendi-aryadita.png",
        width: 3000,
        height: 2223,
      },
    ],
  },
  {
    slug: "dqlab-r-fundamental-data-science",
    title: "R Fundamental for Data Science",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian materi R Fundamental for Data Science dari DQLab.",
    completionDate: "02 Oct 2024",
    images: [
      {
        src: "/certificates/dqlab-r-fundamental-data-science-sendi-aryadita.jpg",
        width: 738,
        height: 524,
      },
    ],
  },
  {
    slug: "dqlab-fundamental-sql-select-statement",
    title: "Fundamental SQL Using SELECT Statement",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian materi Fundamental SQL Using SELECT Statement dari DQLab.",
    completionDate: "03 Oct 2024",
    images: [
      {
        src: "/certificates/dqlab-fundamental-sql-select-statement-sendi-aryadita.jpg",
        width: 749,
        height: 526,
      },
    ],
  },
  {
    slug: "dqlab-python-fundamental-data-science",
    title: "Python Fundamental for Data Science",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian materi Python Fundamental for Data Science dari DQLab.",
    completionDate: "03 Oct 2024",
    images: [
      {
        src: "/certificates/dqlab-python-fundamental-data-science-sendi-aryadita.jpg",
        width: 750,
        height: 529,
      },
    ],
  },
  {
    slug: "dqlab-freeclass-data-science-fundamentals",
    title: "Freeclass: Data Science Fundamentals",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian Freeclass: Data Science Fundamentals dari DQLab.",
    completionDate: "Tidak tercantum",
    images: [
      {
        src: "/certificates/dqlab-freeclass-data-science-fundamentals-sendi-aryadita.jpg",
        width: 749,
        height: 523,
      },
    ],
  },
  {
    slug: "dqlab-quiz-basic-excel",
    title: "Quiz Basic Excel",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian Quiz Basic Excel dari DQLab.",
    completionDate: "03 Oct 2024",
    images: [
      {
        src: "/certificates/dqlab-quiz-basic-excel-sendi-aryadita.jpg",
        width: 749,
        height: 519,
      },
    ],
  },
  {
    slug: "dqlab-guide-learn-r-with-ai",
    title: "Guide to Learn R with AI at DQLab",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian materi Guide to Learn R with AI at DQLab.",
    completionDate: "04 Oct 2024",
    images: [
      {
        src: "/certificates/dqlab-guide-learn-r-with-ai-sendi-aryadita.jpg",
        width: 749,
        height: 520,
      },
    ],
  },
  {
    slug: "dqlab-introduction-data-science-with-r",
    title: "Introduction to Data Science with R",
    issuer: "DQLab",
    description:
      "Sertifikat penyelesaian materi Introduction to Data Science with R dari DQLab.",
    completionDate: "04 Oct 2024",
    images: [
      {
        src: "/certificates/dqlab-introduction-data-science-with-r-sendi-aryadita.jpg",
        width: 749,
        height: 521,
      },
    ],
  },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: "github",
    href: "https://github.com/sendiaryadita",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/_aryadta_?igsh=Z21zczBheDkwZ2hp&utm_source=qr",
  },
  {
    label: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@sndiaryadta_?_r=1&_t=ZS-96RMlzefWDM",
  },
  {
    label: "YouTube",
    icon: "youtube",
    href: "https://youtube.com/@sendiaryadita5155?si=ycp_TdrsU75U1H_b",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/sendi-aryadita-96b29b379/",
  },
];

const githubProfile =
  socialLinks.find((social) => social.label === "GitHub")?.href ??
  "https://github.com/sendiaryadita";

function SocialIcon({ name }: { name: string }) {
  if (name === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.13 2.13 0 0 1 .63-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.86 3.86 0 0 1 1.03-2.68 3.59 3.59 0 0 1 .1-2.65s.84-.27 2.75 1.02A9.48 9.48 0 0 1 12 6c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65a3.86 3.86 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93a2.4 2.4 0 0 1 .69 1.86v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <rect
          width="17"
          height="17"
          x="3.5"
          y="3.5"
          rx="5"
          className="fill-none stroke-current"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3.8" className="fill-none stroke-current" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.2" className="fill-current" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M15.4 3c.32 2.22 1.58 3.54 3.6 3.68v3.15a7.04 7.04 0 0 1-3.53-1.08v5.96c0 3.02-2.06 5.29-5.08 5.29A4.78 4.78 0 0 1 5.5 15.2c0-3.08 2.4-5.18 5.57-4.82v3.22c-1.44-.45-2.45.28-2.45 1.56 0 .95.73 1.73 1.76 1.73 1.13 0 1.84-.68 1.84-2.11V3h3.18Z" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <rect width="19" height="13" x="2.5" y="5.5" rx="3" className="fill-current" />
        <path d="m10 9 5.2 3L10 15V9Z" className="fill-[#d4d3cf]" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M5.3 8.8h3.25V19H5.3V8.8Zm1.63-5A1.88 1.88 0 1 1 6.9 7.56a1.88 1.88 0 0 1 .03-3.76ZM10.5 8.8h3.12v1.39h.04a3.42 3.42 0 0 1 3.08-1.69c3.29 0 3.9 2.16 3.9 4.98V19h-3.25v-4.9c0-1.17-.02-2.67-1.63-2.67-1.64 0-1.89 1.27-1.89 2.58V19H10.5V8.8Z" />
    </svg>
  );
}

function ProjectThumbnail({
  type,
}: {
  type: (typeof projects)[number]["visualType"];
}) {
  if (type === "map") {
    return (
      <div className="project-thumbnail project-thumbnail-map" aria-hidden="true">
        <div className="project-thumbnail-layer">
          <span className="map-path map-path-one" />
          <span className="map-path map-path-two" />
          <span className="map-point map-point-one" />
          <span className="map-point map-point-two" />
          <span className="map-point map-point-three" />
          <span className="map-panel">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    );
  }

  if (type === "parking") {
    return (
      <div className="project-thumbnail project-thumbnail-parking" aria-hidden="true">
        <div className="project-thumbnail-layer">
          <span className="parking-lane" />
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className={`parking-slot parking-slot-${index + 1}`}>
              {index === 1 || index === 4 ? <span className="parking-car" /> : null}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === "wifi") {
    return (
      <div className="project-thumbnail project-thumbnail-wifi" aria-hidden="true">
        <div className="project-thumbnail-layer">
          <span className="wifi-core" />
          <span className="wifi-ring wifi-ring-one" />
          <span className="wifi-ring wifi-ring-two" />
          <span className="wifi-ring wifi-ring-three" />
          <span className="wifi-chart wifi-chart-one" />
          <span className="wifi-chart wifi-chart-two" />
          <span className="wifi-chart wifi-chart-three" />
        </div>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className="project-thumbnail project-thumbnail-network" aria-hidden="true">
        <div className="project-thumbnail-layer">
          <span className="network-line network-line-one" />
          <span className="network-line network-line-two" />
          <span className="network-line network-line-three" />
          <span className="network-node network-router">R</span>
          <span className="network-node network-switch">S</span>
          <span className="network-node network-pc-one" />
          <span className="network-node network-pc-two" />
          <span className="network-node network-pc-three" />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="project-thumbnail project-thumbnail-website" aria-hidden="true">
        <div className="project-thumbnail-layer">
          <span className="browser-window">
            <span className="browser-topbar">
              <span />
              <span />
              <span />
            </span>
            <span className="browser-hero" />
            <span className="browser-line browser-line-one" />
            <span className="browser-line browser-line-two" />
            <span className="browser-card browser-card-one" />
            <span className="browser-card browser-card-two" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-thumbnail project-thumbnail-sensor" aria-hidden="true">
      <div className="project-thumbnail-layer">
        <span className="sensor-chip">
          <span />
          <span />
          <span />
        </span>
        <span className="sensor-ring sensor-ring-one" />
        <span className="sensor-ring sensor-ring-two" />
        <span className="sensor-dot sensor-dot-one" />
        <span className="sensor-dot sensor-dot-two" />
        <span className="sensor-data">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] text-[#111111]">
      <section className="hero-surface relative isolate overflow-hidden bg-[#e7e6e3]">
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <Link
            href="/"
            className="soft-shine flex h-11 w-11 items-center justify-center bg-[#111111] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
            aria-label="Sendi Aryadita"
          >
            SA
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#111111] md:flex">
            <a href="#tentang" className="magnetic-link transition hover:text-[#f0c66b]">
              About me
            </a>
            <a href="#skill" className="magnetic-link transition hover:text-[#f0c66b]">
              Skills
            </a>
            <a
              href="#sertifikat"
              className="magnetic-link transition hover:text-[#f0c66b]"
            >
              Certificates
            </a>
            <a href="#proyek" className="magnetic-link transition hover:text-[#f0c66b]">
              Portfolio
            </a>
            <a
              href="#kontak"
              className="soft-shine bg-[#111111] px-6 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
            >
              Contact me
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl gap-10 px-6 pb-12 pt-8 sm:px-10 md:min-h-[calc(100vh-92px)] md:grid-cols-[0.92fr_1.08fr] md:items-center md:pb-16 md:pt-4 lg:px-12">
          <div className="max-w-[620px] self-center">
            <HeroP
              className="inline-flex border border-black/12 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7a5b12]"
              delay={0.02}
              direction="left"
            >
              Portofolio Mahasiswa TI
            </HeroP>
            <HeroP
              className="mt-7 text-2xl font-bold sm:text-3xl"
              delay={0.12}
              direction="left"
            >
              Hi, I am
            </HeroP>
            <HeroH1 className="hero-name mt-4 font-black" delay={0.24}>
              Sendi Aryadita
            </HeroH1>
            <HeroDiv
              className="mt-4 inline-flex border border-black/12 bg-white/55 px-3.5 py-2 text-[11px] font-black uppercase text-black/58 shadow-sm"
              delay={0.38}
            >
              Web Development <span className="mx-2 text-[#7a5b12]">•</span>{" "}
              Backend <span className="mx-2 text-[#2563eb]">•</span> Network
            </HeroDiv>
            <HeroP
              className="mt-4 text-xl font-bold text-[#7a5b12] sm:text-2xl"
              delay={0.48}
            >
              Teknologi Informasi
            </HeroP>
            <HeroP
              className="mt-3 max-w-xl text-base font-semibold leading-8 text-black/58 sm:text-lg"
              delay={0.56}
            >
              Program Studi Teknologi Rekayasa Internet. Fokus pada pengembangan
              web, backend, jaringan komputer, dan implementasi antarmuka yang
              rapi.
            </HeroP>

            <HeroDiv className="mt-7 flex flex-wrap gap-3" delay={0.66}>
              <a
                href="#proyek"
                className="soft-shine inline-flex min-h-12 items-center justify-center bg-[#111111] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
              >
                Lihat proyek
              </a>
              <a
                href="#kontak"
                className="inline-flex min-h-12 items-center justify-center border border-black/16 bg-white/70 px-6 text-sm font-bold text-[#111111] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Hubungi saya
              </a>
            </HeroDiv>

            <div className="mt-7 flex flex-wrap gap-3">
              <HeroAnchor
                href="mailto:sendi.aryadita78@gmail.com"
                className="soft-shine flex h-11 w-11 items-center justify-center bg-[#d4d3cf] text-lg font-black text-[#111111] shadow-[0_7px_0_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_0_rgba(0,0,0,0.1)]"
                aria-label="Email Sendi Aryadita"
                delay={0.74}
              >
                @
              </HeroAnchor>
              {socialLinks.map((social, index) => (
                <HeroAnchor
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-shine flex h-11 w-11 items-center justify-center bg-[#d4d3cf] text-sm font-black text-[#111111] shadow-[0_7px_0_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_0_rgba(0,0,0,0.1)]"
                  aria-label={`${social.label} Sendi Aryadita`}
                  delay={0.82 + index * 0.06}
                >
                  <SocialIcon name={social.icon} />
                </HeroAnchor>
              ))}
            </div>
          </div>

          <HeroDiv
            className="relative mx-auto flex min-h-[440px] w-full max-w-[560px] items-end justify-center overflow-visible md:min-h-[600px]"
            delay={0.36}
            direction="right"
          >
            <div className="absolute bottom-14 left-1/2 h-[72%] w-[64%] -translate-x-1/2 rounded-full bg-[#bfdbfe]/45 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-[76%] w-[78%] -translate-x-1/2 bg-[linear-gradient(145deg,#f8fbff_0%,#e7f2ff_56%,#cfe4ff_100%)] shadow-[0_26px_64px_rgba(37,99,235,0.16)] [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]" />
            <div className="absolute bottom-1 left-1/2 h-16 w-[42%] -translate-x-1/2 rounded-full bg-[#0f172a]/18 blur-xl" />
            <div className="hero-photo-float relative z-10 h-[min(62vh,520px)] w-auto max-w-[76vw] md:h-[min(76vh,620px)] md:max-w-[420px]">
              <Image
                src="/sendi-hero-formal-trimmed.png"
                alt="Foto Sendi Aryadita"
                width={240}
                height={413}
                priority
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 38vw, 76vw"
                className="hero-photo-image h-full w-auto object-contain object-bottom"
              />
            </div>
          </HeroDiv>
        </div>
      </section>

      <section id="tentang" className="bg-[#111111] py-16 text-white">
        <StaggerGroup className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <StaggerDiv>
            <p className="text-sm font-bold uppercase text-[#f0c66b]">About me</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Mengenal Saya Lebih Dekat
            </h2>
          </StaggerDiv>
          <StaggerDiv className="space-y-5 text-base leading-8 text-white/72">
            <p>
              Saya adalah mahasiswa Teknologi Informasi, Program Studi Teknologi
              Rekayasa Internet, yang sedang membangun kemampuan di bidang
              pengembangan web, backend, jaringan komputer, dan sistem digital.
            </p>
            <p>
              Bagi saya, portofolio ini bukan hanya tempat untuk menampilkan
              hasil akhir, tetapi juga ruang untuk menunjukkan proses belajar,
              tugas kuliah, project, sertifikat, dan pengalaman yang terus
              berkembang.
            </p>
            <p>
              Saya tertarik membuat aplikasi yang rapi, mudah digunakan, dan
              memiliki manfaat nyata. Saat ini saya terus mengembangkan skill
              melalui project web, praktikum jaringan, dokumentasi teknis, dan
              eksplorasi teknologi baru.
            </p>
          </StaggerDiv>
        </StaggerGroup>
      </section>

      <section className="bg-[#f3f0ea] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerGroup className="grid gap-5 md:grid-cols-4">
            {portfolioContents.map((item, index) => (
              <StaggerDiv
                key={item.title}
                className="professional-card group border border-black/10 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-black text-[#8d8b87]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-lg font-black leading-tight transition group-hover:text-[#7a5b12]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-black/62">
                  {item.body}
                </p>
              </StaggerDiv>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="skill" className="bg-[#e7e6e3] py-16">
        <StaggerGroup className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <StaggerDiv>
            <p className="text-sm font-bold uppercase text-[#7a5b12]">
              Work Expertise
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-5 leading-8 text-black/62">
              Beberapa kemampuan yang sedang saya kembangkan melalui project,
              praktikum, dan eksplorasi teknologi di bidang web development,
              backend, jaringan komputer, dan sistem digital.
            </p>
          </StaggerDiv>
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" delay={0.1}>
            {skills.map((skill) => (
              <StaggerArticle
                key={skill.name}
                className="professional-card group rounded border border-black/10 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f3f7ff] transition group-hover:border-[#2563eb]/35 group-hover:bg-[#e7f0ff]">
                    <skill.Icon
                      aria-hidden="true"
                      className={`h-5 w-5 ${skill.iconClassName}`}
                    />
                  </div>
                  <span className="rounded border border-black/10 bg-[#f8f7f4] px-2.5 py-1 text-[11px] font-black uppercase text-black/54 transition group-hover:border-[#f0c66b]/70 group-hover:text-[#7a5b12]">
                    {skill.level}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black leading-tight text-[#111111]">
                  {skill.name}
                </h3>
                <div className="mt-4 h-1.5 overflow-hidden rounded bg-black/8">
                  <div
                    className={`h-full rounded bg-[#2563eb] ${
                      skill.level === "Intermediate"
                        ? "w-3/4"
                        : skill.level === "Basic"
                          ? "w-1/2"
                          : "w-1/3"
                    }`}
                  />
                </div>
              </StaggerArticle>
            ))}
          </StaggerGroup>
        </StaggerGroup>
      </section>

      <section id="sertifikat" className="bg-[#f3f0ea] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase text-[#7a5b12]">
                Certificates
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Sertifikat yang sudah saya selesaikan
              </h2>
              <p className="mt-5 leading-8 text-black/62">
                Bagian ini menjadi bukti pembelajaran formal dan kompetensi yang
                relevan dengan jaringan, routing, switching, dan teknologi
                internet.
              </p>
            </div>
            <p className="w-fit border border-black/10 bg-white px-4 py-2 text-sm font-bold text-black/58">
              {certificates.length} sertifikat
            </p>
          </ScrollReveal>

          <CertificateGrid certificates={certificates} />
        </div>

      </section>

      <section id="proyek" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase text-[#7a5b12]">
                Portfolio
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Proyek pilihan
              </h2>
              <p className="mt-5 leading-8 text-black/62">
                Beberapa project yang saya kerjakan sebagai proses belajar dan
                pengembangan kemampuan di bidang web development, backend,
                jaringan komputer, dan sistem digital.
              </p>
            </div>
            <a
              href="#kontak"
              className="soft-shine inline-flex min-h-11 items-center justify-center bg-[#111111] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
            >
              Diskusi proyek
            </a>
          </ScrollReveal>

          <StaggerGroup className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3" delay={0.08}>
            {projects.map((project, index) => (
              <StaggerArticle
                key={project.title}
                className="professional-card group flex min-h-[500px] flex-col border border-black/10 bg-white p-4 shadow-sm"
              >
                <ProjectThumbnail type={project.visualType} />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-[#7a5b12]">
                      {project.status}
                    </p>
                    <p className="mt-2 text-xs font-bold text-black/44">
                      {project.category}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 bg-[#f3f7ff] text-xs font-black text-[#2563eb] transition group-hover:border-[#2563eb]/40 group-hover:bg-[#e7f0ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 overflow-hidden text-sm font-semibold leading-7 text-black/62 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 bg-[#f8f7f4] px-3 py-1 text-xs font-bold text-black/64 transition group-hover:border-[#f0c66b]/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href="#kontak"
                    className="inline-flex min-h-10 items-center justify-center border border-black/12 bg-[#111111] px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
                  >
                    Detail Project
                  </a>
                </div>
              </StaggerArticle>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="kontak" className="bg-[#111111] pb-16 pt-20 text-white">
        <StaggerGroup className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.92fr_1.08fr] md:items-center">
          <StaggerDiv>
            <p className="text-sm font-bold uppercase text-[#f0c66b]">Contact</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Mari terhubung dan bangun karya berikutnya.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/70">
              Saya terbuka untuk diskusi project, kolaborasi, tugas
              pengembangan web, jaringan komputer, atau sekadar terhubung
              melalui media sosial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:sendi.aryadita78@gmail.com"
                className="soft-shine inline-flex min-h-11 items-center justify-center bg-white px-5 text-sm font-bold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#f0c66b]"
              >
                Kirim Email
              </a>
              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-white/20 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#f0c66b] hover:bg-white/8"
              >
                Lihat GitHub
              </a>
            </div>
          </StaggerDiv>
          <StaggerGroup className="grid gap-3 sm:grid-cols-2" delay={0.1}>
            <StaggerAnchor
              href="mailto:sendi.aryadita78@gmail.com"
              className="professional-card group flex min-h-24 items-center gap-4 border border-white/18 p-5 transition hover:border-[#f0c66b] hover:bg-white/8 hover:shadow-[0_22px_45px_rgba(240,198,107,0.1)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10 text-sm font-black text-[#f0c66b] transition group-hover:scale-105 group-hover:bg-[#f0c66b] group-hover:text-[#111111]">
                @
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-black">Email</span>
                <span className="mt-1 block break-all text-xs font-semibold leading-5 text-white/62 sm:text-[13px]">
                  sendi.aryadita78@gmail.com
                </span>
              </span>
            </StaggerAnchor>
            {socialLinks.map((social) => (
              <StaggerAnchor
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="professional-card group flex min-h-24 items-center gap-4 border border-white/18 p-5 transition hover:border-[#f0c66b] hover:bg-white/8 hover:shadow-[0_22px_45px_rgba(240,198,107,0.1)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10 text-[#f0c66b] transition group-hover:scale-105 group-hover:bg-[#f0c66b] group-hover:text-[#111111]">
                  <SocialIcon name={social.icon} />
                </span>
                <span>
                  <span className="block text-sm font-black">
                    {social.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white/62">
                    Kunjungi profil
                  </span>
                </span>
              </StaggerAnchor>
            ))}
          </StaggerGroup>
        </StaggerGroup>
      </section>
    </main>
  );
}
