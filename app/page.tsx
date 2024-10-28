"use client";

import About from "@/components/About/About";
import Cursor from "@/components/Cursor";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Sidebar from "@/components/Sidebar/Sidebar";
import Skills from "@/components/Skills";
import Social from "@/components/Socials";
import useScrollNavigation from "@/hooks/gsapAnimation";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useEffect, useState } from "react";

gsap.registerPlugin(Observer);
const DEBOUNCE_TIME = 100;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  const [navigateToSection, setNavigateToSection] = useState<any>();

  let timer: ReturnType<typeof setTimeout> | null = null;

  const debouncedDimensionCalculator = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        !/IEMobile/.test(navigator.userAgent);

      window.history.scrollRestoration = "manual";
      setIsDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();
    window.addEventListener("resize", debouncedDimensionCalculator);

    return () => window.removeEventListener("resize", debouncedDimensionCalculator);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    const divs = document.querySelectorAll<HTMLElement>(".bg");
    const { navigateToSection: navigateFunc } = useScrollNavigation(sections, divs);
    setNavigateToSection(() => navigateFunc);
  }, [loading]);

  return loading ? (
    <Preloader setLoading={setLoading} />
  ) : (
    <>
      <Cursor isDesktop={isDesktop} />
      <Sidebar isMenu={isMenu} />
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} navigateToSection={navigateToSection} />
      <Social />
      <section className="h-screen w-full top-0 fixed">
        <Landing />
      </section>
      <section className="h-screen w-full top-0 fixed invisible">
        <About />
      </section>
      <section className="h-screen w-full top-0 fixed invisible">
        <Experience />
      </section>
      <section className="h-screen w-full top-0 fixed invisible">
        <Skills />
      </section>
    </>
  );
}
