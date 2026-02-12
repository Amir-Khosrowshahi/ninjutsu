"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaSpinner,
  FaPhone,
  FaCalendarAlt,
  FaVenusMars,
  FaCheckCircle,
} from "react-icons/fa";
import { GiSamuraiHelmet, GiNinjaHead } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

const PersianDatePicker = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (date: string) => void;
  error?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState(() => {
    // مقدار اولیه از props محاسبه می‌شود - بدون نیاز به useEffect
    if (value) {
      const parts = value.split("/");
      if (parts.length === 3) {
        return {
          year: parseInt(parts[0]),
          month: parseInt(parts[1]),
          day: parseInt(parts[2]),
        };
      }
    }
    return { year: 1370, month: 1, day: 1 };
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const getDaysInMonth = (year: number, month: number) => {
    if (month <= 6) return 31;
    if (month <= 11) return 30;
    const isLeapYear = year % 4 === 2;
    return isLeapYear ? 30 : 29;
  };

  const years = Array.from({ length: 106 }, (_, i) => 1300 + i);
  const days = Array.from(
    { length: getDaysInMonth(tempDate.year, tempDate.month) },
    (_, i) => i + 1,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value);
    setTempDate((prev) => ({ ...prev, year: newYear }));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value);
    setTempDate((prev) => ({ ...prev, month: newMonth }));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDay = parseInt(e.target.value);
    setTempDate((prev) => ({ ...prev, day: newDay }));
  };

  const handleConfirm = () => {
    const formattedDate = `${tempDate.year}/${tempDate.month.toString().padStart(2, "0")}/${tempDate.day.toString().padStart(2, "0")}`;
    onChange(formattedDate);
    setIsOpen(false);
  };

  const handleCancel = () => {
    // برگرداندن به مقدار اصلی از props
    if (value) {
      const parts = value.split("/");
      setTempDate({
        year: parseInt(parts[0]),
        month: parseInt(parts[1]),
        day: parseInt(parts[2]),
      });
    }
    setIsOpen(false);
  };

  const getDisplayDate = () => {
    if (!value) return "انتخاب کنید";
    const [y, m, d] = value.split("/");
    return `${d} ${persianMonths[parseInt(m) - 1]} ${y}`;
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <div className='relative'>
        <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 z-10'>
          <FaCalendarAlt className='text-lg' />
        </div>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-gray-800/50 border ${
            error ? "border-red-500" : "border-gray-700"
          } rounded-xl py-4 pr-12 pl-4 text-right text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300 ${
            !value && "text-gray-500"
          }`}
        >
          {getDisplayDate()}
        </button>
      </div>

      {isOpen && (
        <div className='absolute z-50 mt-2 w-full bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden'>
          <div className='p-4 space-y-4'>
            <div className='grid grid-cols-2 gap-3'>
              <div>
                <label className='block text-gray-400 text-xs mb-1 text-right'>
                  سال
                </label>
                <select
                  value={tempDate.year}
                  onChange={handleYearChange}
                  className='w-full bg-gray-800 border border-gray-700 rounded-xl py-2 px-3 text-white text-sm focus:outline-none focus:border-primary-gold appearance-none'
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-gray-400 text-xs mb-1 text-right'>
                  ماه
                </label>
                <select
                  value={tempDate.month}
                  onChange={handleMonthChange}
                  className='w-full bg-gray-800 border border-gray-700 rounded-xl py-2 px-3 text-white text-sm focus:outline-none focus:border-primary-gold appearance-none'
                >
                  {persianMonths.map((m, index) => (
                    <option key={index + 1} value={index + 1}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className='block text-gray-400 text-xs mb-1 text-right'>
                روز
              </label>
              <select
                value={tempDate.day}
                onChange={handleDayChange}
                className='w-full bg-gray-800 border border-gray-700 rounded-xl py-2 px-3 text-white text-sm focus:outline-none focus:border-primary-gold appearance-none'
              >
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex gap-2 pt-2'>
              <button
                type='button'
                onClick={handleConfirm}
                className='flex-1 bg-primary-gold text-black font-bold py-2 px-4 rounded-xl hover:bg-amber-500 transition-colors text-sm'
              >
                تأیید
              </button>
              <button
                type='button'
                onClick={handleCancel}
                className='flex-1 bg-gray-800 text-gray-300 font-bold py-2 px-4 rounded-xl hover:bg-gray-700 transition-colors text-sm'
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function RegisterForm() {
  const [step, setStep] = useState<"info" | "verification" | "success">("info");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
    otp: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    password: "",
    confirmPassword: "",
    otp: "",
    acceptTerms: "",
  });

  const handleDateChange = (date: string) => {
    setFormData((prev) => ({
      ...prev,
      birthDate: date,
    }));
    if (errors.birthDate) {
      setErrors((prev) => ({ ...prev, birthDate: "" }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validatePersianDate = (dateStr: string) => {
    if (!dateStr) return false;
    const pattern = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/;
    if (!pattern.test(dateStr)) return false;

    const [year, month, day] = dateStr.split("/").map(Number);
    if (year < 1300 || year > 1405) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1) return false;

    if (month <= 6 && day > 31) return false;
    if (month >= 7 && month <= 11 && day > 30) return false;
    if (month === 12) {
      const isLeapYear = year % 4 === 2;
      if (isLeapYear && day > 30) return false;
      if (!isLeapYear && day > 29) return false;
    }

    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
      gender: "",
      password: "",
      confirmPassword: "",
      otp: "",
      acceptTerms: "",
    };
    let isValid = true;

    if (!formData.fullName) {
      newErrors.fullName = "نام و نام خانوادگی را وارد کنید";
      isValid = false;
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "ایمیل را وارد کنید";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر وارد کنید";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "شماره موبایل را وارد کنید";
      isValid = false;
    } else if (!/^09\d{9}$/.test(formData.phone)) {
      newErrors.phone = "شماره موبایل معتبر وارد کنید (مثال: 09123456789)";
      isValid = false;
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "تاریخ تولد را وارد کنید";
      isValid = false;
    } else if (!validatePersianDate(formData.birthDate)) {
      newErrors.birthDate = "تاریخ تولد معتبر وارد کنید";
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = "جنسیت را انتخاب کنید";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "رمز عبور را وارد کنید";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = "رمز عبور باید شامل حرف بزرگ، حرف کوچک و عدد باشد";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تکرار رمز عبور را وارد کنید";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "رمز عبور و تکرار آن مطابقت ندارند";
      isValid = false;
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "برای ثبت نام باید قوانین را بپذیرید";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStep("verification");
      } catch {
        // خطا مدیریت شد - نیازی به متغیر error نیست
        setErrors((prev) => ({
          ...prev,
          phone: "خطا در ارسال کد تأیید. لطفاً دوباره تلاش کنید.",
        }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.otp) {
      setErrors((prev) => ({ ...prev, otp: "کد تأیید را وارد کنید" }));
      return;
    }
    if (formData.otp.length !== 6) {
      setErrors((prev) => ({ ...prev, otp: "کد تأیید باید ۶ رقم باشد" }));
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("success");
    } catch {
      setErrors((prev) => ({ ...prev, otp: "کد تأیید نامعتبر است" }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // نمایش پیام موفقیت می‌تواند اینجا اضافه شود
    } catch {
      // خطا مدیریت شد
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return null;
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (/(?=.*[a-z])/.test(password)) score++;
    if (/(?=.*[A-Z])/.test(password)) score++;
    if (/(?=.*[0-9])/.test(password)) score++;
    return score;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthText = {
    1: "بسیار ضعیف",
    2: "ضعیف",
    3: "متوسط",
    4: "قوی",
    5: "بسیار قوی",
  };

  const renderInfoStep = () => (
    <div key='info'>
      <div className='text-center mb-8'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-primary-gold/20 rounded-full mb-6'>
          <GiSamuraiHelmet className='text-3xl lg:text-4xl text-primary-gold' />
        </div>
        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-3'>
          ثبت نام در آکادمی
        </h2>
        <p className='text-gray-400 text-base lg:text-lg'>
          اطلاعات خود را وارد کنید
        </p>
      </div>

      <form onSubmit={handleRegister} className='space-y-5'>
        {/* Full Name */}
        <div>
          <label
            htmlFor='fullName'
            className='block text-white font-medium mb-2 text-right'
          >
            نام و نام خانوادگی
          </label>
          <div className='relative'>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
              <FaUser className='text-lg' />
            </div>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              dir='rtl'
              placeholder='نام خود را بنویسید'
              className={`w-full bg-gray-800/50 border ${
                errors.fullName ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
          </div>
          {errors.fullName && (
            <p className='text-red-500 text-sm mt-2 text-right'>
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='block text-white font-medium mb-2 text-right'
          >
            ایمیل
          </label>
          <div className='relative'>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
              <FaEnvelope className='text-lg' />
            </div>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              dir='ltr'
              placeholder='example@email.com'
              className={`w-full bg-gray-800/50 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
          </div>
          {errors.email && (
            <p className='text-red-500 text-sm mt-2 text-right'>
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor='phone'
            className='block text-white font-medium mb-2 text-right'
          >
            شماره موبایل
          </label>
          <div className='relative'>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
              <FaPhone className='text-lg' />
            </div>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              dir='ltr'
              placeholder='09123456789'
              className={`w-full bg-gray-800/50 border ${
                errors.phone ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 pr-12 pl-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
          </div>
          {errors.phone && (
            <p className='text-red-500 text-sm mt-2 text-right'>
              {errors.phone}
            </p>
          )}
        </div>

        {/* Birth Date & Gender */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='birthDate'
              className='block text-white font-medium mb-2 text-right'
            >
              تاریخ تولد (شمسی)
            </label>
            <PersianDatePicker
              value={formData.birthDate}
              onChange={handleDateChange}
              error={errors.birthDate}
            />
            {errors.birthDate && (
              <p className='text-red-500 text-sm mt-2 text-right'>
                {errors.birthDate}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='gender'
              className='block text-white font-medium mb-2 text-right'
            >
              جنسیت
            </label>
            <div className='relative'>
              <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
                <FaVenusMars className='text-lg' />
              </div>
              <select
                id='gender'
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                className={`w-full bg-gray-800/50 border ${
                  errors.gender ? "border-red-500" : "border-gray-700"
                } rounded-xl py-4 pr-12 pl-4 text-white appearance-none focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
              >
                <option value='' disabled>
                  انتخاب کنید
                </option>
                <option value='male'>آقا</option>
                <option value='female'>خانم</option>
              </select>
            </div>
            {errors.gender && (
              <p className='text-red-500 text-sm mt-2 text-right'>
                {errors.gender}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor='password'
            className='block text-white font-medium mb-2 text-right'
          >
            رمز عبور
          </label>
          <div className='relative'>
            <input
              type={showPassword.password ? "text" : "password"}
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              dir='rtl'
              placeholder='••••••••'
              className={`w-full bg-gray-800/50 border ${
                errors.password ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
            <button
              type='button'
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-gold transition-colors'
            >
              {showPassword.password ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <p className='text-red-500 text-sm mt-2 text-right'>
              {errors.password}
            </p>
          )}

          {formData.password && (
            <div className='mt-3 space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-400 text-sm'>قدرت رمز عبور:</span>
                <span
                  className={`text-sm ${
                    passwordStrength && passwordStrength <= 2
                      ? "text-red-500"
                      : passwordStrength === 3
                        ? "text-yellow-500"
                        : "text-green-500"
                  }`}
                >
                  {passwordStrength &&
                    strengthText[passwordStrength as keyof typeof strengthText]}
                </span>
              </div>
              <div className='w-full h-2 bg-gray-800 rounded-full overflow-hidden'>
                <div
                  className={`h-full transition-all duration-300 ${
                    passwordStrength && passwordStrength <= 2
                      ? "bg-red-500"
                      : passwordStrength === 3
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }`}
                  style={{
                    width: passwordStrength
                      ? `${(passwordStrength / 5) * 100}%`
                      : "0%",
                  }}
                />
              </div>
              <p className='text-gray-500 text-xs'>
                رمز عبور باید شامل حرف بزرگ، حرف کوچک و عدد باشد
              </p>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor='confirmPassword'
            className='block text-white font-medium mb-2 text-right'
          >
            تکرار رمز عبور
          </label>
          <div className='relative'>
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              dir='rtl'
              placeholder='••••••••'
              className={`w-full bg-gray-800/50 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
            <button
              type='button'
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-gold transition-colors'
            >
              {showPassword.confirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm mt-2 text-right'>
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className='flex items-start gap-3'>
          <input
            type='checkbox'
            id='acceptTerms'
            name='acceptTerms'
            checked={formData.acceptTerms}
            onChange={handleChange}
            className='w-5 h-5 mt-1 rounded border-gray-600 bg-gray-700 text-primary-gold focus:ring-primary-gold focus:ring-offset-0'
          />
          <label htmlFor='acceptTerms' className='text-gray-300 text-sm'>
            <span>قوانین و مقررات آکادمی را می‌پذیرم. </span>
            <Link
              href='/terms'
              className='text-primary-gold hover:text-amber-400 transition-colors'
            >
              مطالعه قوانین
            </Link>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className='text-red-500 text-sm'>{errors.acceptTerms}</p>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8'
        >
          {isLoading ? (
            <>
              <FaSpinner className='animate-spin text-xl' />
              <span>در حال ثبت نام...</span>
            </>
          ) : (
            <span>ثبت نام</span>
          )}
        </button>

        {/* Login Link */}
        <p className='text-center text-gray-400 mt-8'>
          قبلاً ثبت نام کرده‌اید؟{" "}
          <Link
            href='/login'
            className='text-primary-gold hover:text-amber-400 font-bold transition-colors'
          >
            وارد شوید
          </Link>
        </p>
      </form>
    </div>
  );

  const renderVerificationStep = () => (
    <div key='verification'>
      <div className='text-center mb-8'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-primary-gold/20 rounded-full mb-6'>
          <FaEnvelope className='text-3xl lg:text-4xl text-primary-gold' />
        </div>
        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-3'>
          کد تأیید
        </h2>
        <p className='text-gray-400 text-base lg:text-lg'>
          کد ۶ رقمی ارسال شده را وارد کنید
        </p>
        <p className='text-gray-500 text-sm mt-2'>
          کد به {formData.phone} ارسال شد
        </p>
      </div>

      <form onSubmit={handleVerifyOTP} className='space-y-6'>
        <div>
          <label
            htmlFor='otp'
            className='block text-white font-medium mb-2 text-right'
          >
            کد تأیید
          </label>
          <div className='relative'>
            <input
              type='text'
              id='otp'
              name='otp'
              value={formData.otp}
              onChange={handleChange}
              maxLength={6}
              dir='ltr'
              placeholder='123456'
              className={`w-full text-center tracking-[0.5em] font-mono text-2xl bg-gray-800/50 border ${
                errors.otp ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
          </div>
          {errors.otp && (
            <p className='text-red-500 text-sm mt-2 text-right'>{errors.otp}</p>
          )}
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2'
        >
          {isLoading ? (
            <>
              <FaSpinner className='animate-spin text-xl' />
              <span>در حال بررسی...</span>
            </>
          ) : (
            <span>تأیید و ادامه</span>
          )}
        </button>

        <div className='text-center'>
          <button
            type='button'
            onClick={handleResendCode}
            disabled={isLoading}
            className='text-primary-gold hover:text-amber-400 transition-colors text-sm disabled:opacity-50'
          >
            ارسال مجدد کد
          </button>
        </div>

        <button
          type='button'
          onClick={() => setStep("info")}
          className='flex items-center justify-center gap-2 text-gray-400 hover:text-primary-gold transition-colors mt-4 w-full'
        >
          <span>ویرایش اطلاعات</span>
        </button>
      </form>
    </div>
  );

  const renderSuccessStep = () => (
    <div key='success' className='text-center'>
      <div className='inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-8'>
        <FaCheckCircle className='text-4xl lg:text-5xl text-green-500' />
      </div>

      <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
        ثبت نام با موفقیت انجام شد!
      </h2>

      <p className='text-gray-400 text-lg mb-4'>
        {formData.fullName} عزیز، خوش آمدید
      </p>

      <p className='text-gray-500 text-sm mb-8'>
        حساب کاربری شما با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.
      </p>

      <div className='bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 mb-8'>
        <div className='flex items-center gap-3 mb-4'>
          <GiNinjaHead className='text-2xl text-primary-gold' />
          <h3 className='text-white font-bold'>مراحل بعدی:</h3>
        </div>
        <ul className='space-y-3 text-right'>
          <li className='flex items-center gap-2 text-gray-300'>
            <MdVerified className='text-primary-gold text-lg' />
            <span>پروفایل خود را تکمیل کنید</span>
          </li>
          <li className='flex items-center gap-2 text-gray-300'>
            <MdVerified className='text-primary-gold text-lg' />
            <span>دوره‌های آموزشی را مشاهده کنید</span>
          </li>
          <li className='flex items-center gap-2 text-gray-300'>
            <MdVerified className='text-primary-gold text-lg' />
            <span>در کلاس‌ها ثبت نام کنید</span>
          </li>
        </ul>
      </div>

      <Link
        href='/login'
        className='inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-8 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02]'
      >
        <span>ورود به حساب کاربری</span>
      </Link>
    </div>
  );

  return (
    <section className='relative min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden py-16 lg:py-24'>
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
        </div>

        <div className='absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary-gold/20 via-primary-gold/10 to-transparent' />
        <div className='absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary-gold/20 via-primary-gold/10 to-transparent' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-2xl mx-auto'>
          {/* Logo */}
          <div className='text-center mb-8'>
            <Link
              href='/'
              className='inline-flex items-center justify-center gap-2'
            >
              <GiSamuraiHelmet className='text-3xl lg:text-4xl text-primary-gold' />
              <span className='text-2xl lg:text-3xl font-bold text-white'>
                آکادمی<span className='text-primary-gold mr-2'>نینجا</span>
              </span>
            </Link>
          </div>

          {/* Form Card */}
          <div className='relative'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-primary-gold/20 to-amber-600/20 rounded-3xl blur opacity-50' />

            <div className='relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 lg:p-10'>
              {/* Progress Steps */}
              {step !== "success" && (
                <div className='flex items-center justify-center gap-2 mb-8'>
                  {["info", "verification", "success"].map((s, index) => (
                    <div key={s} className='flex items-center'>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${
                          step === s
                            ? "bg-primary-gold text-black"
                            : ["info", "verification", "success"].indexOf(
                                  step,
                                ) > index
                              ? "bg-green-500/20 text-green-500"
                              : "bg-gray-800 text-gray-500"
                        }`}
                      >
                        {["info", "verification", "success"].indexOf(step) >
                        index ? (
                          <FaCheckCircle className='text-green-500' />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < 2 && (
                        <div
                          className={`w-12 h-px mx-2 ${
                            ["info", "verification", "success"].indexOf(step) >
                            index
                              ? "bg-green-500"
                              : "bg-gray-700"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Render current step */}
              {step === "info" && renderInfoStep()}
              {step === "verification" && renderVerificationStep()}
              {step === "success" && renderSuccessStep()}
            </div>
          </div>

          {/* Support Text */}
          <p className='text-center text-gray-500 text-sm mt-8'>
            در صورت بروز هرگونه مشکل با پشتیبانی تماس بگیرید
          </p>
        </div>
      </div>
    </section>
  );
}
