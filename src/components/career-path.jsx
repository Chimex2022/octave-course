import React from "react";
import Frontend from "../assets/frontend dev.png";
import Backend from "../assets/backend dev.png";
import UIUX from "../assets/product design.png";
import ProductManagement from "../assets/product management.png";
import QAEngineering from "../assets/qa engineer.png";
import LowCode from "../assets/low code.png";
import ProjectManagement from "../assets/project management.png";
import DataAnalytics from "../assets/data analysis.png";
import AIEngineering from "../assets/Ai engineer.png";

const CareerPaths = () => {
  const paths = [
    {
      img: Frontend,
      title: "Frontend Development",
      text: "Learn to build stunning, responsive websites with modern web technologies."
    },
    {
      img: Backend,
      title: "Backend Development",
      text: "Master server-side programming and create powerful, scalable applications."
    },
    {
      img: UIUX,
      title: "Product Design (UI/UX)",
      text: "Design intuitive digital experiences that users love and businesses value."
    },
    {
      img: ProductManagement,
      title: "Product Management",
      text: "Develop the skills to lead teams and bring successful products to market."
    },
    {
      img: QAEngineering,
      title: "QA Engineering",
      text: "Ensure product quality through effective testing and problem-solving methods."
    },
    {
      img: LowCode,
      title: "Low Code/No Code Development",
      text: "Create functional applications quickly without extensive coding knowledge."
    },
    {
      img: ProjectManagement,
      title: "Project Management",
      text: "Learn to plan, execute, and deliver projects on time and within budget."
    },
    {
      img: DataAnalytics,
      title: "Data Analytics",
      text: "Turn raw data into actionable insights using industry-standard tools."
    },
    {
      img: AIEngineering,
      title: "AI/ML Engineering",
      text: "Build intelligent systems and models that solve complex, real-world problems."
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">
      {/* Top Heading & Paragraph */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">
          Our Career Paths
        </h2>
        <p className="text-gray-300 max-w-2xl text-center lg:text-right leading-relaxed">
          Your journey doesn’t end when the training does — it’s just the beginning. 
          Our Career Pathways are designed to bridge the gap between learning 
          and real-world opportunities.
        </p>
      </div>

      {/* Career Path Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {paths.map((path, index) => (
          <div key={index} className="bg-black rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <img
                src={path.img}
                alt={path.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
            </div>
            <div className="p-5 -mt-20 relative z-10">
              <h3 className="text-lg font-bold">{path.title}</h3>
              <p className="text-gray-300 mt-2">{path.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPaths;
