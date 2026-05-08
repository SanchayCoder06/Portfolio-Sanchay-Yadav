import React, { useState } from 'react';

// Reusable component for each social media link
const SocialLink = ({ href, imgSrc, name, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group flex items-center justify-center w-full h-24 sm:h-32 rounded-xl bg-black bg-opacity-25 border border-gray-500 border-opacity-30 overflow-hidden transition-transform duration-300 transform hover:scale-105"
  >
    <div
      className={`absolute top-0 left-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${colorClass}`}
    ></div>

    <div className="relative z-10 flex flex-col items-center gap-2">
      <img
        src={imgSrc}
        alt={name}
        className="w-10 h-10 object-contain"
      />

      <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  </a>
);

const Contact = () => {

  // ============================
  // STATES
  // ============================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");


  // ============================
  // HANDLE CHANGE
  // ============================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // ============================
  // HANDLE SUBMIT
  // ============================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccessMessage("");

    setErrorMessage("");

    try {

 // Change the URL to just "/api/contact"
const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), // Ensure you are passing your data here
});

      const data = await response.json();

      if (data.success) {

        setSuccessMessage("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {

        setErrorMessage("Failed to send message.");

      }

    } catch (error) {

      setErrorMessage("Something went wrong.");

    }

    setLoading(false);

  };


  // ============================
  // SOCIAL LINKS
  // ============================

  const socialHandles = [
    {
      name: 'GitHub',
      href: 'https://github.com/SanchayCoder06',
      imgSrc: 'https://www.pngmart.com/files/23/Github-Logo-PNG-Photo-1.png',
      colorClass: 'bg-gray-400'
    },

    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sanchay-yadav-778abb27b/',
      imgSrc: 'https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=s256-rw',
      colorClass: 'bg-blue-500'
    },

    {
      name: 'X',
      href: 'https://x.com/sanchay_y06',
      imgSrc: 'https://i.pinimg.com/474x/10/64/cf/1064cfa735ef66dc7e5087ffb7e8daa8.jpg',
      colorClass: 'bg-sky-400'
    },

    {
      name: 'Instagram',
      href: 'https://www.instagram.com/y_sanchay06?igsh=MXVucDdsbGV1dTFuYw==',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      colorClass: 'bg-pink-500'
    },

    {
      name: 'Wattpad',
      href: '#',
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/3015/3015819.png',
      colorClass: 'bg-orange-500'
    },
  ];


  return (

    <section id="contact" className="py-20 md:py-28">

      <div className="text-white overflow-hidden bg-black shadow-xl mx-2 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 mt-12">

        <div className="w-full">

          {/* HEADING */}

          <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">
            Get In Touch
          </h2>


          <div className="flex flex-col lg:flex-row gap-12 justify-center">


            {/* ============================
                LEFT SIDE - FORM
            ============================ */}

            <div className="lg:w-1/2 bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-gray-500 border-opacity-30">

              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
                Send me a message
              </h3>


              <form onSubmit={handleSubmit} className="space-y-6">


                {/* NAME */}

                <div>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 bg-opacity-50 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 bg-opacity-50 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 bg-opacity-50 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                  ></textarea>

                </div>


                {/* BUTTON */}

                <div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                      loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 hover:scale-105"
                    }`}
                  >

                    {loading ? "Sending..." : "Send Message"}

                  </button>

                </div>


                {/* SUCCESS MESSAGE */}

                {successMessage && (

                  <p className="text-green-400 text-center font-medium">
                    {successMessage}
                  </p>

                )}


                {/* ERROR MESSAGE */}

                {errorMessage && (

                  <p className="text-red-400 text-center font-medium">
                    {errorMessage}
                  </p>

                )}

              </form>

            </div>



            {/* ============================
                RIGHT SIDE - SOCIAL LINKS
            ============================ */}

            <div className="lg:w-1/2">

              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left text-indigo-300">
                Connect with me
              </h3>


              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {socialHandles.map((social) => (

                  <SocialLink
                    key={social.name}
                    {...social}
                  />

                ))}

                <div className="hidden sm:block lg:hidden"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;