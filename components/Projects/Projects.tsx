import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from "gsap";
import { useEffect, useState } from "react";
import frontendProjects from "./frontendProjects.json";
import fullstackProjects from "./fullstackProjects.json";
import ParticlesBackground from "./ParticlesBackground";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [projectType, setProjectType] = useState("fullstack");

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(`.card-${current}`, {
      opacity: 0,
      x: -100,
      zIndex: -1,
    });

    tl.fromTo(
      `.image-container-${current}`,
      { zIndex: 2, y: 50, opacity: 0 },
      {
        zIndex: 2,
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      `.card-${current}`,
      { opacity: 0, x: -50, zIndex: -1 },
      { opacity: 1, x: 0, zIndex: 1, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      `.card-${current} .text-content`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.15 },
      "-=0.4"
    );
  }, [current]);

  const projects =
    projectType === "fullstack" ? fullstackProjects : frontendProjects;

  return (
    <div className="bg bg-black flex flex-col justify-center items-center min-h-screen p-4 relative">
      <ParticlesBackground />
      <div className="flex space-x-4 mb-20">
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg border ${
            projectType === "fullstack"
              ? "bg-[#d6d7c9] text-gray-900 border-[#d6d7c9]"
              : "bg-transparent text-[#e3e5c4] border-gray-800"
          } hover:bg-[#e3e5c4] hover:text-gray-900 hover:shadow-md`}
          onClick={() => setProjectType("fullstack")}
        >
          Fullstack Projects
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg border ${
            projectType === "frontend"
              ? "bg-[#d6d7c9] text-gray-900 border-[#d6d7c9]"
              : "bg-transparent text-[#e3e5c4] border-gray-800"
          } hover:bg-[#e3e5c4] hover:text-gray-900 hover:shadow-md`}
          onClick={() => setProjectType("frontend")}
        >
          Frontend Projects
        </button>
      </div>
      <Carousel
        className="max-w-[80%]"
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div className="flex items-center text-[#e3e5c4] w-[90%]">
                <div
                  className={`overflow-hidden w-[45%] z-10 image-container-${index}`}
                >
                  <img
                    src={project.image}
                    alt="project-screenshot"
                    className="object-cover h-[460px] transition-transform duration-500 transform hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div
                  className={`bg-gray-900 w-[55%] p-8 card-${index} h-full`}
                  style={{ backgroundColor: "rgba(17, 24, 39, 0.7)", zIndex: -1 }}
                >
                  <h2 className="text-4xl font-bold mb-4 text-content">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6 text-gray-400 text-content">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-600 text-content"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 text-content">
                    {project.subHeading}
                  </h3>
                  <p className="text-gray-400 mb-6 text-content">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-4 text-content">
                    <div className="flex gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        className="px-4 py-2 bg-[#d6d7c9] text-gray-900 rounded-md font-semibold transition-colors duration-300 hover:bg-gray-300 text-content"
                      >
                        See Live
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        className="px-4 py-2 border border-[#d6d7c9] text-[#e3e5c4] rounded-md font-semibold transition-colors duration-300 hover:bg-gray-800 text-content"
                      >
                        Source Code
                      </a>
                    </div>
                    <div className="text-sm">
                      {project.demo && <div>Demo: {project.demo}</div>}
                      {project.password && <div>Password: {project.password}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
