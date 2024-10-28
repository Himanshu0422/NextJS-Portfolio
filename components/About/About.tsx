"use client";

import {
  FaDocker,
  FaNodeJs
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPrisma } from "react-icons/si";
import styles from "./about.module.css";

const BOX_STYLES =
  "w-full h-full absolute top-0 left-0 opacity-90 text-center text-[80px] md:text-[120px] flex justify-center items-center";

const About = () => {
  return (
    <div className="bg flex items-center h-screen">
      <div id="about" className="flex flex-col sm:flex-row items-center">
        <div className="flex flex-1 items-center justify-center relative h-1/2 lg:h-full">
          <div className={`w-40 h-40 md:w-52 md:h-52 ${styles.cube}`}>
            <div className={BOX_STYLES + " " + styles.box1}>
              <RiNextjsFill className="text-5xl md:text-6xl text-[#e3e5c4] drop-shadow-lg" />
            </div>

            <div className={BOX_STYLES + " " + styles.box2}>
              <SiExpress className="text-5xl md:text-6xl text-[#e3e5c4] drop-shadow-lg" />
            </div>

            <div className={BOX_STYLES + " " + styles.box3}>
              <SiMongodb className="text-5xl md:text-6xl text-[#e3e5c4] drop-shadow-lg" />
            </div>

            <div className={BOX_STYLES + " " + styles.box4}>
              <FaDocker className="text-5xl md:text-6xl text-[#e3e5c4] drop-shadow-lg" />
            </div>

            <div className={BOX_STYLES + " " + styles.box5}>
              <FaNodeJs className="text-5xl md:text-6xl text-[#e3e5c4] drop-shadow-lg" />
            </div>

            <div className={BOX_STYLES + " " + styles.box6}>
              <SiPrisma className="text-5xl md:text-6xl text-[#e3e5c4] drop-shadow-lg" />
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-[#e3e5c4] to-[#ff7f50] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-sm md:text-base leading-relaxed font-light text-[#fff]">
            I am Himanshu Mittal, a Full Stack Developer with a passion for
            crafting dynamic web applications and intuitive user interfaces.
            With expertise in programming languages such as C++, Java, and
            JavaScript, along with frameworks like React.js and Node.js, I focus
            on delivering seamless user experiences. My commitment to minimalism
            drives my design philosophy, allowing me to create solutions that
            are both functional and aesthetically pleasing. I thrive in
            collaborative environments and am always eager to tackle new
            challenges in coding and design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
