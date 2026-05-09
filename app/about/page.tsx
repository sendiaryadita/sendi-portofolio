import Link from "next/link";

const focusAreas = [
  {
    title: "Pengembangan Web",
    body: "Membangun tampilan website yang responsif, rapi, dan mudah dipahami pengguna.",
  },
  {
    title: "Backend & API",
    body: "Mempelajari alur data, database, autentikasi, dan endpoint yang mendukung kebutuhan aplikasi.",
  },
  {
    title: "Teknologi Internet",
    body: "Memahami jaringan, layanan internet, dan fondasi teknis yang membuat aplikasi bisa terhubung.",
  },
];

const nextSteps = [
  "Menambahkan proyek dengan link demo dan repository.",
  "Melengkapi kontak asli seperti GitHub, LinkedIn, dan email.",
  "Mencatat sertifikat, pengalaman organisasi, atau kontribusi tugas kelompok.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] text-[#111111]">
      <section className="bg-[#111111] text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="soft-shine flex h-11 w-11 items-center justify-center bg-white text-sm font-bold text-[#111111] transition hover:-translate-y-0.5"
            aria-label="Beranda Sendi Aryadita"
          >
            SA
          </Link>
          <Link href="/" className="magnetic-link text-sm font-semibold transition hover:text-[#f0c66b]">
            Beranda
          </Link>
        </nav>

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10">
          <p className="fade-up text-sm font-bold uppercase text-[#f0c66b]">
            About me
          </p>
          <h1 className="fade-up-delay-1 mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Saya Sendi Aryadita, mahasiswa Teknologi Informasi yang sedang
            membangun kemampuan lewat proyek nyata.
          </h1>
          <p className="fade-up-delay-2 mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            Saya berada di Program Studi Teknologi Rekayasa Internet. Minat saya
            ada pada pengembangan web, backend, frontend, dan cara kerja sistem
            internet yang mendukung aplikasi modern.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#7a5b12]">
              Fokus belajar
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Area yang sedang saya kembangkan
            </h2>
          </div>
          <div className="grid gap-4">
            {focusAreas.map((area) => (
              <article key={area.title} className="professional-card bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{area.title}</h3>
                <p className="mt-4 leading-8 text-black/64">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase text-[#7a5b12]">
            Pengembangan portofolio
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Konten yang akan membuat profil ini makin kuat
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {nextSteps.map((item, index) => (
              <div key={item} className="professional-card border border-black/10 bg-[#f8f7f4] p-5">
                <p className="text-sm font-black text-[#8d8b87]">
                  0{index + 1}
                </p>
                <p className="mt-5 leading-7 text-black/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
