import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import ScrollContent from "@/components/ScrollContent";


export default function Home() {
  return (
    <main className=" ">
      <div className="div">
        <HeroSection/>
        <FeaturedCourses/>
       <ScrollContent/>
       <MovingCard/>
      </div>
    </main>
  );
}
