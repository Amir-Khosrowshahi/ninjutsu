"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowUp } from "react-icons/fi";
import {
  GiSamuraiHelmet,
  GiNinjaStar,
  GiTiger,
  GiSpikedDragonHead,
  GiShuriken,
} from "react-icons/gi";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className='relative bg-black/90 overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/japanese-wave.png')] opacity-5" />

      {/* Decorative Elements */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent' />
      <div className='absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary-gold/20' />
      <div className='absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary-gold/20' />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 group transition-all duration-700 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 pointer-events-none"
        }`}
        aria-label='بازگشت به بالا'
      >
        <div className='absolute inset-0 rounded-full animate-ping-slow'>
          <div className='absolute inset-0 rounded-full border-2 border-primary-gold/40' />
        </div>
        <div className='absolute inset-[-8px] rounded-full animate-pulse'>
          <div className='absolute inset-0 rounded-full border border-primary-gold/20' />
        </div>

        <div className='relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-gold to-amber-600 shadow-[0_0_30px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-shadow duration-500'>
          <div className='absolute -top-8 -right-8 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500'>
            <GiShuriken className='w-full h-full text-primary-gold animate-spin-slow' />
          </div>
          <div className='absolute -bottom-8 -left-8 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500'>
            <GiShuriken className='w-full h-full text-primary-gold animate-spin-slow animation-delay-1000' />
          </div>

          <div className='absolute inset-0 flex items-center justify-center'>
            <FiArrowUp className='text-black text-2xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300' />
          </div>

          <div className='absolute inset-0 rounded-full bg-primary-gold/20 animate-ping' />
        </div>

        <div className='absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap'>
          <span className='bg-black/80 backdrop-blur-sm border border-primary-gold/30 px-4 py-2 rounded-full text-primary-gold text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-20px] group-hover:translate-x-0'>
            بازگشت به بالا
          </span>
        </div>
      </button>

      <div className='container mx-auto px-4 py-16 relative z-10'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* About Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 group'>
              <div className='relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-500'>
                <div className='absolute inset-0 bg-primary-gold/20 rounded-full animate-pulse' />
                <div className='absolute inset-0 border-2 border-primary-gold/30 rounded-full group-hover:border-primary-gold/60 transition-colors' />
                <Image
                  src='/favicon.ico'
                  alt='Ninja House Academy'
                  fill
                  className='object-contain relative z-10'
                />
              </div>
              <h3 className='text-xl text-primary-gold group-hover:text-amber-400 transition-colors'>
                نینجا تهران
              </h3>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              آکادمی تخصصی هنرهای رزمی نینجا و سامورایی با بیش از 30 سال تجربه
              درخشان آموزشی
            </p>
            <div className='flex gap-4'>
              {[GiSamuraiHelmet, GiNinjaStar, GiTiger, GiSpikedDragonHead].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className='w-10 h-10 border border-primary-gold/30 flex items-center justify-center  text-primary-gold hover:bg-primary-gold hover:text-black hover:scale-110  transition-all duration-300 cursor-pointer'
                  >
                    <Icon size={20} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg text-white mb-6 relative inline-block group'>
              لینک‌های سریع
              <span className='absolute -bottom-2 right-0 w-12 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-500' />
            </h4>
            <ul className='space-y-3'>
              {[
                { name: "دوره‌های آموزشی", href: "/courses" },
                { name: "مربیان", href: "/instructors" },
                { name: "مقالات", href: "/articles" },
                { name: "درباره ما", href: "/about" },
                { name: "تماس با ما", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-2 group'
                  >
                    <span className='w-1 h-1 bg-primary-gold/50 group-hover:w-2  group-hover:bg-primary-gold transition-all duration-300 rounded-full' />
                    <span className=' transition-transform duration-300'>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className='text-lg text-white mb-6 relative inline-block group'>
              دوره‌های ویژه
              <span className='absolute -bottom-2 right-0 w-12 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-500' />
            </h4>
            <ul className='space-y-3'>
              {[
                "نینجوتسو",
                "سامورایی",
                "دفاع شخصی",
                "نینجا رنجر",
                "بوگه یو ریو",
                "کوگاریو",
              ].map((course) => (
                <li key={course}>
                  <Link
                    href={`/courses/${course.toLowerCase().replace(" ", "-")}`}
                    className='text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-2 group'
                  >
                    <span className='w-1 h-1 bg-primary-gold/50 group-hover:w-2  group-hover:bg-primary-gold transition-all duration-300 rounded-full' />
                    <span className='transition-transform duration-300'>
                      {course}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg text-white mb-6 relative inline-block group'>
              اطلاعات تماس
              <span className='absolute -bottom-2 right-0 w-12 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-500' />
            </h4>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3 text-gray-400 group hover:text-primary-gold transition-colors'>
                <FiMapPin className='text-primary-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300' />
                <span className='transition-transform duration-300'>
                  تهران، خیابان ولیعصر، نبش خیابان شهید بهشتی، پلاک ۱۲۳۴
                </span>
              </li>
              <li className='flex items-center gap-3 text-gray-400 group hover:text-primary-gold transition-colors'>
                <FiPhone className='text-primary-gold group-hover:scale-110 transition-transform duration-300' />
                <span className=' transition-transform duration-300'>
                  09122078446
                </span>
              </li>
              <li className='flex items-center gap-3 text-gray-400 group hover:text-primary-gold transition-colors'>
                <FiMail className='text-primary-gold group-hover:scale-110 transition-transform duration-300' />
                <span className='transition-transform duration-300'>
                  info@ninjahouse.ir
                </span>
              </li>
              <li className='flex items-center gap-3 text-gray-400 group hover:text-primary-gold transition-colors'>
                <FiClock className='text-primary-gold group-hover:scale-110 transition-transform duration-300' />
                <span className=' transition-transform duration-300'>
                  شنبه تا پنجشنبه ۹ صبح تا ۹ شب
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-gray-800 relative'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} تمامی حقوق برای آکادمی نینجا تهران
              محفوظ است.
            </p>
            <div className='flex gap-6 text-sm text-gray-500'>
              <Link
                href='/privacy'
                className='hover:text-primary-gold transition-colors relative group'
              >
                حریم خصوصی
                <span className='absolute -bottom-1 right-0 w-0 h-px bg-primary-gold group-hover:w-full transition-all duration-300' />
              </Link>
              <Link
                href='/terms'
                className='hover:text-primary-gold transition-colors relative group'
              >
                شرایط استفاده
                <span className='absolute -bottom-1 right-0 w-0 h-px bg-primary-gold group-hover:w-full transition-all duration-300' />
              </Link>
              <Link
                href='/faq'
                className='hover:text-primary-gold transition-colors relative group'
              >
                سوالات متداول
                <span className='absolute -bottom-1 right-0 w-0 h-px bg-primary-gold group-hover:w-full transition-all duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
}
