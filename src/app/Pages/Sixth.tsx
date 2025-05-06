"use client";
import React from "react";
import { useResponsive } from "../components/ResponsiveContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { SwiperOptions } from "swiper/types";
import Image from "next/image";

type SixthProps = { className?: string; direction?: "ltr" | "rtl"; paginationEl?: string;};
  

const Sixth: React.FC<SixthProps> = ({ className = "", direction = "rtl", paginationEl, }) => {

  const { isMobile, isTablet, isDesktop } = useResponsive();

  const cards = [
    { name: "احسان صالحی", image: "/images/comment_1.png" },
    { name: "مهران غلامی", image: "/images/comment_2.png" },
    { name: "حامد رضایی", image: "/images/comment_3.png" },
    { name: "سارا محمدی", image: "/images/comment_2.png" },
  ];

  const cardClass = isMobile ? "w-[280px] h-[400px]": isTablet ? "w-[320px] h-[400px]" : "w-[400px] h-[520px]";
   
  const textSize = isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-4xl";
  const nameSize = isMobile ? "text-[14px]" : isTablet ? "text-sm" : "text-base";
  const descriptionSize = isMobile ? "text-[12px] leading-7" : isTablet ? "text-sm leading-5" : "text-base leading-6";
   
  const spaceBetween = isMobile ? 10 : isTablet ? 20 : 30;

  const breakpoints: SwiperOptions["breakpoints"] = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (

    <div className={`flex flex-col items-center justify-center ${isMobile ? "h-[550px] py-8" : "min-h-[950px] py-12" } px-4 bg-[#F4FEFF] overflow-x-hidden`}>

      <h1 className={`${textSize} font-bold text-black ${isMobile ? "mb-14" : "mb-16 mt-12"} font-[IRANSans]`}>
        آوامین در نظر مشتریان
      </h1>

      <div className={`w-full max-w-7xl mx-auto relative ${isMobile ? "flex justify-center w-full" : "" }`} >
          
        <div className={`${isMobile ? "w-full h-auto" : "w-full"}`}>
          <Swiper
            dir={direction}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            centeredSlides={true}
            autoplay={{  delay: 2000, disableOnInteraction: false, }}

            pagination={{
              clickable: true,
              bulletClass: `custom-swiper-bullet`,
              bulletActiveClass: `custom-swiper-bullet-active`,
              el: paginationEl || undefined,}}
              navigation={false} breakpoints={breakpoints} className={`pb-24 ${className}`} >
           
           
        
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide-custom ${cardClass} bg-white ${isMobile ? "p-5" : "p-6"  } rounded-lg
                 shadow-md flex flex-col justify-between transition-all duration-300 cursor-pointer`}>


                <div className={`flex flex-row-reverse items-center ${isMobile ? "mb-4 h-32" : "mb-6"}`}>
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className={`${ isMobile ? "w-14 h-14 mr-3" : isTablet ? "w-10 h-10" : "w-14 h-14"} rounded-full`} />


                  <h2 className={`${nameSize} mr-4 font-semibold text-purple-800 font-[IRANSans]`}>
                    {card.name}
                  </h2>
                </div>

                <p className={`${descriptionSize} text-gray-700 text-right font-[IRANSans] line-clamp-8 text-justify-last-right`} >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با kiefer است.
                </p>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    </div>
  );
};

export default Sixth;
