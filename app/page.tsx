export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-between px-10 overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">

          <p className="text-gray-400 text-lg mb-3">
            Computer Science Graduate
          </p>

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Jayasiddharth <br /> Boya
          </h1>

          <p className="text-gray-300 text-xl max-w-xl leading-8 mb-8">
            Passionate about Java, SQL, Web Technologies,
            and building modern IT solutions.
          </p>

          {/* CONTACT BUTTON */}
          <div className="flex gap-4">

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* VIDEO SECTION */}
        <div className="flex-1 flex justify-center z-10">

          <div className="w-[420px] h-[650px] rounded-[40px] overflow-hidden shadow-2xl border border-white/10">

            <video
              id="heroVideo"
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-center px-10">

        <h2 className="text-5xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 text-xl max-w-3xl leading-9">
          I am a Computer Science graduate passionate about
          Java, SQL, frontend technologies, and modern web development.
          I enjoy solving problems and continuously learning new technologies.
        </p>

      </section>

      {/* SKILLS SECTION */}
      <section className="min-h-screen bg-black flex flex-col justify-center px-10">

        <h2 className="text-5xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-3xl">

            <h3 className="text-2xl font-semibold mb-4">
              Programming
            </h3>

            <p className="text-gray-400 leading-8">
              Java <br />
              SQL <br />
              JavaScript
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">

            <h3 className="text-2xl font-semibold mb-4">
              Web Technologies
            </h3>

            <p className="text-gray-400 leading-8">
              HTML <br />
              CSS <br />
              React <br />
              Next.js
            </p>

          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">

            <h3 className="text-2xl font-semibold mb-4">
              Tools
            </h3>

            <p className="text-gray-400 leading-8">
              VS Code <br />
              GitHub <br />
              MySQL
            </p>

          </div>

        </div>

      </section>

      {/* EDUCATION SECTION */}
      <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-10">

        <div className="bg-zinc-900 p-10 rounded-3xl text-center max-w-3xl">

          <h2 className="text-5xl font-bold mb-8">
            Education
          </h2>

          <h3 className="text-3xl font-semibold mb-4">
            B.Tech in Computer Science
          </h3>

          <p className="text-gray-400 text-xl mb-3">
            Sree Vidyanikethan Engineering College
          </p>

          <p className="text-gray-500">
            CGPA: 8.0
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen bg-black flex flex-col items-center justify-center px-10 text-center"
      >

        <h2 className="text-5xl font-bold mb-10">
          Contact Me
        </h2>

        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/10 max-w-2xl w-full">

          <div className="space-y-6 text-xl text-gray-300">

            <p>
              📧 Email:siddharthsiddharth279@gmail.com
            </p>

            <p>
              📱 Phone: +91 9133228845
            </p>

            <p>
              💼 LinkedIn:
              <a
                href="https://www.linkedin.com/in/jaya-siddharth-boya-986882294/"
                target="_blank"
                className="text-blue-400 ml-2 hover:underline"
              >
                View Profile
              </a>
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}