import gsap from "gsap";
import { useEffect } from "react";
import Logo from "./Logo";

const Landing = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animate();
    });

    return () => ctx.revert();
  }, []);

  const animate = () => {
    const tl = gsap.timeline();

    tl.set(".name, .desc", { y: 70, color: "#e3e5c4" })
      .to(
        ".name",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      )
      .to(".desc", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      });
  };

  return (
    <div id="landing" className="flex h-screen bg">
      {/* Left side for the text */}
      <div className="flex flex-1 items-center justify-center z-10">
        <div className="flex flex-col max-sm:items-center max-sm:gap-2 mx-auto">
          <p className="name text-[65px] max-sm:text-[40px] max-md:text-[45px] max-lg:text-[50px] opacity-0">
            Himanshu Mittal
          </p>
          <p className="desc text-[16px] max-sm:text-[18px] opacity-0">
            Front End Developer | Back End Developer
          </p>
        </div>
      </div>

      {/* Right side for the logo */}
      <div className="flex sm:flex-1 items-center justify-center">
        <Logo />
      </div>
    </div>
  );
};

export default Landing;
