"use client";
import React from "react";
import Container from "../container/Container";
import { useResponsive } from "../components/ResponsiveContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// استایل‌های Swiper
import "swiper/css";
import "swiper/css/navigation";

function Fourth() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // لیست تصاویر
  const screenshots = [
    "/images/App1.png",
    "/images/App2.png",
    "/images/App3.png",
  ];

  // اندازه‌های مختلف برای دستگاه‌ها
  const titleSize = isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl";
  const textSize = isMobile ? "text-sm" : isTablet ? "text-base" : "text-lg";
  const imageWidth = isMobile ? 180 : isTablet ? 300 : 300; // کوچیک‌تر برای دسکتاپ
  const imageHeight = isMobile ? 500 : isTablet ? 600 : 600; // کوچیک‌تر برای دسکتاپ
  const spaceBetween = isMobile ? -100 : isTablet ? 30 : -200; // نزدیک‌تر برای دسکتاپ
  const slidesPerView = isMobile ? 1.0 : isTablet ? 1.5 : 2.5;

  // چیدمان برای دسکتاپ یا تبلت/موبایل
  const layout = isDesktop ? "flex-row gap-16" : "flex-col gap-4";

  return (

    <div className="bg-white sm:py-12 sm:mt-32 mt-12 ">

      <div className={`flex w-full items-center ${layout} ${ isDesktop ? "px-8" : "" }`} >
       
        {/* بخش متنی */}
        <div className={isDesktop ? "w-1/3 text-right" : "w-full mb-6 px-4 text-right text-justify"} >
        
       
          <h2 className={`font-bold font-[IRANSans] mb-6 text-black ${titleSize}`} >
            اسکرین شات محیط برنامه
          </h2>

          <p className={`text-gray-600 font-[IRANSans] leading-relaxed ${textSize}`} >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>

        </div>


        {/* اسلایدر تصاویر */}
        <div className={isDesktop ? "w-2/3" : "w-full"}>
          <Swiper
            modules={[Navigation]} spaceBetween={spaceBetween}
            slidesPerView={slidesPerView} navigation  className="mySwiper" >

            {screenshots.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image src={src} alt={`اسکرین‌شات ${index + 1}`} width={imageWidth} height={imageHeight}
                    className="object-contain rounded-lg shadow-md"/>             
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}

export default Fourth;
