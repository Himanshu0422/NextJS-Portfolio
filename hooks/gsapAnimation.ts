import gsap from "gsap";
import { Observer } from "gsap/Observer";

const useScrollNavigation = (
  sections: NodeListOf<HTMLElement>,
  divs: NodeListOf<HTMLElement>
) => {
  let currentIndex = 0;
  const wrap = gsap.utils.wrap(0, sections.length);
  let animating = false;

  const gotoSection = (index: number, direction: number) => {
    console.log(currentIndex, 'currentIndex');
    if (animating || index < 0 || index >= sections.length) return;

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
      if (index === 0) {
        gsap.fromTo(
          "#landing",
          { scale: 0.5, opacity: 0 },
          { scale: 1, x: 0, opacity: 1, duration: 1, delay: 0.75, ease: "power2.out" }
        );
      } else if (index === 1) {
        gsap.fromTo(
          "#about",
          { scale: 0.5, x: -200, opacity: 0 },
          { scale: 1, x: 0, opacity: 1, duration: 1, delay: 0.75, ease: "power2.out" }
        );
      } else if (index === 2) {
        gsap.fromTo(
          ".card",
          { scale: 0.2, opacity: 0, y: 200, x: -100 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            x: 0,
            delay: 0.75,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          }
        );
      } else if (index === 3) {
        const categories = document.querySelectorAll('.skill-category');
        const cards = document.querySelectorAll('.skill-card');
        const tl = gsap.timeline();
        if (window.innerWidth > 767) {
          tl.fromTo(categories, {
            opacity: 0,
            x: 100,
          }, {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.4,
            delay: 1,
            ease: "elastic.out(1, 0.5)",
          });
        }
        tl.fromTo(cards, {
          opacity: 0,
          y: 20,
        }, {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.5,
          stagger: 0.1,
          delay: window.innerWidth < 768 ? 1 : 0
        });
      }
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(divs[currentIndex], { yPercent: -100 * dFactor }).set(
        sections[currentIndex], { autoAlpha: 0 }
      );
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(divs[index], { yPercent: 100 * dFactor }, { yPercent: 0 }, 0);

    currentIndex = index;
    console.log(currentIndex, 'updatedcurrentIndex');
  };

  const sequentialNavigate = (targetIndex: number) => {
    if (currentIndex === targetIndex) return;

    const direction = currentIndex < targetIndex ? 1 : -1;
    const nextIndex = currentIndex + direction;

    gotoSection(nextIndex, direction);

    const animationDuration = 1250;
    setTimeout(() => sequentialNavigate(targetIndex), animationDuration);
  };

  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  return { navigateToSection: sequentialNavigate };
};

export default useScrollNavigation;
