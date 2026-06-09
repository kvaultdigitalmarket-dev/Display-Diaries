import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Display Diaries | Curating Luxury Fashion Experiences",
  description: "Display Diaries is Ahmedabad's premier luxury fashion and lifestyle platform. Bridging global luxury fashion brands (Zimmermann, Loewe, Valentino, YSL) with India's most discerning audience.",
  keywords: ["Display Diaries", "Luxury Fashion", "Ahmedabad Events", "Fashion Showcase", "Designer Pop-ups", "Riya Jain", "Nandini Bansal"],
  authors: [{ name: "Riya Jain" }, { name: "Nandini Bansal" }],
  openGraph: {
    title: "Display Diaries | Curating Luxury Fashion Experiences",
    description: "Ahmedabad's premier luxury fashion and lifestyle platform connecting global designers with India's elite.",
    url: "https://displaydiaries.com",
    siteName: "Display Diaries",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#111111] selection:bg-[#C9A96E]/20 selection:text-[#111111] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
