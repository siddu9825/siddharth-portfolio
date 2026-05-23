"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ProjectKey = "tourism" | "rainfall";

export default function Home() {
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);

  const skills = [
    { name: "Java", items: ["OOPs", "Collections", "Spring Boot", "Basics"] },
    { name: "React", items: ["Hooks", "Components", "State Management"] },
    { name: "SQL", items: ["Queries", "Joins", "CRUD Operations"] },
  ];

  const projectDetails: Record<ProjectKey, string> = {
    tourism: `
Project: Tourism Guide

Approach:
- Understood user travel requirements
- Designed UI using React components
- Built backend using Java + Spring Boot
- Integrated REST APIs
- Focused on clean & scalable architecture
    `,
    rainfall: `
Project: Rainfall Prediction

Approach:
- Collected dataset
- Cleaned and preprocessed data
- Used Random Forest algorithm
- Trained ML model
- Improved accuracy using tuning
    `,
  };

  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-white">

      {/* HERO */}
      <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-between px-6 md:px-20">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400 text-green-400 px-4 py-1 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Open to Work
          </div>

          <p className="text-gray-400 mb-2">
            Available for Internship / Full-Time Roles
          </p>

          <p className="text-gray-400 mb-3">
            Full Stack Developer | Java | React | SQL
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Jayasiddharth Boya
          </h1>

          <p className="text-gray-300 max-w-xl mb-8 leading-7">
            Computer Science Engineering student passionate about building scalable applications.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold"
              href="#contact"
            >
              Hire Me
            </a>

            <a
              className="bg-white text-black px-6 py-3 rounded-full font-semibold"
              href="/resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <video
            className="w-[320px] md:w-[420px] rounded-2xl border border-white/10"
            controls
            muted
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ABOUT */}
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <div className="max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl p-8">

          <p className="text-gray-300 leading-8 mb-4">
            I am a Computer Science student passionate about full-stack development and real-world applications.
          </p>

          <p className="text-gray-400 leading-7 mb-4">
            I build web apps using Java, Spring Boot, React, and SQL.
          </p>

          <p className="text-green-400 text-sm">
            Goal: Become a production-level full-stack developer.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section className="h-screen snap-start flex flex-col justify-center px-6 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

        <div className="max-w-3xl mx-auto w-full space-y-6">

          {skills.map((s, i) => (
            <div key={i} className="bg-zinc-900 p-5 rounded-xl border border-white/10">

              <h3 className="text-xl font-semibold mb-2">{s.name}</h3>

              <div className="flex flex-wrap gap-2">
                {s.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-zinc-800 px-3 py-1 rounded-full text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section className="h-screen snap-start flex flex-col justify-center px-6 md:px-20 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
            <img src="/project1.png" alt="tourism" className="rounded-lg mb-4" />

            <h3 className="text-xl font-semibold mb-2">Tourism Guide</h3>

            <button
              onClick={() => setActiveProject("tourism")}
              className="text-green-400"
            >
              How I Built This →
            </button>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">
            <img src="/project2.png" alt="rainfall" className="rounded-lg mb-4" />

            <h3 className="text-xl font-semibold mb-2">Rainfall Prediction</h3>

            <button
              onClick={() => setActiveProject("rainfall")}
              className="text-green-400"
            >
              How I Built This →
            </button>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6">

          <div className="bg-zinc-900 max-w-xl w-full p-6 rounded-2xl border border-white/10">

            <pre className="text-gray-300 whitespace-pre-wrap">
              {projectDetails[activeProject]}
            </pre>

            <button
              onClick={() => setActiveProject(null)}
              className="mt-4 bg-white text-black px-4 py-2 rounded-full"
            >
              Close
            </button>

          </div>

        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="h-screen snap-start flex flex-col justify-center items-center text-center px-6">

        <h2 className="text-4xl font-bold mb-10">Contact</h2>

        <div className="w-full max-w-2xl space-y-5">

          <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 flex justify-between">
            <span className="text-gray-400">Email</span>
            <span className="text-white">siddharthsiddharth279@gmail.com</span>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 flex justify-between">
            <span className="text-gray-400">Phone</span>
            <span className="text-white">+91 9133228845</span>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a className="text-blue-400" href="#">LinkedIn →</a>
            <a className="text-blue-400" href="#">GitHub →</a>
          </div>

        </div>

      </section>

    </main>
  );
}