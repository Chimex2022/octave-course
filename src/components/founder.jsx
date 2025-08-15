import React from "react";
import Ojo from "../assets/ojo.png";
import Tosin from "../assets/tosin.png";
import Gabriel from "../assets/gabriel.png";
import Nuel from "../assets/nuel.png";

const teamMembers = [
  {
    name: "Michael Ojo",
    role: "Founder & Chief Executive Officer",
    img: Ojo, // ✅ Use variable, not string
    bio: `I believe that Africa’s greatest resource is its people—creative,
    resilient, and full of potential. What we need are platforms that
    give access to world-class skills, mentorship, and opportunities,
    so we can compete and lead globally. This platform is more than a
    training program; it’s a launchpad for creators, innovators, and
    problem-solvers who will shape industries, build businesses, and
    transform lives. We’re here to show that talent, when nurtured, can
    create a ripple effect of growth across communities and generations.`,
  },
  {
    name: "Oluwatosin Oluwasegun",
    role: "Founding Partner & Operations Manager",
    img: Tosin, // ✅
    bio: `Technology is only as powerful as the people who design and use it.
    My mission is to create learning experiences that are not just
    theoretical but practical, engaging, and deeply connected to real-world
    needs. Every project, every lesson, and every tool we introduce is
    chosen to prepare our learners for the demands of the modern workplace.
    We are committed to equipping them with the skills and confidence to
    innovate, build products that matter, and contribute meaningfully to
    the global tech ecosystem.`,
  },
  {
    name: "Gabriel Anyaele",
    role: "Founding Partner & Technology Leader",
    img: Gabriel, // ✅
    bio: `In the world of technology, success isn’t just about what you know—it’s
    about who you connect with, how you collaborate, and the mindset you
    cultivate along the way. That’s why we’re building more than a school;
    we’re building a vibrant community of learners, mentors, and industry
    professionals who support each other. We want our learners to grow not
    only in technical expertise but also in leadership, teamwork, and vision,
    so they can thrive anywhere their journey takes them.`,
  },
  {
    name: "Emmanuel Nwachukwu",
    role: "Founding Partner & Design Leader",
    img: Nuel, // ✅
    bio: `For us, learning is not the end goal—transformation is. We want every
     graduate to leave our program with not just knowledge, but a clear
      sense of direction, a portfolio that speaks for itself, and the confidence
       to step into opportunities. Our career support is designed to bridge the
        gap between education and the real world, connecting talent to the
         right people, companies, and markets. The ultimate goal is simple: to
          turn raw potential into success stories that inspire the next generation.`,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black text-white">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            <h3 className="text-lg font-semibold">{member.role}</h3>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-lg shadow-lg object-cover max-h-[500px] w-full md:w-auto"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
