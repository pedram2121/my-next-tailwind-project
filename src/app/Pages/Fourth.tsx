"use client";
import React from "react";
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
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
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

      <div className={`flex w-full items-center ${layout} ${isDesktop ? "px-8" : "" }`} >

        {/* بخش متنی */}
        <div className={isDesktop ? "w-1/3 text-right": "w-full mb-6 px-4 text-justify-last-right"}>

          <h2 className={`font-bold font-[IRANSans] mb-6 text-black ${titleSize}`} >
            اسکرین شات محیط برنامه
          </h2>

          <p className={`text-gray-600 font-[IRANSans] leading-relaxed text-justify-last-right text-[15px] ${textSize}`} >
            در دنیای پرجنب‌وجوش طلا و جواهر، اپلیکیشن‌های زیادی وجود دارند که هر
            کدام سعی در ارائه خدمات خاص خود دارند. اما ما در آوامین احساس کردیم
            که نیاز به یک پلتفرم مطمئن و امن برای فعالان این صنف حس می‌شود. به
            همین دلیل، اپلیکیشنی طراحی کردیم که نه تنها به شما امکان مدیریت و
            فروش محصولاتتان را می‌دهد، بلکه با تمرکز بر امنیت اطلاعات شما،
            اطمینان خاطر را فراهم می‌آورد. آوامین با بهره‌گیری از تکنولوژی‌های
            پیشرفته، محیطی امن و قابل اعتماد را برای شما فراهم کرده است تا با
            خیال راحت به تجارت خود بپردازید.
          </p>
        </div>

        {/* اسلایدر تصاویر */}
        <div className={isDesktop ? "w-2/3" : "w-full"}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            className="mySwiper"
          >
            {screenshots.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={src}
                    alt={`اسکرین‌شات ${index + 1}`}
                    width={imageWidth}
                    height={imageHeight}
                    className="object-contain rounded-lg shadow-md"
                  />
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
