"use client";

import { useState } from "react";
import Image from "next/image";

import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle,
} from "react-icons/fi";
import { GiSamuraiHelmet, GiNinjaStar } from "react-icons/gi";

const testimonials = [
  {
    id: 1,
    name: "علی رضایی",
    role: "دانش‌آموخته دوره نینجوتسو",
    image: "/images/testimonials/student1.jpg",
    content:
      "بعد از ۲ سال تمرین در آکادمی نینجا هاوس، نه تنها در فنون رزمی پیشرفت فوق‌العاده‌ای داشتم، بلکه اعتماد به نفس و انضباط فردی من کاملاً متحول شد. مربیان با دانش و متد آموزشی منحصربفردشان واقعاً بی‌نظیر هستند.",
    rating: 5,
    course: "نینجوتسو",
    date: "۱۴۰۳/۰۹/۱۵",
  },
  {
    id: 2,
    name: "زهرا محمدی",
    role: "دانش‌آموخته دوره کوگاریو",
    image: "/images/testimonials/student2.jpg",
    content:
      "دوره کوگاریو با تدریس خانم صلح دوست تجربه‌ای کاملاً متفاوت بود. تکنیک‌های اختصاصی و سبک منحصر‌بفرد ایشان واقعاً ارزشمند است. محیط آکادمی بسیار حرفه‌ای و دوستانه است.",
    rating: 5,
    course: "کوگاریو",
    date: "۱۴۰۳/۰۸/۲۰",
  },
  {
    id: 3,
    name: "رضا کریمی",
    role: "دانش‌آموخته دوره سامورایی",
    image: "/images/testimonials/student3.jpg",
    content:
      "آموزش فلسفه بوشیدو در کنار تکنیک‌های رزمی، دیدگاه من را به زندگی تغییر داد. استاد همتکار با صبر و دانش بالا، مفاهیم عمیق سامورایی را به خوبی منتقل می‌کنند.",
    rating: 5,
    course: "سامورایی",
    date: "۱۴۰۳/۰۷/۱۰",
  },
  {
    id: 4,
    name: "سارا احمدی",
    role: "والدین دانش‌آموز نینجا رنجر",
    image: "/images/testimonials/student4.jpg",
    content:
      "پسرم بعد از شرکت در دوره نینجا رنجر، بسیار منظم‌تر و با اعتماد به نفس‌تر شده. روش آموزشی مبتنی بر بازی و سرگرمی باعث شده با اشتیاق در کلاس‌ها شرکت کند.",
    rating: 5,
    course: "نینجا رنجر",
    date: "۱۴۰۳/۰۶/۰۵",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className='py-20 bg-black relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 right-0 w-64 h-64'>
          <GiSamuraiHelmet className='w-full h-full text-primary-gold/20' />
        </div>
        <div className='absolute bottom-0 left-0 w-64 h-64'>
          <GiNinjaStar className='w-full h-full text-primary-gold/20' />
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-primary-gold text-sm uppercase inline-block mb-2'>
            نظرات هنرجویان
          </span>
          <h2 className='text-3xl lg:text-4xl text-white mb-4'>
            تجربه رزمی‌کاران
          </h2>
          <div className='w-24 h-1 bg-primary-gold mx-auto' />
        </div>

        {/* Testimonials Slider */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Quote Icon */}
            <div className='absolute -top-6 right-0 text-6xl text-primary-gold/20'>
              <FiMessageCircle className='transform rotate-180' />
            </div>

            {/* Testimonial Content - حذف AnimatePresence */}
            <div
              key={currentIndex}
              className='bg-black/60 border border-primary-gold/30 p-8 lg:p-12 backdrop-blur-sm transition-opacity duration-300'
            >
              <div className='flex flex-col items-center text-center'>
                {/* Student Image */}
                <div className='relative w-24 h-24 mb-6'>
                  <div className='absolute inset-0 border-2 border-primary-gold/50 rounded-full' />
                  <div className='absolute inset-2 border border-primary-gold/30 rounded-full overflow-hidden'>
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className='flex gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? "text-primary-gold fill-primary-gold"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                  {testimonials[currentIndex].content}
                </p>

                {/* Student Info */}
                <div className='mb-2'>
                  <h4 className='text-xl text-white mb-1'>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className='text-primary-gold text-sm'>
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Course & Date */}
                <div className='flex items-center gap-4 text-xs text-gray-400'>
                  <span className='px-3 py-1 border border-primary-gold/30'>
                    {testimonials[currentIndex].course}
                  </span>
                  <span>{testimonials[currentIndex].date}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className='absolute -right-4 top-1/2 transform -translate-y-1/2 
                       w-12 h-12 border-2 border-primary-gold/50 text-primary-gold
                       hover:bg-primary-gold hover:text-black transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='نظر قبلی'
            >
              <FiChevronRight className='mx-auto' size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className='absolute -left-4 top-1/2 transform -translate-y-1/2
                       w-12 h-12 border-2 border-primary-gold/50 text-primary-gold
                       hover:bg-primary-gold hover:text-black transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed'
              aria-label='نظر بعدی'
            >
              <FiChevronLeft className='mx-auto' size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary-gold"
                    : "bg-gray-600 hover:bg-primary-gold/50"
                }`}
                aria-label={`رفتن به نظر ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800'>
          {[
            { value: "۴.۹", label: "امتیاز میانگین" },
            { value: "۵۰۰+", label: "نظر ثبت شده" },
            { value: "۹۸٪", label: "رضایت هنرجویان" },
            { value: "۱۵۰+", label: "توصیه به دیگران" },
          ].map((badge, index) => (
            <div key={index} className='text-center'>
              <div className='text-2xl text-primary-gold mb-1'>
                {badge.value}
              </div>
              <div className='text-sm text-gray-400'>{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
