import React from 'react';

// Reusable component for each project card
const ProjectCard = ({ imgSrc, title, description, liveLink, repoLink }) => (
  <div className="bg-black/30 backdrop-blur-lg rounded-2xl border border-gray-500/20 overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col">

    {/* Image */}
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-full h-40 sm:h-48 md:h-52 object-cover"
    />

    {/* Content */}
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
        {title}
      </h3>

      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition"
        >
          Live Demo
        </a>

        <a 
          href={repoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 rounded-lg transition"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      imgSrc: "portfolio.png",
      title: "Personal Portfolio Website",
      description: "A fully responsive personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and certifications.",
      liveLink: "https://portfolio-sanchay-yadav.vercel.app/",
      repoLink: "https://github.com/SanchayCoder06/Portfolio-Sanchay-Yadav"
    },
    {
      imgSrc: "Screenshot (1).png",
      title: "Crop Detection Using Machine Learning",
      description: "Detects plant diseases from leaf images and provides insights for better agricultural decisions.",
      liveLink: "#",
      repoLink: "https://github.com/SanchayCoder06/CROP-DISEASE-DETECTION-USING-MACHINE-LEARNING-"
    },
    {
      imgSrc: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Hotel+Booking",
      title: "Hotel Booking System",
      description: "A simple system demonstrating API usage and dynamic data handling.",
      liveLink: "#",
      repoLink: "#"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRirTa9nCp9gZqdI_BOI8OHsTO51PigIjbw&s",
      title: "Netflix Clone",
      description: "Responsive UI clone with category rows and hover effects using HTML & CSS.",
      liveLink: "#",
      repoLink: "https://github.com/SanchayCoder06/My-first-project"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="text-white bg-black/40 shadow-xl mx-2 sm:mx-6 md:mx-20 rounded-xl p-4 sm:p-8 md:p-12">

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;