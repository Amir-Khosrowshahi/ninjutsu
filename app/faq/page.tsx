"use client";

import Image from "next/image";
import { useState } from "react";
import { GiSamuraiHelmet, GiNinjaHead, GiBamboo } from "react-icons/gi";
import {
  FaQuestionCircle,
  FaShieldAlt,
  FaMedal,
  FaUserGraduate,
  FaWhatsapp,
} from "react-icons/fa";
import { MdContactPhone, MdVerified } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null | string>(null);

  const faqCategories = [
    {
      id: "general",
      title: "سوالات عمومی",
      icon: (
        <FaQuestionCircle className='text-2xl lg:text-3xl text-primary-gold' />
      ),
      questions: [
        {
          q: "توی کلاس‌های شما چه چیزهایی یاد می‌گیرم؟",
          a: "در دوره‌های آموزشی ما شما به صورت کامل و حرفه‌ای با موارد زیر آشنا می‌شوید: ضربات دست و پا، دفاع شخصی کامل، حرکات اکروبات و نمایشی، کار با سلاح‌های سرد، شنا و رزم در آب، بدن سازی رزمی و آمادگی جسمانی ویژه.",
          highlight: true,
        },
        {
          q: "آیا مسابقه داره؟ و از چه سنی می‌شه شروع کرد؟",
          a: "بله، مسابقات رسمی و دوره‌ای در سطوح مختلف برگزار می‌شود. شما از سن ۷ سالگی می‌توانید هنرهای رزمی نینجا را شروع کنید. برای گروه‌های سنی مختلف برنامه‌های ویژه‌ای در نظر گرفته شده است.",
          highlight: true,
        },
        {
          q: "چقدر باید کار کنم تا نینجا بشم؟",
          a: "برای به دست آوردن مهارت لازم و تبدیل شدن به یک نینجای حرفه‌ای، حداقل باید ۲ سال به صورت متوالی و منظم ورزش را ادامه دهید. البته مسیر یادگیری همیشه ادامه دارد و هر روز می‌توانید پیشرفت کنید.",
          highlight: true,
        },
      ],
    },
    {
      id: "registration",
      title: "ثبت نام و شرایط",
      icon: <IoIosSchool className='text-2xl lg:text-3xl text-primary-gold' />,
      questions: [
        {
          q: "چطور می‌تونم ثبت نام کنم؟",
          a: "برای ثبت نام دو راه دارید: ۱- از طریق بخش تماس با ما در سایت فرم ثبت نام را پر کنید ۲- با شماره ۰۹۱۲۲۰۷۸۴۴۶ تماس بگیرید و هماهنگی‌های لازم را انجام دهید.",
          highlight: true,
        },
        {
          q: "می‌تونم یه جلسه امتحانی بیام؟",
          a: "بله، شما می‌توانید یک جلسه به صورت کاملاً رایگان در کلاس‌های ما شرکت کنید. فقط کافی است بیمه ورزشی داشته باشید. این فرصت عالی را از دست ندهید!",
          highlight: true,
        },
        {
          q: "آیا برای بانوان هم کلاس دارید؟",
          a: "بله، در تمامی شعبه‌های ما سالن‌های مجزا و کاملاً حرفه‌ای ویژه بانوان با مربیان خانم آماده خدمت‌رسانی است.",
          highlight: false,
        },
        {
          q: "هزینه کلاس‌ها چقدر است؟",
          a: "شهریه با توجه به نوع دوره، سطح آموزشی و شعبه انتخابی متفاوت است. برای اطلاع دقیق از هزینه‌ها لطفاً با شماره تماس ما تماس بگیرید.",
          highlight: false,
        },
      ],
    },
    {
      id: "equipment",
      title: "تجهیزات و امکانات",
      icon: <FaShieldAlt className='text-2xl lg:text-3xl text-primary-gold' />,
      questions: [
        {
          q: "چه تجهیزاتی نیاز دارم؟",
          a: "در جلسه اول نیازی به تجهیزات خاصی نیست. بعد از ثبت نام، لباس ورزشی مناسب و وسایل ایمنی اولیه توسط آکادمی معرفی می‌شود. تمامی تجهیزات تخصصی در سالن‌های ما موجود است.",
          highlight: false,
        },
        {
          q: "آیا سلاح تمرینی هم دارید؟",
          a: "بله، آکادمی دارای انواع سلاح‌های سرد تمرینی استاندارد شامل شمشیر سامورایی، چوب‌کوتاه، سای و ... برای آموزش هنرجویان است.",
          highlight: false,
        },
      ],
    },
  ];

  const contactInfo = {
    phone: "۰۹۱۲۲۰۷۸۴۴۶",
    whatsapp: "۰۹۱۲۲۰۷۸۴۴۶",
    email: "info@ninjaacademy.ir",
  };

  const toggleQuestion = (questionId: string) => {
    setOpenIndex(openIndex === questionId ? null : questionId);
  };

  return (
    <section className='relative py-24 lg:py-32 bg-black overflow-y-visible'>
      <div className='h-20 lg:h-[120px]' />

      {/* Background Pattern */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1)_0%,transparent_50%)]' />
          <div className='absolute top-20 left-10 text-8xl text-primary-gold/10 rotate-12'>
            ⚔️
          </div>
          <div className='absolute bottom-20 right-10 text-8xl text-primary-gold/10 -rotate-12'>
            🗡️
          </div>
          <div className='absolute top-1/2 left-1/4 w-64 h-64 border border-primary-gold/5 rounded-full' />
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 border border-primary-gold/5 rounded-full' />
        </div>

        <div className='absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary-gold/20 via-primary-gold/10 to-transparent' />
        <div className='absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary-gold/20 via-primary-gold/10 to-transparent' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 lg:mb-24'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <GiSamuraiHelmet className='text-4xl lg:text-5xl text-primary-gold' />
            <h1 className='text-4xl lg:text-6xl font-bold text-white'>
              <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                سوالات
              </span>
              <span className='text-primary-gold mr-3'>متداول</span>
            </h1>
            <GiNinjaHead className='text-4xl lg:text-5xl text-primary-gold' />
          </div>

          <div className='w-24 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto' />

          <p className='text-gray-400 text-lg lg:text-xl mt-6 max-w-2xl mx-auto'>
            پاسخ تمام سوالات خود را درباره آکادمی نینجا تهران پیدا کنید
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative'>
          {/* Right Column - Master Image (Sticky) */}
          <div className='lg:col-span-5 order-1 lg:order-2'>
            <div className='lg:sticky lg:top-32'>
              <div className='relative group'>
                {/* Frame Decoration */}
                <div className='absolute -inset-4 bg-gradient-to-r from-primary-gold/20 to-amber-600/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500' />

                {/* Master Image Container */}
                <div className='relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden'>
                  {/* Japanese Pattern Overlay */}
                  <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary-gold/30' />
                    <div className='absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary-gold/30' />
                  </div>

                  {/* Image */}
                  <div className='relative aspect-[3/4] w-full'>
                    <Image
                      src='/img/faq/mehdi-solhdoost_faq.JPG'
                      alt='استاد مهدی صلح دوست - داور و مربی درجه یک نینجا و سامورایی'
                      fill
                      className='object-cover object-center'
                      priority
                    />

                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />

                    {/* Title Overlay */}
                    <div className='absolute bottom-0 left-0 right-0 p-6 lg:p-8'>
                      <div className='flex items-center gap-3 mb-2'>
                        <FaMedal className='text-primary-gold text-xl lg:text-2xl' />
                        <span className='text-primary-gold font-bold text-sm lg:text-base'>
                          داور و مربی درجه یک
                        </span>
                      </div>
                      <h2 className='text-2xl lg:text-3xl font-bold text-white mb-2'>
                        مهدی صلح دوست
                      </h2>
                      <p className='text-gray-300 text-sm lg:text-base'>
                        30 سال تجربه آموزش هنرهای رزمی
                      </p>
                    </div>
                  </div>

                  <div className='absolute bottom-4 right-4'>
                    <GiBamboo className='text-3xl text-primary-gold/30 rotate-12' />
                  </div>
                </div>

                {/* Master Stats */}
                <div className='grid grid-cols-2 gap-4 mt-6'>
                  <div className='bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 text-center'>
                    <FaUserGraduate className='text-2xl text-primary-gold mx-auto mb-2' />
                    <span className='block text-white font-bold text-lg'>
                      +۱۰۰۰
                    </span>
                    <span className='text-gray-400 text-sm'>هنرجوی موفق</span>
                  </div>
                  <div className='bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 text-center'>
                    <FaMedal className='text-2xl text-primary-gold mx-auto mb-2' />
                    <span className='block text-white font-bold text-lg'>
                      +۵۰
                    </span>
                    <span className='text-gray-400 text-sm'>مقام قهرمانی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - FAQ Categories */}
          <div className='lg:col-span-7 order-2 lg:order-1 space-y-8 lg:space-y-12'>
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.id} className='relative'>
                {/* Category Header */}
                <div className='flex items-center gap-3 mb-6 lg:mb-8'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-primary-gold/20 rounded-full blur-md' />
                    <div className='relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 flex items-center justify-center'>
                      {category.icon}
                    </div>
                  </div>
                  <h2 className='text-2xl lg:text-3xl font-bold text-white'>
                    {category.title}
                  </h2>
                  <div className='flex-1 h-px bg-gradient-to-r from-primary-gold/50 to-transparent' />
                </div>

                {/* Questions Accordion */}
                <div className='space-y-4'>
                  {category.questions.map((item, index) => {
                    const questionId = `${categoryIndex}-${index}`;
                    const isOpen = openIndex === questionId;

                    return (
                      <div key={index} className='relative group'>
                        <div
                          className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${
                            isOpen
                              ? "border-primary-gold shadow-lg shadow-primary-gold/10"
                              : "border-gray-800 hover:border-gray-700"
                          }`}
                          onClick={() => toggleQuestion(questionId)}
                        >
                          {/* Question */}
                          <div className='p-5 lg:p-6'>
                            <div className='flex items-start gap-3'>
                              <div className='flex-shrink-0 mt-1'>
                                <div
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                                    isOpen
                                      ? "border-primary-gold bg-primary-gold/20"
                                      : "border-gray-600"
                                  }`}
                                >
                                  <span className='text-primary-gold text-xs'>
                                    ?
                                  </span>
                                </div>
                              </div>

                              <div className='flex-1'>
                                <h3 className='text-white font-bold text-base lg:text-lg ml-auto'>
                                  {item.q}
                                </h3>
                              </div>

                              <div className='flex-shrink-0 mr-2'>
                                <div
                                  className={`w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 ${
                                    isOpen
                                      ? "bg-primary-gold/20 border-primary-gold"
                                      : ""
                                  }`}
                                >
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                      isOpen
                                        ? "rotate-180 text-primary-gold"
                                        : "text-gray-400"
                                    }`}
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                  >
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth={2}
                                      d='M19 9l-7 7-7-7'
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`grid transition-all duration-300 ${
                                isOpen
                                  ? "grid-rows-[1fr] opacity-100 mt-4"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className='overflow-hidden'>
                                <div className='border-t border-gray-800 pt-4'>
                                  <div className='flex items-start gap-2 pr-9'>
                                    <MdVerified className='text-primary-gold text-lg flex-shrink-0 mt-0.5' />
                                    <p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
                                      {item.a}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className='relative mt-8 lg:mt-12'>
              <div className='relative bg-gradient-to-br from-primary-gold/10 to-transparent rounded-3xl border border-primary-gold/30 p-8 lg:p-10 overflow-hidden'>
                {/* Decorative Elements */}
                <div className='absolute inset-0 opacity-10'>
                  <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary-gold rounded-full blur-3xl' />
                  <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-primary-gold rounded-full blur-3xl' />
                </div>

                <div className='relative z-10'>
                  <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
                    <div className='flex items-center gap-4'>
                      <div className='w-16 h-16 bg-primary-gold/20 rounded-2xl border border-primary-gold/50 flex items-center justify-center'>
                        <MdContactPhone className='text-3xl text-primary-gold' />
                      </div>
                      <div>
                        <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>
                          آماده پاسخگویی هستیم
                        </h3>
                        <p className='text-gray-300 text-sm lg:text-base'>
                          سوال دیگری دارید؟ همین حالا با ما تماس بگیرید
                        </p>
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4'>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className='flex items-center justify-center gap-2 px-6 py-3 bg-primary-gold hover:bg-amber-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105'
                      >
                        <BsFillTelephoneFill className='text-lg' />
                        {contactInfo.phone}
                      </a>
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105'
                      >
                        <FaWhatsapp className='text-lg' />
                        واتساپ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
