"use client";
import React from "react";
import Image from "next/image";
import best from "../../../public/images/Features.png";
import s from "../../../public/images/customer-support.png";
import { useResponsive } from "../components/ResponsiveContext";

function Feature() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // داده‌های ویژگی‌ها
  const features = [
    {
      title: "امنیت بالا",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      icon: s,
      alt: "s1",
    },
    {
      title: "شخصی سازی آسان",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      icon: s,
      alt: "s2",
    },
    {
      title: "طراحی خلاقانه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      icon: s,
      alt: "s3",
    },
    {
      title: "پشتیبانی مشتریان",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      icon: s,
      alt: "s4",
    },
  ];

  // کامپوننت ویژگی
  type FeatureItemProps = {
    title: string;
    description: string;
    icon: any;
    alt: string;
  };

  const FeatureItem = ({ title, description, icon, alt }: FeatureItemProps) => {
    return (
      <div className="flex flex-row-reverse items-start gap-4">
        <div
          className="flex items-center justify-center flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16
         rounded-full bg-gradient-to-t from-pink-300 to-purple-500"
        >
          <Image src={icon} alt={alt} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="text-right">
          <span className="block font-[IRANSans] font-bold text-base sm:text-lg md:text-xl text-justify-last-right">
            {title}
          </span>
          <span
            className="block mt-2 max-w-48 text-xs sm:text-sm leading-6 
          sm:leading-7 font-[IRANSans] font-medium text-gray-400 text-justify-last-right"
          >
            {description}
          </span>
        </div>
      </div>
    );
  };

  // رندر دسکتاپ
  const renderDesktop = () => (
    <div
      className="flex flex-row-reverse justify-between
     items-center px-4 sm:px-8 w-full h-[880px] mx-auto"
    >
      <div className="text-right mr-6">
        <Image src={best} alt="best" className="w-full h-full mx-auto" />
      </div>
      <div className="space-y-28 justify-center items-center text-center ml-52">
        <p className="text-3xl md:text-4xl font-bold font-[IRANSans]">
          بهترین ویژگی‌های آوامین
        </p>
        <div className="grid grid-cols-2 gap-8 text-justify-last-right">
          {features.map((feature) => (
            <div
              className="w-80 text-[11px] font-medium"
              key={`${feature.title}-${feature.alt}`}
            >
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // رندر تبلت (بهینه‌شده برای iPad Pro با فاصله‌های بیشتر بین عناصر)
  const renderTablet = () => (
    <div className="flex flex-col justify-center items-center px-6 md:px-12 max-w-5xl mx-auto">
      <Image
        src={best}
        alt="best"
        className="w-full max-w-sm mx-auto mb-10 md:mb-14"
      />
      <p className="text-xl md:text-2xl font-bold font-[IRANSans] text-right w-full mb-10 md:mb-14">
        بهترین ویژگی‌های اپ ساز
      </p>
      <div className="grid grid-cols-2 gap-8 md:gap-12">
        {features.map((feature) => (
          <FeatureItem key={`${feature.title}-${feature.alt}`} {...feature} />
        ))}
      </div>
    </div>
  );

  // رندر موبایل
  const renderMobile = () => (
    <div className="flex flex-col justify-center items-center px-4 max-w-md mx-auto">
      <Image src={best} alt="best" className="w-full max-w-xs mx-auto mb-6" />
      <p className="text-xl sm:text-2xl font-bold font-[IRANSans] text-right w-full mb-16">
        بهترین ویژگی‌های اپ ساز
      </p>
      <div className="space-y-8 w-full">
        {features.map((feature) => (
          <FeatureItem key={`${feature.title}-${feature.alt}`} {...feature} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white h-auto py-12 sm:py-16 relative">
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </div>
  );
}

export default Feature;
