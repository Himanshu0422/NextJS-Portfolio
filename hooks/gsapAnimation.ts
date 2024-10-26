import gsap from "gsap";
import { Observer } from "gsap/Observer";

const useScrollNavigation = (sections: NodeListOf<HTMLElement>, divs: NodeListOf<HTMLElement>) => {
  let currentIndex = 0;
  const wrap = gsap.utils.wrap(0, sections.length);
  let animating = false;

  const gotoSection = (index: number, direction: number) => {
    if (index < 0 || index >= sections.length) return;
    index = wrap(index);
    animating = true;
    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => {
        animating = false;
      },
    });

    if (currentIndex >= 0) {
      if (currentIndex === 0) {
        gsap.fromTo(
          "#about",
          { scale: 0.5, x: -200, opacity: 0 },
          {
            scale: 1,
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.75,
            ease: "power2.out",
          }
        );
      }
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(divs[currentIndex], { yPercent: -100 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(divs[index], { yPercent: 100 * dFactor }, { yPercent: 0 }, 0);

    currentIndex = index;
  };

  const navigateToSection = (index: number) => {
    if(currentIndex == index) return;
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
      gotoSection(index, 0);
    }
  };

  const observer = Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  return { navigateToSection };
};

export default useScrollNavigation;