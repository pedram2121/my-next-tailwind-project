"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useResponsive } from "../components/ResponsiveContext";

function FloatingContactButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const socialButtons = [
    {
      name: "تماس",
      icon: "/images/call1.png",
      color: "bg-blue-200",
      hoverColor: "hover:bg-blue-600",
      link: "tel:+989121277336",
      label: "تماس",
      alt: "آیکون تماس",
    },
    {
      name: "واتساپ",
      icon: "/images/whatsapp1.png",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      link: "https://wa.me/+989121277336",
      label: "واتساپ",
      alt: "آیکون واتساپ",
    },
    {
      name: "تلگرام",
      icon: "/images/Telegram1.png",
      color: "bg-sky-500",
      hoverColor: "hover:bg-sky-700",
      link: "https://t.me/Abehbahani",
      label: "تلگرام",
      alt: "آیکون تلگرام",
    },
  ];

  
  const getLeftPosition = () => {
    if (isMobile) return "left-2";
    if (isTablet) return "left-4";
    return "left-10"; 
  };

  const getButtonSize = () => {
    if (isMobile) return "w-10 h-10";
    return "w-10 h-10";
  };

  useEffect(() => {
    console.log(
      "isMobile:",
      isMobile,
      "isTablet:",
      isTablet,
      "isDesktop:",
      isDesktop
    );
  }, [isMobile, isTablet, isDesktop]);

  return (

    <div className={`fixed bottom-10 ${getLeftPosition()} flex flex-col items-start gap-3 z-100`}>

      {showButtons && (
        <div className="flex flex-col gap-3">
          {socialButtons.map((button, index) => (
            <div key={button.name}
                 className={
                 "flex flex-row-reverse items-center gap-2 transform transition-all duration-300 ease-in-out animate-shake " +
                 (showButtons
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10")
              }
              style={{ transitionDelay: `${index * 100}ms` }}
            >
            
              <a
                href={button.link}
                className={
                  `${getButtonSize()} rounded-full ` +
                  button.color +
                  " " +
                  button.hoverColor +
                  " flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-shake"
                }
              >
                <Image
                  src={button.icon}
                  alt={button.alt}
                  width={isMobile ? 28 : 32}
                  height={isMobile ? 28 : 32}
                  className="object-contain w-full h-full"
                />
              </a>
              <span className="text-gray-800 text-xs font-[IRANSans] font-semibold bg-gray-100 rounded-lg px-2 py-1">
                {button.label}
              </span>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={toggleButtons}
        className={`${getButtonSize()} rounded-full border-2 border-white bg-green-500 flex items-center justify-center shadow-lg animate-shake hover:scale-110 transition-transform duration-300`}
      >
        <Image
          src={showButtons ? "/images/close.png" : "/images/call.png"}
          alt={showButtons ? "آیکون بستن" : "آیکون تماس"}
          width={isMobile ? 28 : 32}
          height={isMobile ? 28 : 32}
          className="object-contain w-full h-full"
        />
      </button>
    </div>
  );
}

export default FloatingContactButtons;
