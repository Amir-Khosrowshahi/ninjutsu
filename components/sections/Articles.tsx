"use client";

import Link from "next/link";

import { FiArrowLeft } from "react-icons/fi";
import ArticleCard from "@/components/shared/ArticleCard";

const articles = [
  {
    id: 1,
    title: "فلسفه بوشیدو: راه جنگجو",
    excerpt: "آشنایی با اصول هفت‌گانه سامورایی و تأثیر آن در زندگی مدرن",
    author: "مهدی صلح دوست",
    authorImage: "/img/instructors/mehdi-solhdoost.jpg",
    date: "۱۵ دی ۱۴۰۳",
    category: "فلسفه رزمی",
    image: "/images/articles/bushido.jpg",
    readTime: "۸ دقیقه",
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    title: "تکنیک‌های پایه نینجوتسو",
    excerpt: "آموزش گام به گام حرکات ابتدایی و نحوه صحیح استتار",
    author: "سرکار خانم صلح دوست",
    authorImage: "/img/instructors/khanom-solhdoost.jpg",
    date: "۱۰ دی ۱۴۰۳",
    category: "آموزشی",
    image: "/img/articles/ninja-basics.jpg",
    readTime: "۱۲ دقیقه",
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    title: "تاریخچه کوگاریو",
    excerpt: "بررسی سبک منحصربفرد کوگاریو و ریشه‌های تاریخی آن",
    author: "سعید همتکار",
    authorImage: "/images/instructors/saeed.jpg",
    date: "۵ دی ۱۴۰۳",
    category: "تاریخی",
    image: "/images/articles/kogaryu.jpg",
    readTime: "۱۰ دقیقه",
    likes: 156,
    comments: 28,
  },
];

export default function Articles() {
  return (
    <section className='py-20 bg-gradient-to-b from-primary-black to-black relative overflow-hidden'>
      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='flex justify-between items-end mb-12'>
          <div>
            <span className='text-primary-gold text-sm uppercase inline-block mb-2'>
              مجله رزمی
            </span>
            <h2 className='text-3xl lg:text-4xl text-white'>آخرین مقالات</h2>
            <div className='h-1 bg-primary-gold mt-4' />
          </div>

          <Link
            href='/articles'
            className='hidden md:flex items-center gap-2 text-primary-gold hover:text-white transition-colors group'
          >
            <span>مشاهده همه مقالات</span>
            <FiArrowLeft className='group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.map((article, index) => (
            <div key={article.id}>
              <ArticleCard {...article} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className='text-center mt-12 md:hidden'>
          <Link
            href='/articles'
            className='inline-flex items-center gap-3 border-2 border-primary-gold/50 px-8 py-3 
                     text-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300'
          >
            <span>مشاهده همه مقالات</span>
            <FiArrowLeft />
          </Link>
        </div>

        {/* Categories */}
        <div className='flex flex-wrap justify-center gap-3 mt-16 pt-8 border-t border-gray-800'>
          {[
            "همه مقالات",
            "آموزشی",
            "فلسفه رزمی",
            "تاریخی",
            "دفاع شخصی",
            "تجهیزات",
            "معنوی",
          ].map((category) => (
            <Link
              key={category}
              href={`/articles/category/${category}`}
              className='px-4 py-2 border border-primary-gold/30 text-sm text-gray-400 
                       hover:bg-primary-gold hover:text-black hover:border-primary-gold 
                       transition-all duration-300'
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
