import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIXED LINKS (IMPORTANT)
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-black/90 backdrop-blur-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center text-white relative z-[110]">
        
        {/* Logo */}
  <div className="flex items-center">

  <img
    src="/logo.png"
    alt="Logo"
    className="w-44 h-34 object-contain"
  />

</div>
      

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-blue-400"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
        >
          {isOpen ? <RiCloseLine size={32} /> : <RiMenu2Line size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 h-screen w-full bg-black flex flex-col items-center justify-center z-[105]"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={linkVariants}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;