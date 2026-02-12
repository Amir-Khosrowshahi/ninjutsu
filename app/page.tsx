import Hero from "@/components/sections/Hero";
import Instructors from "@/components/sections/Instructors";
import Courses from "@/components/sections/Courses";
import Articles from "@/components/sections/Articles";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";

export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <WelcomeSection />
      <Instructors />
      <Courses />
      <Articles />
      <Testimonials />
      <Contact />
    </div>
  );
}
