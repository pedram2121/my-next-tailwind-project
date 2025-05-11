"use client";
import React, { useState } from "react";
import { useResponsive } from "../components/ResponsiveContext";
import Image from "next/image";

function Contact() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("لطفاً تمام فیلدها (نام، ایمیل و پیام) را پر کنید.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    setErrorMessage("");
    setSuccessMessage("پیام شما با موفقیت ارسال شد!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setName("");
    setEmail("");
    setMessage("");
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const socialButtons = [
    {
      name: "تماس",
      icon: "/images/call1.png",
      color: "bg-blue-500",
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
    {
      name: "ایمیل",
      icon: "/images/email1.png",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      link: "mailto:designer@siratan.com",
      label: "ایمیل",
      alt: "آیکون ایمیل",
    },
  ];

  const renderDesktop = () => (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-100 to-white flex items-center justify-center py-20 px-8 relative">
      <div className="flex flex-col items-center w-3/5 h-auto py-40">
        <div className="flex items-center gap-3 pb-24">
          <h1 className="text-5xl font-extrabold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent py-10">
            تماس با ما
          </h1>
          <span className="text-3xl font-bold text-gray-500"></span>
        </div>

        <div className="w-full bg-white rounded-xl shadow-lg p-8 flex flex-row gap-12">
          <div className="w-full flex flex-col space-y-8">
            <div className="flex items-center gap-3 mb-20">
              <h1 className="text-3xl font-extrabold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                ارتباط با تیم اجرایی آوامین
              </h1>
              <span className="text-xl font-bold text-gray-500"></span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <Image
                  src="/images/call2.png"
                  alt="آیکون شماره تماس"
                  width={32}
                  height={32}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 w-11 h-11"
                />
                <p className="text-xl font-bold text-gray-700 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  شماره تماس: 09121277336
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <Image
                  src="/images/email2.png"
                  alt="آیکون ایمیل"
                  width={32}
                  height={32}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 w-11 h-11"
                />
                <p className="text-xl font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  avaminonline@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <Image
                  src="/images/location2.png"
                  alt="آیکون موقعیت مکانی"
                  width={32}
                  height={32}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 w-11 h-11"
                />
                <p className="text-xl font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  نشانی: تهران، خیابان آزادی، پلاک ۱
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-6">
            <div className="relative flex flex-col space-y-5">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 pr-16 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Image
                  src="/images/user1.png"
                  alt="آیکون کاربر"
                  width={40}
                  height={40}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:opacity-50"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 pr-16 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Image
                  src="/images/email3.png"
                  alt="آیکون ایمیل فرم"
                  width={40}
                  height={40}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:opacity-50"
                />
              </div>

              <textarea
                placeholder="پیام شما"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-[IRANSans] py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              ارسال
            </button>
            {successMessage && (
              <div className="text-green-600 font-[IRANSans] text-center bg-green-100 p-2 rounded-lg animate-fade-in">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-600 font-[IRANSans] text-center bg-red-100 p-2 rounded-lg animate-fade-in">
                {errorMessage}
              </div>
            )}
          </div>
        </div>

        <div className="w-full mt-8 bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-extrabold text-gray-800 font-[IRANSans] mb-4">
              نحوه ارتباط با ما
            </h2>
            <div className="space-y-2 text-gray-600 font-[IRANSans] text-[15px]">
              <p className="text-base font-semibold">شماره تماس: 09121277336</p>
              <a
                href="https://wa.me/+989121277336"
                className="inline-block text-blue-500 hover:text-blue-700 transition-colors text-base mr-4"
              >
                واتساپ: +989121277336
              </a>
              <a
                href="https://t.me/Abehbahani"
                className="inline-block text-sky-500 hover:text-sky-700 transition-colors text-base mr-4"
              >
                تلگرام: @Abehbahani
              </a>
              <a
                href="mailto:designer@siratan.com"
                className="inline-block text-blue-600 hover:text-blue-800 transition-colors text-base"
              >
                ایمیل: avaminonline@gmail.com
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4 font-[IRANSans]">
              با تیم آوامین در تماس باشید تا بهترین خدمات را تجربه کنید
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="text-lg font-semibold text-gray-600 font-[IRANSans] text-[15px] leading-[37px] mt-3
             text-justify-last-right ">
              تیم پشتیبانی آوامین آماده پاسخگویی به شماست! در هر ساعت از
              شبانه‌روز می‌توانید از طریق شماره تماس 09121277336 (پشتیبانی در
              واتساپ و تلگرام) یا ایمیل avaminonline@gmail.com با ما در ارتباط
              باشید. ما هفت روز هفته، به‌صورت ۲۴ ساعته در کنار شما هستیم تا
              تجربه‌ای بی‌نظیر از خدمات داشته باشید
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-10 flex flex-col items-end gap-6 z-50">
        {showButtons && (
          <div className="flex flex-col gap-3">
            {socialButtons.map((button, index) => (
              <div
                key={button.name}
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
                    "w-12 h-12 rounded-full " +
                    button.color +
                    " " +
                    button.hoverColor +
                    " flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-shake"
                  }
                >
                  <Image
                    src={button.icon}
                    alt={button.alt}
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                  />
                </a>
                <span className="text-gray-800 text-sm font-[IRANSans] font-semibold">
                  {button.label}
                </span>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={toggleButtons}
          className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-lg animate-shake hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={showButtons ? "/images/close.png" : "/images/call.png"}
            alt={showButtons ? "آیکون بستن" : "آیکون تماس"}
            width={32}
            height={32}
            className="object-contain w-full h-full"
          />
        </button>
      </div>
    </div>
  );

  const renderTablet = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center py-12 px-6 relative">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-4xl font-extrabold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            تماس با ما
          </h1>
          <span className="text-2xl font-bold text-gray-500">contactus</span>
        </div>
        <div className="w-full bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-extrabold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                ارتباط با تیم اجرایی آوامین
              </h2>
              <span className="text-lg font-bold text-gray-500">contactus</span>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3 group">
                <Image
                  src="/images/call2.png"
                  alt="آیکون شماره تماس"
                  width={28}
                  height={28}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-lg font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  شماره تماس: 09121277336
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Image
                  src="/images/email2.png"
                  alt="آیکون ایمیل"
                  width={28}
                  height={28}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-lg font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  designer@siratan.com
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Image
                  src="/images/location2.png"
                  alt="آیکون موقعیت مکانی"
                  width={28}
                  height={28}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-lg font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  نشانی: تهران، خیابان آزادی، پلاک ۱
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="relative flex flex-col space-y-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 pr-12 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Image
                  src="/images/user1.png"
                  alt="آیکون کاربر"
                  width={32}
                  height={32}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:opacity-50"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 pr-12 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Image
                  src="/images/email3.png"
                  alt="آیکون ایمیل فرم"
                  width={32}
                  height={32}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:opacity-50"
                />
              </div>
              <textarea
                placeholder="پیام شما"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-[IRANSans] py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              ارسال
            </button>
            {successMessage && (
              <div className="text-green-600 font-[IRANSans] text-center bg-green-100 p-2 rounded-lg animate-fade-in">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-600 font-[IRANSans] text-center bg-red-100 p-2 rounded-lg animate-fade-in">
                {errorMessage}
              </div>
            )}
          </div>
        </div>

        <div className="w-full mt-6 bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-lg font-extrabold text-gray-800 font-[IRANSans] mb-3">
              نحوه ارتباط با ما
            </h2>
            <div className="space-y-2 text-gray-700 font-[IRANSans]">
              <p className="text-base font-semibold">شماره تماس: 09121277336</p>
              <a
                href="https://wa.me/+989121277336"
                className="inline-block text-blue-500 hover:text-blue-700 transition-colors text-base mr-4"
              >
                واتساپ: +989121277336
              </a>
              <a
                href="https://t.me/Abehbahani"
                className="inline-block text-sky-500 hover:text-sky-700 transition-colors text-base mr-4"
              >
                تلگرام: @Abehbahani
              </a>
              <a
                href="mailto:designer@siratan.com"
                className="inline-block text-blue-600 hover:text-blue-800 transition-colors text-base"
              >
                ایمیل: designer@siratan.com
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-3 font-[IRANSans]">
              با تیم آوامین در تماس باشید تا بهترین خدمات را تجربه کنید!
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <p className="text-lg font-semibold text-gray-800 font-[IRANSans] text-right leading-relaxed">
              تیم پشتیبانی آوامین آماده پاسخگویی به شماست! در هر ساعت از
              شبانه‌روز می‌توانید از طریق شماره تماس 09121277336 (پشتیبانی در
              واتساپ و تلگرام) یا ایمیل designer@siratan.com با ما در ارتباط
              باشید. ما هفت روز هفته، به‌صورت ۲۴ ساعته در کنار شما هستیم تا
              تجربه‌ای بی‌نظیر از خدمات داشته باشید
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
        {showButtons && (
          <div className="flex flex-col gap-3">
            {socialButtons.map((button, index) => (
              <div
                key={button.name}
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
                    "w-12 h-12 rounded-full " +
                    button.color +
                    " " +
                    button.hoverColor +
                    " flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-shake"
                  }
                >
                  <Image
                    src={button.icon}
                    alt={button.alt}
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                  />
                </a>
                <span className="text-gray-800 text-sm font-[IRANSans] font-semibold">
                  {button.label}
                </span>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={toggleButtons}
          className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-lg animate-shake hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={showButtons ? "/images/close.png" : "/images/call.png"}
            alt={showButtons ? "آیکون بستن" : "آیکون تماس"}
            width={32}
            height={32}
            className="object-contain w-full h-full"
          />
        </button>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center px-4 relative py-40">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-3xl font-extrabold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            تماس با ما
          </h1>
          <span className="text-xl font-bold text-gray-500">contactus</span>
        </div>
        <div className="w-full bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold font-[IRANSans] text-right bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                ارتباط با تیم اجرایی آوامین
              </h2>
              <span className="text-lg font-bold text-gray-500"></span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 group">
                <Image
                  src="/images/call2.png"
                  alt="آیکون شماره تماس"
                  width={24}
                  height={24}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-base font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  شماره تماس: 09121277336
                </p>
              </div>
              <div className="flex items-center gap-2 group">
                <Image
                  src="/images/email2.png"
                  alt="آیکون ایمیل"
                  width={24}
                  height={24}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-base font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  avaminonline@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2 group">
                <Image
                  src="/images/location2.png"
                  alt="آیکون موقعیت مکانی"
                  width={24}
                  height={24}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-base font-bold text-gray-800 font-[IRANSans] text-right group-hover:text-purple-600 transition-colors duration-300">
                  نشانی: تهران، خیابان آزادی، پلاک ۱
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative flex flex-col space-y-3">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-right font-[IRANSans] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Image
                  src="/images/user1.png"
                  alt="آیکون کاربر"
                  width={24}
                  height={24}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:opacity-50"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 pr-10 text-right font-[IRANSans] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <Image
                  src="/images/email3.png"
                  alt="آیکون ایمیل فرم"
                  width={24}
                  height={24}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:opacity-50"
                />
              </div>
              <textarea
                placeholder="پیام شما"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-right font-[IRANSans] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-[IRANSans] py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              ارسال
            </button>
            {successMessage && (
              <div className="text-green-600 font-[IRANSans] text-center bg-green-100 p-2 rounded-lg animate-fade-in text-sm">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-red-600 font-[IRANSans] text-center bg-red-100 p-2 rounded-lg animate-fade-in text-sm">
                {errorMessage}
              </div>
            )}
          </div>
        </div>

        <div className="w-full mt-6 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-md font-extrabold text-gray-800 font-[IRANSans] mb-2">
              نحوه ارتباط با ما
            </h2>
            <div className="space-y-2 text-gray-700 font-[IRANSans]">
              <p className="text-sm font-semibold">شماره تماس: 09121277336</p>
              <a
                href="https://wa.me/+989121277336"
                className="inline-block text-blue-500 hover:text-blue-700 transition-colors text-sm mr-4"
              >
                واتساپ: +989121277336
              </a>
              <a
                href="https://t.me/Abehbahani"
                className="inline-block text-sky-500 hover:text-sky-700 transition-colors text-sm mr-4"
              >
                تلگرام: @Abehbahani
              </a>
              <a
                href="mailto:designer@siratan.com"
                className="inline-block text-blue-600 hover:text-blue-800 transition-colors text-sm"
              >
                ایمیل: avaminonline@gmail.com
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-2 font-[IRANSans]">
              با تیم آوامین در تماس باشید تا بهترین خدمات را تجربه کنید!
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <p className="text-base font-semibold text-gray-800 font-[IRANSans] text-[12px] leading-relaxed text-justify-last-right">
              تیم پشتیبانی آوامین آماده پاسخگویی به شماست! در هر ساعت از
              شبانه‌روز می‌توانید از طریق شماره تماس 09121277336 (پشتیبانی در
              واتساپ و تلگرام) یا ایمیل avaminonline@gmail.com با ما در ارتباط
              باشید. ما هفت روز هفته، به‌صورت ۲۴ ساعته در کنار شما هستیم تا
              تجربه‌ای بی‌نظیر از خدمات داشته باشید
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-100">
        {showButtons && (
          <div className="flex flex-col gap-2">
            {socialButtons.map((button, index) => (
              <div
                key={button.name}
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
                    "w-10 h-10 rounded-full " +
                    button.color +
                    " " +
                    button.hoverColor +
                    " flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-shake"
                  }
                >
                  <Image
                    src={button.icon}
                    alt={button.alt}
                    width={28}
                    height={28}
                    className="object-contain w-full h-full"
                  />
                </a>
                <span className="text-gray-800 text-xs font-[IRANSans] font-semibold">
                  {button.label}
                </span>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={toggleButtons}
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shadow-lg animate-shake hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={showButtons ? "/images/close.png" : "/images/call.png"}
            alt={showButtons ? "آیکون بستن" : "آیکون تماس"}
            width={28}
            height={28}
            className="object-contain w-full h-full"
          />
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
            20%, 40%, 60%, 80% { transform: translateX(2px); }
          }
          .animate-shake {
            animation: shake 2s infinite;
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}
      </style>
      {isDesktop && renderDesktop()}
      {isTablet && renderTablet()}
      {isMobile && renderMobile()}
    </div>
  );
}

export default Contact;
