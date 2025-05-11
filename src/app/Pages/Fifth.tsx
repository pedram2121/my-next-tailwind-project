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
   <div>
    
   </div>
  );

  const renderTablet = () => (
   <div>

   </div>
  );

  const renderMobile = () => (
   <div>

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
