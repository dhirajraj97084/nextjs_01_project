import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className=" ">
      <div className="div">
        <HeroSection/>
        <FeaturedCourses/>
      </div>
    </main>
  );
}
