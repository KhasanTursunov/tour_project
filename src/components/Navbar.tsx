import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from "@/assets/svg/logo-img.svg";


const Navbar = () => {
  return (
      <div className="top-0 left-0 sticky bg-[#dcedfa] z-40">
        <div className="flex items-center container max-w-7xl mx-auto p-6 header gap-2">
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
  );
}

export default Navbar