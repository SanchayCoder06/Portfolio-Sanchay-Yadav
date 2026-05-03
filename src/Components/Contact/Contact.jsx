import React from 'react';

// Reusable component for each social media link, now using an <img> tag
const SocialLink = ({ href, imgSrc, name, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative group flex items-center justify-center w-full h-24 sm:h-32 rounded-xl bg-black bg-opacity-25 border border-gray-500 border-opacity-30 overflow-hidden transition-transform duration-300 transform hover:scale-105`}
  >
    <div className={`absolute top-0 left-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${colorClass}`}></div>
    <div className="relative z-10 flex flex-col items-center gap-2">
      {/* Replaced the icon component with a standard image tag */}
      <img src={imgSrc} alt={name} className="w-10 h-10 object-contain" />
      <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{name}</span>
    </div>
  </a>
);

const Contact = () => {
  // Updated this array to use image URLs (imgSrc) instead of icon components
  const socialHandles = [
    { name: 'GitHub', href: '#', imgSrc: 'https://www.pngmart.com/files/23/Github-Logo-PNG-Photo-1.png', colorClass: 'bg-gray-400' },
    { name: 'LinkedIn', href: '#', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png', colorClass: 'bg-blue-500' },
    { name: 'X', href: '#', imgSrc: 'https://i.pinimg.com/474x/10/64/cf/1064cfa735ef66dc7e5087ffb7e8daa8.jpg', colorClass: 'bg-sky-400' },
    { name: 'Instagram', href: '#', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', colorClass: 'bg-pink-500' },
    { name: 'Wattpad', href: '#', imgSrc: 'https://cdn-icons-png.flaticon.com/512/3015/3015819.png', colorClass: 'bg-orange-500' },
  ];

  return (
    <div className="text-white overflow-hidden bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12 mt-12">
      <div className="w-full">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row gap-12 justify-center">

          {/* Left Side: Contact Form */}
          <div className="lg:w-1/2 bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-8 border border-gray-500 border-opacity-30">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Send me a message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full bg-slate-800 bg-opacity-50 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full bg-slate-800 bg-opacity-50 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" className="w-full bg-slate-800 bg-opacity-50 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Social Media Handles */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left text-indigo-300">Connect with me</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialHandles.map(social => (
                <SocialLink key={social.name} {...social} />
              ))}
              {/* This is an empty item to help with grid layout on medium screens if you have 5 items */}
               <div className="hidden sm:block lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

