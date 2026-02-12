import { useState } from "react";
import {
  FiUserPlus,
  FiDollarSign,
  FiMessageSquare,
  FiEdit,
  FiShoppingBag,
  FiClock,
  FiUser,
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";
import { HiOutlineTicket, HiOutlineDocumentText } from "react-icons/hi";

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  priority?: "low" | "medium" | "high";
}

export default function RecentActivity() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const activities: Activity[] = [
    {
      id: 1,
      user: "علی محمدی",
      action: "ثبت نام جدید",
      time: "۱۰ دقیقه پیش",
      icon: <FiUserPlus className='w-4 h-4' />,
      color: "text-green-500",
      bgColor: "bg-green-500/10 border-green-500/20",
      description: "کاربر جدید در سیستم ثبت نام کرد",
      priority: "high",
    },
    {
      id: 2,
      user: "سارا احمدی",
      action: "تراکنش موفق",
      time: "۲۵ دقیقه پیش",
      icon: <FiDollarSign className='w-4 h-4' />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      description: "تراکنش مالی با موفقیت انجام شد",
      priority: "high",
    },
    {
      id: 3,
      user: "محمد رضایی",
      action: "ارسال تیکت",
      time: "۱ ساعت پیش",
      icon: <HiOutlineTicket className='w-4 h-4' />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      description: "تیکت جدید در بخش پشتیبانی ایجاد شد",
      priority: "medium",
    },
    {
      id: 4,
      user: "فاطمه کریمی",
      action: "ویرایش پروفایل",
      time: "۲ ساعت پیش",
      icon: <FiEdit className='w-4 h-4' />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      description: "اطلاعات پروفایل کاربر بروزرسانی شد",
      priority: "low",
    },
    {
      id: 5,
      user: "رضا حسینی",
      action: "خرید اشتراک",
      time: "۳ ساعت پیش",
      icon: <FiShoppingBag className='w-4 h-4' />,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      description: "اشتراک طلایی با موفقیت خریداری شد",
      priority: "high",
    },
    {
      id: 6,
      user: "نازنین امیری",
      action: "درخواست بازگشت",
      time: "۴ ساعت پیش",
      icon: <FiArrowLeft className='w-4 h-4' />,
      color: "text-red-500",
      bgColor: "bg-red-500/10 border-red-500/20",
      description: "درخواست بازگشت وجه ثبت شد",
      priority: "medium",
    },
    {
      id: 7,
      user: "کاوه محمدی",
      action: "نظر جدید",
      time: "۵ ساعت پیش",
      icon: <FiMessageSquare className='w-4 h-4' />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
      description: "نظر جدید در بخش مقالات ثبت شد",
      priority: "low",
    },
    {
      id: 8,
      user: "پریسا نوروزی",
      action: "آپلود فایل",
      time: "۶ ساعت پیش",
      icon: <HiOutlineDocumentText className='w-4 h-4' />,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10 border-cyan-500/20",
      description: "فایل جدید در گالری آپلود شد",
      priority: "low",
    },
    {
      id: 9,
      user: "امیرحسین صفری",
      action: "تایید حساب",
      time: "۷ ساعت پیش",
      icon: <FiUser className='w-4 h-4' />,
      color: "text-lime-500",
      bgColor: "bg-lime-500/10 border-lime-500/20",
      description: "حساب کاربری تایید هویت شد",
      priority: "medium",
    },
    {
      id: 10,
      user: "مینا جعفری",
      action: "درخواست پشتیبانی",
      time: "۸ ساعت پیش",
      icon: <FiActivity className='w-4 h-4' />,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10 border-pink-500/20",
      description: "درخواست پشتیبانی فوری ثبت شد",
      priority: "high",
    },
  ];

  const stats = {
    today: 15,
    yesterday: 12,
    change: "+25%",
    trendingUp: true,
  };

  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedActivities = activities.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const getPriorityColor = (priority?: "low" | "medium" | "high") => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400";
      case "medium":
        return "bg-amber-500/20 text-amber-400";
      case "low":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const getPriorityText = (priority?: "low" | "medium" | "high") => {
    switch (priority) {
      case "high":
        return "زیاد";
      case "medium":
        return "متوسط";
      case "low":
        return "کم";
      default:
        return "تعریف نشده";
    }
  };

  return (
    <div className='bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 shadow-xl'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center space-x-3 space-x-reverse'>
          <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center'>
            <FiActivity className='w-6 h-6 text-white' />
          </div>
          <div>
            <h2 className='text-xl font-bold text-white'>فعالیت‌های اخیر</h2>
            <p className='text-sm text-gray-400'>آخرین رویدادهای سیستم</p>
          </div>
        </div>

        <div className='text-right'>
          <div className='flex items-center space-x-2 space-x-reverse'>
            <div className='text-sm'>
              <div className='text-gray-400'>امروز</div>
              <div className='font-bold text-white'>{stats.today} فعالیت</div>
            </div>
            <div
              className={`flex items-center px-2 py-1 rounded-lg ${stats.trendingUp ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}
            >
              {stats.trendingUp ? (
                <FiTrendingUp className='w-4 h-4 ml-1' />
              ) : (
                <FiTrendingUp className='w-4 h-4 ml-1 transform rotate-180' />
              )}
              <span className='text-xs font-medium'>{stats.change}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className='space-y-3 mb-6'>
        {paginatedActivities.map((activity) => (
          <div
            key={activity.id}
            className='group relative bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg border border-gray-800/50 hover:border-gray-700/50'
          >
            <div className='flex items-start space-x-3 space-x-reverse'>
              {/* Icon with colored background */}
              <div
                className={`p-2 rounded-lg ${activity.bgColor} border ${activity.bgColor.split(" ")[1]}`}
              >
                <div className={activity.color}>{activity.icon}</div>
              </div>

              {/* Content */}
              <div className='flex-1 min-w-0'>
                <div className='flex items-center justify-between mb-1'>
                  <h4 className='font-semibold text-white truncate'>
                    {activity.user}
                  </h4>
                  <div className='flex items-center space-x-2 space-x-reverse'>
                    {activity.priority && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(activity.priority)}`}
                      >
                        {getPriorityText(activity.priority)}
                      </span>
                    )}
                    <span className='text-xs text-gray-500 flex items-center'>
                      <FiClock className='w-3 h-3 ml-1' />
                      {activity.time}
                    </span>
                  </div>
                </div>

                <p className='text-gray-300 text-sm mb-1'>{activity.action}</p>
                <p className='text-gray-500 text-xs'>{activity.description}</p>
              </div>
            </div>

            {/* Hover effect line */}
            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className='flex items-center justify-between pt-4 border-t border-gray-800/50'>
          <div className='text-sm text-gray-500'>
            نمایش {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, activities.length)} از{" "}
            {activities.length}
          </div>

          <div className='flex items-center space-x-2 space-x-reverse'>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className='p-2 rounded-lg hover:bg-gray-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              <FiChevronRight className='w-5 h-5 text-gray-400' />
            </button>

            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 3) {
                pageNum = i + 1;
              } else if (currentPage === 1) {
                pageNum = i + 1;
              } else if (currentPage === totalPages) {
                pageNum = totalPages - 2 + i;
              } else {
                pageNum = currentPage - 1 + i;
              }

              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                    currentPage === pageNum
                      ? "bg-primary text-white"
                      : "text-gray-400 hover:bg-gray-800/50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className='p-2 rounded-lg hover:bg-gray-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              <FiChevronLeft className='w-5 h-5 text-gray-400' />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className='mt-6 pt-6 border-t border-gray-800/50'>
        <div className='flex items-center justify-between'>
          <div className='text-sm text-gray-500'>
            <span className='text-white font-medium'>{activities.length}</span>{" "}
            فعالیت در ۲۴ ساعت گذشته
          </div>
          <a
            href='/activities'
            className='group text-sm text-primary hover:text-primary/80 transition-colors flex items-center'
          >
            مشاهده همه فعالیت‌ها
            <FiArrowLeft className='mr-1 group-hover:translate-x-1 transition-transform duration-200' />
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
