import { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles.css";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    image:
      "https://bmw.scene7.com/is/image/BMW/g82_cs_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
    name: "Project One",
    techStack: ["React", "Node.js", "MongoDB"],
    description: "Description of Project One.",
  },
  {
    id: 2,
    image:
      "https://bmw.scene7.com/is/image/BMW/g82_cs_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
    name: "Project Two",
    techStack: ["Vue", "Express", "MySQL"],
    description: "Description of Project Two.",
  },
  {
    id: 3,
    image:
      "https://bmw.scene7.com/is/image/BMW/g82_cs_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
    name: "Project Three",
    techStack: ["Vue", "Express", "MySQL"],
    description: "Description of Project Two.",
  },
  {
    id: 4,
    image:
      "https://bmw.scene7.com/is/image/BMW/g82_cs_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
    name: "Project Five",
    techStack: ["Vue", "Express", "MySQL"],
    description: "Description of Project Two.",
  },
];

export default function Projects() {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    className: "center",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.in", stagger: 0.2 }
    );
  }, []);

  return (
    <div className="bg bg-black flex flex-col justify-center items-center min-h-screen p-4 relative">
      <div className="relative w-[85%] mx-auto slider-container">
        <Slider
          ref={sliderRef}
          {...settings}
          className="flex justify-center items-center h-[80%]"
        >
          {projects.map((project) => (
            <div key={project.id} className="my-10 card transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex-1 border border-gray-800">
                <div className="relative h-full rounded-2xl overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-70"></div>
                </div>
                <div className="p-6 backdrop-blur-sm bg-gray-900/30">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#e3e5c4" }}>
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center absolute left-10 top-1/2">
        <button
          className="bg-gray-900 p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-800 border border-gray-800 hover:border-gray-600"
          onClick={previous}
        >
          <FaArrowLeft className="w-6 h-6" style={{ color: "#e3e5c4" }} />
        </button>
      </div>
      <div className="text-center absolute top-1/2 right-10">
        <button
          className="bg-gray-900 p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-800 border border-gray-800 hover:border-gray-600"
          onClick={next}
        >
          <FaArrowRight className="w-6 h-6" style={{ color: "#e3e5c4" }} />
        </button>
      </div>
    </div>
  );
}
