import Logo from '@/assets/svg/logo-img.svg'
import { div } from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";


const Header = () => {
  return (
    <div className="hero-image">
      <div className="flex items-center container max-w-7xl mx-auto p-6 ">
        <div className="flex-1 ">
          <Link className="flex items-center gap-3" href="/about">
            <Image src={Logo} alt="logo" />
            <h3 className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553]">
              DREAMKAM <br /> TOUR
            </h3>
          </Link>
        </div>

        <div className="flex gap-10 items-center">
          <Link
            className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553]"
            href="/about"
          >
            Расписание тура
          </Link>
          <Link
            className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553]"
            href="/about"
          >
            Как записаться
          </Link>
          <Link
            className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553]"
            href="/about"
          >
            Команда
          </Link>
          <button className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553] w-[177px] h-[40px] border cursor-pointer border-[#275553] rounded-[5px]">
            Забронировать
          </button>
        </div>
      </div>
      <div className={`h-[833px] relative`}>
              <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full border-red-500 ">
               <Carousel slides={slideData} />
              </div>
          </div>
    </div>
  );
};

export default Header;
