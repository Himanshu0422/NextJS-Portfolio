import React, { useState, useEffect } from "react";
import { FaDocker, FaAws } from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";

type SkillName =
  | "C++"
  | "Java"
  | "JavaScript"
  | "EJS"
  | "React.js"
  | "Next.js"
  | "Node.js"
  | "Express.js"
  | "React Native"
  | "Redux"
  | "Tailwind CSS"
  | "MongoDB"
  | "MySQL"
  | "Firebase"
  | "Sequelize"
  | "Prisma"
  | "Redis"
  | "Docker"
  | "AWS";

const skillCategories: Record<string, SkillName[]> = {
  "Programming Languages": ["C++", "Java", "JavaScript"],
  Frontend: [
    "React.js",
    "Next.js",
    "React Native",
    "Redux",
    "Tailwind CSS",
    "EJS",
  ],
  "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "MySQL", "Redis"],
  "Tools & Platforms": ["Docker", "AWS", "Firebase", "Prisma", "Sequelize"],
};

const allSkills = Object.values(skillCategories).flat();

const SkillCard = ({ skill }: { skill: SkillName }) => (
  <div className="skill-card group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative bg-gray-900 p-2 rounded-lg flex flex-col items-center justify-center gap-1 h-16 hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-xl text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
        {iconMapping[skill] || skill}
      </div>
      <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
        {skill}
      </span>
      <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
    </div>
  </div>
);

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        <h1 className="skill-category text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Technical Expertise
        </h1>

        {isMobile ? (
          <div className="grid grid-cols-3 gap-2">
            {allSkills.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="grid gap-4">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div
                key={category}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 skill-category"
              >
                <h2 className="text-lg font-semibold text-blue-400 mb-2 px-2">
                  {category}
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {skills.map((skill) => (
                    <SkillCard key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const iconMapping: Record<SkillName, JSX.Element> = {
  "C++": <span className="text-lg">C++</span>,
  Java: <span className="text-lg">Java</span>,
  JavaScript: <SiJavascript />,
  EJS: <span className="text-lg">EJS</span>,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "React Native": <span className="text-lg">RN</span>,
  Redux: <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,
  MongoDB: <DiMongodb />,
  MySQL: <DiMysql />,
  Firebase: <SiFirebase />,
  Sequelize: <span className="text-lg">SQ</span>,
  Prisma: <SiPrisma />,
  Redis: <span className="text-lg">RD</span>,
  Docker: <FaDocker />,
  AWS: <FaAws />,
};

export default Skills;
