import {
  Briefcase,
  Code,
  Download,
  Home,
  Mail,
  Terminal,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "../Socials";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "experience", label: "Experience", icon: Terminal },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
];

const Sidebar = ({
  isMenu,
  navigateToSection,
}: {
  isMenu: boolean;
  navigateToSection: (index: number) => void;
}) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    const items = document.querySelectorAll<HTMLElement>(".sidebar-item");

    if (isMenu) {
      if (sidebar) {
        sidebar.style.transform = "translateX(0)";
        sidebar.style.opacity = "1";
        sidebar.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
      }

      items.forEach((item, index) => {
        setTimeout(() => {
          if (item) {
            item.style.transform = "translateX(0)";
            item.style.opacity = "1";
          }
        }, index * 150); // Increased stagger delay for better effect
      });
    } else {
      if (sidebar) {
        sidebar.style.transform = "translateX(100%)";
        sidebar.style.opacity = "0";
        sidebar.style.boxShadow = "none";
      }

      items.forEach((item) => {
        if (item) {
          item.style.transform = "translateX(50px)";
          item.style.opacity = "0";
        }
      });
    }
  }, [isMenu]);

  const handleNav = (index: number) => {
    navigateToSection && navigateToSection(index);
    setActiveSection(NAV_ITEMS[index].id);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 z-[9] ${
          isMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`sidebar fixed top-0 z-10 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-sm text-white shadow-2xl transform transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
          isMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-4">
          <div className="mb-8 text-center relative">
            <div className="absolute rounded-md -left-4 -right-4 top-0 h-32 bg-gradient-to-b from-[#e3e5c4]/10 to-transparent -z-10" />
            <h2 className="text-2xl font-bold text-[#e3e5c4] bg-clip-text mt-12">
              Himanshu Mittal
            </h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
            <button
              className="mt-4 flex items-center justify-center space-x-2 w-full px-4 py-2 bg-[#e3e5c4]/10 hover:bg-[#e3e5c4]/20 text-[#e3e5c4] rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1J1BYHtDQOCwT_XzkzHbzS7hpbIdbisrh/view?usp=sharing"
                )
              }
            >
              <Download
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Resume</span>
            </button>
          </div>

          <nav className="flex-1 relative">
            <div className="absolute -left-4 -right-4 h-full bg-gradient-to-b from-transparent via-[#e3e5c4]/6 to-transparent -z-10" />
            {NAV_ITEMS.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <div
                  key={index}
                  className="sidebar-item transform translate-x-12 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                >
                  <button
                    onClick={() => handleNav(index)}
                    className={`flex items-center w-full space-x-4 px-4 py-3 my-1 rounded-lg transition-all duration-300 ease-in-out transform ${
                      isActive
                        ? "bg-[#e3e5c4]/10 text-[#e3e5c4] scale-105"
                        : "text-gray-400 hover:text-[#e3e5c4] hover:bg-[#e3e5c4]/5"
                    }`}
                  >
                    <Icon
                      size={20}
                      className="transition-transform group-hover:scale-110"
                    />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 relative">
            <div className="absolute rounded-md -left-4 -right-4 bottom-0 h-32 bg-gradient-to-t from-[#e3e5c4]/10 to-transparent -z-10" />
            <div className="flex justify-center space-x-4 mb-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 link text-gray-400 hover:text-[#e3e5c4] hover:bg-[#e3e5c4]/10 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="text-center text-sm text-gray-400">
              <p className="mt-1">© 2024 Himanshu Mittal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
