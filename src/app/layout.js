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
  "Computer science student at the University of Texas at Dallas, building trading systems, embedded hardware, and web apps.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aparna Balaji",
  description: siteDescription,
  openGraph: {
    title: "Aparna Balaji",
    description: siteDescription,
    url: siteUrl,
    siteName: "Aparna Balaji",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aparna Balaji",
    description: siteDescription,
  },
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
        <Nav />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
