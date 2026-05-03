import React from "react";
const About = () => {
  return (
    // The main container for the about section
    <div className="text-white overflow-hidden bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12">
      <div className="w-full">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          
          {/* Left Partition: Languages & Tools */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-6 border border-gray-500 border-opacity-30 h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  <SkillImage src="https://cdn-icons-png.flaticon.com/512/919/919854.png" name="Java" />
                  <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjtz6sSjtFDP_LlqZUmfOwM4lDD8mn2SMdg&s" name="C++" />
                  <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdGJUTfYBgXhsADa1SnJ3QcSnbaQCv2IguQ&s" name="Python" />
                  <SkillImage src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" name="HTML5" />
                  <SkillImage src="https://cdn.dribbble.com/userupload/20020796/file/original-b78639451a047ff5d6085fe5d5b4073c.png?resize=752x&vertical=center" name="CSS3" />
                  <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cvDwu6u48GUXeh-QG5JC1iA-IiTLwKLZoA&s" name="JavaScript" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                  <SkillImage src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git" />
                  <SkillImage src="https://images.icon-icons.com/3053/PNG/512/microsoft_visual_studio_code_macos_bigsur_icon_189957.png" name="VS Code" />
                  <SkillImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s " name="Figma" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Partition: Skill Descriptions */}
          <div className="lg:w-2/3">
            <ul className="flex flex-col gap-8 w-full">
              {/* Skill Box 1: Frontend Developer */}
              <li className="flex flex-col sm:flex-row items-center gap-6 bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-6 border border-gray-500 border-opacity-30 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-react-icon-svg-png-download-282599.png?f=webp"
                  alt="Frontend"
                  className="w-28 h-28 rounded-full object-cover flex-shrink-0 border-4 border-indigo-400"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Frontend Developer
                  </h3>
                  <p className="text-sm md:text-md leading-relaxed text-gray-300">
                    I'm a front-end developer focused on building intuitive and
                    engaging digital experiences. With a strong foundation in
                    HTML, CSS, and JavaScript, I specialize in using React to
                    create dynamic and interactive user interfaces. I have a
                    passion for clean design and love using Tailwind CSS to build
                    beautiful, responsive layouts efficiently.
                  </p>
                </div>
              </li>

              {/* Skill Box 2: Microsoft Azure */}
              <li className="flex flex-col sm:flex-row items-center gap-6 bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-6 border border-gray-500 border-opacity-30 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://azure.microsoft.com/en-us/blog/wp-content/uploads/2021/05/95baa365-fedb-4d3c-8b1f-22735e3bb77a.webp"
                  alt="Microsoft Azure"
                  className="w-28 h-28 rounded-full object-cover flex-shrink-0 border-4 border-blue-400"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Microsoft Azure Foundations
                  </h3>
                  <p className="text-sm md:text-md leading-relaxed text-gray-300">
                    As a developer, I'm not only focused on the UI but also on the data that drives it. I hold the Microsoft Certified: Azure Data Fundamentals (DP-900) certification, giving me a strong understanding of relational/non-relational databases and cloud services like Azure SQL and Cosmos DB.
                  </p>
                </div>
              </li>

              {/* Skill Box 3: DSA with C++ */}
              <li className="flex flex-col sm:flex-row items-center gap-6 bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-6 border border-gray-500 border-opacity-30 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://www.shutterstock.com/image-vector/dsa-letter-logo-design-illustration-600nw-2309157673.jpg"
                  alt="Data Structures & Algorithms"
                  className="w-28 h-28 rounded-full object-cover flex-shrink-0 border-4 border-gray-400"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold leading-normal">
                    Data Structures & Algorithms
                  </h3>
                  <p className="text-sm md:text-md leading-relaxed text-gray-300">
                    I believe great software is built on solid CS principles. I've dedicated myself to mastering DSA using C++, sharpening my problem-solving abilities to write code that is not just functional, but also highly efficient and scalable.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for skill images to avoid repetition
const SkillImage = ({ src, name }) => (
  <div className="relative group flex flex-col items-center gap-2">
    <img 
      src={src} 
      alt={name} 
      className="h-12 w-12 object-contain bg-black bg-opacity-25 rounded-lg p-1 transition-transform duration-300 transform group-hover:scale-110" 
    />
    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{name}</span>
  </div>
);

export default About;