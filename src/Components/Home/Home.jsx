import React from "react";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter mb-10">
          Hello' I am Sanchay👋
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Tech enthusiast with a strong foundation in computer science,
          front-end development, and c++ programming. Passionate about building
          real-world applications, continuously learning, and contributing to
          meaningful tech projects. Currently in my Final year of B.Tech CSE,
          actively exploring new tools and technologies in web development.
        </p>
        
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded 3x1 bg-[#465697] " >Resume</button>
      </div>
      <div className="mt-12 md:mt-0 md:ml-12 flex-shrink-0">
            <img 
              src="profile.jpeg" 
              alt="Profile" 
              className="w-64 h-64 md:w-80 md:h-80 
              lg:w-96 lg:h-96 rounded-full object-cover border-[10px] border-purple-400 shadow-2xl object-center"/>
          </div>
    </div>
  );
};

export default Home;
