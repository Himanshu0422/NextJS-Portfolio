import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/himanshu0422",
    label: "Github",
    icon: <FaGithub color="#e3e5c4" size={25} />,
  },
  {
    href: "https://www.linkedin.com/in/himanshumittal035/",
    label: "LinkedIn",
    icon: <FaLinkedin color="#e3e5c4" size={25} />,
  },
  {
    href: "mailto:himanshumittal035@gmail.com",
    label: "Mail",
    icon: <IoIosMail color="#e3e5c4" size={25} />,
  },
  {
    href: "https://leetcode.com/himanshu1571",
    label: "LeetCode",
    icon: <SiLeetcode color="#e3e5c4" size={25} />,
  },
];

const Social = ({
  currentIndex,
  previousIndex,
}: {
  currentIndex: number;
  previousIndex: number;
}) => {
  useEffect(() => {
    if (currentIndex === 5) {
      gsap.to(".social", {
        y: 200,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    } else if (currentIndex === 4 && previousIndex === 5) {
      gsap.fromTo(
        ".social",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 1.5, ease: "power3.out" }
      );
    }
  }, [currentIndex]);

  useGSAP(() => {
    gsap.fromTo(
      ".social",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  });

  return (
    <div className="social fixed bottom-10 left-10 z-50 opacity-0 max-sm:hidden">
      <ul className="flex flex-col items-center gap-4 mb-2">
        {SOCIAL_LINKS.map(({ href, label, icon }) => (
          <li key={label} className="link">
            <a
              href={href}
              aria-label={label}
              className="text-gray-500 text-3xl transition-colors duration-300 ease-out hover:text-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-0.5 h-20 bg-[#e3e5c4] absolute left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default Social;
