import Image from "next/image";
import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "Django",
  "Tailwind CSS",
  "REST API",
  "Database",
  "Jaringan Komputer",
  "UI Implementation",
  "Git",
  "Problem Solving",
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

const focusAreas = [
  {
    title: "Web Development",
    body: "Membangun antarmuka yang responsif dan nyaman digunakan dengan struktur komponen yang rapi.",
  },
  {
    title: "Backend & API",
    body: "Merancang logika aplikasi, database, endpoint, dan alur data yang mudah dikembangkan.",
  },
  {
    title: "Internet Technology",
    body: "Memahami cara aplikasi, jaringan, dan layanan internet saling terhubung dalam sistem modern.",
  },
];

const portfolioContents = [
  "Profil singkat yang menjelaskan siapa kamu dan fokus belajarmu.",
  "Proyek nyata, tugas kuliah, atau latihan yang dibuat serius.",
  "Skill teknis, tools, sertifikat, dan pengalaman organisasi.",
  "Kontak profesional seperti email, GitHub, dan LinkedIn.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] text-[#111111]">
      <section className="hero-surface relative isolate min-h-[720px] overflow-hidden bg-[#e7e6e3] md:min-h-screen">
        <div className="panel-reveal absolute inset-y-0 right-0 hidden w-[50%] bg-[#050505] md:block md:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[50%] overflow-hidden md:block md:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]">
          <span className="geo-particle geo-particle-1" />
          <span className="geo-particle geo-particle-2" />
          <span className="geo-particle geo-particle-3" />
          <span className="geo-particle geo-particle-4" />
          <span className="geo-particle geo-particle-5" />
          <span className="geo-particle geo-particle-6" />
          <span className="geo-particle geo-particle-7" />
          <span className="geo-particle geo-particle-8" />
          <span className="geo-particle geo-particle-9" />
        </div>

        <nav className="relative z-20 mx-auto flex max-w-[1480px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          <Link
            href="/"
            className="soft-shine flex h-11 w-11 items-center justify-center bg-[#111111] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
            aria-label="Sendi Aryadita"
          >
            SA
          </Link>
          <div className="hidden items-center gap-9 text-sm font-semibold text-white md:flex">
            <a href="#tentang" className="magnetic-link transition hover:text-[#f0c66b]">
              About me
            </a>
            <a href="#skill" className="magnetic-link transition hover:text-[#f0c66b]">
              Skills
            </a>
            <a href="#proyek" className="magnetic-link transition hover:text-[#f0c66b]">
              Portfolio
            </a>
            <a
              href="#kontak"
              className="soft-shine bg-white px-6 py-3 text-xs font-bold text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#f0c66b]"
            >
              Contact me
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[610px] max-w-[1480px] gap-0 px-6 pb-10 sm:px-10 md:min-h-[calc(100vh-92px)] md:grid-cols-[0.74fr_1.26fr] md:items-center md:pb-0 lg:px-14">
          <div className="max-w-[560px] pt-6 md:-mt-20 md:pt-0">
            <p className="fade-up text-2xl font-bold sm:text-3xl">Hi, I am</p>
            <h1 className="fade-up-delay-1 mt-7 max-w-xl text-5xl font-black leading-[0.98] text-[#050505] sm:text-6xl lg:text-[76px]">
              Sendi Aryadita
            </h1>
            <p className="fade-up-delay-2 mt-5 text-xl font-bold text-[#8d8b87] sm:text-2xl">
              Teknologi Informasi
            </p>
            <p className="fade-up-delay-2 mt-2 max-w-xl text-base font-semibold leading-7 text-[#8d8b87]">
              Program Studi Teknologi Rekayasa Internet
            </p>

            <div className="fade-up-delay-2 mt-11 flex gap-4">
              <a
                href="mailto:sendi.aryadita78@gmail.com"
                className="soft-shine flex h-12 w-12 items-center justify-center bg-[#d4d3cf] text-lg font-black text-[#111111] shadow-[0_8px_0_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_0_rgba(0,0,0,0.12)]"
                aria-label="Email Sendi Aryadita"
              >
                @
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="soft-shine flex h-12 w-12 items-center justify-center bg-[#d4d3cf] text-sm font-black text-[#111111] shadow-[0_8px_0_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_0_rgba(0,0,0,0.12)]"
                aria-label="GitHub Sendi Aryadita"
              >
                GH
              </a>
              <a
                href="#kontak"
                className="soft-shine flex h-12 w-12 items-center justify-center bg-[#d4d3cf] text-sm font-black text-[#111111] shadow-[0_8px_0_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_0_rgba(0,0,0,0.12)]"
                aria-label="Kontak Sendi Aryadita"
              >
                in
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] md:min-h-[calc(100vh-92px)]">
            <div className="absolute bottom-0 right-[-22%] h-[68%] w-[72%] bg-[#171717] blur-3xl" />
            <Image
              src="/sendi-profile-cutout.png"
              alt="Foto Sendi Aryadita"
              width={820}
              height={746}
              priority
              sizes="(min-width: 1280px) 760px, (min-width: 768px) 52vw, 86vw"
              className="slide-in-right absolute bottom-0 left-1/2 z-10 h-auto w-[86vw] max-w-[500px] -translate-x-1/2 object-contain drop-shadow-[0_26px_38px_rgba(0,0,0,0.45)] md:left-auto md:right-[-160px] md:w-[54vw] md:max-w-[800px] md:translate-x-0 lg:right-[-230px] lg:max-w-[880px] xl:right-[-310px]"
            />
          </div>
        </div>
      </section>

      <section id="tentang" className="bg-[#111111] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <div className="section-reveal">
            <p className="text-sm font-bold uppercase text-[#f0c66b]">About me</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Saya membangun portofolio ini sebagai ruang untuk menampilkan
              proses belajar dan karya digital.
            </h2>
          </div>
          <div className="section-reveal space-y-5 text-base leading-8 text-white/72">
            <p>
              Saya adalah mahasiswa Teknologi Informasi, Program Studi Teknologi
              Rekayasa Internet. Fokus saya ada pada pengembangan web, backend,
              frontend, dan pemahaman teknologi internet yang membuat aplikasi
              bisa berjalan dengan baik.
            </p>
            <p>
              Portofolio ini akan terus berkembang seiring proyek, tugas kuliah,
              sertifikat, dan pengalaman yang saya kumpulkan. Tujuannya bukan
              hanya terlihat bagus, tetapi juga menjadi bukti perkembangan skill
              secara nyata.
            </p>
          </div>
        </div>
      </section>

      <section className="section-reveal py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-4">
            {portfolioContents.map((item, index) => (
              <div
                key={item}
                className="professional-card border border-black/10 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-black text-[#8d8b87]">
                  0{index + 1}
                </p>
                <p className="mt-5 text-base font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skill" className="section-reveal bg-[#e7e6e3] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#7a5b12]">Skills</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Skill yang sedang saya bangun
            </h2>
            <p className="mt-5 leading-8 text-black/62">
              Bagian ini bisa diperkuat nanti dengan level kemampuan, sertifikat,
              dan link proyek yang memakai teknologi tersebut.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="professional-card bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{area.title}</h3>
                <p className="mt-4 leading-8 text-black/64">{area.body}</p>
              </article>
            ))}
            <div className="professional-card bg-[#111111] p-6 text-white shadow-sm sm:col-span-2">
              <h3 className="text-xl font-black">Tools & Technologies</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/16 bg-white/8 px-3 py-2 text-sm font-semibold text-white/86"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
              Ganti placeholder kontak ini dengan email, GitHub, dan LinkedIn
              asli kamu agar portofolio siap dibagikan.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:sendi@example.com"
              className="professional-card border border-white/18 p-5 font-bold transition hover:border-[#f0c66b] hover:bg-white/8"
            >
              sendi@example.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="professional-card border border-white/18 p-5 font-bold transition hover:border-[#f0c66b] hover:bg-white/8"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
