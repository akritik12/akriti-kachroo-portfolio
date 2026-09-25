import type { Metadata } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

const siteUrl = "https://akritikachroo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Akriti Kachroo — Economics & Data Analytics",
  description:
    "Portfolio of Akriti Kachroo, M.Sc. Economics & Data Analytics candidate at Symbiosis School of Economics — market research, conjoint analysis, and applied ML/analytics projects.",
  keywords: [
    "Akriti Kachroo",
    "Economics",
    "Data Analytics",
    "Market Research",
    "Conjoint Analysis",
    "Power BI",
    "Python",
    "R",
    "SPSS"
  ],
  openGraph: {
    title: "Akriti Kachroo — Economics & Data Analytics",
    description:
      "M.Sc. Economics & Data Analytics candidate turning market research, pricing, and public health data into strategic decisions.",
    url: siteUrl,
    siteName: "Akriti Kachroo",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akriti Kachroo",
    jobTitle: "M.Sc. Economics & Data Analytics Candidate",
    description:
      "Economics and data analytics professional working across market research, conjoint analysis, and applied ML.",
    url: siteUrl
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
