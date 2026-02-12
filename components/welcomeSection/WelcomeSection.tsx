"use client";

import {
  GiNinjaHead,
  GiMuscleUp,
  GiBrain,
  GiTeacher,
  GiSamuraiHelmet,
} from "react-icons/gi";

export default function WelcomeSection() {
  const features = [
    {
      icon: <GiMuscleUp className='text-4xl text-primary-gold' />,
      title: "آموزش‌های حرفه‌ای بدن سازی",
      description:
        "در نینجا تهران با تمرینات حرفه‌ای و اصولی یاد میگیریم چطور بدنی آماده و سلامت داشته باشیم.",
    },
    {
      icon: <GiBrain className='text-4xl text-primary-gold' />,
      title: "رویکرد فردی",
      description:
        "با یادگیری هنر رزمی نینجا رویکرد فکری شما قوی تر خواهد شد و نگرشتان بهبود خواهد کرد.",
    },
    {
      icon: <GiTeacher className='text-4xl text-primary-gold' />,
      title: "مربیان واجد حرفه‌ای",
      description:
        "مربیان ما سالها تجربه در انواع مختلف ورزش های رزمی و نینجا و سامورایی دارند.",
    },
  ];

  return (
    <section className='relative py-24 bg-black overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-64 h-64 bg-primary-gold rounded-full filter blur-3xl' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary-gold rounded-full filter blur-3xl' />
      </div>

      {/* Japanese Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute bottom-10 right-10 text-6xl text-primary-gold'>
          🗡️
        </div>
        <div className='absolute top-1/2 left-5 text-4xl text-primary-gold'>
          🎴
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Welcome Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center gap-4 mb-6'>
            <GiNinjaHead className='text-4xl text-primary-gold' />
            <span className='w-12 h-0.5 bg-primary-gold/50' />
            <h2 className='text-4xl lg:text-5xl font-black text-white'>
              به وبسایت <span className='text-primary-gold'>نینجا تهران</span>{" "}
              خوش آمدید
            </h2>
            <span className='w-12 h-0.5 bg-primary-gold/50' />
            <GiSamuraiHelmet className='text-4xl text-primary-gold' />
          </div>

          <div className='max-w-4xl mx-auto'>
            <p className='text-xl lg:text-1xl text-gray-300 leading-relaxed mb-4'>
              به وب سایت نینجا تهران خوش آمدید! اینجا کنار هم به یادگیری اصول و
              فنون هنر رزمی نینجا میپردازیم:
            </p>
            <p className='text-sm text-gray-400 leading-relaxed bg-black/50 p-2 rounded-lg  backdrop-blur-sm'>
              در سایت نینجا تهران هر آنچه در مورد
              <span className='text-primary-gold font-bold mx-2'>
                نینجوتسو
              </span>{" "}
              -
              <span className='text-primary-gold font-bold mx-2'>بوگی ریو</span>{" "}
              -
              <span className='text-primary-gold font-bold mx-2'>
                دفاع شخصی
              </span>{" "}
              و<span className='text-primary-gold font-bold mx-2'>مبارزه</span>{" "}
              و همچنین
              <span className='text-primary-gold font-bold mx-2'>سلاح سرد</span>
              میخواهید پیدا خواهید کرد.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
          {features.map((feature, index) => (
            <div key={index} className='group relative'>
              <div className='relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-primary-gold/50 transition-all duration-500 hover:transform hover:-translate-y-2'>
                {/* Decorative corner */}
                <div className='absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-gold/30 group-hover:border-primary-gold transition-all duration-500' />
                <div className='absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-gold/30 group-hover:border-primary-gold transition-all duration-500' />
                <div className='absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-gold/30 group-hover:border-primary-gold transition-all duration-500' />
                <div className='absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-gold/30 group-hover:border-primary-gold transition-all duration-500' />

                {/* Icon */}
                <div className='flex justify-center mb-6'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-primary-gold/20 rounded-full blur-xl group-hover:bg-primary-gold/30 transition-all duration-500' />
                    <div className='relative bg-gray-900 p-4 rounded-full border border-primary-gold/30 group-hover:border-primary-gold group-hover:scale-110 transition-all duration-500'>
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-white text-center mb-4 group-hover:text-primary-gold transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-gray-400 text-center leading-relaxed'>
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className='absolute inset-0 bg-gradient-to-t from-primary-gold/0 via-primary-gold/0 to-primary-gold/0 group-hover:from-primary-gold/5 rounded-lg transition-all duration-500' />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Separator */}
        <div className='w-32 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto mt-20' />
      </div>
    </section>
  );
}
