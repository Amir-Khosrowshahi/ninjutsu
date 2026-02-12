"use client";
import Image from "next/image";
import {
  GiNinjaHead,
  GiSamuraiHelmet,
  GiSwordman,
  GiBamboo,
  GiNinjaMask,
  GiMeditation,
} from "react-icons/gi";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { FaVenusMars, FaShieldAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { RiMedalFill } from "react-icons/ri";
import { TbSwords } from "react-icons/tb";

export default function AboutSection() {
  const dojoLocations = [
    "باشگاه خواهران منصوریان",
    "باشگاه نینجا ساصد",
    "باشگاه نینجا شهرری مالک اشتر",
    "باشگاه نینجا نیاوران",
    "باشگاه نینجا جنوب تهران دولت آباد",
  ];

  const teachingStyles = [
    { name: "دفاع شخصی", icon: FaShieldAlt },
    { name: "سامورایی", icon: TbSwords },
    { name: "نینجوتسو", icon: GiNinjaMask },
    { name: "اکروبات", icon: GiSwordman },
  ];

  const achievements = [
    "۳۰ سال سابقه مربیگری",
    "داور رسمی مسابقات کشوری",
    "مربی درجه یک نینجا",
    "متخصص هنرهای رزمی سنتی",
  ];

  return (
    <section className='relative py-20 bg-black'>
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 left-5 text-6xl text-yellow-500/20'>
          ⚔️
        </div>
        <div className='absolute bottom-10 right-5 text-6xl text-yellow-500/20'>
          🗡️
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <GiSamuraiHelmet className='text-4xl text-yellow-400' />
            <h2 className='text-3xl font-bold text-white'>
              <span className='text-yellow-400'>درباره</span> نینجا تهران
            </h2>
            <GiNinjaHead className='text-4xl text-yellow-400' />
          </div>

          <p className='text-gray-400 max-w-2xl mx-auto'>
            خانه هنرهای رزمی سنتی ژاپن در ایران
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          <div className='bg-gray-900/80 rounded-2xl border border-gray-800 p-6'>
            <div className='flex flex-col items-center text-center mb-6'>
              <div className='w-32 h-32 rounded-full bg-gray-800 border-4 border-yellow-500/30 flex items-center justify-center mb-4 overflow-hidden'>
                {/* <FaUserTie className='text-5xl text-yellow-400' /> */}
                <Image
                  src={"/img/faq/mehdi-solhdoost_faq.JPG"}
                  alt=''
                  width={200}
                  height={100}
                  className='object-[0,25px]'
                />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                مهدی صلح دوست
              </h3>
              <div className='bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/30'>
                <span className='text-yellow-400 text-sm'>
                  داور و مربی درجه یک نینجا و سامورایی
                </span>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-white font-bold mb-3 flex items-center gap-2'>
                <RiMedalFill className='text-yellow-400' />
                افتخارات
              </h4>
              <div className='space-y-2'>
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 p-2 bg-black/40 rounded-lg'
                  >
                    <MdVerified className='text-yellow-400 text-sm' />
                    <span className='text-gray-300 text-sm'>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className='text-white font-bold mb-3'>تخصص‌های آموزشی</h4>
              <div className='grid grid-cols-2 gap-2'>
                {teachingStyles.map((style, index) => {
                  const Icon = style.icon;
                  return (
                    <div
                      key={index}
                      className='flex items-center justify-between px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-sm'
                    >
                      <span className='text-gray-300'>{style.name}</span>
                      <Icon className='text-yellow-400/70' />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='bg-gray-900/80 rounded-2xl border border-gray-800 p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <GiMeditation className='text-3xl text-yellow-400' />
                <div>
                  <h4 className='text-xl font-bold text-white'>
                    آموزش حرفه‌ای
                  </h4>
                  <p className='text-yellow-400 text-sm'>
                    هنرهای رزمی نینجا و سامورایی
                  </p>
                </div>
              </div>
              <p className='text-gray-300 text-sm leading-relaxed'>
                دفاع شخصی، سامورایی، نینجوتسو و اکروبات
              </p>
            </div>

            <div className='bg-gray-900/80 rounded-2xl border border-gray-800 p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <FaVenusMars className='text-3xl text-yellow-400' />
                <div>
                  <h4 className='text-xl font-bold text-white'>
                    سالن‌های مجزا
                  </h4>
                  <p className='text-yellow-400 text-sm'>
                    ویژه بانوان و آقایان
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3 p-3 bg-black/40 rounded-lg'>
                <IoIosSchool className='text-2xl text-yellow-400' />
                <div>
                  <p className='text-white font-bold text-sm'>
                    دو سالن نینجا مجزا
                  </p>
                  <p className='text-gray-400 text-xs'>کاملاً مجهز و حرفه‌ای</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-900/80 rounded-2xl border border-gray-800 p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <GiBamboo className='text-3xl text-yellow-400' />
                <div>
                  <h4 className='text-xl font-bold text-white'>
                    شعبه‌های فعال
                  </h4>
                  <p className='text-yellow-400 text-sm'>در نقاط مختلف تهران</p>
                </div>
              </div>
              <div className='space-y-2'>
                {dojoLocations.map((location, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 p-2 bg-black/40 rounded-lg'
                  >
                    <MdLocationOn className='text-yellow-400 text-sm' />
                    <span className='text-gray-300 text-sm'>{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
