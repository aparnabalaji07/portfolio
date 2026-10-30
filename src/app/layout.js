import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://aparnabalaji.vercel.app";
const siteDescription =
  "Aparna Balaji is a computer science student at the University of Texas at Dallas (UTD), originally from Frisco, Texas and now based in the Dallas area. She builds trading systems, embedded hardware, and web apps.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aparna Balaji | CS Student at UT Dallas",
    template: "%s | Aparna Balaji",
  },
  description: siteDescription,
  keywords: [
    "Aparna Balaji",
    "Aparna Balaji Frisco",
    "Aparna Balaji Dallas",
    "Aparna Balaji UTD",
    "Aparna Balaji University of Texas at Dallas",
    "Frisco Texas computer science student",
    "UT Dallas computer science",
  ],
  authors: [{ name: "Aparna Balaji", url: siteUrl }],
  creator: "Aparna Balaji",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Aparna Balaji | CS Student at UT Dallas",
    description: siteDescription,
    url: siteUrl,
    siteName: "Aparna Balaji",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aparna Balaji | CS Student at UT Dallas",
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aparna Balaji",
  url: siteUrl,
  description: siteDescription,
  jobTitle: "Computer Science Student",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Texas at Dallas",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Ottawa",
    },
  ],
  homeLocation: {
    "@type": "Place",
    name: "Frisco, Texas",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/aparnabalaji07",
    "https://www.linkedin.com/in/aparna-balaji07/",
  ],
};

const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      document.documentElement.setAttribute("data-theme", stored || "dark");
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
