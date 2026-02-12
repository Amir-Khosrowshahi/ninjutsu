"use client";

import Image from "next/image";
import Link from "next/link";

import { FiClock, FiUsers, FiStar } from "react-icons/fi";
import { IconType } from "react-icons";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: string;
  image: string;
  icon: IconType;
  instructor: string;
  students: number;
  features: string[];
  index: number;
}

export default function CourseCard({
  id,
  title,
  description,
  level,
  duration,
  price,
  image,
  icon: Icon,
  instructor,
  students,
  features,
}: CourseCardProps) {
  return (
    <div
      className='group relative bg-black/40 border border-gray-800 hover:border-primary-gold/50 
                 transition-all duration-500 overflow-hidden'
    >
      {/* Hover Effect Background */}
      <div
        className='absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500'
      />

      {/* Image Section */}
      <div className='relative h-56 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover group-hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />

        {/* Level Badge */}
        <div className='absolute top-4 right-4 bg-black/80 border-r-4 border-primary-gold px-3 py-1'>
          <span className='text-xs text-primary-gold'>{level}</span>
        </div>

        {/* Icon */}
        <div
          className='absolute bottom-4 left-4 w-12 h-12 bg-black/80 border border-primary-gold/30 
                      flex items-center justify-center group-hover:bg-primary-gold group-hover:text-black 
                      transition-all duration-300'
        >
          <Icon size={24} />
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-xl   text-white group-hover:text-primary-gold transition-colors'>
            {title}
          </h3>
          <div className='flex items-center gap-1'>
            <FiStar className='text-primary-gold fill-primary-gold' size={14} />
            <span className='text-sm text-gray-300'>۴.۸</span>
          </div>
        </div>

        <p className='text-gray-400 text-sm mb-4 line-clamp-2'>{description}</p>

        {/* Instructor */}
        <div className='flex items-center gap-2 text-sm text-gray-300 mb-4 pb-4 border-b border-gray-800'>
          <span className='text-primary-gold'>مربی:</span>
          <span>{instructor}</span>
        </div>

        {/* Features */}
        <div className='space-y-2 mb-4'>
          {features.slice(0, 2).map((feature, idx) => (
            <div
              key={idx}
              className='flex items-center gap-2 text-xs text-gray-400'
            >
              <span className='w-1 h-1 bg-primary-gold rounded-full' />
              {feature}
            </div>
          ))}
        </div>

        {/* Meta Info */}
        <div className='flex items-center justify-between text-sm mb-4'>
          <div className='flex items-center gap-1 text-gray-400'>
            <FiClock size={14} className='text-primary-gold' />
            <span>{duration}</span>
          </div>
          <div className='flex items-center gap-1 text-gray-400'>
            <FiUsers size={14} className='text-primary-gold' />
            <span>{students} دانشجو</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className='flex items-center justify-between pt-4 border-t border-gray-800'>
          <div>
            <span className='text-xs text-gray-400 block'>شهریه ماهانه</span>
            <span className='text-lg   text-primary-gold'>{price}</span>
            <span className='text-xs text-gray-400 mr-1'>تومان</span>
          </div>
          <Link
            href={`/courses/${id}`}
            className='px-4 py-2 border border-primary-gold/50 text-primary-gold 
                     hover:bg-primary-gold hover:text-black transition-colors text-sm'
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}
