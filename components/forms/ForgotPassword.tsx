"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaArrowLeft,
  FaSpinner,
  FaCheckCircle,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { GiSamuraiHelmet } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";

export default function ForgotPassword() {
  const [step, setStep] = useState<"email" | "otp" | "newPassword" | "success">(
    "email",
  );
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Step 1: Send reset code
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!formData.email) {
      setErrors((prev) => ({
        ...prev,
        email: "ایمیل یا شماره موبایل خود را وارد کنید",
      }));
      return;
    }
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      !/^09\d{9}$/.test(formData.email)
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "ایمیل یا شماره موبایل معتبر وارد کنید",
      }));
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("otp");
    } catch (error) {
      console.error("Failed to send code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
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
      setStep("newPassword");
    } catch  {
      setErrors((prev) => ({ ...prev, otp: "کد تأیید نامعتبر است" }));
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Set new password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password
    if (!formData.newPassword) {
      setErrors((prev) => ({
        ...prev,
        newPassword: "رمز عبور جدید را وارد کنید",
      }));
      return;
    }
    if (formData.newPassword.length < 6) {
      setErrors((prev) => ({
        ...prev,
        newPassword: "رمز عبور باید حداقل ۶ کاراکتر باشد",
      }));
      return;
    }
    if (!formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "تکرار رمز عبور را وارد کنید",
      }));
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "رمز عبور و تکرار آن مطابقت ندارند",
      }));
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep("success");
    } catch (error) {
      console.error("Failed to reset password:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Resend code
  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Show success message
    } catch (error) {
      console.error("Failed to resend code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Render email step
  const renderEmailStep = () => (
    <div key='email'>
      <div className='text-center mb-8'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-primary-gold/20 rounded-full mb-6'>
          <FaEnvelope className='text-3xl lg:text-4xl text-primary-gold' />
        </div>
        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-3'>
          فراموشی رمز عبور
        </h2>
        <p className='text-gray-400 text-base lg:text-lg'>
          ایمیل یا شماره موبایل خود را وارد کنید
        </p>
        <p className='text-gray-500 text-sm mt-2'>
          کد تأیید برای شما ارسال خواهد شد
        </p>
      </div>

      <form onSubmit={handleSendCode} className='space-y-6'>
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

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2'
        >
          {isLoading ? (
            <>
              <FaSpinner className='animate-spin text-xl' />
              <span>در حال ارسال...</span>
            </>
          ) : (
            <span>ارسال کد تأیید</span>
          )}
        </button>

        {/* Back to Login */}
        <Link
          href='/login'
          className='flex items-center justify-center gap-2 text-gray-400 hover:text-primary-gold transition-colors mt-6'
        >
          <FaArrowLeft className='text-sm' />
          <span>بازگشت به صفحه ورود</span>
        </Link>
      </form>
    </div>
  );

  // Render OTP step
  const renderOTPStep = () => (
    <div key='otp'>
      <div className='text-center mb-8'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-primary-gold/20 rounded-full mb-6'>
          <MdMarkEmailRead className='text-3xl lg:text-4xl text-primary-gold' />
        </div>
        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-3'>
          کد تأیید
        </h2>
        <p className='text-gray-400 text-base lg:text-lg'>
          کد ۶ رقمی ارسال شده را وارد کنید
        </p>
        <p className='text-gray-500 text-sm mt-2'>
          کد به {formData.email} ارسال شد
        </p>
      </div>

      <form onSubmit={handleVerifyOTP} className='space-y-6'>
        {/* OTP Input */}
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

        {/* Submit Button */}
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
            <span>تأیید کد</span>
          )}
        </button>

        {/* Resend Code */}
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

        {/* Back */}
        <button
          type='button'
          onClick={() => setStep("email")}
          className='flex items-center justify-center gap-2 text-gray-400 hover:text-primary-gold transition-colors mt-4 w-full'
        >
          <FaArrowLeft className='text-sm' />
          <span>ویرایش ایمیل</span>
        </button>
      </form>
    </div>
  );

  // Render new password step
  const renderNewPasswordStep = () => (
    <div key='newPassword'>
      <div className='text-center mb-8'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-primary-gold/20 rounded-full mb-6'>
          <GiSamuraiHelmet className='text-3xl lg:text-4xl text-primary-gold' />
        </div>
        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-3'>
          رمز عبور جدید
        </h2>
        <p className='text-gray-400 text-base lg:text-lg'>
          رمز عبور جدید خود را وارد کنید
        </p>
      </div>

      <form onSubmit={handleResetPassword} className='space-y-6'>
        {/* New Password */}
        <div>
          <label
            htmlFor='newPassword'
            className='block text-white font-medium mb-2 text-right'
          >
            رمز عبور جدید
          </label>
          <div className='relative'>
            <input
              type={showPassword.new ? "text" : "password"}
              id='newPassword'
              name='newPassword'
              value={formData.newPassword}
              onChange={handleChange}
              dir='rtl'
              placeholder='••••••••'
              className={`w-full bg-gray-800/50 border ${
                errors.newPassword ? "border-red-500" : "border-gray-700"
              } rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-all duration-300`}
            />
            <button
              type='button'
              onClick={() =>
                setShowPassword((prev) => ({ ...prev, new: !prev.new }))
              }
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-gold transition-colors'
            >
              {showPassword.new ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>
          {errors.newPassword && (
            <p className='text-red-500 text-sm mt-2 text-right'>
              {errors.newPassword}
            </p>
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
              type={showPassword.confirm ? "text" : "password"}
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
                setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
              }
              className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-gold transition-colors'
            >
              {showPassword.confirm ? (
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

        {/* Password Strength Indicator */}
        {formData.newPassword && (
          <div className='space-y-2'>
            <div className='flex justify-between items-center'>
              <span className='text-gray-400 text-sm'>قدرت رمز عبور:</span>
              <span
                className={`text-sm ${
                  formData.newPassword.length < 6
                    ? "text-red-500"
                    : formData.newPassword.length < 8
                      ? "text-yellow-500"
                      : "text-green-500"
                }`}
              >
                {formData.newPassword.length < 6
                  ? "ضعیف"
                  : formData.newPassword.length < 8
                    ? "متوسط"
                    : "قوی"}
              </span>
            </div>
            <div className='w-full h-2 bg-gray-800 rounded-full overflow-hidden'>
              <div
                className={`h-full transition-all duration-300 ${
                  formData.newPassword.length < 6
                    ? "w-1/3 bg-red-500"
                    : formData.newPassword.length < 8
                      ? "w-2/3 bg-yellow-500"
                      : "w-full bg-green-500"
                }`}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2'
        >
          {isLoading ? (
            <>
              <FaSpinner className='animate-spin text-xl' />
              <span>در حال تغییر...</span>
            </>
          ) : (
            <span>تغییر رمز عبور</span>
          )}
        </button>
      </form>
    </div>
  );

  // Render success step
  const renderSuccessStep = () => (
    <div key='success' className='text-center'>
      <div className='inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-8'>
        <FaCheckCircle className='text-4xl lg:text-5xl text-green-500' />
      </div>

      <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
        رمز عبور شما تغییر کرد!
      </h2>

      <p className='text-gray-400 text-lg mb-8'>
        رمز عبور شما با موفقیت تغییر یافت.
      </p>

      <p className='text-gray-500 text-sm mb-8'>
        اکنون می‌توانید با رمز عبور جدید وارد حساب کاربری خود شوید.
      </p>

      <Link
        href='/login'
        className='inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-gold to-amber-500 text-black font-bold py-4 px-8 rounded-xl hover:from-amber-500 hover:to-primary-gold transition-all duration-300 transform hover:scale-[1.02]'
      >
        <span>ورود به حساب کاربری</span>
        <FaArrowLeft className='text-lg' />
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
        <div className='max-w-md mx-auto'>
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
                  {["email", "otp", "newPassword"].map((s, index) => (
                    <div key={s} className='flex items-center'>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${
                          step === s
                            ? "bg-primary-gold text-black"
                            : ["email", "otp", "newPassword"].indexOf(step) >
                                index
                              ? "bg-green-500/20 text-green-500"
                              : "bg-gray-800 text-gray-500"
                        }`}
                      >
                        {["email", "otp", "newPassword"].indexOf(step) >
                        index ? (
                          <FaCheckCircle className='text-green-500' />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < 2 && (
                        <div
                          className={`w-12 h-px mx-2 ${
                            ["email", "otp", "newPassword"].indexOf(step) >
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
              {step === "email" && renderEmailStep()}
              {step === "otp" && renderOTPStep()}
              {step === "newPassword" && renderNewPasswordStep()}
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
