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

  const socialLinks = [
    {
      name: "واتساپ",
      icon: "/images/whatsapp1.png",
      link: "https://wa.me/+989121277336",
      alt: "آیکون واتساپ",
    },
    {
      name: "تلگرام",
      icon: "/images/Telegram1.png",
      link: "https://t.me/Abehbahani",
      alt: "آیکون تلگرام",
    },
    {
      name: "ایمیل",
      icon: "/images/email1.png",
      link: "mailto:designer@siratan.com",
      alt: "آیکون ایمیل",
    },
  ];

  const renderDesktop = () => (
    <div
      className="relative h-auto w-full font-[IRANSans] bg-[#f9f9f9] z-50 pt-24 pb-8 mt-16"  >
      <Container>
        <div className="grid grid-cols-4 gap-8 justify-center items-start text-center">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="text-xl font-extrabold text-gray-800">
              دانلود اپلیکیشن
            </h1>
            <p className="text-gray-500 text-sm w-48">
              اکنون آوامین را دانلود کنید و به‌راحتی معامله کنید
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-xl font-extrabold text-gray-800">
              پشتیبانی و خدمات
            </h1>
            <a
              href="/about"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              درباره آوامین
            </a>
            <a
              href="/features"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              ویژگی‌های پلتفرم
            </a>
            <a
              href="/pricing"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              قیمت‌های به‌روز
            </a>
            <a
              href="/app"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              دانلود اپلیکیشن
            </a>
            <a
              href="/testimonials"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              نظرات مشتریان
            </a>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-xl font-extrabold text-gray-800">
              راهنمای خرید طلا
            </h1>
            <a
              href="/guide"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              نکات خرید امن
            </a>
            <a
              href="/market"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              تحلیل بازار طلا
            </a>
            <a
              href="/faq"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              پرسش‌های متداول
            </a>
            <a
              href="/blog"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              مقالات آموزشی
            </a>
            <a
              href="/support"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              پشتیبانی مشتریان
            </a>
          </div>

          <div className="flex flex-col items-center space-y-5">
            <Image
              src="/images/80.png"
              alt="لوگوی آوامین"
              width={192}
              height={48}
            />
            <p className="text-gray-500 text-sm w-60">
              آوامین، پلتفرم امن و مطمئن برای خرید و فروش طلا با پشتیبانی 24/7 و
              بهترین قیمت‌های بازار
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} آوامین. تمامی حقوق محفوظ است
          </p>
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
              alt="لوگوی آوامین"
              width={96}
              height={24}
            />
            <p className="text-gray-500 text-sm w-48">
              آوامین، پلتفرم امن و مطمئن برای خرید و فروش طلا با پشتیبانی 24/7.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-lg font-extrabold text-gray-800">
              راهنمای خرید طلا
            </h1>
            <a
              href="/guide"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              نکات خرید امن
            </a>
            <a
              href="/market"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              تحلیل بازار طلا
            </a>
            <a
              href="/faq"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              پرسش‌های متداول
            </a>
            <a
              href="/blog"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              مقالات آموزشی
            </a>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-lg font-extrabold text-gray-800">
              پشتیبانی و خدمات
            </h1>
            <a
              href="/about"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              درباره آوامین
            </a>
            <a
              href="/features"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              ویژگی‌های پلتفرم
            </a>
            <a
              href="/pricing"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              قیمت‌های به‌روز
            </a>
            <a
              href="/app"
              className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
            >
              دانلود اپلیکیشن
            </a>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-lg font-extrabold text-gray-800">
              دانلود اپلیکیشن
            </h1>
            <p className="text-gray-500 text-sm w-48">
              اکنون آوامین را دانلود کنید و به‌راحتی معامله کنید!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} آوامین. تمامی حقوق محفوظ است.
          </p>
        </div>
      </Container>
    </div>
  );

  const renderMobile = () => (
    <div className="relative h-auto w-full font-[IRANSans] bg-[#f9f9f9] z-50 py-6">
      <Container>
        <div className="flex flex-col space-y-8 justify-center items-center text-center">
          <div className="flex flex-col items-end text-right w-full space-y-3">
            <Image
              src="/images/80.png"
              alt="لوگوی آوامین"
              width={80}
              height={20}
            />
            <p className="text-gray-500 text-sm w-full">
              آوامین، پلتفرم امن برای خرید و فروش طلا با پشتیبانی 24/7
            </p>
            <div className="flex gap-3 justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 items-start text-right">
            <div className="space-y-2">
              <h1 className="text-base font-extrabold text-gray-800">
                راهنمای خرید
              </h1>
              <a
                href="/guide"
                className="block text-gray-500 hover:text-purple-600 transition-colors text-sm"
              >
                نکات خرید امن
              </a>
              <a
                href="/market"
                className="block text-gray-500 hover:text-purple-600 transition-colors text-sm"
              >
                تحلیل بازار
              </a>
              <a
                href="/faq"
                className="block text-gray-500 hover:text-purple-600 transition-colors text-sm"
              >
                پرسش‌های متداول
              </a>
            </div>

            <div className="space-y-2">
              <h1 className="text-base font-extrabold text-gray-800">
                پشتیبانی
              </h1>
              <a
                href="/about"
                className="block text-gray-500 hover:text-purple-600 transition-colors text-sm"
              >
                درباره ما
              </a>
              <a
                href="/features"
                className="block text-gray-500 hover:text-purple-600 transition-colors text-sm"
              >
                ویژگی‌ها
              </a>
              <a
                href="/app"
                className="block text-gray-500 hover:text-purple-600 transition-colors text-sm"
              >
                اپلیکیشن
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full items-end space-y-4 text-right">
            <h1 className="text-base font-extrabold text-gray-800">
              تماس با ما
            </h1>
            <p className="text-gray-500 text-sm">
              شماره تماس:{" "}
              <a href="tel:+989121277336" className="hover:text-purple-600">
                09121277336
              </a>
            </p>
            <p className="text-gray-500 text-sm">
              ایمیل:{" "}
              <a
                href="mailto:designer@siratan.com"
                className="hover:text-purple-600"
              >
                avaminonline@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col w-full items-end space-y-4 text-right">
            <h1 className="text-base font-extrabold text-gray-800">
              دانلود اپلیکیشن
            </h1>
            <p className="text-gray-500 text-sm w-full">
              اکنون آوامین را دانلود کنید و به‌راحتی معامله کنید
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} آوامین. تمامی حقوق محفوظ است
          </p>
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
