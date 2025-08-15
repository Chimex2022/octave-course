import React from "react";
import heroBg from "../assets/Rectangle.png";

const HeroSection = () => {
  return (
    <section id="" className="relative bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
            backgroundImage: `url(${heroBg})`,
          }}
          
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-30">
        <h1
          className="text-3xl text-white sm:text-4xl lg:text-6xl font-bold leading-18 tracking-tight max-w-8xl"
        >
          We’re Building Africa’s Next <br />
          <span className="block">Generation of Tech Talent</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg max-w-2xl text-gray-200">
          Whether you’re taking your first step into tech or leveling up your
          skills, our program equips you with the tools, mentorship, and
          projects to thrive. Your future in tech starts now.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://bit.ly/Octave-TechTraining"
            className="bg-[#0F2F8C] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Apply Now
          </a>
          <a
            href="#programmes"
            className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full font-medium transition"
          >
            Explore Our Programmes
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
