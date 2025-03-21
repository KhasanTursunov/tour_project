import { ThreeDCardDemo } from "@/components/Card";
import { CarouselDemo } from "@/components/Carousel";
import Eighthday from "@/components/Eighthday";
import Fifthday from "@/components/Fifthday";
import Firstday from "@/components/Firstday";
import Footer from "@/components/Footer";
import Fourthday from "@/components/Fourthday";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Secondday from "@/components/Secondday";
import SecondHalfday from "@/components/SecondHalfday";
import Seventhday from "@/components/Seventhday";
import Sixthday from "@/components/Sixthday";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import Thirdday from "@/components/Thirdday";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Firstday/>
      <Secondday/>
      <SecondHalfday/>
      <Thirdday/>
      <Fourthday/>
      <Fifthday/>
      <Sixthday/>
      <Seventhday/>
      <Eighthday/>
      <Footer/>
      
      {/* <AnimatedTestimonialsDemo/> */}
      {/* <CarouselDemo/> */}
      {/* <div className="grid grid-cols-3 gap-4">
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
      </div> */}
    </div>
  );
}
