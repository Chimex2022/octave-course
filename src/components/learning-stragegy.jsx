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

const LearningStrategy = () => {
  const paths = [
    {
      img: Frontend,
      title: "Project-Based Learning",
      text: "Students learn by doing  building innovative, real-world projects that mirror industry demands and challenges.."
    },
    {
      img: Backend,
      title: "Expert-Led Sessions",
      text: "Classes are taught by highly experienced professionals who bring practical knowledge and industry insights.."
    },
    {
      img: UIUX,
      title: "Collaborative Learning",
      text: "We encourage teamwork, peer reviews, and group projects to build problem-solving and communication skills.."
    },
    {
      img: ProductManagement,
      title: "Personalized Mentorship",
      text: "Every learner is paired with mentors who provide guidance, feedback, and career support throughout the program.."
    },
    {
      img: LowCode,
      title: "Continuous Feedback & Assessment",
      text: "Regular reviews, quizzes, and portfolio evaluations ensure learners stay on track and improve consistently.."
    },
    {
      img: QAEngineering,
      title: "Career-Focused Training",
      text: "We integrate employability skills, interview preparation, and portfolio building to prepare learners for the job market."
    },
    
  ];

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">
      {/* Top Heading & Paragraph */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">
        Our Learning Strategies
        </h2>
        <p className="text-gray-300 max-w-2xl text-center lg:text-right leading-relaxed">
        We combine expert-led instruction, hands-on projects, and personalized guidance to ensure
         you gain the skills, confidence, and experience needed to excel in today’s tech industry..
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

export default LearningStrategy;
