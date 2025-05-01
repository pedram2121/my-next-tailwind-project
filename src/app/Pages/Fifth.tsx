"use client";
import React from "react";
import Container from "../container/Container";
import { useResponsive } from "../components/ResponsiveContext";
import Image from "next/image";
import b from "../../../public/images/best.jpg";

function Fifth() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const cards = [
    {
      title: "طرح ۱",
      price: "۱۰۰۰ تومان / ماهانه",
      description: "ارسال رایگان",
      date: "انتشار: ۱۴۰۳/۰۱/۰۱",
    },
    {
      title: "طرح ۲",
      price: "۵۰۰۰ تومان / سالانه",
      description: "پشتیبانی ۲۴ ساعته",
      date: "انتشار: ۱۴۰۳/۰۱/۰۱",
    },
    {
      title: "طرح ۳",
      price: "۱۰۰۰۰ تومان / مادام‌العمر",
      description: "دسترسی کامل",
      date: "انتشار: ۱۴۰۳/۰۱/۰۱",
    },
  ];

  const renderDesktop = () => (
    <div className="bg-white py-12">
      {/* بخش تصویر و کاور گرادیانتی */}
      <div className="relative w-full h-[500px]">
        <Image
          src={b}
          alt="پس‌زمینه"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* کاور گرادیانتی */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-700 to-purple-900 opacity-95"></div>
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-white font-[IRANSans] font-bold text-4xl text-center"
        >
          بهترین پلن های قیمتی اپ ساز
        </h1>
      </div>

      {/* بخش کارت‌ها */}
      <div className="-mt-32 min-h-[400px] px-4">
        <div className="flex flex-row gap-12 justify-center max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="relative w-full max-w-[300px] group">
              {/* تصویر پس‌زمینه */}
              <div className="absolute w-full z-0 bottom-[-30px] left-[80%] top-40 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <img
                  src="/images/dot.png"
                  alt="app shape"
                  className="object-contain"
                  style={{
                    width: "100px",
                    height: "100px",
                    filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
                  }}
                />
              </div>

              {/* کارت */}
              <div className="relative bg-white rounded-lg shadow-md p-6 h-64 text-center transition-transform duration-300 transform group-hover:-translate-y-4 group-hover:shadow-lg z-10">
                <h3 className="font-bold font-[IRANSans] mb-2 text-gray-500 text-2xl">
                  {card.title}
                </h3>
                <p className="font-[IRANSans] mb-2 text-blue-600 text-lg">
                  {card.price}
                </p>
                <p className="font-[IRANSans] mb-2 text-gray-600 text-lg">
                  {card.description}
                </p>
                <p className="font-[IRANSans] mb-4 text-gray-400 text-lg">
                  {card.date}
                </p>

                {/* دکمه */}
                <button className="relative bg-purple-500 text-white font-[IRANSans] py-3 px-8 rounded-lg overflow-hidden group/button">
                  <span className="relative z-10">شروع کنید</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-red-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover/button:translate-x-0"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTablet = () => (
    <div className="bg-white py-8">
      {/* بخش تصویر و کاور گرادیانتی */}
      <div className="relative w-full h-[400px]">
        <Image
          src={b}
          alt="پس‌زمینه"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* کاور گرادیانتی */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-700 to-purple-900 opacity-95"></div>
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-white font-[IRANSans] font-bold text-3xl text-center"
        >
          بهترین پلن های قیمتی اپ ساز
        </h1>
      </div>

      {/* بخش کارت‌ها */}
      <div className="-mt-24 min-h-[400px] px-4">
        <div className="grid grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="relative w-full max-w-[280px] group">
              {/* تصویر پس‌زمینه */}
              <div className="absolute w-full z-0 bottom-[-25px] left-[65%] top-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/images/dot.png"
                  alt="app shape"
                  className="object-contain"
                  style={{
                    width: "90px",
                    height: "90px",
                    filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
                  }}
                />
              </div>

              {/* کارت */}
              <div className="relative bg-white rounded-lg shadow-md p-5 h-60 text-center transition-transform duration-300 transform group-hover:-translate-y-4 group-hover:shadow-lg z-10">
                <h3 className="font-bold font-[IRANSans] mb-2 text-gray-500 text-xl">
                  {card.title}
                </h3>
                <p className="font-[IRANSans] mb-2 text-blue-600 text-base">
                  {card.price}
                </p>
                <p className="font-[IRANSans] mb-2 text-gray-600 text-base">
                  {card.description}
                </p>
                <p className="font-[IRANSans] mb-4 text-gray-400 text-base">
                  {card.date}
                </p>

                {/* دکمه */}
                <button className="relative bg-purple-500 text-white font-[IRANSans] py-2 px-6 rounded-lg overflow-hidden group/button">
                  <span className="relative z-10">شروع کنید</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-red-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover/button:translate-x-0"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="bg-white py-6 overflow-x-hidden">
      {/* بخش تصویر و کاور گرادیانتی */}
      <div className="relative w-full h-[300px]">
        <Image
          src={b}
          alt="پس‌زمینه"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* کاور گرادیانتی */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-700 to-purple-900 opacity-95"></div>
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-white font-[IRANSans] font-bold text-2xl text-center px-4"
        >
          بهترین پلن های قیمتی اپ ساز
        </h1>
      </div>

      {/* بخش کارت‌ها */}
      <div className="-mt-16 min-h-[400px] px-2">
        <div className="grid grid-cols-1 gap-6 justify-items-center w-full max-w-[90%] mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="relative w-full max-w-[260px] group">
              {/* تصویر پس‌زمینه */}
              <div className="absolute w-full z-0 bottom-[-20px] right-[-10px] top-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/images/dot.png"
                  alt="app shape"
                  className="object-contain"
                  style={{
                    width: "60px",
                    height: "60px",
                    filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
                  }}
                />
              </div>

              {/* کارت */}
              <div className="relative bg-white rounded-lg shadow-md p-4 h-56 text-center transition-transform duration-300 transform group-hover:-translate-y-4 group-hover:shadow-lg z-10">
                <h3 className="font-bold font-[IRANSans] mb-2 text-gray-500 text-lg">
                  {card.title}
                </h3>
                <p className="font-[IRANSans] mb-2 text-blue-600 text-sm">
                  {card.price}
                </p>
                <p className="font-[IRANSans] mb-2 text-gray-600 text-sm">
                  {card.description}
                </p>
                <p className="font-[IRANSans] mb-4 text-gray-400 text-sm">
                  {card.date}
                </p>

                {/* دکمه */}
                <button className="relative bg-purple-500 text-white font-[IRANSans] py-2 px-6 rounded-lg overflow-hidden group/button">
                  <span className="relative z-10">شروع کنید</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-red-500 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover/button:translate-x-0"></span>
                </button>
              </div>
            </div>
          ))}
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
}

export default Fifth;
