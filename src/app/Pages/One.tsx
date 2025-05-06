"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useResponsive } from "../components/ResponsiveContext";
import hero from "../../../public/images/81.png";
import Container from "../container/Container";
import { useSwipeable } from "react-swipeable";

function One() {
  const { isMobile, isTablet, isDesktop, screenWidth } = useResponsive();
  const isIpadMini = screenWidth >= 768 && screenWidth <= 820;

  const [currentPage, setCurrentPage] = useState(0);

  const texts = [
    "در دنیای پرجنب‌وجوش طلا و جواهر، اپلیکیشن‌های زیادی وجود دارند که هر کدام سعی در ارائه خدمات خاص خود دارند. اما ما در آوامین احساس کردیم که نیاز به یک پلتفرم مطمئن و امن برای فعالان این صنف حس می‌شود. به همین دلیل، اپلیکیشنی طراحی کردیم که نه تنها به شما امکان مدیریت و فروش محصولاتتان را می‌دهد، بلکه با تمرکز بر امنیت اطلاعات شما، اطمینان خاطر را فراهم می‌آورد. آوامین با بهره‌گیری از تکنولوژی‌های پیشرفته، محیطی امن و قابل اعتماد را برای شما فراهم کرده است تا با خیال راحت به تجارت خود بپردازید",
    "در آوامین، ما تلاش کردیم تا با استفاده از تکنولوژی‌های نوین و هوش مصنوعی، تمامی فرایندها را به صورت خودکار انجام دهیم. این سیستم به گونه‌ای طراحی شده است که تمامی موارد به صورت دقیق و بدون خطا در سیستم حسابداری شما سند بخورد",
  ];

  // انتقال useSwipeable به سطح بالا
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < texts.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    },
    trackMouse: true,
  });

  const renderDesktop = () => (
    <div className="grid grid-cols-2 w-full gap-14 items-center place-items-center h-screen py-0 pb-[200px]">
      <motion.div
        className="mt-48 w-full"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image className="w-full h-full" src={hero} alt="hero" />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center w-full text-center space-y-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="relative w-full">
          <div className="text-[30px] right-0 bottom-10 font-bold text-gray-800 absolute">
            آوامین: آوای امنیت
          </div>
        </div>

        <div className="relative w-full">
          <p className="text-gray-600 text-justify-last-right text-[17px]">
            در دنیای پرجنب‌وجوش طلا و جواهر، اپلیکیشن‌های زیادی وجود دارند که هر
            کدام سعی در ارائه خدمات خاص خود دارند. اما ما در آوامین احساس کردیم
            که نیاز به یک پلتفرم مطمئن و امن برای فعالان این صنف حس می‌شود. به
            همین دلیل، اپلیکیشنی طراحی کردیم که نه تنها به شما امکان مدیریت و
            فروش محصولاتتان را می‌دهد، بلکه با تمرکز بر امنیت اطلاعات شما،
            اطمینان خاطر را فراهم می‌آورد. آوامین با بهره‌گیری از تکنولوژی‌های
            پیشرفته، محیطی امن و قابل اعتماد را برای شما فراهم کرده است تا با
            خیال راحت به تجارت خود بپردازید
          </p>
        </div>

        <div className="w-full relative">
          <div className="text-[16px] text-gray-500 text-justify-last-right space-y-4 absolute right-1/12 mt-14 w-[500px]">
            <p>
              در آوامین، ما تلاش کردیم تا با استفاده از تکنولوژی‌های نوین و هوش
              مصنوعی، تمامی فرایندها را به صورت خودکار انجام دهیم. این سیستم به
              گونه‌ای طراحی شده است که تمامی موارد به صورت دقیق و بدون خطا در
              سیستم حسابداری شما سند بخورد
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderTablet = () => (
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
            <span className="text-5xl font-bold block">به اپ ساز بسپارید</span>
          </div>
        </div>
        <div className="w-full relative">
          <div className="text-[13px] text-gray-500 w-full space-y-3 text-center mt-14">
            <p>ساخت اپلیکیشن بدون کد نویسی...</p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderMobile = () => {
    return (
      <div
        className="flex flex-col items-center justify-center text-center space-y-6 py-18"
        {...handlers}
      >
        <motion.div
          className="mt-12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="w-full h-full" src={hero} alt="hero" />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center w-full text-center space-y-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="text-[14px] font-bold text-gray-600">
            آوامین: آوای امنیت
          </div>

          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full text-[11px] text-justify-last-right leading-6"
          >
            {texts[currentPage]}
          </motion.div>

          <div className="flex justify-center space-x-3 mt-6 rtl:space-x-reverse">
            {texts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-gray-800 shadow-md"
                    : "bg-gray-300 opacity-70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

  const renderIpadMini = () => {
    if (!isIpadMini) return null;
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-8">
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
              <p>ساخت اپلیکیشن بدون کد نویسی...</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-auto bg-[#F4FEFF] font-[IRANSans] font-normal">
      <Container>
        {isDesktop && renderDesktop()}
        {isTablet && !isIpadMini && renderTablet()}
        {isMobile && renderMobile()}
        {isIpadMini && renderIpadMini()}
      </Container>
    </div>
  );
}

export default One;
