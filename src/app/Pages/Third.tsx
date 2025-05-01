"use client";
import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import point from "../../../public/images/dot.png";
import { useResponsive } from "../components/ResponsiveContext";

function Third() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const features = [
    {
      title: "ارسال نوتیفیکیشن",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      img: "/images/secure-payment.png",
    },
    {
      title: "پرداخت آنلاین",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      img: "/images/paper-plane.png",
    },
    {
      title: "مدیریت آسان",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      img: "/images/analyst.png",
    },
  ];

  type FeatureCardProps = {
    title: string;
    description: string;
    isMobile?: boolean;
    isTablet?: boolean;
  };

  const FeatureCard = ({ title, description, isMobile , isTablet,}: FeatureCardProps) => {
   
    const cardClass = isMobile ? "p-4 h-[330px]" : isTablet ? "p-4 h-[350px]" : "p-4 sm:p-6 h-[550px] border border-gray-200";
      
    const pointPosition = isMobile ? "top-0 left-12" : "-top-8 left-24 h-32 w-20";
     
    const circleSize = isMobile ? "w-24 h-24 mt-7" : "w-28 h-28 mt-8 sm:mt-12";

    const titleClass = isMobile ? "text-[18px] mt-8" : "text-base sm:text-[22px] mt-6 sm:mt-14 mb-2";
     
  
    const descriptionClass = isMobile ? "text-[14px] mt-8 ltr" : "text-xs sm:text-[17px] mt-6 sm:mt-12";

    const iconSize = isMobile ? "w-12 h-12" : "w-14 h-12";

    const pointSize = isMobile ? "w-16 h-24 mb-28" : "w-20 h-20";

    return (

      <div className={`flex flex-col items-center text-center bg-white rounded-lg shadow-sm
           transition-transform duration-300 ease-in-out w-full ${cardClass}`}>
     
        <div className={`relative flex items-center justify-center ${circleSize}`} >

          {/* تصویر point به‌عنوان لایه زیرین */}
        <Image 
          className={`absolute group-hover:translate-x-2 group-hover:transition-transform group-hover:duration-1000 ${pointSize} ${pointPosition}`}
          src={point}
          alt="point"
          style={{ zIndex: 0 }}
          width={50}
          height={50}/>
         

          {/* دایره رنگی با آیکون identity */}
          <div className={`relative flex items-center justify-center rounded-full
            bg-gradient-to-t from-pink-300 to-purple-500 group-hover:from-blue-300
             group-hover:to-blue-500 transition-colors duration-300 ${circleSize}`}
            style={{ zIndex: 1 }} >
         
            <Image src={ title === "ارسال نوتیفیکیشن" ? "/images/secure-payment.png" : title === "پرداخت آنلاین" ? "/images/paper-plane.png" : "/images/analyst.png" }
                  alt="identity icon"
                  className={`object-contain ${iconSize}`}
                  width={50}
                  height={50} />  
          </div>
        </div>


        <h3 className={`font-bold font-[IRANSans] ${titleClass}`}>{title}</h3>

        <p className={`max-w-xs text-gray-400 font-[IRANSans] ${descriptionClass}`} >
          {description}
        </p>

      </div>
    );
  };

  // رندر دسکتاپ
  const renderDesktop = () => (
    <div className="flex flex-col mx-auto text-center justify-center items-center">
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
    <div className="flex flex-col justify-center items-center">
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
    <div className="text-center h-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold font-[IRANSans] mb-2">
          اپ ساز به شما کمک خواهد کرد
        </h2>
      </div>
      <div className="w-full max-w-[90%] mx-auto flex flex-col items-center">
        {features.map((feature, index) => (
          <div className="mb-4 group w-full" key={index}>
            <FeatureCard {...feature} isMobile />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#F4FEFF] py-8 h-auto lg:h-screen sm:py-12">
      <Container>
        {isDesktop && renderDesktop()}
        {isTablet && renderTablet()}
        {isMobile && renderMobile()}
      </Container>
    </div>
  );
}

export default Third;
