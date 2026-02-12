import Link from "next/link";
import InstructorCard from "@/components/shared/InstructorCard";
import { FiArrowLeft } from "react-icons/fi";

const instructors = [
  {
    id: 1,
    name: "مهدی صلح دوست",
    title: "مربی درجه یک نینجا و سامورایی",
    image: "/img/instructors/mehdi-solhdoost.JPG",
    specialties: ["نینجوتسو", "بوگه یو ریو", "دفاع شخصی"],
    rank: "دان ۸",
    experience: "30 سال",
    bio: "​شیهان صلح دوست با بیش از ۳۰ سال تجربه هنر های رزمی و دارای مدرک نینجیتسو از ژاپن",
  },
  {
    id: 2,
    name: "سرکار خانم صلح دوست",
    title: "مربی درجه یک نینجا",
    image: "/img/instructors/khanom-solhdoost.jpg",
    specialties: ["نینجوتسو", "کوگاریو", "نینجا رنجر"],
    rank: "دان ۵",
    experience: "۱۸ سال",
    bio: "سنسی صلح دوست در بخش آموزش بانوان با بیش از ۱۰ سال تجربه در هنر های رزمی",
  },
  {
    id: 3,
    name: "سعید همتکار",
    title: "مربی درجه یک سامورایی",
    image: "/img/instructors/Saeed.jpg",
    specialties: ["سامورایی", "بوگه یو ریو", "کن‌جوتسو"],
    rank: "دان ۶",
    experience: "۲۰ سال",
    bio: "متخصص فنون کلاسیک سامورایی و فلسفه بوشیدو",
  },
];

export default function Instructors() {
  return (
    <section className='py-20 bg-gradient-to-b from-black to-primary-black'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-end mb-12'>
          <div>
            <span className='text-primary-gold text-sm    uppercase'>
              مربیان درجه یک
            </span>
            <h2 className='text-3xl lg:text-4xl   text-white mt-2'>
              اساتید برجسته
            </h2>
            <div className='w-20 h-1 bg-primary-gold mt-4' />
          </div>

          <Link
            href='/instructors'
            className='flex items-center gap-2 text-primary-gold hover:text-white transition-colors group'
          >
            <span>مشاهده همه</span>
            <FiArrowLeft className='group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
