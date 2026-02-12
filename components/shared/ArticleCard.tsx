"use client";

import Image from "next/image";
import Link from "next/link";

import { FiCalendar, FiClock, FiHeart, FiMessageCircle } from "react-icons/fi";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  likes: number;
  comments: number;
  index: number;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  author,
  authorImage,
  date,
  category,
  image,
  readTime,
  likes,
  comments,
}: ArticleCardProps) {
  return (
    <article
      className='group relative bg-black/40 border border-gray-800 hover:border-primary-gold/50 
                 transition-all duration-500 overflow-hidden'
    >
      {/* Image Section */}
      <div className='relative h-56 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover group-hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />

        {/* Category Badge */}
        <div className='absolute top-4 right-4 bg-black/80 border-r-4 border-primary-gold px-3 py-1'>
          <span className='text-xs text-primary-gold'>{category}</span>
        </div>

        {/* Read Time */}
        <div className='absolute bottom-4 left-4 bg-black/80 px-3 py-1 flex items-center gap-1'>
          <FiClock className='text-primary-gold' size={12} />
          <span className='text-xs text-gray-300'>{readTime}</span>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        {/* Author & Date */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2'>
            <div className='relative w-8 h-8 rounded-full overflow-hidden border border-primary-gold/30'>
              <Image
                src={authorImage}
                alt={author}
                fill
                className='object-cover'
              />
            </div>
            <span className='text-sm text-gray-300'>{author}</span>
          </div>
          <div className='flex items-center gap-1 text-xs text-gray-400'>
            <FiCalendar size={12} />
            <span>{date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className='text-xl   text-white mb-3 line-clamp-2 group-hover:text-primary-gold transition-colors'>
          <Link href={`/articles/${id}`}>{title}</Link>
        </h3>

        {/* Excerpt */}
        <p className='text-gray-400 text-sm mb-4 line-clamp-2'>{excerpt}</p>

        {/* Meta Footer */}
        <div className='flex items-center justify-between pt-4 border-t border-gray-800'>
          {/* Engagement */}
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1 text-xs text-gray-400'>
              <FiHeart className='text-primary-gold' size={14} />
              <span>{likes}</span>
            </div>
            <div className='flex items-center gap-1 text-xs text-gray-400'>
              <FiMessageCircle className='text-primary-gold' size={14} />
              <span>{comments}</span>
            </div>
          </div>

          {/* Read More */}
          <Link
            href={`/articles/${id}`}
            className='text-xs text-primary-gold hover:text-white transition-colors flex items-center gap-1 group/link'
          >
            <span>ادامه مطلب</span>
            <span className='transform group-hover/link:translate-x-1 transition-transform'>
              ←
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
