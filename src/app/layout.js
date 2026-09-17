import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
