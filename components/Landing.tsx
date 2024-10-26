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
    const tl = gsap.timeline({ delay: 1 });

    tl.set('.intro, .name, .desc', { y: 70, color: '#e3e5c4' })

      .to('.intro', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      })
      .to('.name', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5")
      .to('.desc', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      });
  };

  return (
    <div id="landing" className="bg flex h-screen">
      <div className="flex flex-1 items-center justify-center text-center">
        <div className="h-[50%] flex flex-col justify-center">
          <Logo />
          <h2 className="intro text-[30px] max-sm:text-[25px] font-light opacity-0">
            Hello, My name is
          </h2>
          <h1 className="name text-[60px] max-sm:text-[45px] opacity-0 my-28">
            Himanshu Mittal
          </h1>
          <p className="desc h-[60px] text-[30px] max-sm:text-[25px] opacity-0">
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
