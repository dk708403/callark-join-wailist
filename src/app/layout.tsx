import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CallArk | AI Voice Receptionist for Indian Businesses",
  description: "Never Miss a Customer Call Again. CallArk is an AI voice receptionist for clinics, coaching centers, salons, and local businesses. It answers calls, captures leads, and works 24/7.",
  openGraph: {
    title: "CallArk | AI Voice Receptionist for Indian Businesses",
    description: "Never Miss a Customer Call Again. CallArk is an AI voice receptionist that works 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-stone-50 text-stone-900 font-sans min-h-screen flex flex-col selection:bg-stone-200 selection:text-stone-900`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
