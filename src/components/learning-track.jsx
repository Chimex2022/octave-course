import React from "react";
import FrontendImg from "../assets/frontend dev.png";
import UIUXImg from "../assets/product design.png";
import DataAnalyticsImg from "../assets/data analysis.png";

const LearningTracks = () => {
  const tracks = [
    {
      img: FrontendImg,
      title: "Frontend Development",
      duration: "3 Months",
    },
    {
      img: UIUXImg,
      title: "Product Design (UI/UX)",
      duration: "3 Months",
    },
    {
      img: DataAnalyticsImg,
      title: "Data Analytics",
      duration: "3 Months",
    },
  ];

  return (
    <section id="programme" className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Learning Tracks
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group shadow-lg"
            >
              <img
                src={track.img}
                alt={track.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold">{track.title}</h3>
                <p className="text-gray-300">{track.duration}</p>
                <a
                  href="https://bit.ly/Octave-TechTraining"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform inline-block"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;
