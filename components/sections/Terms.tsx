"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  GiSamuraiHelmet,
  GiNinjaHead,
  GiSwordman,
  GiBamboo,
  GiJapan,
} from "react-icons/gi";
import {
  FaShieldAlt,
  FaUserSecret,
  FaGavel,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileContract,
  FaBook,
  FaUserGraduate,
  FaClock,
  FaMoneyBillWave,
  FaMedal,
  FaScroll,
} from "react-icons/fa";
import { MdPrivacyTip, MdSecurity, MdVerifiedUser } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { RiMedalFill } from "react-icons/ri";

export default function TermsPage() {
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

  const sections = [
    {
      id: "intro",
      title: "مقدمه",
      icon: <FaScroll className='text-2xl text-primary-gold' />,
      content: [
        "آکادمی نینجا تهران با افتخار از سال ۱۳۸۵ فعالیت خود را در زمینه آموزش هنرهای رزمی سنتی ژاپن آغاز کرده است. این مجموعه با بهره‌گیری از اساتید مجرب و متخصص، محیطی حرفه‌ای و امن برای آموزش هنرجویان عزیز فراهم آورده است.",
        "قوانین و مقررات زیر به منظور ایجاد محیطی منظم، ایمن و حرفه‌ای برای تمامی هنرجویان، مربیان و کارکنان آکادمی تدوین شده است. کلیه افراد ثبت‌نام شده در آکادمی موظف به رعایت این قوانین می‌باشند.",
        "آکادمی نینجا تهران همواره در تلاش است تا بهترین خدمات آموزشی را با بالاترین استانداردهای کیفی ارائه دهد. امیدواریم با رعایت این قوانین توسط تمامی عزیزان، محیطی صمیمی و حرفه‌ای برای یادگیری هنرهای رزمی فراهم شود.",
      ],
    },
    {
      id: "membership",
      title: "شرایط عضویت",
      icon: <IoIosSchool className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "شرایط سنی",
          description:
            "حداقل سن برای ثبت نام ۷ سال تمام می‌باشد. برای گروه‌های سنی مختلف، برنامه‌های آموزشی متناسب با شرایط جسمانی و روحی هنرجویان ارائه می‌شود.",
          icon: <FaUserGraduate />,
        },
        {
          title: "سلامت جسمانی",
          description:
            "هنرجویان باید از سلامت جسمانی کافی برای شرکت در کلاس‌های رزمی برخوردار باشند. در صورت وجود هرگونه بیماری یا محدودیت جسمانی، لازم است پیش از ثبت نام با مربیان مشورت نمایند.",
          icon: <FaShieldAlt />,
        },
        {
          title: "بیمه ورزشی",
          description:
            "تمامی هنرجویان موظف به تهیه بیمه ورزشی معتبر می‌باشند. آکادمی در این زمینه همکاری لازم را جهت معرفی مراکز معتبر بیمه انجام می‌دهد.",
          icon: <MdVerifiedUser />,
        },
        {
          title: "تعهدنامه",
          description:
            "هنرجویان یا اولیای آن‌ها (برای افراد زیر ۱۸ سال) موظف به امضای تعهدنامه رعایت قوانین و مقررات آکادمی می‌باشند.",
          icon: <FaFileContract />,
        },
      ],
    },
    {
      id: "attendance",
      title: "حضور و غیاب",
      icon: <FaClock className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "حضور به موقع",
          description:
            "هنرجویان موظفند حداقل ۱۰ دقیقه پیش از شروع کلاس در سالن حضور داشته باشند. تأخیر بیش از ۱۵ دقیقه به منزله غیاب محسوب می‌شود.",
          icon: <FaClock />,
        },
        {
          title: "غیبت",
          description:
            "در صورت غیبت، هنرجویان می‌توانند حداکثر تا ۲۴ ساعت پیش از شروع کلاس، مراتب را به واحد آموزش اطلاع دهند. غیبت غیرموجه در پایان ترم تأثیر منفی در ارزیابی نهایی خواهد داشت.",
          icon: <FaExclamationTriangle />,
        },
        {
          title: "انتظامات",
          description:
            "خروج از سالن در حین کلاس بدون هماهنگی با مربی مجاز نمی‌باشد. هنرجویان باید در تمام مدت کلاس با انرژی و تمرکز کامل حضور داشته باشند.",
          icon: <FaGavel />,
        },
      ],
    },
    {
      id: "dresscode",
      title: "پوشش و البسه",
      icon: <GiBamboo className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "لباس فرم",
          description:
            "تمامی هنرجویان موظف به استفاده از لباس فرم آکادمی (گی) در کلاس‌ها می‌باشند. لباس باید همواره تمیز و مرتب باشد.",
          icon: <GiSwordman />,
        },
        {
          title: "کمربند",
          description:
            "کمربند متناسب با سطح هنرجو باید به درستی بسته شود. کمربند نشان‌دهنده درجه و پیشرفت هنرجو است و باید با احترام با آن رفتار شود.",
          icon: <RiMedalFill />,
        },
        {
          title: "زیورآلات",
          description:
            "استفاده از هرگونه زیورآلات، ساعت، انگشتر، گردنبند و گوشواره آویز در حین تمرین به دلیل خطر آسیب دیدگی ممنوع می‌باشد.",
          icon: <FaShieldAlt />,
        },
        {
          title: "بهداشت فردی",
          description:
            "رعایت بهداشت فردی الزامی است. ناخن‌ها باید کوتاه باشند و موها به صورت مرتب جمع شده باشند.",
          icon: <FaCheckCircle />,
        },
      ],
    },
    {
      id: "behavior",
      title: "اصول اخلاقی و رفتاری",
      icon: <GiJapan className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "احترام",
          description:
            "احترام به مربیان، هم‌تمرینی‌ها و کارکنان آکادمی از اصول اساسی است. هنرجویان موظف به رعایت ادب و نزاکت در تمامی اوقات می‌باشند.",
          icon: <GiSamuraiHelmet />,
        },
        {
          title: "فروتنی",
          description:
            "هنرهای رزمی بر پایه فروتنی و تواضع بنا شده است. هنرجویان باید همواره با افتادگی رفتار کرده و از هرگونه تکبر و خودبزرگ‌بینی پرهیز نمایند.",
          icon: <GiNinjaHead />,
        },
        {
          title: "همکاری",
          description:
            "هنرجویان باید در تمرینات گروهی با یکدیگر همکاری کرده و به پیشرفت هم‌تمرینی‌های خود کمک نمایند.",
          icon: <FaUserSecret />,
        },
        {
          title: "استفاده از فضای مجازی",
          description:
            "انتشار هرگونه محتوا، فیلم و تصویر از داخل آکادمی بدون هماهنگی با واحد روابط عمومی ممنوع می‌باشد.",
          icon: <MdPrivacyTip />,
        },
      ],
    },
    {
      id: "fees",
      title: "شهریه و هزینه‌ها",
      icon: <FaMoneyBillWave className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "پرداخت شهریه",
          description:
            "شهریه دوره‌ها باید پیش از شروع ترم به صورت کامل پرداخت شود. امکان پرداخت اقساطی برای دوره‌های بلندمدت با هماهنگی واحد مالی وجود دارد.",
          icon: <FaMoneyBillWave />,
        },
        {
          title: "انصراف و استرداد",
          description:
            "در صورت انصراف تا یک هفته پیش از شروع ترم، ۸۰٪ مبلغ پرداختی بازگردانده می‌شود. پس از شروع ترم، وجهی بازگردانده نمی‌شود.",
          icon: <FaExclamationTriangle />,
        },
        {
          title: "تخفیف‌ها",
          description:
            "تخفیف‌های ویژه برای خانواده معظم شهدا، جانبازان، اعضای صندوق‌های حمایتی و ثبت‌نام گروهی در نظر گرفته شده است.",
          icon: <FaMedal />,
        },
      ],
    },
    {
      id: "security",
      title: "ایمنی و امنیت",
      icon: <MdSecurity className='text-2xl text-primary-gold' />,
      items: [
        {
          title: "وسایل شخصی",
          description:
            "آکادمی مسئولیتی در قبال مفقود شدن یا آسیب دیدن وسایل شخصی هنرجویان ندارد. توصیه می‌شود از کمدهای شخصی استفاده نمایید.",
          icon: <FaShieldAlt />,
        },
        {
          title: "حوادث",
          description:
            "در صورت وقوع هرگونه حادثه در حین تمرین، مربیان موظف به ارائه کمک‌های اولیه می‌باشند. پیگیری‌های بعدی از طریق بیمه ورزشی انجام خواهد شد.",
          icon: <FaExclamationTriangle />,
        },
        {
          title: "ورود افراد متفرقه",
          description:
            "ورود افراد غیرعضو به محیط تمرین ممنوع می‌باشد. همراهان هنرجویان می‌توانند در بخش انتظار مستقر شوند.",
          icon: <FaUserSecret />,
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
      <section className='relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 lg:py-24'>
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
          <div className='text-center mb-16 lg:mb-24'>
            <div className='flex items-center justify-center gap-3 mb-6'>
              <GiSamuraiHelmet className='text-4xl lg:text-5xl text-primary-gold' />
              <h1 className='text-4xl lg:text-6xl font-bold text-white'>
                <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                  قوانین و
                </span>
                <span className='text-primary-gold mr-3'>مقررات</span>
              </h1>
              <GiNinjaHead className='text-4xl lg:text-5xl text-primary-gold' />
            </div>

            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent mx-auto' />

            <p className='text-gray-400 text-lg lg:text-xl mt-6 max-w-2xl mx-auto'>
              آکادمی نینجا تهران - راه هنر، انضباط و احترام
            </p>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
            {/* Sidebar - Table of Contents */}
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
                        این قوانین جایگزین تمامی نسخه‌های قبلی می‌گردد.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6'>
                      <div className='flex items-center gap-3 mb-4'>
                        <FaUserSecret className='text-2xl text-primary-gold' />
                        <h4 className='text-white font-bold'>پشتیبانی</h4>
                      </div>
                      <p className='text-gray-300 text-sm mb-3'>
                        سوالی درباره قوانین دارید؟
                      </p>
                      <Link
                        href='/contact'
                        className='inline-block w-full text-center bg-primary-gold/20 hover:bg-primary-gold/30 text-primary-gold font-bold py-2 px-4 rounded-xl border border-primary-gold/50 transition-all duration-300 text-sm'
                      >
                        تماس با پشتیبانی
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
                      {section.content ? (
                        <div className='space-y-4 text-gray-300 leading-relaxed'>
                          {section.content.map((paragraph, idx) => (
                            <p key={idx} className='text-base lg:text-lg'>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          {section.items?.map((item, idx) => (
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

              {/* Acceptance Statement */}
              <div className='bg-gradient-to-br from-primary-gold/20 to-amber-600/20 rounded-3xl border border-primary-gold/30 p-8 lg:p-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 bg-primary-gold/20 rounded-2xl border border-primary-gold/50 flex items-center justify-center'>
                      <FaCheckCircle className='text-3xl text-primary-gold' />
                    </div>
                    <div>
                      <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>
                        پذیرش قوانین
                      </h3>
                      <p className='text-gray-300 text-sm lg:text-base'>
                        ثبت‌نام در آکادمی به منزله مطالعه و پذیرش کامل قوانین و
                        مقررات فوق می‌باشد.
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

              <div className='text-center text-gray-500 text-sm'>
                <p>
                  آکادمی نینجا تهران حق تغییر و به‌روزرسانی قوانین را مطابق با
                  نیازهای آموزشی و اداری برای خود محفوظ می‌دارد.
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
