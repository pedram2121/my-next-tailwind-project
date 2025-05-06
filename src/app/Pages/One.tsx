"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useResponsive } from "../components/ResponsiveContext";
import hero from "../../../public/images/81.png";
import Container from "../container/Container";
import { useSwipeable } from "react-swipeable";

function One() {
  const { isMobile, isTablet, isDesktop, screenWidth } = useResponsive();
  const isIpadMini = screenWidth >= 768 && screenWidth <= 820;
  const [showButtons, setShowButtons] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const texts = [
    "در دنیای پرجنب‌وجوش طلا و جواهر، اپلیکیشن‌های زیادی وجود دارند که هر کدام سعی در ارائه خدمات خاص خود دارند. اما ما در آوامین احساس کردیم که نیاز به یک پلتفرم مطمئن و امن برای فعالان این صنف حس می‌شود. به همین دلیل، اپلیکیشنی طراحی کردیم که نه تنها به شما امکان مدیریت و فروش محصولاتتان را می‌دهد، بلکه با تمرکز بر امنیت اطلاعات شما، اطمینان خاطر را فراهم می‌آورد. آوامین با بهره‌گیری از تکنولوژی‌های پیشرفته، محیطی امن و قابل اعتماد را برای شما فراهم کرده است تا با خیال راحت به تجارت خود بپردازید",
    "در آوامین، ما تلاش کردیم تا با استفاده از تکنولوژی‌های نوین و هوش مصنوعی، تمامی فرایندها را به صورت خودکار انجام دهیم. این سیستم به گونه‌ای طراحی شده است که تمامی موارد به صورت دقیق و بدون خطا در سیستم حسابداری شما سند بخورد",
  ];

  // تأخیر 1 ثانیه‌ای برای نمایش دکمه‌ها
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

  const socialButtons = [
    {
      name: "call",
      icon: "/images/phone1.png",
      color: "white",
      hoverColor: "hover:bg-blue-400",
      link: "tel:+989121277336",
    },
    {
      name: "whatsapp",
      icon: "/images/whatsapp.png",
      color: "white",
      hoverColor: "hover:bg-green-600",
      link: "https://wa.me/+989121277336",
    },
    {
      name: "instagram",
      icon: "/images/instagram.png",
      color: "white",
      hoverColor: "hover:bg-pink-600",
      link: "https://www.instagram.com/avoamin",
    },
    {
      name: "cellphone",
      icon: "/images/call.png",
      color: "white",
      hoverColor: "hover:bg-gray-600",
      link: "tel:+989121277336",
    },
  ];

  const renderDesktop = () => (
    <div className="grid grid-cols-2 w-full gap-14 items-center place-items-center h-screen py-0 pb-[200px]">
      <motion.div
        className="mt-48 w-full relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image className="w-full h-full" src={hero} alt="hero" />
        {showButtons && (
          <motion.div
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          >
            {socialButtons.map((button, index) => (
              <motion.a
                key={button.name}
                href={button.link}
                className={`w-14 h-14 rounded-full ${button.color} ${button.hoverColor} flex items-center justify-center shadow-xl transition-transform hover:scale-110`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              >
                <Image
                  src={button.icon}
                  alt={button.name}
                  width={24}
                  height={24}
                  className="object-contain w-14 h-14"
                />
              </motion.a>
            ))}
          </motion.div>
        )}
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
            {texts[0]}
          </p>
        </div>
        <div className="w-full relative">
          <div className="text-[16px] text-gray-500 text-justify-last-right space-y-4 absolute right-1/12 mt-14 w-[500px]">
            <p>{texts[1]}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderTablet = () => (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-12">
      <motion.div
        className="mt-12 relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image className="w-80" src={hero} alt="hero" />
        {/* دکمه‌های اجتماعی */}
        {showButtons && (
          <motion.div
            className="flex justify-center space-x-4 mt-4 rtl:space-x-reverse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          >
            {socialButtons.map((button, index) => (
              <motion.a
                key={button.name}
                href={button.link}
                className={`w-10 h-10 rounded-full ${button.color} ${button.hoverColor} flex items-center justify-center shadow-md transition-transform hover:scale-110`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              >
                <Image
                  src={button.icon}
                  alt={button.name}
                  width={20}
                  height={20}
                  className="object-contain w-10 h-10"
                />
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center w-full text-center space-y-6"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="text-[14px] font-bold text-gray-600">
          آوامین: آوای امنیت
        </div>
        <div className="relative w-full">
          <p className="text-gray-600 text-[15px] px-4">{texts[0]}</p>
        </div>
        <div className="w-full relative">
          <p className="text-[13px] text-gray-500 px-4">{texts[1]}</p>
        </div>
      </motion.div>
    </div>
  );

  const renderMobile = () => (
    <div
      className="flex flex-col items-center justify-center text-center space-y-6 py-18"
      {...handlers}
    >
      <motion.div
        className="mt-12 relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image className="w-full h-full" src={hero} alt="hero" />
        {/* دکمه‌های اجتماعی */}
        {showButtons && (
          <motion.div
            className="flex justify-center space-x-3 mt-4 mb-6 rtl:space-x-reverse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          >
            {socialButtons.map((button, index) => (
              <motion.a
                key={button.name}
                href={button.link}
                className={`w-10 h-10 rounded-full ${button.color} ${button.hoverColor} flex items-center justify-center shadow-md transition-transform hover:scale-110`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              >
                <Image
                  src={button.icon}
                  alt={button.name}
                  width={18}
                  height={18}
                  className="object-contain w-10 h-10"
                />
              </motion.a>
            ))}
          </motion.div>
        )}
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
          className="w-full text-[11px] text-justify-last-right leading-6 px-4"
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

  const renderIpadMini = () => {
    if (!isIpadMini) return null;
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-8 py-12">
        <motion.div
          className="mt-14 relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="w-80" src={hero} alt="hero" />
          {/* دکمه‌های اجتماعی */}
          {showButtons && (
            <motion.div
              className="flex justify-center space-x-4 mt-4 rtl:space-x-reverse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >
              {socialButtons.map((button, index) => (
                <motion.a
                  key={button.name}
                  href={button.link}
                  className={`w-10 h-10 rounded-full ${button.color} ${button.hoverColor} flex items-center justify-center shadow-md transition-transform hover:scale-110`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                >
                  <Image
                    src={button.icon}
                    alt={button.name}
                    width={20}
                    height={20}
                    className="object-contain w-10 h-10"
                  />
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center w-full text-center space-y-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="text-[14px] font-bold text-gray-600">
            آوامین: آوای امنیت
          </div>
          <div className="relative w-full">
            <p className="text-gray-600 text-[15px] px-4">{texts[0]}</p>
          </div>
          <div className="w-full relative">
            <p className="text-[13px] text-gray-500 px-4">{texts[1]}</p>
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
