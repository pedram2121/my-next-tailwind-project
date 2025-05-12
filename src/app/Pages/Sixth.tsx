"use client"
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
      name: "طلا گروه خرداد",
      image: "/images/kh.jpg",
      link: "https://tjmkk.com",
      comment:
        "با پشتیبانی آوامین، گروه خرداد خرید و فروش طلای آب‌شده رو با اطمینان کامل انجام می‌ده. امنیت پلتفرم و گزارش‌های دقیقشون بی‌نظیره.",
    },
    {
      name: "طلای مهرشاد",
      image: "/images/meh.jpg",
      link: "https://mehrshad.avamin.com",
      comment:
        "آوامین با سیستم امن و سریعش به مهرشاد کمک کرد تا تراکنش‌هامون رو با خیال راحت انجام بدیم. واقعاً قابل اعتماده.",
    },
    {
      name: "طلای فهد",
      image: "/images/fahd.jpg",
      link: "https://fahad.avamin.com/",
      comment:
        "فضایی که آوامین برای طلای فهد فراهم کرده، شفاف و حرفه‌ایه. مشاوره تخصصی و امنیت اطلاعاتمون تضمین‌شده‌ست.",
    },
    {
      name: "طلای کیوان",
      image: "/images/k1.jpg",
      link: "https://keyvan.avamin.com/",
      comment:
        "کیوان به لطف پلتفرم کاربرپسند آوامین تونسته خدمات باکیفیتی ارائه بده. پشتیبانی 24 ساعته‌شون عالیه.",
    },
    {
      name: "طلای زرین در",
      image: "/images/z1.jpg",
      link: "https://zarin.avamin.com",
      comment:
        "زرین در با حمایت آوامین تجربه‌ای بی‌نظیر از خرید سریع و امن طلا ارائه می‌ده. تکنولوژی پیشرفته‌شون حرف نداره.",
    },
    {
      name: "طلای رز",
      image: "/images/roz.jpg",
      link: "https://rozgold.avamin.com/",
      comment:
        "طلای رز با کمک آوامین قیمت‌های منصفانه و شفافی ارائه می‌کنه. پلتفرمشون تجارت طلا رو خیلی ساده کرده.",
    },
    {
      name: "طلا وست",
      image: "/images/vest.jpg",
      link: "https://talavest.avamin.com",
      comment:
        "طلا وست با ابزارهای تحلیل بازار آوامین تونسته سرمایه‌گذاری هوشمندانه‌ای در طلا داشته باشه. امنیتشون بی‌رقیبه.",
    },
  ];

  const cardClass = isMobile
    ? "w-[280px] h-[420px]"
    : isTablet
    ? "w-[320px] h-[420px]"
    : "w-[400px] h-[540px]";
  const textSize = isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-2xl";
  const nameSize = isMobile
    ? "text-[14px]"
    : isTablet
    ? "text-sm"
    : "text-base";
  const descriptionSize = isMobile
    ? "text-[12px] leading-7"
    : isTablet
    ? "text-sm leading-6"
    : "text-base leading-7";
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
        تجربه برندهای طلا با آوامین
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
                className={`swiper-slide-custom ${cardClass} bg-white p-6 rounded-lg shadow-md flex
                 flex-col border border-gray-200 justify-between transition-all duration-300 cursor-pointer relative pb-20`}
              >
                <div className="flex items-center mb-6 -mr-5">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="w-14 h-14 border border-gray-200 rounded-full mr-3 hover:scale-110 transition-transform duration-200"
                  />
                  <h2
                    className={`${nameSize} mr-4 font-semibold text-purple-800 font-[IRANSans]`}
                  >
                    {card.name}
                  </h2>
                </div>
                <p
                  className={`${descriptionSize} text-gray-700 text-right font-[IRANSans] line-clamp-8 text-justify‍‌justify-last-right`}
                >
                  {card.comment}
                </p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-purple-600 text-white text-sm px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 hover:shadow-lg font-[IRANSans]"
                >
                  بازدید از سایت
                </a>
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
        تجربه برندهای طلا با آوامین
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
                className={`swiper-slide-custom ${cardClass} bg-white p-6 rounded-lg shadow-md flex flex-col justify-between transition-all duration-300 cursor-pointer relative`}
              >
                <div className="flex flex-row-reverse items-center mb-6">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="w-10 h-10 rounded-full mr-3 hover:scale-110 transition-transform duration-200"
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
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-purple-600 text-white text-sm px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 hover:shadow-lg font-[IRANSans]"
                >
                  بازدید از سایت
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="flex flex-col items-center justify-center min-h-[600px] py-8 px-4 bg-[#F4FEFF] overflow-x-hidden">
      <h1
        className={`text-2xl font-bold text-black mb-14 font-[IRANSans]`}>
        تجربه برندهای طلا با آوامین
      </h1>
      <div className="w-full max-w-7xl mx-auto relative flex justify-center">
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
            className={`pb-24 ${className}`}>
         
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide-custom ${cardClass} bg-white p-5 rounded-lg shadow-md 
                flex flex-col border border-gray-100 justify-between transition-all duration-300 cursor-pointer relative pb-20`}>
             
                <div className="flex items-center mb-4 h-32 -mr-5">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="w-16 h-16 border border-gray-200 rounded-full mr-3 hover:scale-110 transition-transform duration-200"/>
                  
                  <h2
                    className={`${nameSize} mr-4 font-semibold text-purple-800 font-[IRANSans]`}>
                    {card.name}
                  </h2>

                </div>

                <p className={`${descriptionSize} text-gray-700 text-right font-[IRANSans] line-clamp-8 text-justify-last-right -mt-6`}>
                  {card.comment}
                </p>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-purple-600 text-white text-sm px-4 py-2 
                  rounded-full hover:bg-purple-700 transition-colors duration-200 hover:shadow-lg font-[IRANSans]">
                  بازدید از سایت
                </a>

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
