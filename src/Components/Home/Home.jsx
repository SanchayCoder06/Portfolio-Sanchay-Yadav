import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen w-full bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-[90px] md:pt-[110px]">

      {/* LEFT SIDE (MAIN CONTENT) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hello, I'm <br />
          <span className="text-indigo-400">Sanchay 👋</span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
          Front-End Developer & C++ Programmer
        </h2>

        <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
          I build clean, modern, and responsive web applications. Passionate about 
          solving real-world problems and continuously learning new technologies 
          to create impactful digital experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
            Resume
          </button>
<a href="#projects">
          <button className="border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Projects
          </button></a>
        </div>
      </motion.div>

      {/* RIGHT SIDE (IMAGE) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
      >
        <div className="relative">

          {/* OUTER GLOW RING */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-40"></div>

          {/* INNER RING */}
          <div className="p-[6px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">

            {/* IMAGE CONTAINER */}
            <div className="bg-[#0f172a] rounded-full p-2">
              <img
                src="/profile.jpeg"
                alt="Sanchay"
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full object-cover border-4 border-indigo-400/50"
              />
            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default Home;