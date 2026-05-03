import React from "react";

// Reusable Certificate Card
const CertificateCard = ({ imgSrc, title, link }) => (
  <div className="group perspective">
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-500 group-hover:scale-105"
    >
      <div className="relative bg-black/20 backdrop-blur-lg rounded-xl border border-gray-500/30 overflow-hidden">
        
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg truncate">
            {title}
          </h3>
        </div>

      </div>
    </a>
  </div>
);

const Certifications = () => {
  const certificates = [
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D2DAQG33Zm5Moq2Zw/profile-treasury-document-images_1920/B4DZecyWoJGkAw-/1/1750682138922?e=1778716800&v=beta&t=bZ81mXVLSt2cfkWxMXz2YB4Jc3bPjUbegNhTda43QA8",
      title: "Microsoft Azure Data Fundamentals",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQG33Zm5Moq2Zw/profile-treasury-document-images_1920/B4DZecyWoJGkAw-/1/1750682138922?e=1778716800&v=beta&t=bZ81mXVLSt2cfkWxMXz2YB4Jc3bPjUbegNhTda43QA8"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D2DAQHdJyQHoSX0lQ/profile-treasury-document-images_1920/B4DZgALu3THMAw-/1/1752349738232?e=1778716800&v=beta&t=lLVk5jQKyna9dJcpn2JbNx2GZWqHXZHeWR_g3o0RHH8",
      title: "MERN Full Stack Development",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQHdJyQHoSX0lQ/profile-treasury-document-images_1920/B4DZgALu3THMAw-/1/1752349738232?e=1778716800&v=beta&t=lLVk5jQKyna9dJcpn2JbNx2GZWqHXZHeWR_g3o0RHH8"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D2DAQG0BFqw-zSP5g/profile-treasury-document-images_1920/B4DZec11TFH4Ao-/1/1750683054785?e=1778716800&v=beta&t=uJA4y-noHNM0gqg0ZxNuTC89RfviWT69my6bArCahQI",
      title: "NPTEL Machine Learning",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQG0BFqw-zSP5g/profile-treasury-document-images_1920/B4DZec11TFH4Ao-/1/1750683054785?e=1778716800&v=beta&t=uJA4y-noHNM0gqg0ZxNuTC89RfviWT69my6bArCahQI"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D2DAQE783Eg0cIpig/profile-treasury-document-cover-images_480/B4DZfBrDJ8H4Aw-/0/1751300978650?e=1778436000&v=beta&t=BGnjxGeeO3ik1oWGrY2RTAx6sz0yVnYjU99fYm6nn4M",
      title: "Deloitte Data Analytics",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQE783Eg0cIpig/profile-treasury-document-cover-images_480/B4DZfBrDJ8H4Aw-/0/1751300978650?e=1778436000&v=beta&t=BGnjxGeeO3ik1oWGrY2RTAx6sz0yVnYjU99fYm6nn4M"
    },
    {
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D2DAQHtSMkOdYE2Fg/profile-treasury-document-images_1920/B4DZlbPJGhJgAw-/1/1758172322805?e=1778716800&v=beta&t=S1eYwt0WJx7tbx5Wovk04yhudfKdY6JHRMQlHz6oUd0",
      title: "Google Networking",
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQHtSMkOdYE2Fg/profile-treasury-document-images_1920/B4DZlbPJGhJgAw-/1/1758172322805?e=1778716800&v=beta&t=S1eYwt0WJx7tbx5Wovk04yhudfKdY6JHRMQlHz6oUd0"
    },
    {
      imgSrc: "https://moonshot.scaler.com/s/image/li/SAoKxRLhj6?scope=body",
      title: "Java Fundamentals - Scaler",
      link: "https://moonshot.scaler.com/s/image/li/SAoKxRLhj6?scope=body"
    }
  ];

  return (
    // ✅ SECTION WRAPPER (IMPORTANT FOR NAVBAR SCROLL)
    <section id="certifications" className="py-20 md:py-28">

      <div className="max-w-7xl mx-auto text-white bg-black/30 shadow-xl rounded-lg p-8 md:p-12">

        <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">
          My Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              imgSrc={cert.imgSrc}
              title={cert.title}
              link={cert.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;