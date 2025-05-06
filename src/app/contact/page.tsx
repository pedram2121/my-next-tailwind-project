"use client";
import React, { useState } from "react";
import { useResponsive } from "../components/ResponsiveContext";
import Image from "next/image";

function Contact() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    setSuccessMessage("پیام شما با موفقیت ارسال شد!");
    setTimeout(() => setSuccessMessage(""), 3000); // پیام بعد از 3 ثانیه مخفی می‌شود
  };

  const renderDesktop = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center py-12 px-8">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-8 flex flex-row gap-12">
        {/* بخش اطلاعات تماس */}
        <div className="w-1/2 flex flex-col space-y-8">
          <h1 className="text-4xl font-bold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            ارتباط با تیم اجرایی
          </h1>
          <div className="space-y-6">
            {/* شماره تلفن */}
            <div className="flex items-center gap-4 group">
              <Image
                src="/images/phone.png"
                alt="Phone Icon"
                width={28}
                height={28}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-lg text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                شماره تماس: 09121277336
              </p>
            </div>
            {/* ایمیل */}
            <div className="flex items-center gap-4 group w-8 h-8">
              <Image
                src="/images/home.png"
                alt="Email Icon"
                width={50}
                height={50}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-lg text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                designer@siratan.com
              </p>
            </div>
            {/* آدرس */}
            <div className="flex items-center gap-4 group ">
              <Image
                src="/images/location.png"
                alt="Location Icon"
                width={28}
                height={28}
                className="object-contain group-hover:scale-110 transition-transform duration-300 w-10 h-10"
              />
              <p className="text-lg text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                نشانی: تهران، خیابان آزادی، پلاک ۱
              </p>
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <div className="w-1/2 flex flex-col space-y-6">
          <div className="relative flex flex-col space-y-5">
            <div className="relative">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                👤
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ✉️
              </span>
            </div>
            <textarea
              placeholder="پیام شما"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[IRANSans] py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            ارسال
          </button>
          {successMessage && (
            <div className="text-green-600 font-[IRANSans] text-center bg-green-100 p-2 rounded-lg animate-fade-in">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderTablet = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center py-10 px-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 flex flex-col gap-8">
        {/* بخش اطلاعات تماس */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            ارتباط با تیم اجرایی
          </h1>
          <div className="space-y-5">
            {/* شماره تلفن */}
            <div className="flex items-center gap-3 group">
              <Image
                src="/images/phone.png"
                alt="Phone Icon"
                width={24}
                height={24}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-base text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                شماره تماس: ۱۲۳۴۵۶۷۸
              </p>
            </div>
            {/* ایمیل */}
            <div className="flex items-center gap-3 group">
              <Image
                src="/images/email.png"
                alt="Email Icon"
                width={24}
                height={24}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-base text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                designer@siratan.com
              </p>
            </div>
            {/* آدرس */}
            <div className="flex items-center gap-3 group">
              <Image
                src="/images/location.png"
                alt="Location Icon"
                width={24}
                height={24}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-base text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                نشانی: تهران، خیابان آزادی، پلاک ۱
              </p>
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <div className="flex flex-col space-y-5">
          <div className="relative flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                👤
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ✉️
              </span>
            </div>
            <textarea
              placeholder="پیام شما"
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[IRANSans] py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            ارسال
          </button>
          {successMessage && (
            <div className="text-green-600 font-[IRANSans] text-center bg-green-100 p-2 rounded-lg animate-fade-in">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center py-52 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
        {/* بخش اطلاعات تماس */}
        <div className="flex flex-col space-y-14">
          <h1 className="text-2xl font-bold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            ارتباط با تیم اجرایی
          </h1>
          <div className="space-y-4">
            {/* شماره تلفن */}
            <div className="flex items-center gap-2 group">
              <Image
                src="/images/phone.png"
                alt="Phone Icon"
                width={20}
                height={20}
                className="object-contain group-hover:scale-110 transition-transform duration-300 w-7 h-7"
              />
              <p className="text-sm text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                شماره تماس: 09121277336
              </p>
            </div>
            {/* ایمیل */}
            <div className="flex items-center gap-2 group">
              <Image
                src="/images/home.png"
                alt="Email Icon"
                width={20}
                height={20}
                className="object-contain group-hover:scale-110 transition-transform duration-300 w-7 h-7"
              />
              <p className="text-sm text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                designer@siratan.com
              </p>
            </div>
            {/* آدرس */}
            <div className="flex items-center gap-2 group">
              <Image
                src="/images/location.png"
                alt="Location Icon"
                width={20}
                height={20}
                className="object-contain group-hover:scale-110 transition-transform duration-300 w-7 h-7"
              />
              <p className="text-sm text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                نشانی: تهران، خیابان آزادی، پلاک ۱
              </p>
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <div className="flex flex-col space-y-4">
          <div className="relative flex flex-col space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full border border-gray-300 rounded-lg p-2 pr-8 text-right font-[IRANSans] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                👤
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full border border-gray-300 rounded-lg p-2 pr-8 text-right font-[IRANSans] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                ✉️
              </span>
            </div>
            <textarea
              placeholder="پیام شما"
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2 text-right font-[IRANSans] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-[IRANSans] py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            ارسال
          </button>
          {successMessage && (
            <div className="text-green-600 font-[IRANSans] text-center bg-green-100 p-1 rounded-lg animate-fade-in text-sm">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </div>
  );
}

export default Contact;
