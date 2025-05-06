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

type SixthProps = {
  className?: string;
  direction?: "ltr" | "rtl";
  paginationEl?: string;
};

const Sixth: React.FC<SixthProps> = ({
  className = "",
  direction = "rtl",
  paginationEl,
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const cards = [
    {
      name: "احسان صالحی",
      image: "/images/comment_1.png",
      comment:
        "از وقتی با آوامین آشنا شدم، دیگه نگران نوسانات قیمت طلا نیستم. اعلان‌های لحظه‌ایش بهم کمک کرد یه خرید عالی داشته باشم!",
    },
    {
      name: "مهران غلامی",
      image: "/images/comment_2.png",
      comment:
        "پرداخت‌ها تو آوامین خیلی سریع و امن انجام میشه. برای فروش طلاهام خیلی راحت تونستم اعتماد کنم.",
    },
    {
      name: "حامد رضایی",
      image: "/images/comment_3.png",
      comment:
        "مدیریت سرمایه‌گذاری با آوامین واقعاً ساده‌ست. گزارش‌های دقیقش بهم کمک کرد سود خوبی از خرید طلا ببرم.",
    },
    {
      name: "سارا محمدی",
      image: "/images/comment_2.png",
      comment:
        "آوامین بهترین اپ برای خرید و فروش طلاست. رابط کاربریش خیلی ساده و کاربردیه، همیشه ازش استفاده می‌کنم.",
    },
  ];

  const cardClass = isMobile
    ? "w-[280px] h-[400px]"
    : isTablet
    ? "w-[320px] h-[400px]"
    : "w-[400px] h-[520px]";
  const textSize = isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-4xl";
  const nameSize = isMobile
    ? "text-[14px]"
    : isTablet
    ? "text-sm"
    : "text-base";
  const descriptionSize = isMobile
    ? "text-[12px] leading-7"
    : isTablet
    ? "text-sm leading-5"
    : "text-base leading-6";
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

  const renderDesktop = () => (
    <div className="flex flex-col items-center justify-center min-h-[950px] py-12 px-4 bg-[#F4FEFF] overflow-x-hidden">
      <h1
        className={`text-4xl font-bold text-black mb-16 mt-12 font-[IRANSans]`}
      >
        آوامین در نظر مشتریان
      </h1>
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="w-full">
          <Swiper
            dir={direction}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: `custom-swiper-bullet`,
              bulletActiveClass: `custom-swiper-bullet-active`,
              el: paginationEl || undefined,
            }}
            navigation={false}
            breakpoints={breakpoints}
            className={`pb-24 ${className}`}
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide-custom ${cardClass} bg-white p-6 rounded-lg shadow-md flex flex-col justify-between transition-all duration-300 cursor-pointer`}
              >
                <div className="flex flex-row-reverse items-center mb-6">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full mr-3"
                  />
                  <h2
                    className={`${nameSize} mr-4 font-semibold text-purple-800 font-[IRANSans]`}
                  >
                    {card.name}
                  </h2>
                </div>
                <p
                  className={`${descriptionSize} text-gray-700 text-right font-[IRANSans] line-clamp-8 text-justify-last-right`}
                >
                  {card.comment}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );

  const renderTablet = () => (
    <div className="flex flex-col items-center justify-center min-h-[950px] py-12 px-4 bg-[#F4FEFF] overflow-x-hidden">
      <h1
        className={`text-3xl font-bold text-black mb-16 mt-12 font-[IRANSans]`}
      >
        آوامین در نظر مشتریان
      </h1>
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="w-full">
          <Swiper
            dir={direction}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: `custom-swiper-bullet`,
              bulletActiveClass: `custom-swiper-bullet-active`,
              el: paginationEl || undefined,
            }}
            navigation={false}
            breakpoints={breakpoints}
            className={`pb-24 ${className}`}
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide-custom ${cardClass} bg-white p-6 rounded-lg shadow-md flex flex-col justify-between transition-all duration-300 cursor-pointer`}
              >
                <div className="flex flex-row-reverse items-center mb-6">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <h2
                    className={`${nameSize} mr-4 font-semibold text-purple-800 font-[IRANSans]`}
                  >
                    {card.name}
                  </h2>
                </div>
                <p
                  className={`${descriptionSize} text-gray-700 text-right font-[IRANSans] line-clamp-8 text-justify-last-right`}
                >
                  {card.comment}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="flex flex-col items-center justify-center h-[550px] py-8 px-4 bg-[#F4FEFF] overflow-x-hidden">
      <h1 className={`text-2xl font-bold text-black mb-14 font-[IRANSans]`}>
        آوامین در نظر مشتریان
      </h1>
      <div className="w-full max-w-7xl mx-auto relative flex justify-center">
        <div className="w-full h-auto">
          <Swiper
            dir={direction}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: `custom-swiper-bullet`,
              bulletActiveClass: `custom-swiper-bullet-active`,
              el: paginationEl || undefined,
            }}
            navigation={false}
            breakpoints={breakpoints}
            className={`pb-24 ${className}`}
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide-custom ${cardClass} bg-white p-5 rounded-lg shadow-md flex flex-col justify-between transition-all duration-300 cursor-pointer`}
              >
                <div className="flex flex-row-reverse items-center mb-4 h-32">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full mr-3"
                  />
                  <h2
                    className={`${nameSize} mr-4 font-semibold text-purple-800 font-[IRANSans]`}
                  >
                    {card.name}
                  </h2>
                </div>
                <p
                  className={`${descriptionSize} text-gray-700 text-right font-[IRANSans] line-clamp-8 text-justify-last-right`}
                >
                  {card.comment}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </>
  );
};

export default Sixth;
