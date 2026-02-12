"use client";

import Link from "next/link";
import Image from "next/image";
// import { useEffect, useState } from "react";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";
import { GiSamuraiHelmet, GiNinjaStar } from "react-icons/gi";

export default function Hero() {
  // const [particles, setParticles] = useState<
  //   Array<{ top: string; left: string; animation: string; delay: string }>
  // >([]);

  // useEffect(() => {
  //   const newParticles = [...Array(30)].map(() => ({
  //     top: `${Math.random() * 100}%`,
  //     left: `${Math.random() * 100}%`,
  //     animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`,
  //     delay: `${Math.random() * 2}s`,
  //   }));

  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   setParticles(newParticles);
  // }, []);

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/img/hero/san.JPG'
          alt='Samurai Dojo'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-l from-black via-black/80 to-black/60' />
      </div>

      {/* {particles.length > 0 && (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {particles.map((style, i) => (
            <div
              key={i}
              className='absolute w-1.5 h-1.5 bg-primary-gold/40 rounded-full'
              style={{
                top: style.top,
                left: style.left,
                animation: style.animation,
                animationDelay: style.delay,
              }}
            />
          ))}
        </div>
      )} */}

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 border-2 border-primary-gold/50 px-5 py-2.5 mb-6 rounded-lg bg-black/20 backdrop-blur-sm'>
            <GiSamuraiHelmet className='text-primary-gold text-xl' />
            <span className='text-primary-gold text-sm font-bold tracking-wider'>
              راهِ جنگجو
            </span>
            <GiNinjaStar className='text-primary-gold text-xl' />
          </div>

          {/* Title */}
          <h1 className='text-5xl lg:text-6xl font-bold text-white mb-6 leading-[100px]'>
            <span className='relative inline-block'>هرگز</span>{" "}
            <span className='text-primary-gold text-4xl lg:text-6xl relative inline-block transition-transform'>
              تسلیم
            </span>
            <br />
            <span className='text-primary-gold text-4xl lg:text-6xl relative inline-block transition-transform'>
              نشوید
            </span>
          </h1>

          {/* Description */}
          <p className='text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed'>
            هر فردی که هنر رزمی کار میکند، به فداکاری و تلاش زیادی نیاز دارد. ما
            می‌توانیم هر آنچه را برای رشد جسمی و ذهنی لازم دارید به شما ارائه
            دهیم.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-5'>
            <Link
              href='/courses'
              className='group relative overflow-hidden bg-primary-gold px-8 py-4 text-black font-bold rounded-xl shadow-lg shadow-primary-gold/20 hover:shadow-primary-gold/40 transition-all duration-300'
            >
              <span className='relative z-10 flex items-center gap-2 text-base lg:text-lg'>
                شروع سفر رزمی
                <FiArrowLeft className='group-hover:translate-x-1.5 transition-transform duration-300' />
              </span>
              <span className='absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right' />
            </Link>

            <Link
              href='/about'
              className='group relative border-2 border-primary-gold px-8 py-4 text-primary-gold font-bold rounded-xl hover:bg-primary-gold hover:text-black hover:shadow-lg hover:shadow-primary-gold/20 transition-all duration-300'
            >
              بیشتر بدانید
            </Link>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-800'>
            {[
              { value: "30+", label: "سال تجربه" },
              { value: "۵۰۰۰+", label: "دانش‌آموخته" },
              { value: "۱۲", label: "دوره تخصصی" },
            ].map((stat) => (
              <div key={stat.label} className='relative group'>
                <div className='text-3xl lg:text-4xl font-bold text-primary-gold mb-1 transition-transform duration-300'>
                  {stat.value}
                </div>
                <div className='text-sm lg:text-base text-gray-400 transition-colors duration-300'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-xs text-gray-400 uppercase tracking-wider font-medium'>
            اسکرول
          </span>
          <div className='bg-black/30 backdrop-blur-sm p-2 rounded-full border border-primary-gold/30'>
            <FiChevronDown className='text-primary-gold text-xl' />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none' />
      <div className='absolute top-0 right-0 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl pointer-events-none' />

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}
