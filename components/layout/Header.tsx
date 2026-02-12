"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { FiMenu, FiX, FiUser, FiChevronDown } from "react-icons/fi";
import {
  GiSamuraiHelmet,
  GiNinjaStar,
  GiShuriken,
  GiKatana,
  GiBamboo,
} from "react-icons/gi";

const navigation = [
  {
    name: "خانه",
    href: "/",
    description: "به آکادمی نینجا تهران خوش آمدید",
  },
  {
    name: "دوره‌ها",
    href: "/courses",
    description: "مسیر رزمی خود را انتخاب کنید",
    submenu: [
      {
        name: "نینجوتسو",
        href: "/courses/ninjutsu",
        description: "فنون پنهان نینجا",
        icon: GiNinjaStar,
        level: "مقدماتی تا پیشرفته",
      },
      {
        name: "سامورایی",
        href: "/courses/samurai",
        description: "راه جنگجو و فلسفه بوشیدو",
        icon: GiSamuraiHelmet,
        level: "مقدماتی تا پیشرفته",
      },
      {
        name: "دفاع شخصی",
        href: "/courses/self-defense",
        description: "تکنیک‌های مدرن دفاعی",
        icon: GiShuriken,
        level: "همه سطوح",
      },
      {
        name: "نینجا رنجر",
        href: "/courses/ninja-ranger",
        description: "دوره ویژه کودکان و نوجوانان",
        icon: GiBamboo,
        level: "۷-۱۴ سال",
      },
      {
        name: "بوگه یو ریو",
        href: "/courses/bugei-ryu",
        description: "سبک سنتی و کامل رزمی",
        icon: GiKatana,
        level: "پیشرفته",
      },
      {
        name: "کوگاریو",
        href: "/courses/kogaryu",
        description: "سبک اختصاصی نینجا",
        icon: GiNinjaStar,
        level: "پیشرفته",
      },
    ],
  },
  {
    name: "مربیان",
    href: "/instructors",
    description: "اساتید درجه یک بین‌المللی",
  },
  {
    name: "مقالات",
    href: "/articles",
    description: "مجله تخصصی هنرهای رزمی",
  },
  {
    name: "درباره ما",
    href: "/about",
    description: "آکادمی نینجا تهران در یک نگاه",
  },
  {
    name: "تماس",
    href: "/contact",
    description: "راه‌های ارتباطی با ما",
  },
  {
    name: "سوالات متداول",
    href: "/faq",
    description: "سوالات عمومی",
  },
  {
    name: "باشگاه ها",
    href: "/clubs",
    description: "​باشگاه های فعال",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // قفل اسکرول وقتی منوی موبایل باز است
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveSubmenu(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200);
  };

  const toggleMobileSubmenu = (itemName: string) => {
    setOpenMobileMenus((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName],
    );
  };

  return (
    <>
      {/* Top Bar - Responsive */}
      <div className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-primary-black to-black border-b border-primary-gold/20 h-auto lg:h-10'>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full py-2 lg:py-0 text-xs'>
            <div className='flex items-center gap-3 lg:gap-6 flex-wrap justify-center'>
              <span className='text-gray-400 text-[10px] lg:text-xs'>
                🎌 آکادمی رسمی هنرهای رزمی ژاپن
              </span>
              <span className='text-primary-gold text-[10px] lg:text-xs'>
                ⚔️ 30 سال تجربه درخشان
              </span>
            </div>
            <div className='hidden lg:flex items-center gap-4'>
              <span className='text-gray-400'>09122078446</span>
              <span className='text-gray-600'>|</span>
              <span className='text-gray-400'>info@ninjahouse.ir</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? "top-0 lg:top-0" : "top-[33px] lg:top-10"
        }`}
      >
        <div className='relative'>
          {/* Background with gradient and blur */}
          <div
            className={`absolute top-0 inset-0 transition-all duration-700 ${
              isScrolled
                ? "bg-black/95 backdrop-blur-xl border-b border-primary-gold/40"
                : "bg-gradient-to-b from-black/90 via-black/80 to-transparent lg:from-black/90 lg:via-black/60 backdrop-blur-sm"
            }`}
          />

          {/* Kendo-style decorative lines */}
          <div className='absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent' />

          <div className='container mx-auto px-4 relative'>
            <div className='flex items-center justify-between h-16 lg:h-20'>
              {/* Logo - Responsive */}
              <Link
                href='/'
                className='flex items-center gap-2 lg:gap-3 group relative'
              >
                <div className='relative w-8 h-8 lg:w-12 lg:h-12'>
                  <div className='absolute inset-0 bg-primary-gold/20 rounded-full animate-pulse' />
                  <div className='absolute inset-0 border-2 border-primary-gold/30 rounded-full group-hover:border-primary-gold/60 transition-colors' />
                  <Image
                    src='/favicon.ico'
                    alt='Ninja House Academy'
                    fill
                    className='object-contain relative z-10 transform transition-transform duration-500'
                  />
                </div>

                <div className='sm:block relative'>
                  <h1 className='text-sm lg:text-lg'>
                    <span className='text-white'>نینجا</span>
                    <span className='text-primary-gold'> تهران</span>
                  </h1>
                  <p className='text-[8px] lg:text-xs text-gray-500'>
                    آکادمی هنرهای رزمی
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className='hidden lg:flex items-center'>
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className='relative group'
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu ? (
                      <>
                        <button className='relative px-3 xl:px-4 py-2 text-gray-300 hover:text-primary-gold transition-colors duration-300 group'>
                          <span className='relative z-10 text-xs xl:text-sm font-medium'>
                            {item.name}
                          </span>
                          <FiChevronDown
                            className={`absolute left-[-5px] top-1/2 transform -translate-y-1/2 text-primary-gold/60 transition-all duration-300 ${
                              activeSubmenu === item.name
                                ? "rotate-180 opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                            size={12}
                          />

                          {/* Hover effect */}
                          <span className='absolute inset-x-3 xl:inset-x-4 bottom-0 h-[2px] bg-primary-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right' />
                        </button>

                        {activeSubmenu === item.name && (
                          <div
                            className='absolute top-full right-0 mt-2 w-[550px] xl:w-[600px] bg-gradient-to-b from-black to-primary-black border border-primary-gold/30 shadow-2xl'
                            style={{ transformOrigin: "top" }}
                            onMouseEnter={() => handleMouseEnter(item.name)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {/* Decorative top bar */}
                            <div className='absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent' />

                            <div className='relative p-5 xl:p-6'>
                              {/* Japanese pattern background */}
                              <div className='absolute inset-0 opacity-5'>
                                <div className="absolute inset-0 bg-[url('/images/japanese-pattern.png')] bg-repeat" />
                              </div>

                              <div className='relative z-10'>
                                {/* Header */}
                                <div className='flex items-center justify-between mb-5 xl:mb-6 pb-3 xl:pb-4 border-b border-gray-800'>
                                  <div>
                                    <h3 className='text-base xl:text-lg text-primary-gold mb-1'>
                                      {item.name}
                                    </h3>
                                    <p className='text-xs text-gray-400'>
                                      {item.description}
                                    </p>
                                  </div>
                                  <Link
                                    href={item.href}
                                    className='text-xs text-gray-400 hover:text-primary-gold transition-colors flex items-center gap-1'
                                  >
                                    مشاهده همه
                                    <FiChevronDown
                                      className='rotate-90'
                                      size={12}
                                    />
                                  </Link>
                                </div>

                                {/* Submenu grid */}
                                <div className='grid grid-cols-2 gap-3 xl:gap-4'>
                                  {item.submenu.map((sub) => {
                                    const Icon = sub.icon;
                                    return (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className='group/sub flex items-start gap-2 xl:gap-3 p-2 xl:p-3 border border-transparent hover:border-primary-gold/30 hover:bg-primary-gold/5 transition-all duration-300 rounded-lg'
                                      >
                                        <div className='relative'>
                                          <div className='w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center border-2 border-primary-gold/30 group-hover/sub:border-primary-gold group-hover/sub:bg-primary-gold/10 transition-all rounded-lg'>
                                            <Icon className='text-primary-gold text-base xl:text-xl' />
                                          </div>
                                          {/* Glow effect */}
                                          <div className='absolute inset-0 bg-primary-gold/20 rounded-full blur-xl opacity-0 group-hover/sub:opacity-100 transition-opacity' />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                          <div className='flex items-center gap-1 xl:gap-2 mb-1 flex-wrap'>
                                            <span className='text-white text-xs xl:text-sm font-medium group-hover/sub:text-primary-gold transition-colors truncate'>
                                              {sub.name}
                                            </span>
                                            <span className='px-1.5 xl:px-2 py-0.5 bg-primary-gold/10 border border-primary-gold/30 text-[8px] xl:text-[10px] text-primary-gold rounded-full whitespace-nowrap'>
                                              {sub.level}
                                            </span>
                                          </div>
                                          <p className='text-[10px] xl:text-xs text-gray-400 line-clamp-2'>
                                            {sub.description}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>

                                {/* Footer */}
                                <div className='mt-4 xl:mt-6 pt-3 xl:pt-4 border-t border-gray-800 flex items-center justify-between'>
                                  <div className='flex items-center gap-2 text-[10px] xl:text-xs text-gray-400'>
                                    <GiShuriken className='text-primary-gold text-sm xl:text-base' />
                                    <span>دوره‌های ویژه با تخفیف نوروزی</span>
                                  </div>
                                  <span className='text-primary-gold text-[10px] xl:text-xs font-bold bg-primary-gold/10 px-2 py-1 rounded-full'>
                                    ۲۰٪ تخفیف
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className='relative px-3 xl:px-4 py-2 text-gray-300 hover:text-primary-gold transition-colors duration-300 group'
                      >
                        <span className='relative z-10 text-xs xl:text-sm font-medium'>
                          {item.name}
                        </span>
                        <span className='absolute inset-x-3 xl:inset-x-4 bottom-0 h-[2px] bg-primary-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right' />
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Section - Responsive */}
              <div className='flex items-center gap-2 lg:gap-3'>
                <div className='hidden lg:flex items-center gap-2 xl:gap-3 mr-2 pr-2'>
                  <Link
                    href='/login'
                    className='flex items-center gap-1 xl:gap-2 px-3 xl:px-4 py-2 text-gray-300 hover:text-primary-gold transition-colors group'
                  >
                    <FiUser
                      size={14}
                      className='group-hover:scale-110 transition-transform'
                    />
                    <span className='text-xs xl:text-sm'>ورود</span>
                  </Link>
                  <Link
                    href='/register'
                    className='relative overflow-hidden group'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-primary-gold to-primary-gold/80 opacity-0 group-hover:opacity-100 rounded-lg  transition-opacity duration-500' />
                    <div className='relative z-10 flex items-center gap-1 xl:gap-2 border-2 border-primary-gold px-4 xl:px-5 py-2 text-primary-gold group-hover:text-black transition-colors duration-500 rounded-lg hover:overflow-hidden'>
                      <GiNinjaStar
                        size={14}
                        className='group-hover:rotate-180 transition-transform duration-700'
                      />
                      <span className='text-xs xl:text-sm font-medium whitespace-nowrap'>
                        شروع آموزش
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className='lg:hidden relative w-10 h-10 flex items-center justify-center border border-gray-800 hover:border-primary-gold transition-colors rounded-lg'
                  aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
                >
                  {isOpen ? (
                    <FiX size={18} className='text-primary-gold' />
                  ) : (
                    <FiMenu size={18} className='text-primary-gold' />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Improved Responsive */}
      {isOpen && (
        <div className='fixed inset-0 z-40 lg:hidden'>
          {/* Backdrop with blur */}
          <div
            className='absolute inset-0 bg-black/95 backdrop-blur-2xl'
            onClick={() => setIsOpen(false)}
          />

          {/* Japanese pattern background */}
          <div className='absolute inset-0 opacity-5'>
            <div className="absolute inset-0 bg-[url('/images/japanese-pattern.png')] bg-repeat" />
          </div>

          {/* Menu Content */}
          <div className='absolute top-[96px] right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-black to-primary-black border-l border-primary-gold/30 shadow-2xl'>
            <div className='relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary-gold/30 scrollbar-track-transparent'>
              {/* Navigation */}
              <div className='p-4 sm:p-6'>
                <nav className='flex flex-col gap-1'>
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className='border-b border-gray-800/50 last:border-0'
                    >
                      {item.submenu ? (
                        <div className='py-2'>
                          <button
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className='w-full flex items-center justify-between py-2 group'
                          >
                            <span className='text-primary-gold text-sm font-medium group-hover:text-amber-400 transition-colors'>
                              {item.name}
                            </span>
                            <div className='flex items-center gap-2'>
                              <span className='text-[10px] text-gray-400 truncate max-w-[120px]'>
                                {item.description}
                              </span>
                              <FiChevronDown
                                className={`text-primary-gold/60 transition-transform duration-300 ${
                                  openMobileMenus.includes(item.name)
                                    ? "rotate-180"
                                    : ""
                                }`}
                                size={16}
                              />
                            </div>
                          </button>

                          {/* Submenu - Collapsible */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openMobileMenus.includes(item.name)
                                ? "max-h-[500px] opacity-100 mt-2"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className='space-y-2 pr-3 border-r-2 border-primary-gold/30 mr-2'>
                              {item.submenu.map((sub) => {
                                const Icon = sub.icon;
                                return (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className='flex items-center gap-3 p-2 hover:bg-primary-gold/10 transition-colors group rounded-lg'
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className='w-8 h-8 border border-primary-gold/30 flex items-center justify-center group-hover:border-primary-gold group-hover:bg-primary-gold/10 transition-all rounded-lg'>
                                      <Icon className='text-primary-gold text-sm' />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                      <div className='flex items-center gap-2 flex-wrap'>
                                        <span className='text-sm text-white group-hover:text-primary-gold transition-colors truncate'>
                                          {sub.name}
                                        </span>
                                        <span className='text-[8px] px-1.5 py-0.5 bg-primary-gold/10 border border-primary-gold/30 text-primary-gold rounded-full whitespace-nowrap'>
                                          {sub.level}
                                        </span>
                                      </div>
                                      <p className='text-[10px] text-gray-400 line-clamp-1'>
                                        {sub.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className='flex items-center justify-between py-3 group'
                          onClick={() => setIsOpen(false)}
                        >
                          <span className='text-gray-300 text-sm group-hover:text-primary-gold transition-colors'>
                            {item.name}
                          </span>
                          <span className='text-[10px] text-gray-500 truncate max-w-[150px]'>
                            {item.description}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Auth buttons for mobile - Improved */}
                <div className='mt-8 pt-6 border-t border-gray-800'>
                  <div className='flex flex-col gap-3'>
                    <Link
                      href='/login'
                      className='flex items-center justify-center gap-2 w-full border-2 border-gray-700 px-4 py-3 text-gray-300 hover:border-primary-gold hover:text-primary-gold hover:bg-primary-gold/5 transition-all duration-300 rounded-xl'
                      onClick={() => setIsOpen(false)}
                    >
                      <FiUser size={18} />
                      <span className='text-sm font-medium'>
                        ورود به حساب کاربری
                      </span>
                    </Link>
                    <Link
                      href='/register'
                      className='flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-gold to-amber-500 px-4 py-3 text-black font-bold rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02]'
                      onClick={() => setIsOpen(false)}
                    >
                      <GiNinjaStar size={18} />
                      <span className='text-sm font-medium'>
                        ثبت نام در دوره‌ها
                      </span>
                    </Link>
                  </div>

                  {/* Contact info for mobile */}
                  <div className='mt-6 text-center space-y-2'>
                    <p className='text-xs text-gray-400 flex items-center justify-center gap-2'>
                      <span className='text-primary-gold'>📞</span>
                      09122078446
                    </p>
                    <p className='text-xs text-gray-400 flex items-center justify-center gap-2'>
                      <span className='text-primary-gold'>✉️</span>
                      info@ninjahouse.ir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div
        className='fixed top-0 left-0 right-0 z-50 h-[2px] bg-gradient-to-l from-primary-gold via-primary-gold/50 to-transparent'
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: "right",
        }}
      />
    </>
  );
}
