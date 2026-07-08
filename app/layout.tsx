import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Lesia's Educational Services | Accredited ECD Training",
  description:
    "A premium admissions website for Lesia's Educational Services, offering ETDP-SETA accredited and SAQA-aligned Early Childhood Development qualifications in Soshanguve and Hammanskraal.",
  openGraph: {
    title: "Lesia's Educational Services | Build Your Future in ECD",
    description:
      "Turn your passion for children into a recognised Early Childhood Development career through Saturday-only learning.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
