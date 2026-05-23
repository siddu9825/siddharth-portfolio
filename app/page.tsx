"use client";

import { motion } from "framer-motion";

export default function Home() {

  const skills = [
    { name: "Java", level: 90 },
    { name: "HTML/CSS", level: 85 },
    { name: "React", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Spring Boot", level: 70 },
  ];

  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-between px-6 md:px-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-green-400 mb-2">
            Available for Internship / Full-Time Roles
          </p>

          <p className="text-gray-400 mb-3">
            Full Stack Developer | Java | React | SQL
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Siddharth Boya
          </h1>

          <p className="text-gray-300 max-w-xl mb-8 leading-7">
            Computer Science Engineering student passionate about building scalable real-world applications using Java, React, SQL, and Spring Boot.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-80 transition"
              href="/resume.pdf"
              download
            >
              Download Resume
            </a>

            <a
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              href="#skills"
            >
              View Skills
            </a>
          </div>
        </motion.div>

        {/* RIGHT VIDEO */}
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

      {/* ================= ABOUT ================= */}
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <div className="max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl p-8">

          <p className="text-gray-300 leading-8 mb-4">
            I am a Computer Science Engineering student passionate about full-stack development and real-world problem solving.
          </p>

          <p className="text-gray-400 leading-7 mb-4">
            I specialize in Java, React, SQL, and backend systems using Spring Boot. I focus on clean UI, scalable architecture, and performance.
          </p>

          <p className="text-gray-500 text-sm">
            Goal: Become a strong full-stack developer and build impactful software products.
          </p>

        </div>

      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="h-screen snap-start flex flex-col justify-center px-6 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="max-w-3xl mx-auto w-full space-y-6">

          {skills.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-gray-400">{s.level}%</span>
              </div>

              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="h-screen snap-start flex flex-col justify-center px-6 md:px-20 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* PROJECT 1 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition">

            <img
              src="/project1.png"
              alt="Project 1"
              className="rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">Tourism Guide</h3>
            <p className="text-gray-400">
              Travel planning system using web technologies
            </p>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition">

            <img
              src="/project2.png"
              alt="Project 2"
              className="rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">Rainfall Prediction</h3>
            <p className="text-gray-400">
              Machine learning model using Random Forest
            </p>
          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center px-6">

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

          <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 flex justify-between">
            <span className="text-gray-400">LinkedIn</span>
            <a className="text-blue-400" href="#">Visit Profile →</a>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 flex justify-between">
            <span className="text-gray-400">GitHub</span>
            <a className="text-blue-400" href="#">View Projects →</a>
          </div>

        </div>

      </section>

    </main>
  );
}