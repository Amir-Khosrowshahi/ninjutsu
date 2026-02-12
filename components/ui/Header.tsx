"use client";

import { useState, useRef, useEffect } from "react";
import {
  FiLogOut,
  FiUser,
  FiChevronDown,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
  FiUsers,
} from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineCog, HiOutlineUserCircle } from "react-icons/hi";

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  // const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState([
    { id: 1, text: "کاربر جدید ثبت نام کرد", time: "۵ دقیقه پیش", read: false },
    { id: 2, text: "تیکت جدید دریافت شد", time: "۱ ساعت پیش", read: false },
    { id: 3, text: "بروزرسانی سیستم انجام شد", time: "۲ ساعت پیش", read: true },
  ]);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("[data-menu-button]")
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowUserMenu(false);
        setShowNotifications(false);
        setShowMobileMenu(false);
        setShowMobileSearch(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const handleLogout = () => {
    console.log("User logged out");
    setShowUserMenu(false);
    setShowMobileMenu(false);
  };

  const handleNotificationClick = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setShowMobileSearch(false);
    // Implement search logic here
  };

  // Mobile menu items
  const mobileMenuItems = [
    {
      icon: <RiDashboardLine className='w-5 h-5' />,
      text: "داشبورد",
      href: "/dashboard",
    },
    {
      icon: <FiUser className='w-5 h-5' />,
      text: "پروفایل من",
      href: "/profile",
    },
    {
      icon: <HiOutlineCog className='w-5 h-5' />,
      text: "تنظیمات",
      href: "/settings",
    },
    {
      icon: <FiBell className='w-5 h-5' />,
      text: "اعلان‌ها",
      href: "/notifications",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className='sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50'>
        <div className='px-4 sm:px-6 py-3 sm:py-4'>
          <div className='flex items-center justify-between'>
            {/* Left Section - Logo & Mobile Menu */}
            <div className='flex items-center space-x-3 sm:space-x-6 space-x-reverse'>
              {/* Mobile Menu Button - Visible on mobile */}
              <button
                data-menu-button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className='md:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200'
                aria-label='منوی موبایل'
              >
                {showMobileMenu ? (
                  <FiX className='w-5 h-5 text-gray-400' />
                ) : (
                  <FiMenu className='w-5 h-5 text-gray-400' />
                )}
              </button>

              {/* Mobile Logo - Visible on mobile */}
              <div className='md:hidden flex items-center space-x-2 space-x-reverse'>
                <div className='relative'>
                  <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20'>
                    <span className='text-white font-bold text-xs sm:text-sm'>
                      AD
                    </span>
                  </div>
                  <div className='absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-gray-900'></div>
                </div>
                <div className='hidden sm:block'>
                  <h1 className='text-sm font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                    پنل مدیریت
                  </h1>
                </div>
              </div>

              {/* Desktop Logo - Visible on md and up */}
              <div className='hidden md:flex items-center space-x-3 space-x-reverse'>
                <div className='relative'>
                  <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20'>
                    <span className='text-white font-bold text-sm'>
                      <FiUsers size={24} />
                    </span>
                  </div>
                  <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900'></div>
                </div>
                <div>
                  <h1 className='text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                    علی محمدی
                  </h1>
                  <p className='text-xs text-gray-500 hidden lg:block'>
                    مدیر فنی
                  </p>
                </div>
              </div>

              {/* Desktop Search Bar - Visible on lg and up */}
              <form
                onSubmit={handleSearch}
                className='hidden lg:flex items-center'
              >
                <div className='relative'>
                  <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
                    <FiSearch className='w-4 h-4 text-gray-500' />
                  </div>
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='جستجو در سیستم...'
                    className='w-64 xl:w-80 pl-4 pr-10 py-2.5 bg-gray-900/50 text-white border border-gray-800 rounded-xl text-sm focus:outline-none '
                  />
                </div>
              </form>
            </div>

            {/* Center Section - Mobile Search */}
            <div className='flex-1 lg:hidden max-w-xs mx-auto px-2'>
              {showMobileSearch ? (
                <form onSubmit={handleSearch} className='animate-fade-in'>
                  <div className='relative'>
                    <input
                      type='text'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder='جستجو...'
                      className='w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200'
                      autoFocus
                    />
                    <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                      <FiSearch className='w-4 h-4 text-gray-500' />
                    </div>
                    <button
                      type='button'
                      onClick={() => setShowMobileSearch(false)}
                      className='absolute inset-y-0 right-3 flex items-center'
                    >
                      <FiX className='w-4 h-4 text-gray-500 hover:text-gray-300' />
                    </button>
                  </div>
                </form>
              ) : (
                <div className='text-center'>
                  <h1 className='text-sm font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent md:hidden'>
                    پنل مدیریت
                  </h1>
                </div>
              )}
            </div>

            {/* Right Section - Actions & User */}
            <div className='flex items-center space-x-2 sm:space-x-4 space-x-reverse'>
              {/* Mobile Search Button - Visible on mobile */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className='lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200'
                aria-label='جستجو'
              >
                {showMobileSearch ? (
                  <FiX className='w-5 h-5 text-white' />
                ) : (
                  <FiSearch className='w-5 h-5 text-white' />
                )}
              </button>

              {/* Notifications */}
              <div className='relative' ref={notificationsRef}>
                <button
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowMobileMenu(false);
                  }}
                  className='p-2 sm:p-2.5 hover:bg-gray-800/50 rounded-xl transition-colors duration-200 relative group'
                  aria-label='اعلان‌ها'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-200'></div>
                  <FiBell className='w-5 h-5 text-white relative z-10' />
                  {unreadNotifications > 0 && (
                    <div className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-gray-900 flex items-center justify-center'>
                      <span className='text-xs font-bold'>
                        {unreadNotifications > 9 ? "9+" : unreadNotifications}
                      </span>
                    </div>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className='absolute left-0 mt-2 w-screen max-w-xs sm:max-w-sm md:max-w-md bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl py-2 z-50'>
                    <div className='px-4 py-3 border-b border-gray-800/50'>
                      <div className='flex items-center justify-between'>
                        <h3 className='font-bold text-sm text-white'>
                          اعلان‌ها
                        </h3>
                        <div className='flex items-center space-x-3 space-x-reverse'>
                          {unreadNotifications > 0 && (
                            <button
                              onClick={() => {
                                setNotifications((prev) =>
                                  prev.map((n) => ({ ...n, read: true })),
                                );
                              }}
                              className='text-xs text-primary hover:text-primary/80 transition-colors'
                            >
                              علامت‌گذاری همه
                            </button>
                          )}
                          <button
                            onClick={() => setNotifications([])}
                            className='text-xs text-red-400 hover:text-red-300 transition-colors'
                          >
                            پاک کردن همه
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='max-h-64 sm:max-h-80 overflow-y-auto'>
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            onClick={() =>
                              handleNotificationClick(notification.id)
                            }
                            className={`px-4 py-3 text-white hover:bg-gray-800/50 transition-colors duration-150 cursor-pointer border-b border-gray-800/30 last:border-b-0 ${
                              !notification.read ? "bg-gray-800/30" : ""
                            }`}
                          >
                            <div className='flex items-start space-x-3 space-x-reverse'>
                              <div
                                className={`mt-1 w-2 h-2 rounded-full ${
                                  notification.read
                                    ? "bg-gray-600"
                                    : "bg-primary animate-pulse"
                                }`}
                              ></div>
                              <div className='flex-1'>
                                <p className='text-sm'>{notification.text}</p>
                                <p className='text-xs text-gray-500 mt-1'>
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className='px-4 py-8 text-center'>
                          <FiBell className='w-8 h-8 text-gray-600 mx-auto mb-2' />
                          <p className='text-gray-500 text-sm'>
                            هیچ اعلانی وجود ندارد
                          </p>
                        </div>
                      )}
                    </div>

                    <div className='px-4 py-3 border-t border-gray-800/50'>
                      <a
                        href='/notifications'
                        className='block text-center text-sm text-primary hover:text-primary/80 transition-colors'
                        onClick={() => setShowNotifications(false)}
                      >
                        مشاهده همه اعلان‌ها
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile - Simplified on mobile */}
              <div className='relative' ref={userMenuRef}>
                <button
                  onClick={() => {
                    setShowUserMenu(!showUserMenu);
                    setShowMobileMenu(false);
                  }}
                  className='flex items-center space-x-2 sm:space-x-3 space-x-reverse hover:bg-gray-800/50 p-1.5 sm:p-2 rounded-xl transition-all duration-200 group'
                >
                  {/* User info hidden on smallest screens */}
                  <div className='hidden sm:block text-right ml-3'>
                    <p className='font-medium text-sm text-white'>مدیر سیستم</p>
                    <p className='text-xs text-gray-500 hidden md:block'>
                      مدیر کل
                    </p>
                  </div>

                  {/* Avatar */}
                  <div className='relative'>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-colors duration-200'>
                      <HiOutlineUserCircle className='w-4 h-4 sm:w-6 sm:h-6 text-primary' />
                    </div>
                    <div className='absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-gray-900'></div>
                  </div>

                  {/* Chevron hidden on mobile */}
                  <FiChevronDown
                    className={`hidden sm:block w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      showUserMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* User Menu Dropdown - Responsive width */}
                {showUserMenu && (
                  <div className='absolute left-0 mt-2 w-screen max-w-xs sm:max-w-sm md:w-64 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl py-2 z-50'>
                    {/* User Info */}
                    <div className='px-4 py-3 border-b border-gray-800/50'>
                      <div className='flex items-center space-x-3 space-x-reverse'>
                        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center'>
                          <HiOutlineUserCircle className='w-6 h-6 sm:w-7 sm:h-7 text-primary' />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <p className='font-bold text-white truncate'>
                            مدیر سیستم
                          </p>
                          <p className='text-xs text-gray-500 truncate'>
                            admin@example.com
                          </p>
                          <div className='flex items-center mt-1'>
                            <span className='text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg'>
                              مدیر کل
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className='py-2'>
                      {mobileMenuItems.slice(0, 3).map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className='flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors duration-150 text-white'
                          onClick={() => setShowUserMenu(false)}
                        >
                          <span className='ml-3'>{item.icon}</span>
                          <span className='text-white'>{item.text}</span>
                        </a>
                      ))}

                      <div className='border-t border-gray-800/50 my-2'></div>

                      <button
                        onClick={handleLogout}
                        className='flex items-center w-full text-right px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors duration-150'
                      >
                        <FiLogOut className='w-5 h-5 ml-3' />
                        <span>خروج از سیستم</span>
                      </button>
                    </div>

                    {/* Status */}
                    <div className='px-4 py-3 border-t border-gray-800/50'>
                      <div className='flex items-center justify-between text-xs'>
                        <div className='flex items-center'>
                          <div className='w-2 h-2 bg-green-500 rounded-full ml-2'></div>
                          <span className='text-gray-500'>آنلاین</span>
                        </div>
                        <span className='text-gray-500 truncate'>
                          آخرین بازدید: هم‌اکنون
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <>
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden'></div>
          <div
            ref={mobileMenuRef}
            className='fixed top-[69px] right-0 h-full w-72 max-w-full bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 z-40 transform transition-transform duration-300 lg:hidden'
            style={{
              transform: showMobileMenu ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className='p-6'>
              <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center space-x-3 space-x-reverse'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20'>
                    <span className='text-white font-bold text-lg'>AD</span>
                  </div>
                  <div>
                    <h1 className='text-lg font-bold text-white'>پنل مدیریت</h1>
                    <p className='text-sm text-gray-400'>مدیریت یکپارچه</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className='p-2 hover:bg-gray-800/50 rounded-lg'
                >
                  <FiX className='w-5 h-5 text-white' />
                </button>
              </div>

              {/* User Info in Mobile Menu */}
              <div className='mb-6 p-4 bg-gray-800/30 rounded-xl'>
                <div className='flex items-center space-x-3 space-x-reverse'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center'>
                    <HiOutlineUserCircle className='w-7 h-7 text-primary' />
                  </div>
                  <div>
                    <p className='font-bold text-white'>مدیر سیستم</p>
                    <p className='text-xs text-gray-400'>admin@example.com</p>
                    <div className='flex items-center mt-1'>
                      <span className='text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg'>
                        مدیر کل
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <nav className='space-y-2'>
                {mobileMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className='flex items-center p-3 hover:bg-gray-800/50 rounded-xl transition-colors duration-150'
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className='ml-3 text-gray-400'>{item.icon}</span>
                    <span className='text-white'>{item.text}</span>
                  </a>
                ))}

                {/* Dark Mode Toggle in Mobile Menu */}
                {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className='flex items-center w-full p-3 hover:bg-gray-800/50 rounded-xl transition-colors duration-150'
                >
                  {darkMode ? (
                    <FiSun className='w-5 h-5 ml-3 text-yellow-400' />
                  ) : (
                    <FiMoon className='w-5 h-5 ml-3 text-gray-400' />
                  )}
                  <span className='text-white'>
                    {darkMode ? "حالت روشن" : "حالت تاریک"}
                  </span>
                </button> */}

                <div className='border-t border-gray-800/50 my-4'></div>

                <button
                  onClick={handleLogout}
                  className='flex items-center w-full p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors duration-150'
                >
                  <FiLogOut className='w-5 h-5 ml-3' />
                  <span>خروج از سیستم</span>
                </button>
              </nav>

              {/* Footer in Mobile Menu */}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='text-center text-xs text-gray-500'>
                  <p>نسخه ۱.۰.۰</p>
                  <p className='mt-1'>
                    © {new Date().getFullYear()} پنل مدیریت
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        /* Custom scrollbar for notifications */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}
