export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20">

        {/* LEFT CONTENT */}
        <div className="flex-1">

          <p className="text-green-400 text-sm mb-2 tracking-wide">
            Available for Internship / Full-Time Roles
          </p>

          <p className="text-gray-400 text-lg mb-3">
            Software Developer | Computer Science Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Jayasiddharth <br /> Boya
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-7">
            I am a software developer specializing in Java, SQL, and modern web technologies.
            I build clean, scalable, and user-focused applications.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            {/* RESUME DOWNLOAD */}
            <a
              href="/resume.pdf"
              download
              className="bg-white text-black px-6 py-3 rounded-full hover:opacity-80 transition"
            >
              ⬇ Download Resume
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT VIDEO */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">

          <div className="w-[320px] md:w-[420px] h-[500px] md:h-[650px] rounded-3xl overflow-hidden border border-white/10">

            <video
              className="w-full h-full object-cover"
              controls
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-center px-10">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg leading-8">
          I am a Computer Science graduate passionate about building real-world applications using Java,
          SQL, and modern web technologies like React and Next.js.
        </p>

      </section>

      {/* SKILLS */}
      <section className="min-h-screen bg-black flex flex-col justify-center px-10">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Programming</h3>
            <p className="text-gray-400">Java, SQL, JavaScript</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Web</h3>
            <p className="text-gray-400">HTML, CSS, React, Next.js</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Tools</h3>
            <p className="text-gray-400">GitHub, VS Code, MySQL</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="min-h-screen bg-zinc-950 flex flex-col justify-center px-10">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* TOURISM */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">

            <h3 className="text-xl font-semibold mb-3">
              Tourism Guide
            </h3>

            <p className="text-gray-400 mb-4">
              Explore tourist places and plan trips easily.
            </p>

            <a
              href="https://github.com/siddu9825/tourism-guide-project"
              target="_blank"
              className="text-blue-400"
            >
              View Code →
            </a>

          </div>

          {/* RAINFALL */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10">

            <h3 className="text-xl font-semibold mb-3">
              Rainfall Prediction
            </h3>

            <p className="text-gray-400 mb-4">
              ML model using Random Forest to predict rainfall.
            </p>

            <a
              href="https://github.com/siddu9825/projects"
              target="_blank"
              className="text-blue-400"
            >
              View Code →
            </a>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-10 bg-black">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-3">
          Email: siddharthsiddharth279@gmail.com
        </p>

        <p className="text-gray-300 mb-3">
          Phone: +91 9133228845
        </p>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-blue-400"
        >
          LinkedIn Profile →
        </a>

      </section>

    </main>
  );
}