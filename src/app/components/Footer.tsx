"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "../container/Container";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDesktop = () => (
    <div className="relative h-auto w-full font-[IRANSans] bg-white z-50 pt-16 mt-24">
      <Container>
        <div className="grid grid-cols-4 gap-8 justify-center items-start text-center">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="font-bold">خبرنامه</h1>
            <h1 className="font-medium text-gray-400 w-48">
              هفته‌ای یک مقاله آموزشی برای شما ارسال خواهیم کرد
            </h1>
            <div className="flex flex-row-reverse">
              <input className="w-32 py-1 px-4 border" placeholder="ایمیل" />
              <button className="bg-purple-600 px-4 py-2">
                <Image
                  src="/images/Telegram.png"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <h1 className="font-bold">پشتیبانی</h1>
            <h1 className="font-medium text-gray-400">درباره ما</h1>
            <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
            <h1 className="font-medium text-gray-400">قیمت</h1>
            <h1 className="font-medium text-gray-400">دانلود</h1>
            <h1 className="font-medium text-gray-400">مشتریان</h1>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <h1 className="font-bold">راهنمای سایت</h1>
            <h1 className="font-medium text-gray-400">درباره ما</h1>
            <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
            <h1 className="font-medium text-gray-400">قیمت</h1>
            <h1 className="font-medium text-gray-400">دانلود</h1>
            <h1 className="font-medium text-gray-400">مشتریان</h1>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <Image
              src="/images/80.png"
              alt="logo2footer"
              width={192}
              height={48}
            />
            <h1 className="w-60 text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );

  const renderTablet = () => (
    <div className="relative h-auto w-full font-[IRANSans] bg-white z-50 py-8">
      <Container>
        <div className="grid grid-cols-2 gap-8 justify-center items-start text-center">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/images/80.png"
              alt="logo2footer"
              width={96}
              height={24}
            />
            <h1 className="font-medium text-gray-400 w-48">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h1>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold text-lg">راهنمای سایت</h1>
            <h1 className="font-medium text-gray-400">درباره ما</h1>
            <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
            <h1 className="font-medium text-gray-400">قیمت</h1>
            <h1 className="font-medium text-gray-400">دانلود</h1>
            <h1 className="font-medium text-gray-400">مشتریان</h1>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold text-lg">پشتیبانی</h1>
            <h1 className="font-medium text-gray-400">درباره ما</h1>
            <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
            <h1 className="font-medium text-gray-400">قیمت</h1>
            <h1 className="font-medium text-gray-400">دانلود</h1>
            <h1 className="font-medium text-gray-400">مشتریان</h1>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold text-lg">خبرنامه</h1>
            <h1 className="font-medium text-gray-400 w-48">
              هفته‌ای یک مقاله آموزشی برای شما ارسال خواهیم کرد
            </h1>
            <div className="flex flex-row-reverse items-center space-x-2">
              <input className="w-28 py-1 px-4 border" placeholder="ایمیل" />
              <button className="bg-purple-600 px-4 py-2">
                <Image
                  src="/images/Telegram.png"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );

  const renderMobile = () => (
    <div className="relative h-auto w-full font-[IRANSans] bg-white z-50 py-6">
      <Container>
        <div className="flex flex-col space-y-8 justify-center items-center text-center">
          <div className="flex flex-col items-end text-right w-full space-y-3">
            <Image
              src="/images/80.png"
              alt="logo2footer"
              width={80}
              height={20}
            />
            <h1 className="text-[16px] text-right text-gray-500 w-full">
              لورم ایپسوم متن ساختگی با تولید سادگی و انعطاف نامفهوم از صنعت چاپ
              و با استفاده از طراحان گرافیک است
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center text-right">
            <div className="space-y-2">
              <h1 className="font-bold text-base">راهنمای سایت</h1>
              <h1 className="font-medium text-gray-400">درباره ما</h1>
              <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
              <h1 className="font-medium text-gray-400">قیمت</h1>
              <h1 className="font-medium text-gray-400">دانلود</h1>
              <h1 className="font-medium text-gray-400">مشتریان</h1>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold text-base">پشتیبانی</h1>
              <h1 className="font-medium text-gray-400">درباره ما</h1>
              <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
              <h1 className="font-medium text-gray-400">قیمت</h1>
              <h1 className="font-medium text-gray-400">دانلود</h1>
              <h1 className="font-medium text-gray-400">مشتریان</h1>
            </div>
          </div>

          <div className="flex flex-col w-full items-end px-3 space-y-6">
            <h1 className="font-bold text-right">خبرنامه</h1>
            <h1 className="font-medium text-gray-500 w-full text-right">
              هفته‌ای یک مقاله آموزشی برای شما ارسال خواهیم کرد
            </h1>
            <div className="flex flex-row-reverse w-full items-center">
              <input className="w-full h-10 px-4 border" placeholder="ایمیل" />
              <button className="bg-purple-600 px-4 h-10">
                <Image
                  src="/images/Telegram.png"
                  alt="telegram"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );

  return (
    <div className="relative mt-[-100px] sm:mt-[-120px] lg:mt-[-150px]">
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </div>
  );
}

export default Footer;
