import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, Facebook, Instagram, Twitter } from "lucide-react";
import Sidebar from "../components/Sidebar";
import SplitText from "../ReactBit/SplitText";

// ✅ Navbar ke links ka data
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

// ✅ Social icons ka data
const socialIcons = [
  { name: "Facebook", icon: <Facebook />, link: "https://facebook.com" },
  { name: "Instagram", icon: <Instagram />, link: "https://instagram.com" },
  { name: "Twitter", icon: <Twitter />, link: "https://twitter.com" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ✅ Current active route get karne ke liye

  return (
    <header className="fixed z-99 min-w-full shadow-lg bg-[#f5f5ef] container mx-auto flex items-center justify-between px-6 sm:px-4 lg:px-12 py-4">
    {/* Logo */}
    <Link to="/" className="flex items-center text-2xl text-[#8f5735] font-serif">
      <img src={Logo} alt="Logo" className="w-12 h-12 mr-2" />
      Satva
    </Link>
  
    {/* Desktop Navigation */}
    <nav className="hidden md:flex space-x-6 lg:space-x-8">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={`relative text-gray-800 transition-colors duration-300 ease-in-out ${
            location.pathname === link.path
              ? "text-[#8f5735]"
              : "hover:text-[#8f5735]"
          }`}
  
        >
          {link.name}
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-[#8f5735] text-[#8f5735] transition-all duration-300 ease-in-out ${
              location.pathname === link.path
                ? "w-full"
                : "w-0 hover:w-full text-[#8f5735]"
            }`}
          ></span>
        </Link>
      ))}
    </nav>
  
    {/* Social Icons */}
    <div className="hidden md:flex space-x-4">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-[#8f5735] hover:shadow-lg text-gray-500 hover:text-[#8f5735]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  
    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-gray-600 cursor-pointer"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <Menu size={32} />
    </button>
  
    {/* Sidebar */}
    <Sidebar
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      navLinks={navLinks}
      socialIcons={socialIcons}
    />
  </header>
  
  );
}

export default Navbar;
