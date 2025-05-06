"use client";
import React, { useState, useEffect } from "react";
import Container from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/80.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // تغییر رنگ پس زمینه هنگام اسکرول
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // برای باز یا بسته شدن همبرگر منو
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        scrolling ? "bg-white" : "#F4FEFF"
      } fixed top-0 left-0 w-full z-50 font-[IRANSans] transition-all duration-300`}
    >
      <Container>
        <div className="flex flex-row-reverse justify-between items-center py-4">
          {/* لوگو سمت راست */}
          <div className="flex items-center gap-6">
            <Link href="/">
              <Image className="w-32" alt="logo" src={logo} />
            </Link>
          </div>

          {/* منوی دسکتاپ سمت چپ */}
          <div className="hidden lg:flex gap-14 text-black">
            <Link
              href="/contact"
              className="font-iransans relative group pb-1"
            >
              تماس با ما
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="font-iransans relative group pb-1">
              صفحات
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/price" className="font-iransans relative group pb-1">
              قیمت
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              href="/solutions"
              className="font-iransans relative group pb-1"
            >
              خدمات
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/feature" className="font-iransans relative group pb-1">
              ویژگی‌ها
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/" className="font-iransans relative group pb-1">
              صفحه اصلی
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>

          {/* همبرگر منو برای موبایل */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <div
                className={`w-6 h-1 bg-black mb-2 transition-all ${
                  isOpen ? "rotate-45 transform" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-1 bg-black mb-2 transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-1 bg-black mb-2 transition-all ${
                  isOpen ? "-rotate-45 transform" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </Container>

      {/* منوی همبرگر موبایل */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-1/4 right-1/4 bg-[#F4FEFF] p-6">
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              تماس با ما
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              صفحات
            </Link>
            <Link
              href="/price"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              قیمت
            </Link>
            <Link
              href="/solutions"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              خدمات
            </Link>
            <Link
              href="/feature"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              ویژگی‌ها
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              صفحه اصلی
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
