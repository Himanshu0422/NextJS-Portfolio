"use client"

import { Expo, gsap } from "gsap";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PreloaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Preloader: React.FC<PreloaderProps> = ({ setLoading }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 99) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          reveal();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count); // Cleanup on unmount
  }, []);

  const reveal = async () => {
    const t1 = gsap.timeline({});
    await t1
      .to(".follow", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.5,
      })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 });

    setLoading(false);
  };

  return (
    <div className="w-screen h-screen relative bg-black text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="follow absolute left-0 h-[2px] bg-gradient-to-r from-black via-gray-800 to-gray-700 w-0 z-10"></div>
        <div
          className="hide absolute left-0 h-[2px] bg-white"
          style={{ width: `${counter}%` }}
        ></div>
      </div>

      <div className="content absolute inset-0 bg-black w-0 overflow-hidden z-10"></div>
    </div>
  );
};

export default Preloader;
