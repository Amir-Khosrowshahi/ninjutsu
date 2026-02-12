"use client";

import React from "react";
import {
  GiSamuraiHelmet,
  GiNinjaHead,
  GiDoor,
  GiShadowFollower,
} from "react-icons/gi";
import { FaClock, FaFemale, FaMale, FaCalendarAlt } from "react-icons/fa";
import { MdSportsMartialArts, MdLocationOn } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMedalFill } from "react-icons/ri";

type Schedule = {
  days: string;
  time: string;
  gender: string;
  genderType: "male" | "female";
  icon: React.ReactNode;
  venue?: string;
};

type Club = {
  id: number;
  name: string;
  branch: string;
  address: string;
  secondAddress?: string;
  location: string;
  schedules: Schedule[];
  facilities: string[];
  image: string;
  phone: string;
  mapLink: string;
};

export default function ClubsPage() {
  const clubs: Club[] = [
    {
      id: 1,
      name: "باشگاه ساصد",
      branch: "شعبه شمال تهران",
      address:
        "تهران، میدان نوبنیاد، خیابان لنگری، خ فخریزاده، روبروی بیمارستان چمران، باشگاه صنایع",
      location: "منطقه نوبنیاد، تهران",
      schedules: [
        {
          days: "روزهای فرد",
          time: "۱۷:۳۰ الی ۱۹",
          gender: "مردانه",
          genderType: "male",
          icon: <FaMale className='text-blue-400' />,
        },
        {
          days: "روزهای زوج",
          time: "۱۶ الی ۱۷",
          gender: "بانوان",
          genderType: "female",
          icon: <FaFemale className='text-pink-400' />,
        },
      ],
      facilities: ["سالن مجزا", "کفپوش استاندارد", "رختکن", "وسایل تمرینی"],
      image: "/img/clubs/sasad.JPG",
      phone: "۰۲۱۲۲۳۳۴۴۵۵",
      mapLink: "#",
    },
    {
      id: 2,
      name: "باشگاه دولت آباد",
      branch: "شعبه شهرری",
      address:
        "شهرری، دولت آباد، بلوار قدس، رو به روی حسینیه کاظمی ها، باشگاه نادر شهدای دولت آباد (سالن کشتی)",
      location: "دولت آباد، شهرری",
      schedules: [
        {
          days: "روزهای فرد",
          time: "۲۱ الی ۲۲:۳۰",
          gender: "مردانه",
          genderType: "male",
          icon: <FaMale className='text-blue-400' />,
        },
      ],
      facilities: ["سالن کشتی", "تاتامی حرفه‌ای", "اتاق وزنه", "سونا"],
      image: "/img/clubs/dolatabad.jpg",
      phone: "۰۲۱۵۵۲۲۳۳۴۴",
      mapLink: "#",
    },
    {
      id: 3,
      name: "باشگاه تهرانپارس",
      branch: "شعبه شرق تهران",
      address:
        "تهرانپارس، خیابان فرجام، نبش سراج، خ اردیبهشت، روبه روی استخر و سونای دلکده، باشگاه سجاد",
      location: "تهرانپارس، فرجام",
      schedules: [
        {
          days: "روزهای زوج",
          time: "۱۹:۳۰ الی ۲۰:۴۵",
          gender: "بانوان",
          genderType: "female",
          icon: <FaFemale className='text-pink-400' />,
        },
      ],
      facilities: [
        "سالن اختصاصی بانوان",
        "نورپردازی حرفه‌ای",
        "تهویه مطبوع",
        "کفپوش تاتامی",
      ],
      image: "/img/clubs/tehranpars.jpg",
      phone: "۰۲۱۷۷۳۳۴۴۵۵",
      mapLink: "#",
    },
    {
      id: 4,
      name: "باشگاه خواهران منصوریان",
      branch: "شعبه نیاوران و اندرزگو",
      address: "نیاوران - پارک نیاوران - انتهای پارک",
      location: "نیاوران، تهران",
      secondAddress:
        "بلوار اندرزگو، جنب مجتمع تجاری سانا، کوچه زمانی، باشگاه کارتالا",
      schedules: [
        {
          days: "روزهای فرد",
          time: "۱۶ الی ۱۷:۳۰",
          gender: "آقایان",
          genderType: "male",
          icon: <FaMale className='text-blue-400' />,
          venue: "باشگاه آقایان",
        },
        {
          days: "روزهای زوج",
          time: "۱۸ الی ۱۹",
          gender: "بانوان",
          genderType: "female",
          icon: <FaFemale className='text-pink-400' />,
          venue: "باشگاه بانوان - کارتالا",
        },
      ],
      facilities: ["سالن VIP", "تجهیزات مدرن", "کفپوش گرانولی", "سیستم صوتی"],
      image: "/img/clubs/mansourian.jpg",
      phone: "۰۲۱۲۶۷۸۹۰۱۱",
      mapLink: "#",
    },
  ];

  return (
    <section className='relative py-24 lg:py-32 bg-black overflow-hidden mt-[100px] lg:mt-[120px]'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
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
        {/* Header Section */}
        <div className='text-center mb-16 lg:mb-20'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <GiSamuraiHelmet className='text-4xl lg:text-5xl text-primary-gold' />
            <h1 className='text-4xl lg:text-6xl font-bold text-white'>
              <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                باشگاه‌های
              </span>
              <span className='text-primary-gold mr-3'>آکادمی</span>
            </h1>
            <GiNinjaHead className='text-4xl lg:text-5xl text-primary-gold' />
          </div>

          <div className='w-24 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto' />

          <p className='text-gray-400 text-lg lg:text-xl mt-6 max-w-2xl mx-auto'>
            ۴ شعبه فعال در نقاط مختلف تهران، آماده ارائه خدمات به شما عزیزان
          </p>
        </div>

        {/* Clubs Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
          {clubs.map((club) => (
            <div key={club.id} className='group relative h-full'>
              {/* Hover Effect Border */}
              <div className='absolute -inset-0.5 bg-gradient-to-r from-primary-gold/20 to-amber-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500' />

              {/* Main Card */}
              <div className='relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden hover:border-primary-gold/50 transition-all duration-500'>
                {/* Card Header */}
                <div className='relative h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10' />

                  {/* Pattern */}
                  <div className='absolute inset-0 opacity-20'>
                    <div className='absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary-gold/30' />
                    <div className='absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary-gold/30' />
                  </div>

                  {/* Icon */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <GiDoor className='text-8xl text-primary-gold/20' />
                  </div>

                  {/* Club Name Overlay */}
                  <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <div className='flex items-center gap-2 mb-2'>
                          <MdSportsMartialArts className='text-primary-gold text-xl' />
                          <span className='text-primary-gold text-sm font-bold'>
                            {club.branch}
                          </span>
                        </div>
                        <h2 className='text-2xl lg:text-3xl font-bold text-white'>
                          {club.name}
                        </h2>
                      </div>
                      <div className='bg-primary-gold/20 backdrop-blur-sm p-3 rounded-2xl border border-primary-gold/30'>
                        <GiShadowFollower className='text-3xl text-primary-gold' />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className='p-6 lg:p-8 space-y-6'>
                  {/* Address */}
                  <div className='space-y-3'>
                    <div className='flex items-start gap-3'>
                      <HiOutlineLocationMarker className='text-primary-gold text-xl flex-shrink-0 mt-1' />
                      <div>
                        <p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
                          {club.address}
                        </p>
                        {club.secondAddress && (
                          <p className='text-gray-400 text-sm lg:text-base leading-relaxed mt-2 pr-2 border-r-2 border-primary-gold/50'>
                            {club.secondAddress}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className='space-y-3'>
                    <h3 className='text-white font-bold text-lg lg:text-xl flex items-center gap-2'>
                      <FaClock className='text-primary-gold' />
                      زمان‌بندی کلاس‌ها
                    </h3>
                    <div className='space-y-3'>
                      {club.schedules.map((schedule, idx) => (
                        <div
                          key={idx}
                          className='bg-black/40 rounded-xl p-4 border border-gray-800 hover:border-primary-gold/30 transition-all duration-300'
                        >
                          <div className='flex flex-wrap items-center justify-between gap-3'>
                            <div className='flex items-center gap-3'>
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  schedule.genderType === "male"
                                    ? "bg-blue-500/20 border border-blue-500/30"
                                    : "bg-pink-500/20 border border-pink-500/30"
                                }`}
                              >
                                {schedule.icon}
                              </div>
                              <div>
                                {schedule.venue && (
                                  <span className='text-primary-gold text-xs font-bold block mb-1'>
                                    {schedule.venue}
                                  </span>
                                )}
                                <span className='text-white font-bold text-sm lg:text-base'>
                                  {schedule.days}
                                </span>
                                <span className='text-gray-400 text-xs lg:text-sm block'>
                                  {schedule.time}
                                </span>
                              </div>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                schedule.genderType === "male"
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                  : "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                              }`}
                            >
                              {schedule.gender}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div>
                    <h3 className='text-white font-bold text-lg lg:text-xl flex items-center gap-2 mb-3'>
                      <RiMedalFill className='text-primary-gold' />
                      امکانات باشگاه
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {club.facilities.map((facility, idx) => (
                        <span
                          key={idx}
                          className='px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-xs lg:text-sm hover:bg-primary-gold/10 hover:border-primary-gold/30 transition-all duration-300'
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className='flex items-center justify-between pt-4 border-t border-gray-800'>
                    <div className='flex items-center gap-2 text-gray-400'>
                      <MdLocationOn className='text-primary-gold' />
                      <span className='text-sm'>{club.location}</span>
                    </div>
                  </div>
                </div>

                {/* Branch Number Badge */}
                <div className='absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-gold/30 z-30'>
                  <span className='text-primary-gold font-bold text-sm'>
                    شعبه {club.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className='mt-16 lg:mt-20'>
          <div className='relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 lg:p-10'>
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute -top-10 -right-10 w-64 h-64 bg-primary-gold rounded-full blur-3xl' />
              <div className='absolute -bottom-10 -left-10 w-64 h-64 bg-primary-gold rounded-full blur-3xl' />
            </div>

            <div className='relative z-10'>
              <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 bg-primary-gold/20 rounded-2xl border border-primary-gold/50 flex items-center justify-center'>
                    <FaCalendarAlt className='text-3xl text-primary-gold' />
                  </div>
                  <div>
                    <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>
                      زمان‌بندی منظم
                    </h3>
                    <p className='text-gray-400 text-sm lg:text-base'>
                      کلاس‌ها در روزهای فرد مخصوص آقایان و روزهای زوج مخصوص
                      بانوان برگزار می‌شود
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-xl border border-blue-500/30'>
                    <FaMale className='text-blue-400' />
                    <span className='text-white text-sm'>روزهای فرد</span>
                  </div>
                  <div className='flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-xl border border-pink-500/30'>
                    <FaFemale className='text-pink-400' />
                    <span className='text-white text-sm'>روزهای زوج</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }

        .stagger-item {
          animation: fadeInUp 0.5s ease-out;
          animation-fill-mode: both;
        }

        .stagger-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .stagger-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        .stagger-item:nth-child(3) {
          animation-delay: 0.3s;
        }
        .stagger-item:nth-child(4) {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
