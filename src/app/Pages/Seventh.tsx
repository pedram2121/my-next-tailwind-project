"use client";
import React from "react";
import { useResponsive } from "../components/ResponsiveContext";
import available from "../../../public/images/available-app.png";
import appbtn2 from "../../../public/images/app_btn2.png";
import appbtn1 from "../../../public/images/app_btn1.png";
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
  const buttonContainerStyles =
    "flex justify-end space-x-4 mt-4 font-[IRANSans] text-justify-last-right";
  const deviceStyles = "w-full max-w-[600px]";
  const textSize = "text-4xl font-[IRANSans]";
  const paragraphSize = "text-lg";
  const buttonSize = "h-12";

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
        <div className={buttonContainerStyles}>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download from Google Play"
          >
            <Image
              src={appbtn2.src}
              alt="Get it on Google Play"
              className={`${buttonSize} hover:opacity-80 transition-opacity`}
              width={150}
              height={50}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <Image
              src={appbtn1.src}
              alt="Download on the App Store"
              className={`${buttonSize} hover:opacity-80 transition-opacity`}
              width={150}
              height={50}
            />
          </a>
        </div>
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
  const buttonContainerStyles = "flex justify-end space-x-4 mt-4";
  const deviceStyles = "w-full max-w-[450px]";
  const textSize = "text-3xl";
  const paragraphSize = "text-base";
  const buttonSize = "h-12";

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
        <div className={buttonContainerStyles}>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download from Google Play"
          >
            <Image
              src={appbtn2.src}
              alt="Get it on Google Play"
              className={`${buttonSize} hover:opacity-80 transition-opacity`}
              width={150}
              height={50}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <Image
              src={appbtn1.src}
              alt="Download on the App Store"
              className={`${buttonSize} hover:opacity-80 transition-opacity`}
              width={150}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// Mobile View Component
const MobileView: React.FC = () => {
  const containerStyles =
    "flex flex-col items-center justify-center min-h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-10 relative overflow-hidden";
  const imgContainerStyles = "flex justify-center w-full";
  const textContainerStyles =
    "flex flex-col items-center space-y-6 w-full text-center";
  const buttonContainerStyles = "flex justify-center space-x-3 mt-4";
  const deviceStyles = "w-2/4 top-[150px] left-24";
  const textSize = "text-2xl";
  const paragraphSize = "text-sm";
  const buttonSize = "h-14";

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
      <div className={`${imgContainerStyles} relative w-full top-[15px]`}>
        <Image
          src={available.src}
          alt="App personally crafted for you"
          className={`object-contain absolute ${deviceStyles}`}
          width={300}
          height={300}
        />
      </div>
      <div className={`textContainerStyles relative`}>
        <div className="absolute -top-40 left-56 px-6 w-full">
          <h1 className={` absolute font-bold font-[IRANSans] w-full leading-tight right-[150px] ${textSize}`}>
            حالا آوامین را دانلود کنید
          </h1>
        </div>
        <p
          className={`absolute -top-24 left-0 leading-relaxed max-w-md
           text-justify-last-right font-[IRANSans] w-full ${paragraphSize}`}
        >
          با آوامین، قیمت طلا را لحظه‌ای دنبال کنید و معاملات خود را با امنیت
          بالا انجام دهید. اپلیکیشن ما برای راحتی شما در هر زمان در دسترسه!
        </p>
        <div className={buttonContainerStyles}>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download from Google Play"
          >
            <Image
              src={appbtn2.src}
              alt="Get it on Google Play"
              className={`${buttonSize} hover:opacity-80 transition-opacity mt-10`}
              width={150}
              height={50}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <Image
              src={appbtn1.src}
              alt="Download on the App Store"
              className={`${buttonSize} hover:opacity-80 transition-opacity mt-10`}
              width={150}
              height={50}
            />
          </a>
        </div>
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
