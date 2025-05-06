"use client";
import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import point from "../../../public/images/dot.png";
import identity from "../../../public/images/comment_3.png";
import { useResponsive } from "../components/ResponsiveContext";

function Solutions() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // داده‌های ویژگی‌ها
  const features = [
    {
      title: "ارسال نوتیفیکیشن",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      title: "پرداخت آنلاین",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      title: "مدیریت آسان",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
  ];

  type FeatureCardProps = {
    title: string;
    description: string;
    isMobile?: boolean;
    isTablet?: boolean;
  };

  const FeatureCard = ({
    title,
    description,
    isMobile,
    isTablet,
  }: FeatureCardProps) => {
    // کلاس‌های کارت
    const cardClass = isMobile
      ? "p-2 h-[250px]" // کاهش ارتفاع و پدینگ
      : isTablet
      ? "p-4 h-[350px]"
      : "p-4 sm:p-6 h-[450px]";

    // کلاس موقعیت آیکون point
    const pointPosition = isMobile
      ? "top-0 left-12"
      : "-top-8 left-24 h-32 w-20";

    // کلاس دایره رنگی
    const circleSize = isMobile ? "w-12 h-12 mt-2" : "w-28 h-28 mt-8 sm:mt-12";

    // کلاس عنوان
    const titleClass = isMobile
      ? "text-xs mt-6 mb-1" // کاهش فونت و فاصله
      : "text-base sm:text-lg mt-6 sm:mt-10 mb-2";

    // کلاس توضیحات
    const descriptionClass = isMobile
      ? "text-[10px] mt-8" // کاهش فونت و فاصله
      : "text-xs sm:text-sm mt-6 sm:mt-12";

    // اندازه آیکون داخل دایره
    const iconSize = isMobile ? "w-8 h-8" : "w-16 h-16";

    // اندازه point
    const pointSize = isMobile ? "w-10 h-10" : "w-20 h-20";

    return (
      <div
        className={`flex flex-col items-center text-center bg-white rounded-lg shadow-sm
           transition-transform duration-300 ease-in-out w-full ${cardClass}`}
      >
        <div
          className={`relative flex items-center justify-center ${circleSize}`}
        >
          {/* تصویر point به‌عنوان لایه زیرین */}
          <Image
            className={`absolute group-hover:animate-bounce-slow ${pointSize} ${pointPosition}`}
            src={point}
            alt="point"
            style={{ zIndex: 0 }}
          />
          {/* دایره رنگی با آیکون identity */}
          <div
            className={`relative flex items-center justify-center rounded-full bg-gradient-to-t from-pink-300 to-purple-500 group-hover:from-blue-300 group-hover:to-blue-500 transition-colors duration-300 ${circleSize}`}
            style={{ zIndex: 1 }}
          >
            <Image
              src={identity}
              alt="identity icon"
              className={`object-contain ${iconSize}`}
            />
          </div>
        </div>

        <h3 className={`font-bold font-[IRANSans] ${titleClass}`}>{title}</h3>

        <p
          className={`max-w-xs text-gray-400 font-[IRANSans] ${descriptionClass}`}
        >
          {description}
        </p>
      </div>
    );
  };

  // رندر دسکتاپ
  const renderDesktop = () => (
    <div className="flex flex-col justify-center items-center mt-60">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-[IRANSans] mb-4">
          اپ ساز به شما کمک خواهد کرد
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10 h-[400px] w-[1100px]">
        {features.map((feature, index) => (
          <div className="hover:scale-105 transition group" key={index}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );

  // رندر تبلت
  const renderTablet = () => (
    <div className="flex flex-col justify-center items-center mt-40">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold font-[IRANSans] mb-4">
          اپ ساز به شما کمک خواهد کرد
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 h-auto max-w-3xl">
        {features.map((feature, index) => (
          <div className="hover:scale-105 transition group" key={index}>
            <FeatureCard {...feature} isTablet />
          </div>
        ))}
      </div>
    </div>
  );

  // رندر موبایل
  const renderMobile = () => (
    <div className="text-center hover:scale-110 transition mt-40 overflow-y-scroll">
      <div className="mb-4">
        <h2 className="text-lg font-bold font-[IRANSans] mb-2">
          اپ ساز به شما کمک خواهد کرد
        </h2>
      </div>
      <div className="w-full max-w-[80%] mx-auto hover:scale-110 transition">
        {features.map((feature, index) => (
          <div className="mb-4 hover:scale-110 transition group" key={index}>
            <FeatureCard key={index} {...feature} isMobile />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#F4FEFF] py-8 h-screen sm:py-12 overflow-y-scroll">
      <Container>
        {isDesktop && renderDesktop()}
        {isTablet && renderTablet()}
        {isMobile && renderMobile()}
      </Container>
    </div>
  );
}

export default Solutions;
