"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useResponsive } from "../components/ResponsiveContext";
import hero from "../../../public/images/hero_right.png";
import Container from "../container/Container";

function One() {
  const { isMobile, isTablet, isDesktop, screenWidth } = useResponsive();

  // بررسی سایز iPad Mini
  const isIpadMini = screenWidth >= 768 && screenWidth <= 820;

  // رندر دسکتاپ
  const renderDesktop = () => {
    return (
      <div className="grid grid-cols-2 items-center place-items-center min-h-[800px] py-0 pb-[100px]">
        <motion.div
          className="mt-48"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="w-auto" src={hero} alt="hero" />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center w-full text-center space-y-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-full">
            <div
              className="text-[16px] right-0 bottom-10
             font-bold text-gray-600 absolute"
            >
              لندینگ پیج آپ ساز
            </div>
          </div>
          <div className="relative w-full">
            <div className="w-full text-right absolute right-0 -top-10">
              <span className="text-6xl font-bold block mb-5">
                معرفی خدمات خود را
              </span>
              <span className="text-6xl font-bold block">
                به اپ ساز بسپارید
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div
              className="text-[15px] text-gray-500 w-full text-right 
            space-y-4 absolute right-3/12 mt-32"
            >
              <p>ساخت اپلیکیشن بدون کد نویسی موضوعی است که امروزه</p>
              <p>بسیار مورد توجه قرار گرفته است ، در شرایطی که استفاده از</p>
              <p>گوشی های هوشمند رو به افزایش است به مدد طراحی</p>
              <p>اپلیکیشن بدون کدنویسی شما می توانید با صرف زمان کوتاه</p>
              <p>بدون دانش برنامه نویسی و در عین حال مقرون به صرفه</p>
              <p>اپلیکیشن خود را بسازید</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  // رندر تبلت
  const renderTablet = () => {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          className="mt-12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="w-80" src={hero} alt="hero" />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center w-full text-center space-y-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="text-[14px] font-bold text-gray-600">
            لندینگ پیج آپ ساز
          </div>
          <div className="relative w-full">
            <div className="w-full text-center">
              <span className="text-5xl font-bold block mb-3">
                معرفی خدمات خود را
              </span>
              <span className="text-5xl font-bold block">
                به اپ ساز بسپارید
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="text-[13px] text-gray-500 w-full space-y-3 text-center mt-14">
              <p>ساخت اپلیکیشن بدون کد نویسی موضوعی است که امروزه</p>
              <p>بسیار مورد توجه قرار گرفته است ، در شرایطی که استفاده از</p>
              <p>گوشی های هوشمند رو به افزایش است به مدد طراحی</p>
              <p>اپلیکیشن بدون کدنویسی شما می توانید با صرف زمان کوتاه</p>
              <p>بدون دانش برنامه نویسی و در عین حال مقرون به صرفه</p>
              <p>اپلیکیشن خود را بسازید</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  // رندر موبایل
  const renderMobile = () => {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-4 md:space-y-8">
        <motion.div
          className="mt-12 sm:mt-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="w-64 sm:w-56 md:w-72" src={hero} alt="hero" />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center w-full text-center space-y-4 sm:space-y-3 md:space-y-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="text-[12px] sm:text-[10px] md:text-[14px] font-bold text-gray-600">
            لندینگ پیج آپ ساز
          </div>
          <div className="relative w-full">
            <div className="w-full text-center sm:text-left">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold block mb-2 sm:mb-1">
                معرفی خدمات خود را
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold block">
                به اپ ساز بسپارید
              </span>
            </div>
          </div>
          <div className="w-full relative -mt-12">
            <div className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-500 w-full space-y-2 sm:space-y-2 md:space-y-4 absolute text-center mt-16 sm:mt-12">
              <p>ساخت اپلیکیشن بدون کد نویسی موضوعی است که امروزه</p>
              <p>بسیار مورد توجه قرار گرفته است ، در شرایطی که استفاده از</p>
              <p>گوشی های هوشمند رو به افزایش است به مدد طراحی</p>
              <p>اپلیکیشن بدون کدنویسی شما می توانید با صرف زمان کوتاه</p>
              <p>بدون دانش برنامه نویسی و در عین حال مقرون به صرفه</p>
              <p>اپلیکیشن خود را بسازید</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  // جلوگیری از تکرار رندر در iPad Mini
  const renderIpadMini = () => {
    if (isIpadMini) {
      return (
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* محتوای مخصوص iPad Mini */}
          <motion.div
            className="mt-14"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image className="w-80" src={hero} alt="hero" />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center w-full text-center space-y-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="text-[14px] font-bold text-gray-600">
              لندینگ پیج آپ ساز
            </div>
            <div className="relative w-full">
              <div className="w-full text-center">
                <span className="text-5xl font-bold block mb-3">
                  معرفی خدمات خود را
                </span>
                <span className="text-5xl font-bold block">
                  به اپ ساز بسپارید
                </span>
              </div>
            </div>
            <div className="w-full relative">
              <div className="text-[13px] text-gray-500 w-full space-y-3 text-center mt-14">
                <p>ساخت اپلیکیشن بدون کد نویسی موضوعی است که امروزه</p>
                <p>بسیار مورد توجه قرار گرفته است ، در شرایطی که استفاده از</p>
                <p>گوشی های هوشمند رو به افزایش است به مدد طراحی</p>
                <p>اپلیکیشن بدون کدنویسی شما می توانید با صرف زمان کوتاه</p>
                <p>بدون دانش برنامه نویسی و در عین حال مقرون به صرفه</p>
                <p>اپلیکیشن خود را بسازید</p>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }
    return null;
  };

  // رندر نهایی
  return (
    <div className="h-screen w-auto bg-[#F4FEFF] font-[IRANSans] font-normal">
      <Container>
        {isDesktop && renderDesktop()}
        {isTablet && !isIpadMini && renderTablet()}
        {isMobile && renderMobile()}
        {renderIpadMini()}
      </Container>
    </div>
  );
}

export default One;
