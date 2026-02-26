import React, { useState } from 'react';
import StackIcon from "tech-stack-icons";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { name: 'React', iconName: "react" },
    { name: 'JavaScript', iconName: "js" },
    { name: 'Tailwind CSS', iconName: "tailwindcss" },
    { name: 'PostgreSQL', iconName: "postgresql" },
    { name: 'C#', iconName: "c#" },
    { name: 'Git', iconName: "git" },
    { name: 'Vite', iconName: "vitejs" },
    { name: 'Java', iconName: "java" },
    { name: 'Spring Boot', iconName: "spring" },
  ];

  return (
    <section className="bg-linear-to-r from-gray-900 py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 rounded-lg border border-amber-900 hover:border-amber-700 transition-colors relative group"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <span className="text-3xl w-12 h-12 flex items-center justify-center">
                <StackIcon
                  name={tech.iconName}
                  variant={hoveredTech === index ? "dark" : "grayscale"}
                />
              </span>
              <span className="absolute -bottom-6.25 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;