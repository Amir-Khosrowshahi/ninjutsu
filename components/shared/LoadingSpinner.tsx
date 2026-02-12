"use client";

import { GiSamuraiHelmet, GiNinjaStar } from "react-icons/gi";

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
}

const Spinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
  };

  return (
    <div className='relative flex items-center justify-center'>
      {/* Background Rings */}
      <div
        className={`absolute ${sizes[size]} border-2 border-primary-gold/20 rounded-full`}
      />

      <div
        className={`absolute ${sizes[size]} border-t-2 border-primary-gold rounded-full animate-spin`}
      />

      {/* Icons */}
      <div className='relative'>
        <GiSamuraiHelmet
          size={iconSizes[size]}
          className='text-primary-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
        <GiNinjaStar
          size={iconSizes[size] - 8}
          className='text-primary-gold/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse'
        />
      </div>

      {/* Text */}
      <p className='absolute -bottom-8 text-primary-gold text-sm whitespace-nowrap'>
        در حال بارگذاری...
      </p>
    </div>
  );
};

export default function LoadingSpinner({
  fullScreen = false,
  size = "md",
}: LoadingSpinnerProps) {
  if (fullScreen) {
    return (
      <div className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center'>
        <Spinner size={size} />
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center p-8'>
      <Spinner size={size} />
    </div>
  );
}

// Variants for different use cases
export const PageLoader = () => (
  <div className='min-h-screen flex items-center justify-center'>
    <LoadingSpinner size='lg' />
  </div>
);

export const SectionLoader = () => (
  <div className='py-20 flex items-center justify-center'>
    <LoadingSpinner size='md' />
  </div>
);

export const ButtonLoader = () => (
  <div className='flex items-center justify-center'>
    <div className='w-5 h-5 border-2 border-primary-gold/20 border-t-primary-gold rounded-full animate-spin' />
  </div>
);
