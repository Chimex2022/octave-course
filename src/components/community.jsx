import React from "react";
import CommunityImg from "../assets/Community.png"; 

const OurCommunity = () => {
  return (
    <section id="community" className="bg-black text-white py-16 px-6 lg:px-20">
      {/* Heading & Button */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Our Community</h2>
        <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
          Join our WhatsApp Community
        </button>
      </div>

      {/* Image with overlay */}
      <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden">
        <img
          src={CommunityImg}
          alt="Community Champions"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-lg font-semibold mb-2">Community Champions</h3>
          <p className="text-gray-300 max-w-3xl text-sm md:text-base">
            Our Community Champions are passionate leaders who inspire, guide,
            and support learners on their journey. They foster collaboration,
            share knowledge, and create an inclusive environment where everyone
            can thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCommunity;
