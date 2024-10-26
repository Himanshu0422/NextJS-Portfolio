import gsap from "gsap";
import { useEffect } from "react";
import { NAV_ITEMS, Props } from "../Navbar";

const Sidebar = ({ isMenu }: Props) => {
  useEffect(() => {
    if (isMenu) {
      gsap.fromTo(
        ".sidebar",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power1.in" }
      );

      const items = document.querySelectorAll(".sidebar-item");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power1.in",
            delay: index * 0.1,
          }
        );
      });
    } else {
      gsap.to(".sidebar", {
        x: "100%",
        opacity: 0,
        duration: 0,
        ease: "power1.in",
      });
    }
  }, [isMenu]);

  return (
    <div
      className={`sidebar fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg overflow-hidden transition-transform duration-500 ${
        isMenu ? "visible" : "invisible"
      }`}
    >
      <div className="flex flex-col h-full p-4 mt-10">
        {NAV_ITEMS.map((item, index) => (
          <div
            key={index}
            className="sidebar-item flex items-center my-2 text-lg cursor-pointer hover:bg-gray-700 rounded-lg p-2 transition-all duration-200"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
