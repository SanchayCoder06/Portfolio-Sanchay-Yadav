import React from 'react';

// Reusable component for each project card
const ProjectCard = ({ imgSrc, title, description, liveLink, repoLink }) => (
  <div className="bg-black bg-opacity-20 backdrop-blur-lg rounded-xl border border-gray-500 border-opacity-30 overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-full h-48 object-cover" 
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">{description}</p>
      <div className="mt-6 flex gap-4">
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Live Demo
        </a>
        <a 
          href={repoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
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
      description: "A fully responsive personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and certifications. Features a modern design with smooth scrolling and interactive UI elements.",
      liveLink: "#", // Add your live site link
      repoLink: "#"  // Add your GitHub repo link
    },
    {
      imgSrc: "Screenshot (1).png",
      title: "Crop Detection Using Machine Learning",
      description: "Crop disease detection using machine learning enables fast and accurate identification of plant diseases from leaf images. It helps farmers take timely action by providing diagnosis, treatment suggestions, and risk analysis. This technology improves crop yield, reduces losses, and supports smarter, data-driven agriculture.",
      liveLink: "#",
      repoLink: "#"
    },
    {
      imgSrc: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Hotel Booking System",
      title: "Hotel Booking System  ",
      description: "A simple and clean weather app that fetches and displays current weather data from a third-party API based on user input. Demonstrates asynchronous JavaScript and API integration.",
      liveLink: "#",
      repoLink: "#"
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRirTa9nCp9gZqdI_BOI8OHsTO51PigIjbw&s",
      title: "Netflix Clone",
      description: "Recreated the immersive Netflix browsing experience using HTML & CSS. This clone fetches and displays category rows, hover effects, and a responsive design for all devices.",
      liveLink: "#",
      repoLink: "https://github.com/SanchayCoder06/My-first-project"
    }
  ];

  return (
      <section id="projects" className="py-20 md:py-28">
    <div className="text-white overflow-hidden bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12 mt-12">
      <div className="w-full">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
