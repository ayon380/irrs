import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "../components/Footer";
const APP_NAME = "IRRS";
const APP_DEFAULT_TITLE = "IRRS";
const APP_TITLE_TEMPLATE = "%s - IRRS";
const APP_DESCRIPTION =
  "Railway Reservation system for India. Book tickets, check PNR status, and more";

export const metadata: Metadata = {
  authors: [
    { name: "Ayon" },
    { name: "Ayon", url: "https://github.com/ayon380" },
  ],
  creator: "Ayon Sarkar",
  publisher: "Ayon Sarkar",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  applicationName: APP_NAME,
  metadataBase: new URL("https://muse-mauve.vercel.app/"),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },

  other: {
    "google-site-verification": "CIv4oLnjs20Qn8pwxENCBMm42fVzQEkAeos5F5jRpv4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
