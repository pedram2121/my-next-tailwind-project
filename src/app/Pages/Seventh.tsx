"use client";
import React from "react";
import { useResponsive } from "../components/ResponsiveContext";
import available from "../../../public/images/available-app.png";
import appshape from "../../../public/images/app-shape-right.png";
import appbtn2 from "../../../public/images/app_btn2.png";
import appbtn1 from "../../../public/images/app_btn1.png";

function Seventh() {
  const { isMobile, isTablet } = useResponsive();

  const deviceStyles = isMobile
    ? "w-3/4"
    : isTablet
    ? "w-full max-w-[450px]"
    : "w-full max-w-[600px]";
  const textSize = isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-4xl";
  const paragraphSize = isMobile
    ? "text-sm"
    : isTablet
    ? "text-base"
    : "text-lg";
  const buttonSize = isMobile ? "h-10" : "h-12";

  const containerStyles = `flex ${
    isMobile ? "flex-col" : "flex-row"
  } items-center justify-center min-h-[600px] bg-gradient-to-r 
    from-purple-800 to-pink-500 text-white px-4 py-12 relative overflow-hidden`;

  const imgContainerStyles = `flex justify-center ${
    isMobile ? "w-full mb-8" : isTablet ? "w-1/2 pr-4" : "w-1/2 pr-8"
  }`;

  const textContainerStyles = `flex flex-col items-center space-y-6 ${
    isMobile ? "w-full text-center" : "w-1/2 text-right pr-8"
  }`;

  const buttonContainerStyles = `flex ${
    isMobile ? "justify-center space-x-3" : "justify-end space-x-4"
  } mt-4`;

  // CSS for the pulsing animation
  const pulseAnimation = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `;

  return (
    <div className={containerStyles}>
      {/* Inject CSS animation */}
      <style>{pulseAnimation}</style>

      {/* Background decorative circle with pulse animation */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 animate-[pulse_3s_ease-in-out_infinite]" />

      {/* Shape image with proper positioning */}
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-50">
        <img
          src="/images/45.png"
          alt="Decorative shape"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Main device image */}
      <div className={imgContainerStyles}>
        <img
          src={available.src}
          alt="App personally crafted for you"
          className={`object-contain ${deviceStyles}`}
        />
      </div>

      {/* Text content */}
      <div className={textContainerStyles}>
        <h1 className={`font-bold font-[IRANSans] leading-tight ${textSize}`}>
          هم اکنون اپ ساز برای تمام
          <br />
          دستگاه ها قابل دانلود است
        </h1>
        <p className={`leading-relaxed max-w-md ${paragraphSize}`}>
          سهم اینترنت گردی با موبایل 80% است؛ بنابراین سایت شما نیاز به یک
          اپلیکیشن حرفه ای دارد.
        </p>

        {/* App store buttons */}
        <div className={buttonContainerStyles}>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download from Google Play"
          >
            <img
              src={appbtn2.src}
              alt="Get it on Google Play"
              className={`${buttonSize} hover:opacity-80 transition-opacity`}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download from App Store"
          >
            <img
              src={appbtn1.src}
              alt="Download on the App Store"
              className={`${buttonSize} hover:opacity-80 transition-opacity`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Seventh;
