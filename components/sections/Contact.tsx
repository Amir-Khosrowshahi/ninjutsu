"use client";

import { useState } from "react";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { GiSamuraiHelmet, GiNinjaStar, GiDragonfly } from "react-icons/gi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const location = {
    lat: 35.7219,
    lng: 51.4244,
    address: "تهران، خیابان ولیعصر، نبش خیابان شهید بهشتی، پلاک ۱۲۳۴",
  };

  return (
    <section className='py-20 bg-gradient-to-b from-black to-primary-black relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/japanese-pattern.png')] bg-repeat" />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div>
            <span className='text-primary-gold text-sm uppercase inline-block mb-2'>
              ارتباط با ما
            </span>
            <h2 className='text-3xl lg:text-4xl text-white mb-6'>
              آماده پاسخگویی به شما هستیم
            </h2>
            <div className='w-20 h-1 bg-primary-gold mb-8' />

            <p className='text-gray-400 text-lg mb-12 leading-relaxed'>
              برای کسب اطلاعات بیشتر درباره دوره‌ها، ثبت نام و مشاوره تخصصی،
              می‌توانید از راه‌های ارتباطی زیر با ما در تماس باشید.
            </p>

            {/* Contact Cards */}
            <div className='space-y-6'>
              {[
                {
                  icon: FiMapPin,
                  title: "آدرس",
                  content: location.address,
                },
                {
                  icon: FiPhone,
                  title: "تلفن تماس",
                  content: "۰۹۱۲۲۰۷۸۴۴۶",
                  extra: "۰۲۱-۸۷۶۵۴۳۲۱",
                },
                {
                  icon: FiMail,
                  title: "ایمیل",
                  content: "info@ninjahouse.ir",
                  extra: "support@ninjahouse.ir",
                },
                {
                  icon: FiClock,
                  title: "ساعات کاری",
                  content: "شنبه تا پنجشنبه ۹ صبح تا ۹ شب",
                  extra: "جمعه‌ها ۱۰ صبح تا ۶ عصر",
                },
              ].map((item, index) => (
                <div key={index} className='flex items-start gap-4 group'>
                  <div
                    className='w-12 h-12 border-2 border-primary-gold/30 flex items-center justify-center
                                group-hover:bg-primary-gold group-hover:text-black transition-all duration-300'
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className='text-primary-gold text-sm mb-1'>
                      {item.title}
                    </h3>
                    <p className='text-white'>{item.content}</p>
                    {item.extra && (
                      <p className='text-gray-400 text-sm mt-1'>{item.extra}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className='mt-12 pt-8 border-t border-gray-800'>
              <h3 className='text-white mb-4'>
                ما را در شبکه‌های اجتماعی دنبال کنید
              </h3>
              <div className='flex gap-4'>
                <a
                  href='https://instagram.com/ninjaacademy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 border border-primary-gold/30 text-primary-gold
                           hover:bg-primary-gold hover:text-black transition-all duration-300 flex items-center justify-center'
                >
                  <GiSamuraiHelmet size={20} />
                </a>
                <a
                  href='https://telegram.me/ninjaacademy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 border border-primary-gold/30 text-primary-gold
                           hover:bg-primary-gold hover:text-black transition-all duration-300 flex items-center justify-center'
                >
                  <GiNinjaStar size={20} />
                </a>
                <a
                  href='https://youtube.com/ninjaacademy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 border border-primary-gold/30 text-primary-gold
                           hover:bg-primary-gold hover:text-black transition-all duration-300 flex items-center justify-center'
                >
                  <GiDragonfly size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className='bg-black/60 border border-primary-gold/30 p-8 backdrop-blur-sm'>
              <h3 className='text-2xl text-white mb-6'>فرم تماس</h3>

              {isSubmitted ? (
                <div className='text-center py-12'>
                  <div className='w-20 h-20 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <FiSend className='text-primary-gold text-3xl' />
                  </div>
                  <h4 className='text-xl text-white mb-2'>پیام شما ارسال شد</h4>
                  <p className='text-gray-400'>
                    کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Name */}
                  <div>
                    <label className='block text-primary-gold text-sm mb-2'>
                      نام و نام خانوادگی
                    </label>
                    <div className='relative'>
                      <FiUser className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full bg-black/50 border border-gray-700 text-white pr-10 px-4 py-3 
                                 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold/50
                                 transition-colors duration-300'
                        placeholder='نام خود را وارد کنید'
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-primary-gold text-sm mb-2'>
                        ایمیل
                      </label>
                      <div className='relative'>
                        <FiMail className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className='w-full bg-black/50 border border-gray-700 text-white pr-10 px-4 py-3 
                                   focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold/50
                                   transition-colors duration-300'
                          placeholder='your@email.com'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-primary-gold text-sm mb-2'>
                        شماره موبایل
                      </label>
                      <div className='relative'>
                        <FiPhone className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                          type='tel'
                          name='phone'
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className='w-full bg-black/50 border border-gray-700 text-white pr-10 px-4 py-3 
                                   focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold/50
                                   transition-colors duration-300'
                          placeholder='۰۹۱۲۳۴۵۶۷۸۹'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className='block text-primary-gold text-sm mb-2'>
                      موضوع
                    </label>
                    <input
                      type='text'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full bg-black/50 border border-gray-700 text-white px-4 py-3 
                               focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold/50
                               transition-colors duration-300'
                      placeholder='موضوع پیام'
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className='block text-primary-gold text-sm mb-2'>
                      پیام
                    </label>
                    <div className='relative'>
                      <FiMessageSquare className='absolute right-3 top-3 text-gray-400' />
                      <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='w-full bg-black/50 border border-gray-700 text-white pr-10 px-4 py-3 
                                 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold/50
                                 transition-colors duration-300 resize-none'
                        placeholder='پیام خود را بنویسید...'
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full relative overflow-hidden group border-2 border-primary-gold/50 
                             px-8 py-4 text-primary-gold hover:bg-primary-gold hover:text-black 
                             transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <span className='relative z-10 flex items-center justify-center gap-2'>
                      {isSubmitting ? (
                        "در حال ارسال..."
                      ) : (
                        <>
                          ارسال پیام
                          <FiSend className='group-hover:translate-x-1 transition-transform' />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map - Google Maps Embed */}
        <div className='mt-16'>
          <div className='bg-black/60 border border-primary-gold/30 p-4'>
            <div className='relative w-full h-[400px] lg:h-[450px] overflow-hidden rounded-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.844789273493!2d51.42222457548783!3d35.72189997257081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0123456789ab%3A0x123456789abcdef!2sValiasr%20St%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute inset-0 w-full h-full'
                title='موقعیت آکادمی نینجا تهران روی نقشه'
              />

              {/* Overlay Info */}
              <div className='absolute bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:bottom-4 lg:w-72 bg-black/80 backdrop-blur-sm border border-primary-gold/30 p-4 rounded-lg'>
                <div className='flex items-start gap-3'>
                  <FiMapPin className='text-primary-gold text-xl flex-shrink-0 mt-1' />
                  <div>
                    <h4 className='text-white font-bold mb-1'>
                      آکادمی نینجا تهران
                    </h4>
                    <p className='text-gray-300 text-sm'>{location.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block mt-2 text-primary-gold text-sm hover:underline'
                    >
                      دریافت مسیریابی
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className='mt-12'>
          <div className='relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 lg:p-10'>
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute -top-10 -right-10 w-64 h-64 bg-primary-gold rounded-full blur-3xl' />
              <div className='absolute -bottom-10 -left-10 w-64 h-64 bg-primary-gold rounded-full blur-3xl' />
            </div>

            <div className='relative z-10'>
              <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 bg-primary-gold/20 rounded-2xl border border-primary-gold/50 flex items-center justify-center'>
                    <FiClock className='text-3xl text-primary-gold' />
                  </div>
                  <div>
                    <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>
                      ساعات کاری
                    </h3>
                    <p className='text-gray-400 text-sm lg:text-base'>
                      شنبه تا پنجشنبه ۹ صبح تا ۹ شب | جمعه‌ها ۱۰ صبح تا ۶ عصر
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <a
                    href='tel:09122078446'
                    className='flex items-center gap-2 px-6 py-3 bg-primary-gold/10 rounded-xl border border-primary-gold/30 text-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300'
                  >
                    <FiPhone className='text-lg' />
                    <span className='text-sm font-bold'>تماس فوری</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
