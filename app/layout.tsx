import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope, Playfair_Display, Sora } from "next/font/google";
import "./globals.css";
import "./premium-typography.css";
import "./media-upgrades.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});
const luxury = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-luxury",
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${sora.variable} ${display.variable} ${luxury.variable}`}>
        {children}
      </body>
    </html>
  );
}
