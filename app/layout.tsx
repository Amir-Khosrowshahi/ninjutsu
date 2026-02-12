import type { Metadata } from "next";
import { Cinzel, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "-- ",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "باشگاه ها | نینجا و سامورایی تهران Bugeiryu",
  description: "آکادمی تخصصی هنرهای رزمی نینجا و سامورایی با مربیان درجه یک",
  keywords: "نینجوتسو, سامورایی, دفاع شخصی, نینجا رنجر, بوگه یو ریو, کوگاریو",
  authors: [{ name: "Ninja House Academy" }],
  openGraph: {
    title: "Ninja House Academy",
    description: "آموزش حرفه‌ای هنرهای رزمی نینجا و سامورایی",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fa' dir='rtl'>
      <body
        className={`${cinzel.variable} ${rajdhani.variable} font-rajdhani bg-primary-black text-white`}
      >
        <div className='relative min-h-screen'>
          <div className='fixed inset-0 opacity-5 pointer-events-none' />
          <Header />
          <main className='relative z-10'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
