"use client";

import About from "@/components/About/About";
import ContactSection from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects/Projects";
import Sidebar from "@/components/Sidebar/Sidebar";
import Skills from "@/components/Skills";
import Social from "@/components/Socials";
import useScrollNavigation from "@/hooks/gsapAnimation";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

gsap.registerPlugin(Observer);
const DEBOUNCE_TIME = 100;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  const [navigateToSection, setNavigateToSection] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

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
    const { navigateToSection: navigateFunc } = useScrollNavigation(sections, divs, setCurrentIndex, setPreviousIndex);
    setNavigateToSection(() => navigateFunc);
  }, [loading]);

  return loading ? (
    <Preloader setLoading={setLoading} />
  ) : (
    <>
      <Toaster position="top-center" />
      <Cursor isDesktop={isDesktop} />
      <Sidebar isMenu={isMenu} />
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} navigateToSection={navigateToSection} />
      <Social currentIndex={currentIndex} previousIndex={previousIndex} />
      <section className="first h-screen w-full top-0 fixed">
        <Landing />
      </section>
      <section className="second h-screen w-full top-0 fixed invisible">
        <About />
      </section>
      <section className="third h-screen w-full top-0 fixed invisible">
        <Projects />
      </section>
      <section className="fourth h-screen w-full top-0 fixed invisible">
        <Experience />
      </section>
      <section className="fifth h-screen w-full top-0 fixed invisible">
        <Skills />
      </section>
      <section className="sixth h-screen w-full top-0 fixed invisible">
        <ContactSection />
      </section>
    </>
  );
}
