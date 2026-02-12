"use client";

import Link from "next/link";
import { FiUsers, FiClock, FiArrowLeft, FiAward } from "react-icons/fi";
import {
  GiSamuraiHelmet,
  GiNinjaStar,
  GiTiger,
  GiDragonfly,
  GiSwordWound,
  GiSurroundedShield,
} from "react-icons/gi";
import { IconType } from "react-icons";

const courses = [
  {
    id: "ninjutsu",
    title: "نینجوتسو",
    description:
      "آموزش کامل فنون نینجا، استتار، حرکات آکروباتیک و تاکتیک‌های رزمی",
    level: "مقدماتی تا پیشرفته",
    duration: "۶ ماه",
    price: "۲,۵۰۰,۰۰۰",
    capacity: "۱۵ نفر",
    image: "/images/courses/ninjutsu.jpg",
    icon: GiNinjaStar,
    instructor: "مهدی صلح دوست",
    students: 234,
    features: [
      "تکنیک‌های استتار",
      "حرکات آکروباتیک",
      "سلاح‌های سنتی",
      "تاکتیک‌های رزمی",
    ],
  },
  {
    id: "samurai",
    title: "سامورایی",
    description: "آموزش فنون کلاسیک سامورایی، کاتانا و فلسفه بوشیدو",
    level: "مقدماتی تا پیشرفته",
    duration: "۸ ماه",
    price: "۳,۲۰۰,۰۰۰",
    capacity: "۱۲ نفر",
    image: "/images/courses/samurai.jpg",
    icon: GiSamuraiHelmet,
    instructor: "سعید همتکار",
    students: 178,
    features: ["کاتانا", "فلسفه بوشیدو", "آیکی‌جوتسو", "کیا‌ای"],
  },
  {
    id: "self-defense",
    title: "دفاع شخصی",
    description: "تکنیک‌های مدرن دفاع شخصی ترکیب شده با فنون سنتی",
    level: "همه سطوح",
    duration: "۴ ماه",
    price: "۱,۸۰۰,۰۰۰",
    capacity: "۲۰ نفر",
    image: "/images/courses/self-defense.jpg",
    icon: GiSurroundedShield,
    instructor: "مهدی صلح دوست",
    students: 312,
    features: [
      "دفاع در فضاهای محدود",
      "خنثی‌سازی حملات",
      "تکنیک‌های قفل مفصل",
      "دفاع در برابر سلاح",
    ],
  },
  {
    id: "ninja-ranger",
    title: "نینجا رنجر",
    description: "دوره ویژه کودکان و نوجوانان با رویکرد بازی و سرگرمی",
    level: "کودکان ۷-۱۴ سال",
    duration: "۶ ماه",
    price: "۲,۲۰۰,۰۰۰",
    capacity: "۱۲ نفر",
    image: "/images/courses/ninja-ranger.jpg",
    icon: GiTiger,
    instructor: "سرکار خانم صلح دوست",
    students: 156,
    features: ["بازی‌های رزمی", "افزایش تمرکز", "انضباط فردی", "اعتماد به نفس"],
  },
  {
    id: "bugei-ryu",
    title: "بوگه یو ریو",
    description: "سبک سنتی و کامل هنرهای رزمی ژاپنی",
    level: "پیشرفته",
    duration: "۱۲ ماه",
    price: "۴,۰۰۰,۰۰۰",
    capacity: "۱۰ نفر",
    image: "/images/courses/bugei-ryu.jpg",
    icon: GiDragonfly,
    instructor: "مهدی صلح دوست",
    students: 89,
    features: [
      "تکنیک‌های ترکیبی",
      "سلاح‌های متنوع",
      "فلسفه رزمی",
      "مبارزه پیشرفته",
    ],
  },
  {
    id: "kogaryu",
    title: "کوگاریو نینجا",
    description: "سبک اختصاصی کوگاریو با تکنیک‌های منحصربفرد",
    level: "پیشرفته",
    duration: "۱۲ ماه",
    price: "۴,۵۰۰,۰۰۰",
    capacity: "۸ نفر",
    image: "/images/courses/kogaryu.jpg",
    icon: GiSwordWound,
    instructor: "سرکار خانم صلح دوست",
    students: 67,
    features: ["سبک اختصاصی", "تکنیک‌های سری", "سلاح‌های سنتی", "مبارزات ویژه"],
  },
];

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: string;
  capacity: string;
  image: string;
  icon: IconType;
  instructor: string;
  students: number;
  features: string[];
  index: number;
}

function CourseCard({
  id,
  title,
  description,
  level,
  duration,
  price,
  capacity,
  icon: Icon,
  instructor,
  students,
  features,
  index,
}: CourseCardProps) {
  return (
    <div
      className='group relative h-full'
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover Effect Border */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-primary-gold/20 to-amber-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500' />

      {/* Main Card */}
      <div className='relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden hover:border-primary-gold/50 transition-all duration-500'>
        {/* Card Header */}
        <div className='relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <Icon className='text-8xl text-primary-gold/20' />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />

          {/* Level Badge */}
          <span className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-gold/30 text-primary-gold text-xs'>
            {level}
          </span>

          {/* Icon */}
          <div className='absolute bottom-4 right-4 w-12 h-12 bg-primary-gold/20 rounded-2xl border border-primary-gold/30 flex items-center justify-center backdrop-blur-sm'>
            <Icon className='text-primary-gold text-2xl' />
          </div>
        </div>

        {/* Card Body */}
        <div className='p-6'>
          {/* Title & Instructor */}
          <div className='mb-4'>
            <h3 className='text-xl font-bold text-white mb-2 group-hover:text-primary-gold transition-colors'>
              {title}
            </h3>
            <p className='text-sm text-gray-400'>مربی: {instructor}</p>
          </div>

          {/* Description */}
          <p className='text-gray-300 text-sm mb-6 line-clamp-2'>
            {description}
          </p>

          {/* Stats */}
          <div className='flex items-center justify-between mb-6 text-sm'>
            <div className='flex items-center gap-2 text-gray-400'>
              <FiClock className='text-primary-gold' />
              <span>{duration}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-400'>
              <FiUsers className='text-primary-gold' />
              <span>{capacity}</span>
            </div>
          </div>

          {/* Features */}
          <div className='mb-6'>
            <div className='flex flex-wrap gap-2'>
              {features && features.length > 0 ? (
                <>
                  {features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-xs'
                    >
                      {feature}
                    </span>
                  ))}
                  {features.length > 3 && (
                    <span className='px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-xs'>
                      +{features.length - 3}
                    </span>
                  )}
                </>
              ) : (
                <span className='px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-xs'>
                  بدون ویژگی
                </span>
              )}
            </div>
          </div>

          {/* Price & CTA */}
          <div className='flex items-center justify-between pt-4 border-t border-gray-800'>
            <div>
              <span className='text-xs text-gray-400'>شهریه ماهانه</span>
              <p className='text-primary-gold font-bold text-lg'>
                {price} <span className='text-xs'>تومان</span>
              </p>
            </div>
            <Link
              href={`/courses/${id}`}
              className='px-6 py-2 border-2 border-primary-gold/50 text-primary-gold 
                       hover:bg-primary-gold hover:text-black transition-all duration-300 text-sm font-bold'
            >
              اطلاعات بیشتر
            </Link>
          </div>
        </div>

        {/* Student Count Badge */}
        <div className='absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary-gold/30'>
          <span className='text-primary-gold text-xs flex items-center gap-1'>
            <FiUsers className='text-xs' />
            {students}+ هنرجو
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        div.group {
          animation: fadeInUp 0.5s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}

export default function Courses() {
  return (
    <section className='py-20 bg-gradient-to-b from-primary-black to-black relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/japanese-wave.png')] bg-repeat" />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-primary-gold text-sm uppercase inline-block mb-2'>
            دوره‌های تخصصی
          </span>
          <h2 className='text-3xl lg:text-4xl text-white mb-4'>
            هنرهای رزمی سنتی
          </h2>
          <div className='w-24 h-1 bg-primary-gold mx-auto' />
          <p className='text-gray-400 max-w-2xl mx-auto mt-6'>
            دوره‌های متنوع برای تمامی سنین و سطوح، از مبتدی تا پیشرفته
          </p>
        </div>

        {/* Courses Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courses.map((course, index) => (
            <CourseCard key={course.id} {...course} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center mt-12'>
          <Link
            href='/courses'
            className='group inline-flex items-center gap-3 border-2 border-primary-gold/50 px-8 py-4 
                     text-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300'
          >
            <span>مشاهده تمام دوره‌ها</span>
            <FiArrowLeft className='group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800'>
          {[
            { icon: FiUsers, value: "۵۰۰۰+", label: "دانش‌آموخته" },
            { icon: FiClock, value: "۲۵+", label: "سال تجربه" },
            { icon: FiAward, value: "۱۲", label: "دوره تخصصی" },
            { icon: GiSamuraiHelmet, value: "۸", label: "مربی مجرب" },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <stat.icon className='text-primary-gold text-3xl mx-auto mb-3' />
              <div className='text-2xl lg:text-3xl text-white mb-1'>
                {stat.value}
              </div>
              <div className='text-sm text-gray-400'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
