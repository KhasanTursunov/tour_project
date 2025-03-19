import Logo from '@/assets/svg/logo-img.svg'
import Image from 'next/image';
import Link from 'next/link';
import Carousel from "./ui/carousel";
import { slideData } from "@/data/slideData";
import Instagram from '@/assets/svg/Instagram.svg'
import Facebook from "@/assets/svg/Facebook.svg";

const Header = () => {
  return (
    <div className="hero-image wrapper ">
      <div className="top-0 left-0 sticky bg-[#dcedfa] z-40 ">
        <div className="flex items-center container max-w-7xl mx-auto p-6 header  ">
          <div className="flex-1 ">
            <Link className="flex items-center gap-3" href="/">
              <Image src={Logo} alt="logo" />
              <h3 className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553]">
                DREAMKAM <br /> TOUR
              </h3>
            </Link>
          </div>

          <div className="flex gap-10 items-center">
            <Link
              className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553] hover:underline"
              href="/"
            >
              Расписание тура
            </Link>
            <Link
              className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553] hover:underline"
              href="/"
            >
              Как записаться
            </Link>
            <Link
              className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553] hover:underline"
              href="/"
            >
              Команда
            </Link>
            <button className="font-normal text-[16px] leading-[100%] tracking-[0%] text-[#275553] w-[177px] h-[40px] border cursor-pointer border-[#275553] rounded-[5px] hover:text-white hover:bg-[#275553] transition transition-all">
              Забронировать
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div className="container max-w-7xl mx-auto p-6 flex flex-col gap-5">
          <h1 className="font-black text-[64px] leading-[64px] tracking-[0%] text-white">
            Мечты о далекой <br /> Камчатке - близко
          </h1>

          <button className="font-bold cursor-pointer text-[30px] leading-[56px] tracking-[0%] text-white w-[481px] h-[61px] rounded-[16px] bg-[#FB8B62]">
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
            <Image className='cursor-pointer' src={Instagram} alt='instagram'/>
            <Image className='cursor-pointer' src={Facebook} alt='facebook'/>
          </div>
        </div>

        <div className={`h-[433px] relative`}>
          <div className="absolute bottom-[48px] h-[380px] right-0 overflow-hidden w-full border-red-500 ">
            <Carousel slides={slideData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
