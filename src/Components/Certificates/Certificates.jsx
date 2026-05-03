import React from "react";

// Reusable component for each certificate card
const CertificateCard = ({ imgSrc, title, link }) => (
  <div className="group perspective">
    <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="block transform-style-3d transition-transform duration-500 group-hover:rotate-y-6 group-hover:-rotate-x-6 group-hover:scale-105">
      <div className="relative bg-black bg-opacity-20 backdrop-blur-lg rounded-xl border border-gray-500 border-opacity-30 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-64
           object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="p-4 absolute bottom-0 left-0 right-0">
          <h3 className="text-white font-semibold text-lg leading-tight truncate">{title}</h3>
        </div>
      </div>
    </a>
  </div>
);

const Certifications = () => {
  const certificates = [
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D22AQGy3ebh3kDjag/feedshare-shrink_2048_1536/B4DZeceQN6HMAo-/0/1750676867527?e=1759968000&v=beta&t=1lJ6mms7KKZtvSg-B8_rgBXjDdFiVlrVoRjpJeYIaYw",
      title: "Microsoft Certified: Azure Data Fundamentals",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQGy3ebh3kDjag/feedshare-shrink_2048_1536/B4DZeceQN6HMAo-/0/1750676867527?e=1759968000&v=beta&t=1lJ6mms7KKZtvSg-B8_rgBXjDdFiVlrVoRjpJeYIaYw" // Add your verification link here
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D22AQF1HS19-WtmuA/feedshare-shrink_1280/B4DZgAKqUIHAAk-/0/1752349452809?e=1759968000&v=beta&t=ObXg82PkIfOOBYrzicj7RUoUBJw2g7rOfw7STY2Jsl4",
      title: "Mern Full Stack Development",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQF1HS19-WtmuA/feedshare-shrink_1280/B4DZgAKqUIHAAk-/0/1752349452809?e=1759968000&v=beta&t=ObXg82PkIfOOBYrzicj7RUoUBJw2g7rOfw7STY2Jsl4"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D22AQHGNmUepLSWCA/feedshare-shrink_2048_1536/B4DZec0qj5G8Ao-/0/1750682743072?e=1759968000&v=beta&t=5Yyv91cnb6m0LsScf8_K__CGmJtd1WrBBFDRwJpiG64",
      title: "NPTEL Introduction to Machine Learning",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQHGNmUepLSWCA/feedshare-shrink_2048_1536/B4DZec0qj5G8Ao-/0/1750682743072?e=1759968000&v=beta&t=5Yyv91cnb6m0LsScf8_K__CGmJtd1WrBBFDRwJpiG64"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D22AQG4hMKxVUWO2Q/feedshare-shrink_2048_1536/B4DZfBqmpTH4Ao-/0/1751300861562?e=1759968000&v=beta&t=MVJk7rQLsJzzcWvhVV8Rq-GR2xVCByIjZslxDMGdapk",
      title: "Deloitte Data Analytics Job Simulation with Forage",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQG4hMKxVUWO2Q/feedshare-shrink_2048_1536/B4DZfBqmpTH4Ao-/0/1751300861562?e=1759968000&v=beta&t=MVJk7rQLsJzzcWvhVV8Rq-GR2xVCByIjZslxDMGdapk"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D5622AQF7OjOWYAg0bw/feedshare-shrink_1280/B56Zec7GQIG0Ao-/0/1750684427953?e=1759968000&v=beta&t=qBB54mySvkBVV6paYBPuWhl16t9_ViR3qyeCvGFN_8I",
      title: "The Bits and Bytes of Computer Networking from Google",
      link: "https://media.licdn.com/dms/image/v2/D5622AQF7OjOWYAg0bw/feedshare-shrink_1280/B56Zec7GQIG0Ao-/0/1750684427953?e=1759968000&v=beta&t=qBB54mySvkBVV6paYBPuWhl16t9_ViR3qyeCvGFN_8I"
    },
    {
      imgSrc: "https://moonshot.scaler.com/s/image/li/SAoKxRLhj6?scope=body",
      title: " Java Course - Mastering the Fundamentals from Scaler",
      link: "https://moonshot.scaler.com/s/image/li/SAoKxRLhj6?scope=body"
    }
  ];

  return (
    <div className="text-white overflow-hidden bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12 mt-12">
      <div className="w-full">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">My Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} imgSrc={cert.imgSrc} title={cert.title} link={cert.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
