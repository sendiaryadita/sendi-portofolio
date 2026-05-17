import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sendi Aryadita | Portofolio",
  description:
    "Portofolio Sendi Aryadita, mahasiswa Teknologi Informasi Program Studi Teknologi Rekayasa Internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
