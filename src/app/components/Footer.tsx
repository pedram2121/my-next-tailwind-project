"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import say from "../../../public/images/Say.png";
import shap from "../../../public/images/shap.png";
import Container from "../container/Container";
import logo2footer from "../../../public/images/logo2footer.png";
import telegram from "../../../public/images/Telegram.png";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640); // Mobile: < 640px
      setIsTablet(width >= 640 && width < 1024); // Tablet: 640px - 1023px
      setIsDesktop(width >= 1024); // Desktop: >= 1024px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const renderDesktop = () => (
    <div className="relative h-auto w-full font-[IRANSans]">

      <div className="grid grid-cols-3 z-0 mx-auto justify-between items-center place-items-center text-center mt-32">
        <div className="relative w-80 h-80">
          <div className="absolute w-full right-60 animate-spin-slow">
            <Image src={say} alt="say" />
          </div>
        </div>


        <div className="text-right font-bold text-5xl relative w-full">
          <div className="absolute right-80 w-full -top-48 space-y-4">
            <h1>پاسخگوی سوالات شما</h1>
            <h1>هستیم؛ با ما در ارتباط</h1>
            <h1> :-) باشید </h1>
          </div>
        </div>


        <div className="relative w-full">
          <div className="absolute -bottom-12">
            <Image src={shap} alt="shap" />
          </div>
          <div className="absolute -top-40 left-28">
            <button className="bg-pink-500 px-10 py-3 rounded-3xl text-white">
              تماس با ما
            </button>
          </div>
        </div>
      </div>


      <Container>
        <div className="bg-white absolute top-48 left-0 z-50 w-full h-auto border-t-1 border-t-pink-500">
          <div className="grid grid-cols-4 mx-auto justify-center items-center place-items-center text-center relative mt-32">
            <div className="h-96 flex flex-col items-center place-items-center text-center space-y-5 absolute top-0 left-96">
              <h1 className="font-bold">خبرنامه</h1>
              <h1 className="font-medium text-gray-400 w-48">
                هفته ای یک مقاله آموزشی برای شما ارسال خواهیم کرد
              </h1>
              <div className="flex flex-row-reverse">
                <input className="w-32 py-1 px-10 border" />
                <button className="bg-purple-600 px-4 py-2">
                  <Image src={telegram} alt="" />
                </button>
              </div>
            </div>


            <div className="h-96 flex flex-col items-center place-items-center text-center space-y-5 absolute top-0 mr-60">
              <h1 className="font-bold">پشتیبانی</h1>
              <h1 className="font-medium text-gray-400">درباره ما</h1>
              <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
              <h1 className="font-medium text-gray-400">قیمت</h1>
              <h1 className="font-medium text-gray-400">دانلود</h1>
              <h1 className="font-medium text-gray-400">مشتریان</h1>
            </div>


            <div className="h-96 flex flex-col items-center place-items-center text-center space-y-5 absolute top-0 ml-80">
              <h1 className="font-bold">راهنمای سایت</h1>
              <h1 className="font-medium text-gray-400">درباره ما</h1>
              <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
              <h1 className="font-medium text-gray-400">قیمت</h1>
              <h1 className="font-medium text-gray-400">دانلود</h1>
              <h1 className="font-medium text-gray-400">مشتریان</h1>
            </div>

            <div className="h-96 flex flex-col items-center place-items-center text-center space-y-5 absolute right-80 top-0">
              <Image src={logo2footer} alt="logo2footer" />
              <h1 className="w-60 text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );


  const renderTablet = () => (
    <div className="relative h-auto w-full font-[IRANSans] py-8">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="w-64 h-64 mx-auto">
          <div className="animate-spin-slow">
            <Image src={say} alt="say" />
          </div>
        </div>

        <div className="font-bold text-4xl space-y-3">
          <h1>پاسخگوی سوالات شما</h1>
          <h1>هستیم؛ با ما در ارتباط</h1>
          <h1> :-) باشید </h1>
        </div>

        <div className="flex items-center space-x-2">
          <button className="bg-pink-500 px-8 py-3 rounded-3xl text-white">
            تماس با ما
          </button>
          <Image src={shap} alt="shap" className="w-8 h-8" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-pink-500 my-6" />

      {/* Bottom Section */}
      <Container>
        <div className="bg-white w-full h-auto py-8">
          <div className="grid grid-cols-2 gap-8 justify-center items-center text-center">
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src={logo2footer} alt="logo2footer" className="w-24" />
              <h1 className="font-medium text-gray-400 w-48">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h1>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="font-bold text-lg">راهنمای سایت</h1>
              <h1 className="font-medium text-gray-400">درباره ما</h1>
              <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
              <h1 className="font-medium text-gray-400">قیمت</h1>
              <h1 className="font-medium text-gray-400">دانلود</h1>
              <h1 className="font-medium text-gray-400">مشتریان</h1>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="font-bold text-lg">پشتیبانی</h1>
              <h1 className="font-medium text-gray-400">درباره ما</h1>
              <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
              <h1 className="font-medium text-gray-400">قیمت</h1>
              <h1 className="font-medium text-gray-400">دانلود</h1>
              <h1 className="font-medium text-gray-400">مشتریان</h1>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="font-bold text-lg">خبرنامه</h1>
              <h1 className="font-medium text-gray-400 w-48">
                هفته ای یک مقاله آموزشی برای شما ارسال خواهیم کرد
              </h1>
              <div className="flex flex-row-reverse items-center space-x-2">
                <input className="w-28 py-1 px-4 border" />
                <button className="bg-purple-600 px-4 py-2">
                  <Image src={telegram} alt="" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );

  const renderMobile = () => (
    <div className="relative h-auto w-full font-[IRANSans] py-6">

      {/* Top Section */}
      <div className="flex flex-col w-full items-center text-center space-y-8">

        <div className="font-bold text-2xl w-full space-y-2">
          <h1>پاسخگوی سوالات شما</h1>
          <h1>هستیم؛ با ما در ارتباط</h1>
          <h1> :-) باشید </h1>
        </div>


        <div className="flex items-center space-x-2 mb-6">
          <button className="bg-pink-500 px-8 py-3 rounded-3xl text-white">
            تماس با ما
          </button>        
        </div>
      </div>


      {/* Divider */}
      <div className="w-full h-px bg-pink-400 my-4" />

      {/* Bottom Section */}
      <Container>
        <div className="bg-white w-full h-auto py-6">
          <div className="flex flex-col w-full space-y-8 justify-center items-center text-center">
            <div className="flex flex-col items-end text-right w-full space-y-3">
              <Image src={logo2footer} alt="logo2footer" className="w-20" />
              <h1 className="text-[16px] text-right text-gray-500 w-full">
                لورم ایپسوم متن ساختگی با تولید سادگی و انعطاف نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h1>
            </div>


            <div className="grid grid-cols-2 gap-16 items-center text-right space-y-3 mt-10">
                <div className="space-y-2">
                  <h1 className="font-bold text-base">راهنمای سایت</h1>
                   <h1 className="font-medium text-gray-400">درباره ما</h1>
                   <h1 className="font-medium text-gray-400">ویژگی‌ها</h1>
                   <h1 className="font-medium text-gray-400">قیمت</h1>
                   <h1 className="font-medium text-gray-400">دانلود</h1>
                   <h1 className="font-medium text-gray-400">مشتریان</h1>
                </div>

                <div className="space-y-2">
                  <h1 className="font-bold text-base mb-2">پشتیبانی</h1>
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
                هفته ای یک مقاله آموزشی برای شما ارسال خواهیم کرد
              </h1>

              <div className="flex flex-row-reverse w-full items-center mb-12">
                <input className="w-full h-10 px-4 border" />
                <button className="bg-purple-600 px-4 h-10">
                  <Image src={telegram} alt="" className="w-4 h-3" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </div>
  );

  return (
    <div className="bg-white min-h-[600px] py-12 sm:py-16 relative">
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </div>
  );
}

export default Footer;
