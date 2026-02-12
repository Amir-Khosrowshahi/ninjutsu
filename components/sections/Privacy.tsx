"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiSamuraiHelmet, GiNinjaHead, GiSwordman } from "react-icons/gi";
import {
  FaShieldAlt,
  FaUserSecret,
  FaGavel,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileContract,
  FaBook,
  FaUserGraduate,
  FaMedal,
  FaLock,
  FaUserLock,
  FaDatabase,
  FaCookieBite,
  FaMobile,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import {
  MdPrivacyTip,
  MdSecurity,
  MdVerifiedUser,
  MdOutlinePrivacyTip,
  MdOutlineSecurity,
  MdDataUsage,
  MdDelete,
  MdShare,
} from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { RiMedalFill, RiShieldUserLine } from "react-icons/ri";

type SectionItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content?: string[];
  items?: SectionItem[];
};

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>("intro");

  const getCurrentPersianYear = () => {
    const date = new Date();
    const persianDate = new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
    }).format(date);
    return persianDate;
  };

  const currentYear = getCurrentPersianYear();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section-"]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom =
          sectionTop + (section as HTMLElement).offsetHeight;
        const sectionId = section.id.replace("section-", "");

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections: Section[] = [
    {
      id: "intro",
      title: "مقدمه",
      icon: <MdOutlinePrivacyTip className='text-2xl text-primary-gold' />,
      content: [
        "آکادمی نینجا تهران به حریم خصوصی و امنیت اطلاعات شما احترام می‌گذارد. این سیاست‌نامه حریم خصوصی توضیح می‌دهد که ما چگونه اطلاعات شخصی شما را جمع‌آوری، استفاده و محافظت می‌کنیم.",
        "با ثبت‌نام در آکادمی و استفاده از خدمات ما، شما با شرایط این سیاست‌نامه موافقت می‌کنید. ما متعهد به حفظ محرمانگی اطلاعات شما هستیم و از فناوری‌های پیشرفته برای امنیت داده‌ها استفاده می‌کنیم.",
        "این سیاست‌نامه ممکن است به‌روزرسانی شود، بنابراین توصیه می‌کنیم هر از گاهی آن را مطالعه کنید. تاریخ آخرین به‌روزرسانی در انتهای این صفحه درج شده است.",
      ],
    },
    {
      id: "collection",
      title: "اطلاعات جمع‌آوری شده",
      icon: <FaDatabase className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "اطلاعات هویتی",
          description:
            "نام و نام خانوادگی، تاریخ تولد، جنسیت، کد ملی و تصویر پرسنلی برای صدور کارت عضویت و گواهینامه‌ها",
          icon: <FaUserSecret />,
        },
        {
          title: "اطلاعات تماس",
          description:
            "شماره موبایل، ایمیل و آدرس جهت ارتباطات ضروری، اطلاع‌رسانی کلاس‌ها و ارسال گواهینامه‌ها",
          icon: <FaEnvelope />,
        },
        {
          title: "اطلاعات تحصیلی",
          description:
            "مدرک تحصیلی و سوابق ورزشی برای تعیین سطح و برنامه‌ریزی آموزشی مناسب",
          icon: <FaUserGraduate />,
        },
        {
          title: "اطلاعات سلامت",
          description:
            "شرایط جسمانی و محدودیت‌های پزشکی با رضایت شما برای ایمنی در تمرینات",
          icon: <FaShieldAlt />,
        },
        {
          title: "اطلاعات دستگاه",
          description:
            "آی‌پی آدرس، نوع مرورگر و سیستم‌عامل برای بهبود تجربه کاربری در وبسایت",
          icon: <FaMobile />,
        },
        {
          title: "کوکی‌ها",
          description: "فایل‌های کوکی برای ذخیره تنظیمات و بهبود عملکرد وبسایت",
          icon: <FaCookieBite />,
        },
      ],
    },
    {
      id: "usage",
      title: "نحوه استفاده از اطلاعات",
      icon: <MdDataUsage className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "ارائه خدمات",
          description:
            "مدیریت حساب کاربری، ثبت‌نام در کلاس‌ها، پیگیری پیشرفت و صدور گواهینامه",
          icon: <IoIosSchool />,
        },
        {
          title: "ارتباط با شما",
          description:
            "اطلاع‌رسانی تغییرات زمان کلاس‌ها، رویدادهای ویژه، مسابقات و کارگاه‌های آموزشی",
          icon: <FaPhone />,
        },
        {
          title: "بهبود خدمات",
          description:
            "تحلیل آمار و رفتار کاربران برای ارتقای کیفیت آموزش و خدمات",
          icon: <FaMedal />,
        },
        {
          title: "امنیت",
          description:
            "پیشگیری از تقلب، حفظ امنیت حساب‌های کاربری و جلوگیری از سوءاستفاده",
          icon: <MdSecurity />,
        },
        {
          title: "پشتیبانی",
          description: "پاسخگویی به سوالات، رسیدگی به شکایات و رفع مشکلات فنی",
          icon: <RiShieldUserLine />,
        },
      ],
    },
    {
      id: "sharing",
      title: "اشتراک‌گذاری اطلاعات",
      icon: <MdShare className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "عدم فروش اطلاعات",
          description:
            "ما هرگز اطلاعات شخصی شما را به هیچ‌کس نمی‌فروشیم و اجاره نمی‌دهیم.",
          icon: <FaCheckCircle />,
        },
        {
          title: "مربیان و کارکنان",
          description:
            "مربیان و کارکنان آکادمی تنها به اطلاعات ضروری برای انجام وظایف خود دسترسی دارند.",
          icon: <GiSwordman />,
        },
        {
          title: "مراجع قانونی",
          description:
            "در صورت درخواست رسمی مراجع قضایی و قانونی، اطلاعات مطابق با قانون ارائه می‌شود.",
          icon: <FaGavel />,
        },
        {
          title: "بیمه ورزشی",
          description:
            "اطلاعات ضروری برای پوشش بیمه ورزشی با رضایت شما در اختیار شرکت بیمه قرار می‌گیرد.",
          icon: <RiMedalFill />,
        },
      ],
    },
    {
      id: "security",
      title: "امنیت اطلاعات",
      icon: <MdOutlineSecurity className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "رمزنگاری",
          description:
            "تمام اطلاعات شما با پروتکل SSL/TLS رمزنگاری شده و در محیط امن ذخیره می‌شود.",
          icon: <FaLock />,
        },
        {
          title: "دسترسی محدود",
          description:
            "فقط کارکنان مجاز و آموزش‌دیده به اطلاعات شما دسترسی دارند.",
          icon: <FaUserLock />,
        },
        {
          title: "پشتیبان‌گیری",
          description:
            "به صورت منظم از اطلاعات پشتیبان تهیه می‌شود تا از دسترسی دائمی شما اطمینان حاصل شود.",
          icon: <FaDatabase />,
        },
        {
          title: "بروزرسانی",
          description:
            "سیستم‌های امنیتی به صورت مداوم بروزرسانی می‌شوند تا بالاترین سطح حفاظت فراهم شود.",
          icon: <MdVerifiedUser />,
        },
      ],
    },
    {
      id: "rights",
      title: "حقوق شما",
      icon: <RiShieldUserLine className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "دسترسی به اطلاعات",
          description:
            "شما می‌توانید در هر زمان اطلاعات شخصی خود را مشاهده و دریافت کنید.",
          icon: <FaDatabase />,
        },
        {
          title: "ویرایش اطلاعات",
          description:
            "از طریق پنل کاربری می‌توانید اطلاعات خود را ویرایش و به‌روزرسانی کنید.",
          icon: <FaFileContract />,
        },
        {
          title: "حذف اطلاعات",
          description:
            "در صورت انصراف از عضویت، اطلاعات شما پس از تأیید حذف خواهد شد.",
          icon: <MdDelete />,
        },
        {
          title: "لغو عضویت",
          description:
            "می‌توانید در هر زمان عضویت خود را لغو و اطلاعات خود را حذف کنید.",
          icon: <FaExclamationTriangle />,
        },
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 215, 0, 0.3);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 215, 0, 0.5);
        }
      `}</style>

      <section className='relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 lg:py-24'>
        {/* Background Pattern -  overflow-hidden */}
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
          <div className='text-center mb-16 lg:mb-24'>
            <div className='flex items-center justify-center gap-3 mb-6'>
              <GiSamuraiHelmet className='text-4xl lg:text-5xl text-primary-gold' />
              <h1 className='text-4xl lg:text-6xl font-bold text-white'>
                <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                  حریم
                </span>
                <span className='text-primary-gold mr-3'>خصوصی</span>
              </h1>
              <GiNinjaHead className='text-4xl lg:text-5xl text-primary-gold' />
            </div>

            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto' />

            <p className='text-gray-400 text-lg lg:text-xl mt-6 max-w-2xl mx-auto'>
              آکادمی نینجا تهران - حریم خصوصی شما برای ما ارزشمند است
            </p>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
            <div className='lg:col-span-3 order-2 lg:order-1'>
              <div className='lg:sticky lg:top-32'>
                <div className='space-y-6'>
                  <div>
                    <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6'>
                      <h3 className='text-white font-bold text-xl mb-4 flex items-center gap-2'>
                        <FaBook className='text-primary-gold' />
                        فهرست مطالب
                      </h3>
                      <ul className='space-y-2'>
                        {sections.map((section) => (
                          <li key={section.id}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-right px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                                activeSection === section.id
                                  ? "bg-primary-gold/20 text-primary-gold border-r-4 border-primary-gold"
                                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                              }`}
                            >
                              <span className='text-xl'>{section.icon}</span>
                              <span className='text-sm font-medium'>
                                {section.title}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className='bg-gradient-to-br from-primary-gold/10 to-transparent rounded-2xl border border-primary-gold/30 p-6'>
                      <div className='flex items-center gap-3 mb-4'>
                        <FaShieldAlt className='text-2xl text-primary-gold' />
                        <h4 className='text-white font-bold'>
                          آخرین به‌روزرسانی
                        </h4>
                      </div>
                      <p className='text-gray-300 text-sm'>۱۵ دی ۱۴۰۳</p>
                      <p className='text-gray-400 text-xs mt-2'>
                        این سیاست‌نامه جایگزین تمامی نسخه‌های قبلی می‌گردد.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6'>
                      <div className='flex items-center gap-3 mb-4'>
                        <MdPrivacyTip className='text-2xl text-primary-gold' />
                        <h4 className='text-white font-bold'>تعهد ما</h4>
                      </div>
                      <p className='text-gray-300 text-sm mb-3'>
                        ما متعهد به حفظ امنیت و حریم خصوصی اطلاعات شما هستیم.
                      </p>
                      <Link
                        href='/terms'
                        className='inline-block w-full text-center bg-primary-gold/20 hover:bg-primary-gold/30 text-primary-gold font-bold py-2 px-4 rounded-xl border border-primary-gold/50 transition-all duration-300 text-sm'
                      >
                        قوانین و مقررات
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className='lg:col-span-9 order-1 lg:order-2 space-y-12'>
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className='scroll-mt-32'
                >
                  <div className='bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 lg:p-10'>
                    {/* Section Header */}
                    <div className='flex items-center gap-4 mb-8 pb-6 border-b border-gray-800'>
                      <div className='relative'>
                        <div className='absolute inset-0 bg-primary-gold/20 rounded-full blur-md' />
                        <div className='relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center'>
                          {section.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className='text-2xl lg:text-3xl font-bold text-white'>
                          {section.title}
                        </h2>
                        <div className='w-20 h-1 bg-gradient-to-r from-primary-gold to-transparent mt-2' />
                      </div>
                    </div>

                    {/* Content */}
                    <div className='space-y-6'>
                      {section.content && (
                        <div className='space-y-4 text-gray-300 leading-relaxed'>
                          {section.content.map((paragraph, idx) => (
                            <p key={idx} className='text-base lg:text-lg'>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.items && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          {section.items.map((item, idx) => (
                            <div
                              key={idx}
                              className='bg-black/40 rounded-2xl border border-gray-800 p-6 hover:border-primary-gold/50 transition-all duration-300 group'
                            >
                              <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 flex items-center justify-center group-hover:border-primary-gold/50 group-hover:bg-primary-gold/10 transition-all duration-300'>
                                  <span className='text-2xl text-primary-gold'>
                                    {item.icon}
                                  </span>
                                </div>
                                <div className='flex-1'>
                                  <h3 className='text-white font-bold text-lg mb-2'>
                                    {item.title}
                                  </h3>
                                  <p className='text-gray-400 text-sm leading-relaxed'>
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Privacy Promise */}
              <div className='bg-gradient-to-br from-primary-gold/20 to-amber-600/20 rounded-3xl border border-primary-gold/30 p-8 lg:p-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-primary-gold/20 rounded-2xl border border-primary-gold/50 flex items-center justify-center'>
                      <MdVerifiedUser className='text-3xl text-primary-gold' />
                    </div>
                    <div>
                      <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>
                        حریم خصوصی شما برای ما مهم است
                      </h3>
                      <p className='text-gray-300 text-sm lg:text-base'>
                        ما متعهد به حفظ امنیت و محرمانگی اطلاعات شما هستیم و
                        هرگز اطلاعات شما را با اشخاص ثالث به اشتراک نمی‌گذاریم.
                      </p>
                    </div>
                  </div>

                  <Link
                    href='/register'
                    className='flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-105 whitespace-nowrap'
                  >
                    <span>ثبت نام در آکادمی</span>
                  </Link>
                </div>
              </div>

              {/* Footer Note */}
              <div className='text-center text-gray-500 text-sm'>
                <p>
                  آکادمی نینجا تهران حق تغییر و به‌روزرسانی سیاست‌نامه حریم
                  خصوصی را مطابق با نیازهای آموزشی و قوانین جاری برای خود محفوظ
                  می‌دارد.
                </p>
                <p className='mt-2'>
                  © {currentYear} - تمامی حقوق برای آکادمی نینجا تهران محفوظ
                  است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
