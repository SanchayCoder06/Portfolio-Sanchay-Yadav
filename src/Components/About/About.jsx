import React from "react";

const About = () => {
  return (
    // SECTION WRAPPER (important for navigation + spacing)
    <section id="about" className="py-20 md:py-28 bg-transparent">
      
      {/* Main Card Container */}
      <div className="max-w-7xl mx-auto text-white overflow-hidden bg-black/30 shadow-xl rounded-lg p-8 md:p-12">

        <div className="w-full">
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 justify-center">

            {/* LEFT: Languages & Tools */}
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-gray-500/30 h-full">

                {/* Languages */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                    Languages
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    <SkillImage src="https://cdn-icons-png.flaticon.com/512/919/919854.png" name="Java" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjtz6sSjtFDP_LlqZUmfOwM4lDD8mn2SMdg&s" name="C++" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdGJUTfYBgXhsADa1SnJ3QcSnbaQCv2IguQ&s" name="Python" />
                    <SkillImage src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" name="HTML5" />
                    <SkillImage src="https://cdn.dribbble.com/userupload/20020796/file/original-b78639451a047ff5d6085fe5d5b4073c.png" name="CSS3" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cvDwu6u48GUXeh-QG5JC1iA-IiTLwKLZoA&s" name="JavaScript" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZDp9FHrjfeJUMVQUOuLss5bUzT0QGWcaZA&s" name="React.js" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZqjK6WoRuquE9LSQzXaIL_ixJFzg0YPulw&s" name="SQL" />
                    
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                    Tools & Frameworks
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    <SkillImage src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git" />
                     <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BLa_d1SN9EELEOi0Zy_S6MZbmRtqZpknxA&s" name="Vercel" />
                    <SkillImage src="https://images.icon-icons.com/3053/PNG/512/microsoft_visual_studio_code_macos_bigsur_icon_189957.png" name="VS Code" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s" name="Figma" />
                    <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgHWDyjwN9qZsPChFzc5PRfOOOqbfgXqR3w&s" name="Tailwind CSS" />
                    <SkillImage src="https://img.appmaster.io/p/6sYOW9pi7Bc/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be26c-8356-7b5c-b0a6-d580eede0309/019be26c83.webp" name="AWS" />
                    <SkillImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/250px-Microsoft_Azure.svg.png" name="Azure" />
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: Skill Descriptions */}
            <div className="lg:w-2/3">
              <ul className="flex flex-col gap-8 w-full">

                {/* Frontend */}
                <li className="flex flex-col sm:flex-row items-center gap-6 bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-gray-500/30 hover:scale-105 transition duration-300">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-react-icon-svg-png-download-282599.png"
                    alt="Frontend"
                    className="w-28 h-28 rounded-full object-cover border-4 border-indigo-400"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Frontend Developer
                    </h3>
                    <p className="text-sm md:text-md text-gray-300 mt-2">
                      I'm a front-end developer focused on building intuitive and engaging digital experiences using React, Tailwind CSS, and modern web technologies.
                    </p>
                  </div>
                </li>

                {/* Azure */}
                <li className="flex flex-col sm:flex-row items-center gap-6 bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-gray-500/30 hover:scale-105 transition duration-300">
                  <img
                    src="https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/05/95baa365-fedb-4d3c-8b1f-22735e3bb77a.webp"
                    alt="Azure"
                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-400"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Microsoft Azure Foundations
                    </h3>
                    <p className="text-sm md:text-md text-gray-300 mt-2">
                      Certified in Azure Data Fundamentals with knowledge of cloud services, databases, and data-driven applications.
                    </p>
                  </div>
                </li>

                {/* DSA */}
                <li className="flex flex-col sm:flex-row items-center gap-6 bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-gray-500/30 hover:scale-105 transition duration-300">
                  <img
                    src="https://www.shutterstock.com/image-vector/dsa-letter-logo-design-illustration-600nw-2309157673.jpg"
                    alt="DSA"
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-400"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Data Structures & Algorithms
                    </h3>
                    <p className="text-sm md:text-md text-gray-300 mt-2">
                      Strong problem-solving skills using C++, focusing on writing efficient and optimized code.
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Image Component
const SkillImage = ({ src, name }) => (
  <div className="flex flex-col items-center gap-2 group">
    <img
      src={src}
      alt={name}
      className="h-12 w-12 object-contain bg-black/30 rounded-lg p-1 group-hover:scale-110 transition"
    />
    <span className="text-xs text-gray-300 group-hover:text-white">
      {name}
    </span>
  </div>
);

export default About;