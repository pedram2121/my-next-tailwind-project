"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Ichildren {
  children: React.ReactNode;
}

interface ICheckView {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
}

export const CheckView = createContext<ICheckView>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  screenWidth: 0,
});

export const useResponsive = () => {
  return useContext(CheckView);
};

function ResponsiveContext({ children }: Ichildren) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth === null) return null;

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  return (
    <CheckView.Provider
      value={{ isMobile, isTablet, isDesktop, screenWidth: windowWidth }}
    >
      {children}
    </CheckView.Provider>
  );
}

export default ResponsiveContext;
