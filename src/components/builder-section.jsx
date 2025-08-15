import React from "react";
import Pratical from "../assets/Practice Skills.png";
import Accesible from "../assets/Accessible Learning.png";
import Career from "../assets/Career Pathways.png";

const BuildersSection = () => {
  const cards = [
    {
      img: Pratical,
      title: "Practical Skills",
      text: "Gain real-world experience through hands-on projects that prepare you for the job market."
    },
    {
      img: Accesible,
      title: "Accessible Learning",
      text: "Flexible, affordable programs designed so anyone, anywhere, can start their tech journey."
    },
    {
      img: Career,
      title: "Career Pathways",
      text: "Access mentorship, networking, and guidance to take confident steps toward your dream career."
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">
      {/* Top Heading & Paragraph */}
      <div className="max-w-5xl mx-auto text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-10 lg:space-x-28">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-wider lg:mb-0">
          We Exist Because The World Needs More Builders
        </h2>
        <p className="text-gray-300 leading-tighter text-sm">
          Innovation doesn’t happen by chance it’s built by people with the  courage to create, solve
          problems, and shape the future. We’re here to  empower the next generation of builders
          — thinkers, designers, coders, and innovators — with the skills, tools, and community they
           need to turn ideas into impact. Because the world doesn’t just need more consumers of
          technology, it needs more creators of it.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-black rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
            </div>
            <div className="p-5 -mt-20 relative z-10">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-300 mt-2">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuildersSection;
