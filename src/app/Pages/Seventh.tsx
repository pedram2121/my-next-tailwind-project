"use client";
import React from "react";
import { useResponsive } from "../components/ResponsiveContext";
import available from "../../../public/images/available-app.png";
import Image from "next/image";

// CSS for the pulsing animation
const pulseAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

// Desktop View Component
const DesktopView: React.FC = () => {
  const containerStyles =
    "flex flex-row items-center justify-center min-h-[600px] bg-gradient-to-r from-purple-800 to-pink-500 text-white px-4 py-12 relative overflow-hidden";
  const imgContainerStyles = "flex justify-center w-[430px] pr-8";
  const textContainerStyles =
    "flex flex-col items-center space-y-6 w-1/2 text-right pr-8 font-[IRANSans] text-justify-last-right";
  const deviceStyles = "w-full max-w-[600px]";
  const textSize = "text-4xl font-[IRANSans]";
  const paragraphSize = "text-lg";

  return (
    <div className={containerStyles}>
      <style>{pulseAnimation}</style>
      <div className="relative">
        <div className="absolute -top-72 -left-60 w-40 h-40 bg-purple-300 rounded-full opacity-20 animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-50">
        <Image
          src="/images/45.png"
          alt="Decorative shape"
          fill
          className="object-contain"
        />
      </div>
      <div className={`${imgContainerStyles} relative w-[420px]`}>
        <Image
          src={available.src}
          alt="App personally crafted for you"
          className={`object-contain absolute -top-[180px] right-32 ${deviceStyles}`}
          width={300}
          height={300}
        />
      </div>
      <div className={textContainerStyles}>
        <h1 className={`font-bold font-[IRANSans] leading-tight ${textSize}`}>
          حالا آوامین برای همه دستگاه‌ها
          <br />
          قابل دانلود است
        </h1>
        <p className={`leading-relaxed max-w-md ${paragraphSize}`}>
          با آوامین، خرید و فروش طلای خود را در هر لحظه و از هر دستگاهی مدیریت
          کنید. بیش از ۸۰٪ کاربران از موبایل استفاده می‌کنند، پس اپلیکیشن ما
          همیشه همراه شماست
        </p>
      </div>
    </div>
  );
};

// Tablet View Component
const TabletView: React.FC = () => {
  const containerStyles =
    "flex flex-row items-center justify-center min-h-[600px] bg-gradient-to-r from-purple-800 to-pink-500 text-white px-4 py-12 relative overflow-hidden";
  const imgContainerStyles = "flex justify-center w-1/2 pr-4";
  const textContainerStyles =
    "flex flex-col items-center space-y-6 w-1/2 text-right pr-8";
  const deviceStyles = "w-full max-w-[450px]";
  const textSize = "text-3xl";
  const paragraphSize = "text-base";

  return (
    <div className={containerStyles}>
      <style>{pulseAnimation}</style>
      <div className="relative">
        <div className="absolute -top-72 -left-60 w-40 h-40 bg-purple-300 rounded-full opacity-20 animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-50">
        <Image
          src="/images/45.png"
          alt="Decorative shape"
          fill
          className="object-contain"
        />
      </div>
      <div className={`${imgContainerStyles} relative w-[420px]`}>
        <Image
          src={available.src}
          alt="App personally crafted for you"
          className={`object-contain absolute -top-[180px] right-32 ${deviceStyles}`}
          width={300}
          height={300}
        />
      </div>
      <div className={textContainerStyles}>
        <h1 className={`font-bold font-[IRANSans] leading-tight ${textSize}`}>
          حالا آوامین برای همه دستگاه‌ها
          <br />
          قابل دانلود است
        </h1>
        <p className={`leading-relaxed max-w-md ${paragraphSize}`}>
          با آوامین، خرید و فروش طلای خود را در هر لحظه و از هر دستگاهی مدیریت
          کنید. بیش از ۸۰٪ کاربران از موبایل استفاده می‌کنند، پس اپلیکیشن ما
          همیشه همراه شماست!
        </p>
      </div>
    </div>
  );
};

// Mobile View Component
const MobileView: React.FC = () => {
  const containerStyles =
    "flex flex-col items-center justify-center min-h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-10 relative overflow-hidden";
  const imgContainerStyles = "flex justify-center w-full mb-6";
  const textContainerStyles =
    "flex flex-col items-center space-y-6 w-full text-center font-[IRANSans]";
  const deviceStyles = "w-3/4";
  const textSize = "text-2xl";
  const paragraphSize = "text-sm";

  return (
    <div className={containerStyles}>
      <style>{pulseAnimation}</style>
      <div className="relative">
        <div
          className="absolute -top-80 -left-60 w-40 h-40 bg-purple-300 rounded-full
         opacity-20 animate-[pulse_3s_ease-in-out_infinite]"
        />
      </div>
      <div className="absolute -bottom-1 left-2 w-[100px] h-[100px] opacity-50">
        <Image
          src="/images/45.png"
          alt="Decorative shape"
          fill
          className="object-contain"
        />
      </div>
      <div className={`${imgContainerStyles} relative w-full`}>
        <Image
          src={available.src}
          alt="App personally crafted for you"
          className={`object-contain ${deviceStyles}`}
          width={300}
          height={300}
        />
      </div>
      <div className={textContainerStyles}>
        <h1 className={`font-bold font-[IRANSans] leading-tight ${textSize}`}>
          حالا آوامین را دانلود کنید
        </h1>
        <p className={`leading-relaxed max-w-md ${paragraphSize}`}>
          با آوامین، قیمت طلا را لحظه‌ای دنبال کنید و معاملات خود را با امنیت
          بالا انجام دهید. اپلیکیشن ما برای راحتی شما در هر زمان در دسترسه!
        </p>
      </div>
    </div>
  );
};

// Main Component
const Seventh: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();

  if (isMobile) {
    return <MobileView />;
  } else if (isTablet) {
    return <TabletView />;
  } else {
    return <DesktopView />;
  }
};

export default Seventh;
