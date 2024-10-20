"use client";

import Cursor from "@/components/Cursor";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Social from "@/components/Socials";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP);

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export interface IDesktop {
  isDesktop: boolean;
}

const DEBOUNCE_TIME = 100;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [isDesktop, setisDesktop] = useState(true);

  let timer: ReturnType<typeof setTimeout> | null = null;

  const debouncedDimensionCalculator = () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";
      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, []);

  return loading ? (
    <Preloader setLoading={setLoading} />
  ) : (
    <>
      <Cursor isDesktop={isDesktop} />
      <Navbar />
      <Social />
      <Landing />
    </>
  );
}
