"use client";
import React from "react";
import Image from "next/image";
import { useResponsive } from "../components/ResponsiveContext";
import Link from "next/link";

function Eighth() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const renderDesktop = () => (
    <div className="mx-auto max-w-screen-xl py-16 z-0 h-auto font-[IRANSans] ">
      <div className="grid grid-cols-3 gap-8 items-center justify-center text-center">
        {/* بخش تصویر چرخان */}
        <div className="relative w-80 h-80 mx-auto">
          <div className="absolute w-full right-[480px] animate-spin-slow top-28">
            <Image
              src="/images/Say.png"
              alt="say"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* بخش متن */}
        <div className="relative text-right w-full font-bold text-[36px] space-y-4 font-[IRANSans]">
          <div className="absolute w-full right-80 -top-20">
            <h1>پشتیبانی آوامین در کنارتان</h1>
            <h1>با ما در تماس باشید</h1>
            <h1>همیشه کنار شما هستیم</h1>
          </div>
        </div>

        {/* بخش تصویر و دکمه */}
        <div className="relative w-full items-center z-50">
          <div className="absolute -top-32 -right-[310px] ">
            <Image
              src="/images/shap.png"
              alt="shap"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <Link
            href="/contact"
            className="bg-pink-500 px-8 py-3 rounded-3xl text-white text-base hover:bg-pink-600 transition font-[IRANSans] inline-block"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );

  const renderTablet = () => (
    <div className="container mx-auto max-w-screen-xl px-4 py-12 z-0">
      <div className="grid grid-cols-2 gap-8 items-center justify-center text-center">
        {/* بخش تصویر چرخان */}
        <div className="relative w-56 h-56 mx-auto">
          <div className="absolute inset-0 animate-spin-slow">
            <Image
              src="/images/Say.png"
              alt="say"
              width={224}
              height={224}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* بخش متن */}
        <div className="text-right font-bold text-3xl space-y-3">
          <h1>پشتیبانی آوامین در کنارتان</h1>
          <h1>با ما در تماس باشید</h1>
          <h1>همیشه کنار شما هستیم! 🙂</h1>
        </div>

        {/* بخش تصویر و دکمه */}
        <div className="relative w-full flex flex-col items-center col-span-2">
          <div className="mb-4">
            <Image
              src="/images/shap.png"
              alt="shap"
              width={224}
              height={224}
              className="object-cover w-56 h-56"
              priority
            />
          </div>
          <Link
            href="/contact"
            className="bg-pink-500 px-8 py-3 rounded-3xl text-white text-base hover:bg-pink-600 transition inline-block"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="container mx-auto px-4 py-32 z-0 text-justify-last-right font-[IRANSans]">
      <div className="flex flex-col gap-6 items-center justify-center text-center">
        {/* بخش متن */}
        <div className="text-right font-bold text-2xl space-y-3">
          <h1>پشتیبانی آوامین در کنارتان</h1>
          <h1>با ما در تماس باشید</h1>
          <h1>همیشه کنار شما هستیم</h1>
        </div>

        {/* بخش تصویر و دکمه */}
        <div className="relative w-full flex flex-col items-center mb-20">
          <Link
            href="/contact"
            className="bg-pink-500 px-6 py-2 rounded-3xl text-white text-sm hover:bg-pink-600 transition absolute right-44"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative mb-[-80px] sm:mb-[-100px] md:mb-[-120px] lg:mb-[-150px]">
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </div>
  );
}

export default Eighth;
