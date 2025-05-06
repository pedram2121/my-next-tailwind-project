"use client";
import React from "react";
import { useResponsive } from "../components/ResponsiveContext";
import Image from "next/image";
import b from "../../../public/images/best.jpg";

function Fifth() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const cards = [
    {
      title: " خرید ",
      price: "قیمت لحظه ای",
      description: `آوامین؛ پلتفرم هوشمند خرید و فروش طلا با تجربه‌ای امن و ساده. مدیریت آسان محصولات، تراکنش‌های مطمئن و پشتیبانی ۲۴ ساعته در طول هفته برای موفقیت شما در بازار طلا`,
    },
  ];

  const renderDesktop = () => (
    <div className="bg-white py-12">
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-700 to-purple-800 opacity-95"></div>

        <h1
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-white font-[IRANSans] font-bold text-4xl text-center"
        >
          بهترین قیمت های آوامین
        </h1>
      </div>

      {/* بخش کارت‌ها */}
      <div className="-mt-32 min-h-[600px] px-4">
        <div className="flex flex-row gap-7 justify-center w-auto h-auto mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full max-w-[350px] h-[600px] group"
            >
              {/* تصویر پس‌زمینه */}
              <div
                className="absolute w-full z-0 left-72 top-[300px] opacity-0 group-hover:opacity-80
               transition-opacity duration-300"
              >
                <Image
                  src="/images/dot.png"
                  alt="app shape"
                  width={80}
                  height={90}
                  className="object-contain"
                  style={{
                    filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
                  }}
                />
              </div>

              {/* کارت */}
              <div
                className="relative bg-white rounded-lg shadow-md p-6 h-[410px]
              text-center transition-transform duration-300 
              transform group-hover:shadow-lg z-10"
              >
                <h3 className="font-bold font-[IRANSans] mb-5 text-gray-500 text-2xl">
                  {card.title}
                </h3>

                <p className="font-[IRANSans] mb-9 text-blue-600 text-lg">
                  {card.price}
                </p>

                <p className="font-[IRANSans] mb-9 text-gray-600 text-[16px] text-justify-last-right">
                  {card.description}
                </p>

                <button
                  className="relative bg-purple-500 text-white font-[IRANSans]
                      py-4 px-12 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                >
                  <span className="relative z-10"> تماس با ما </span>
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-red-500 transform 
                      -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                  ></span>
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
          بهترین قیمت های آوامین
        </h1>
      </div>

      {/* بخش کارت‌ها */}
      <div className="-mt-24 min-h-[400px] px-4">
        <div className="grid grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="relative w-full max-w-[280px] group">
              {/* تصویر پس‌زمینه */}
              <div className="absolute w-full z-0 bottom-[-25px] left-[65%] top-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/dot.png"
                  alt="app shape"
                  width={90}
                  height={90}
                  className="object-contain"
                  style={{
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
    <div className="bg-white py-10 overflow-x-hidden h-auto">
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
          className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-white font-[IRANSans] font-bold text-2xl text-center px-5"
        >
          بهترین قیمت های آوامین
        </h1>
      </div>

      {/* بخش کارت‌ها */}
      <div className="-mt-28 h-auto px-2">
        <div className="grid grid-cols-1 gap-6 justify-items-center w-full mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="relative w-full max-w-[300px] group">
              {/* تصویر پس‌زمینه */}
              <div className="absolute w-full z-0 bottom-[-20px] right-[-10px] top-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/dot.png"
                  alt="app shape"
                  width={60}
                  height={60}
                  className="object-contain"
                  style={{
                    filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
                  }}
                />
              </div>

              {/* کارت */}
              <div
                className="relative bg-white rounded-lg shadow-md p-4 h-96
               text-center transition-transform duration-300
               transform group-hover:-translate-y-4 group-hover:shadow-lg z-10 space-y-8"
              >
                <h3 className="font-bold font-[IRANSans] mb-2 text-gray-500 text-2xl mt-5">
                  {card.title}
                </h3>

                <p className="font-[IRANSans] mb-2 text-blue-600 text-2xl mt-9">
                  {card.price}
                </p>

                <p className="font-[IRANSans] mb-2 text-gray-600 text-[14px] mt-9 text-justify-last-right">
                  {card.description}
                </p>

                {/* دکمه */}
                <button className="relative bg-purple-500 text-white font-[IRANSans] py-4 px-10 rounded-lg overflow-hidden group/button mt-6 cursor-pointer">
                  <span className="relative z-10"> تماس با ما </span>
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-red-500 transform -translate-x-full
                   transition-transform duration-300 ease-in-out group-hover/button:translate-x-0"
                  ></span>
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
