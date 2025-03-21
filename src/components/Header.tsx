import Logo from '@/assets/svg/logo-img.svg'
import Image from 'next/image';
import Link from 'next/link';
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";
import Instagram from '@/assets/svg/Instagram.svg'
import Facebook from "@/assets/svg/Facebook.svg";

const Header = () => {
  return (
    <header className="hero-image wrapper ">
     

      <div className="flex flex-col">
        <div className="container max-w-7xl mx-auto p-6 flex flex-col gap-5">
          <h1 className="font-black text-[64px] leading-[64px] tracking-[0%] text-white">
            Мечты о далекой <br /> Камчатке - близко
          </h1>

          <button className="font-bold cursor-pointer text-[30px] leading-[56px] tracking-[0%] text-white w-[481px] h-[61px] rounded-[16px] bg-[#FB8B62] hover:text-[#FB8B62] hover:bg-transparent hover:border-2 transition">
            23.06 - 04.07 DREAM TOUR
          </button>
          <h3 className="font-normal text-[20px] leading-[28px] tracking-[0%] text-white">
            Тур перевернет ваш мир с ног на голову и оставит впечатления на всю
            жизнь.
          </h3>

          <h3 className="font-normal text-[20px] leading-[28px] tracking-[0%] text-white">
            Расписание тура
          </h3>
          <div className="flex items-center gap-4">
            <Image className="cursor-pointer" src={Instagram} alt="instagram" />
            <Image className="cursor-pointer" src={Facebook} alt="facebook" />
          </div>
        </div>

        <div className={`h-[433px] relative`}>
          <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full border-red-500 ">
            <Carousel slides={slideData} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
