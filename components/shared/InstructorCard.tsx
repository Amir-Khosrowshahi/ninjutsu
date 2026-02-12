"use client";

import Image from "next/image";
import Link from "next/link";

import { FiCalendar, FiUser, FiStar } from "react-icons/fi";

interface InstructorCardProps {
  id: number;
  name: string;
  title: string;
  image: string;
  specialties: string[];
  rank: string;
  experience: string;
  bio: string;
}

export default function InstructorCard({
  id,
  name,
  title,
  image,
  specialties,
  rank,
  experience,
  bio,
}: InstructorCardProps) {
  return (
    <div className='group relative bg-black/40 border border-gray-800 hover:border-primary-gold/50 transition-all duration-500'>
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

      <div className='relative h-80 overflow-hidden'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-cover group-hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute top-4 right-4 bg-black/80 border-r-4 border-primary-gold px-3 py-1'>
          <span className='text-primary-gold text-sm font-bold'>{rank}</span>
        </div>
      </div>

      <div className='relative p-6'>
        <div className='flex justify-between items-start mb-3'>
          <div>
            <h3 className='text-xl   text-white mb-1 group-hover:text-primary-gold transition-colors'>
              {name}
            </h3>
            <p className='text-primary-gold text-sm'>{title}</p>
          </div>
          <div className='flex gap-1'>
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className='text-primary-gold fill-primary-gold'
                size={14}
              />
            ))}
          </div>
        </div>

        <p className='text-gray-400 text-sm mb-4 line-clamp-2'>{bio}</p>

        <div className='flex items-center gap-3 text-sm text-gray-300 mb-4'>
          <div className='flex items-center gap-1'>
            <FiCalendar className='text-primary-gold' size={14} />
            <span>{experience}</span>
          </div>
          <div className='w-1 h-1 bg-primary-gold/50 rounded-full' />
          <div className='flex items-center gap-1'>
            <FiUser className='text-primary-gold' size={14} />
            <span>۱۵۰+ شاگرد</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-2 mb-4'>
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className='text-xs px-2 py-1 border border-primary-gold/30 text-gray-300'
            >
              {specialty}
            </span>
          ))}
        </div>

        <Link
          href={`/instructors/${id}`}
          className='inline-flex items-center gap-2 text-primary-gold hover:text-white transition-colors group/link'
        >
          <span>مشاهده پروفایل</span>
          <span className='transform group-hover/link:translate-x-1 transition-transform'>
            ←
          </span>
        </Link>
      </div>
    </div>
  );
}
