"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import { GiSamuraiHelmet } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "ایمیل یا شماره موبایل خود را وارد کنید";
      isValid = false;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      !/^09\d{9}$/.test(formData.email)
    ) {
      newErrors.email = "ایمیل یا شماره موبایل معتبر وارد کنید";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "رمز عبور را وارد کنید";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Success - redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* Vertical Lines */}
        <div className='absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary-gold/20 via-primary-gold/10 to-transparent' />
        <div className='absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary-gold/20 via-primary-gold/10 to-transparent' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Column - Login Form */}
            <div className='order-2 lg:order-1'>
              {/* Logo and Header */}
              <div className='text-center lg:text-right mb-8'>
                <div className='flex items-center justify-center lg:justify-start gap-2 mb-4'>
                  <GiSamuraiHelmet className='text-3xl lg:text-4xl text-primary-gold' />
                  <span className='text-2xl lg:text-3xl font-bold text-white'>
                    آکادمی
                    <span className='text-primary-gold mr-2'>
                      {" "}
                      نینجا تهران{" "}
                    </span>
                  </span>
                </div>
                <h1 className='text-3xl lg:text-4xl font-bold text-white mb-2'>
                  ورود به <span className='text-primary-gold'>حساب کاربری</span>
                </h1>
                <p className='text-gray-400 text-base lg:text-lg'>
                  برای دسترسی به دوره‌ها و محتوای آموزشی وارد شوید
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-white font-medium mb-2 text-right'
                  >
                    ایمیل یا شماره موبایل
                  </label>
                  <div className='relative'>
                    <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
                      <FaEnvelope className='text-lg' />
                    </div>
                    <input
                      type='text'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      dir='rtl'
                      placeholder='example@email.com یا 09123456789'
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

                {/* Password Input */}
                <div>
                  <label
                    htmlFor='password'
                    className='block text-white font-medium mb-2 text-right'
                  >
                    رمز عبور
                  </label>
                  <div className='relative'>
                    <div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'>
                      <FaLock className='text-lg' />
                    </div>
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-gold transition-colors'
                    >
                      {showPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </button>
                    <input
                      type={showPassword ? "text" : "password"}
                      id='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      dir='rtl'
                      placeholder='••••••••'
                      className={`w-full bg-gray-800/50 border ${
                        errors.password ? "border-red-500" : "border-gray-700"
                      } rounded-xl py-4 pr-12 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
                    />
                  </div>
                  {errors.password && (
                    <p className='text-red-500 text-sm mt-2 text-right'>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className='flex items-center justify-between'>
                  <Link
                    href='/forgot-password'
                    className='text-primary-gold text-sm hover:text-amber-400 transition-colors'
                  >
                    رمز عبور را فراموش کرده‌اید؟
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className='animate-spin text-xl' />
                      <span>در حال ورود...</span>
                    </>
                  ) : (
                    <span>ورود به حساب</span>
                  )}
                </button>

                {/* Register Link */}
                <p className='text-center text-gray-400 mt-8'>
                  حساب کاربری ندارید؟{" "}
                  <Link
                    href='/register'
                    className='text-primary-gold hover:text-amber-400 font-bold transition-colors'
                  >
                    ثبت نام کنید
                  </Link>
                </p>
              </form>
            </div>

            {/* Right Column - Hero Image */}
            <div className='order-1 lg:order-2 relative'>
              <div className='relative group'>
                {/* Decorative Frame */}
                <div className='absolute -inset-4 bg-gradient-to-r from-primary-gold/20 to-amber-600/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-500' />

                {/* Image Container */}
                <div className='relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden'>
                  <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary-gold/30' />
                    <div className='absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary-gold/30' />
                  </div>

                  {/* Placeholder Image */}
                  <div className='relative aspect-square w-full'>
                    <div className='absolute inset-0 flex flex-col items-center justify-center p-8 lg:p-12'>
                      <GiSamuraiHelmet className='text-8xl lg:text-9xl text-primary-gold/20 mb-6' />
                      <h3 className='text-2xl lg:text-3xl font-bold text-white text-center mb-4'>
                        به جمع نینجاهای ما بپیوندید
                      </h3>
                      <p className='text-gray-400 text-center text-base lg:text-lg'>
                        با ورود به حساب کاربری می‌توانید از تمام دوره‌ها و
                        محتوای آموزشی استفاده کنید
                      </p>

                      {/* Features List */}
                      <div className='mt-8 space-y-3 w-full max-w-sm'>
                        {[
                          "دسترسی به تمام دوره‌ها",
                          "پشتیبانی اختصاصی",
                          "گواهینامه معتبر",
                          "آپدیت رایگان",
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className='flex items-center gap-2 text-right'
                          >
                            <MdVerified className='text-primary-gold text-lg flex-shrink-0' />
                            <span className='text-gray-300 text-sm lg:text-base'>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
