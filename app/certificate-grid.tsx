"use client";

import Image from "next/image";
import { useState } from "react";
import { StaggerArticle, StaggerGroup } from "./animated";

export type CertificateItem = {
  slug: string;
  title: string;
  issuer: string;
  description: string;
  completionDate: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
};

function CertificateCard({ certificate }: { certificate: CertificateItem }) {
  const firstImage = certificate.images[0];
  const hasMultiplePages = certificate.images.length > 1;

  return (
    <StaggerArticle className="professional-card group flex min-h-[340px] flex-col border border-black/10 bg-white p-3 shadow-sm">
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
    </StaggerArticle>
  );
}

export default function CertificateGrid({
  certificates,
}: {
  certificates: CertificateItem[];
}) {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 6);
  const hasMoreCertificates = certificates.length > 6;

  return (
    <>
      <StaggerGroup
        key={showAllCertificates ? "all-certificates" : "limited-certificates"}
        className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        delay={0.08}
      >
        {visibleCertificates.map((certificate) => (
          <CertificateCard key={certificate.slug} certificate={certificate} />
        ))}
      </StaggerGroup>

      {hasMoreCertificates ? (
        <button
          type="button"
          aria-expanded={showAllCertificates}
          onClick={() => setShowAllCertificates((current) => !current)}
          className="soft-shine mx-auto mt-8 flex min-h-11 items-center justify-center bg-[#111111] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7a5b12]"
        >
          {showAllCertificates ? "Tampilkan lebih sedikit" : "Lihat lebih banyak"}
        </button>
      ) : null}
    </>
  );
}
