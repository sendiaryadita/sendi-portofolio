import Image from "next/image";
import Link from "next/link";
import { FaDatabase, FaLightbulb, FaNetworkWired, FaServer } from "react-icons/fa";
import {
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiReact,
} from "react-icons/si";

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
    title: "Website Portofolio Pribadi",
    description:
      "Website personal untuk memperkenalkan profil, keahlian, proyek, dan kontak profesional.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In progress",
  },
  {
    title: "Aplikasi Manajemen Data",
    description:
      "Konsep aplikasi CRUD untuk membantu pencatatan data agar lebih terstruktur, cepat dicari, dan mudah dikelola.",
    stack: ["Laravel", "MySQL", "REST API"],
    status: "Project concept",
  },
  {
    title: "Eksplorasi Backend Django",
    description:
      "Latihan membangun struktur backend, routing, model data, dan endpoint sederhana untuk kebutuhan aplikasi web.",
    stack: ["Django", "Python", "SQLite"],
    status: "Learning log",
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
    slug: "pkkmb-polinela",
    title: "PKKMB POLINELA Tahun Akademik 2024/2025",
    issuer: "Politeknik Negeri Lampung",
    description:
      "Sertifikat kegiatan Pengenalan Kehidupan Kampus Bagi Mahasiswa Baru Politeknik Negeri Lampung.",
    completionDate: "26 Agustus 2024",
    images: [
      {
        src: "/certificates/pkkmb-polinela-sendi-aryadita.png",
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
];

const visibleCertificates = certificates.slice(0, 6);
const hiddenCertificates = certificates.slice(6);

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

function CertificateCard({
  certificate,
}: {
  certificate: (typeof certificates)[number];
}) {
  const firstImage = certificate.images[0];
  const hasMultiplePages = certificate.images.length > 1;

  return (
    <article className="professional-card group flex min-h-[340px] flex-col border border-black/10 bg-white p-3 shadow-sm">
      <a
        href={firstImage.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Lihat sertifikat ${certificate.title}`}
        className="relative flex h-[170px] overflow-hidden border border-black/10 bg-[#f8f7f4]"
      >
        <Image
          src={firstImage.src}
          alt={`Thumbnail sertifikat ${certificate.title} - Sendi Aryadita`}
          width={firstImage.width}
          height={firstImage.height}
          sizes="(min-width: 1280px) 310px, (min-width: 768px) 44vw, 90vw"
          className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-[1.035]"
        />
        {hasMultiplePages ? (
          <span className="absolute left-2 top-2 bg-[#111111] px-2.5 py-1 text-[10px] font-black uppercase text-white">
            2 Halaman
          </span>
        ) : null}
      </a>

      <div className="flex flex-1 flex-col pt-4">
        <p className="certificate-issuer text-[11px] font-bold uppercase text-[#7a5b12]">
          {certificate.issuer}
        </p>
        <h3 className="certificate-title mt-2 text-base font-black leading-tight">
          {certificate.title}
        </h3>

        <div className="mt-auto pt-4">
          <p className="text-sm font-bold text-black/58">
            Tanggal: {certificate.completionDate}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {hasMultiplePages ? (
              certificate.images.map((image, index) => (
                <a
                  key={image.src}
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-10 items-center justify-center px-4 text-sm font-bold transition hover:-translate-y-0.5 ${
                    index === 0
                      ? "soft-shine bg-[#111111] text-white hover:bg-[#7a5b12]"
                      : "border border-black/12 bg-[#f8f7f4] text-[#111111] hover:bg-white"
                  }`}
                >
                  Halaman {index + 1}
                </a>
              ))
            ) : (
              <a
                href={firstImage.src}
                target="_blank"
                rel="noreferrer"
                className="soft-shine inline-flex min-h-10 items-center justify-center bg-[#111111] px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
              >
                Buka gambar
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
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
            <p className="fade-up inline-flex border border-black/12 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7a5b12]">
              Portofolio Mahasiswa TI
            </p>
            <p className="fade-up mt-8 text-2xl font-bold sm:text-3xl">Hi, I am</p>
            <h1 className="fade-up-delay-1 mt-5 max-w-xl text-5xl font-black leading-[0.96] text-[#050505] sm:text-6xl lg:text-[82px]">
              Sendi Aryadita
            </h1>
            <p className="fade-up-delay-2 mt-6 text-xl font-bold text-[#7a5b12] sm:text-2xl">
              Teknologi Informasi
            </p>
            <p className="fade-up-delay-2 mt-3 max-w-xl text-base font-semibold leading-8 text-black/58 sm:text-lg">
              Program Studi Teknologi Rekayasa Internet. Fokus pada pengembangan
              web, backend, jaringan komputer, dan implementasi antarmuka yang
              rapi.
            </p>

            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
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
            </div>

            <div className="fade-up-delay-2 mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:sendi.aryadita78@gmail.com"
                className="soft-shine flex h-11 w-11 items-center justify-center bg-[#d4d3cf] text-lg font-black text-[#111111] shadow-[0_7px_0_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_0_rgba(0,0,0,0.1)]"
                aria-label="Email Sendi Aryadita"
              >
                @
              </a>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="soft-shine flex h-11 w-11 items-center justify-center bg-[#d4d3cf] text-sm font-black text-[#111111] shadow-[0_7px_0_rgba(0,0,0,0.14)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_0_rgba(0,0,0,0.1)]"
                  aria-label={`${social.label} Sendi Aryadita`}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="slide-in-right relative mx-auto flex min-h-[440px] w-full max-w-[560px] items-end justify-center overflow-visible md:min-h-[600px]">
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
          </div>
        </div>
      </section>

      <section id="tentang" className="bg-[#111111] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <div className="section-reveal">
            <p className="text-sm font-bold uppercase text-[#f0c66b]">About me</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Mengenal Saya Lebih Dekat
            </h2>
          </div>
          <div className="section-reveal space-y-5 text-base leading-8 text-white/72">
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
          </div>
        </div>
      </section>

      <section className="section-reveal bg-[#f3f0ea] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-4">
            {portfolioContents.map((item, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skill" className="section-reveal bg-[#e7e6e3] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
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
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <article
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sertifikat" className="section-reveal bg-[#f3f0ea] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
              />
            ))}
          </div>

          {hiddenCertificates.length > 0 ? (
            <details className="mt-6">
              <summary className="certificate-summary soft-shine mx-auto flex w-fit cursor-pointer items-center justify-center bg-[#111111] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]">
                Lihat lebih banyak
              </summary>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {hiddenCertificates.map((certificate) => (
                  <CertificateCard
                    key={certificate.title}
                    certificate={certificate}
                  />
                ))}
              </div>
            </details>
          ) : null}
        </div>

      </section>

      <section id="proyek" className="section-reveal bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase text-[#7a5b12]">
                Portfolio
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Proyek pilihan
              </h2>
              <p className="mt-5 leading-8 text-black/62">
                Untuk tahap awal, proyek boleh berasal dari latihan atau tugas
                kuliah. Yang penting dijelaskan masalah, fitur, teknologi, dan
                kontribusi kamu.
              </p>
            </div>
            <a
              href="#kontak"
              className="soft-shine inline-flex min-h-11 items-center justify-center bg-[#111111] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
            >
              Diskusi proyek
            </a>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="professional-card border border-black/10 bg-[#f8f7f4] p-6"
              >
                <p className="text-xs font-bold uppercase text-[#7a5b12]">
                  {project.status}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-28 leading-8 text-black/64">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 bg-white px-3 py-1 text-xs font-bold text-black/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="bg-[#111111] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#f0c66b]">Contact</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Mari terhubung dan bangun karya berikutnya.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              Hubungi saya lewat email atau kunjungi media sosial untuk melihat
              aktivitas, karya, dan proses belajar terbaru.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:sendi.aryadita78@gmail.com"
              className="professional-card flex items-center gap-3 border border-white/18 p-5 font-bold transition hover:border-[#f0c66b] hover:bg-white/8"
            >
              <span className="flex h-8 w-8 items-center justify-center bg-white/10 text-sm">
                @
              </span>
              <span>Email</span>
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="professional-card flex items-center gap-3 border border-white/18 p-5 font-bold transition hover:border-[#f0c66b] hover:bg-white/8"
              >
                <span className="flex h-8 w-8 items-center justify-center bg-white/10">
                  <SocialIcon name={social.icon} />
                </span>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
