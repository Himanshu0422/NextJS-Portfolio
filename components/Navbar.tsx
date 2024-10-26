"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import { FaBars, FaPlay, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const NAV_ITEMS = [
  { label: "home", to: "home" },
  { label: "about", to: "about" },
  { label: "projects", to: "projects" },
  { label: "experience", to: "experience" },
  { label: "skills", to: "skills" },
  { label: "contact", to: "contact" },
];

export interface Props {
  isMenu: boolean;
  setIsMenu?: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({isMenu, setIsMenu}: Props) => {
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  });

  const handleHover = (className: string, width: string) => {
    gsap.to(`.${className}`, {
      width,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const toggleMenu = () => {
    setIsMenu!(!isMenu);

    gsap.to(menuButtonRef.current, {
      rotation: isMenu ? 0 : 180,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <header
      ref={navbarRef}
      className="w-full fixed top-0 py-4 px-10 z-50 opacity-0"
    >
      <div className="flex justify-between items-center">
        {/* Left Logo */}
        <div className="flex items-center link">
          <Image
            src={require("@/assets/logo.svg")}
            alt="Logo - Himanshu Mittal"
            width={22}
            height={22}
            color="#e3e5c4"
          />
        </div>

        {/* Center Navigation */}
        <nav className="flex-grow flex justify-center max-sm:hidden">
          <ul className="flex space-x-4">
            {NAV_ITEMS.map(({ label, to }) => (
              <li
                key={label}
                onMouseEnter={() => handleHover(label, "100%")}
                onMouseLeave={() => handleHover(label, "0")}
                className="relative"
              >
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-[#e3e5c4]"
                >
                  {label}
                </Link>
                <div className={`${label} h-[1px] bg-[#e3e5c4] w-0`}></div>
              </li>
            ))}
            <li
              onMouseEnter={() => handleHover("resume", "100%")}
              onMouseLeave={() => handleHover("resume", "0")}
            >
              <a
                href="https://drive.google.com/file/d/1J1BYHtDQOCwT_XzkzHbzS7hpbIdbisrh/view?usp=sharing"
                target="__blank"
                className="text-[#e3e5c4] relative"
              >
                resume
              </a>
              <div className="resume h-[1px] bg-[#e3e5c4] w-0"></div>
            </li>
          </ul>
        </nav>

        {/* Right Play Button */}
        <button className="max-sm:hidden link flex items-center justify-center h-10 w-10 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300">
          <FaPlay color="#e3e5c4" />
        </button>
        
        {/* Menu Button for small screens */}
        <div className="sm:hidden link">
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="flex items-center justify-center h-10 w-10"
          >
            {isMenu ? <FaTimes color="#e3e5c4" size={20} /> : <FaBars color="#e3e5c4" size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
