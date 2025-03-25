import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "@assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home One", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const location = useLocation();

  return (
<footer className="bg-[#f5f5ef] text-gray-800 py-8 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-6 md:gap-8">
    {/* Logo & About */}
    <div>
      <Link
        to="/"
        className="flex items-center text-2xl text-[#8f5735] font-serif"
      >
        <img src={Logo} alt="Logo" className="w-12 h-12 mr-3" />
        Satva Living
      </Link>
      <p className="mt-3 text-sm opacity-80 leading-relaxed">
        At Satva Living, we believe every space has a story to tell. Established
        with a passion for design and an eye for detail, we specialize in
        creating interiors that inspire and captivate.
      </p>
    </div>

    {/* Useful Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3 md:ml-4 mt-4 text-[#8f5735]">
        Useful Links
      </h3>
      <ul className="space-y-4 md:ml-4 text-sm flex flex-col">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`relative text-gray-800 pb-2 transition-colors duration-300 ease-in-out ${
              location.pathname === link.path
                ? "text-[#8f5735]"
                : "hover:text-[#8f5735]"
            }`}
          >
            {link.name}
            {/* Dotted Border with 80% Width */}
            <span className="absolute left-0 bottom-0 h-0 w-[80%] border-b-[1.2px] border-dotted border-[#8f5735] transition-all duration-300"></span>
          </Link>
        ))}
      </ul>
    </div>

    {/* Social Media Section */}
    <div className="relative">
      <h3 className="text-lg font-semibold mb-3 my-4 text-[#8f5735]">
        Social Media
      </h3>
      <div className="space-y-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm opacity-90 hover:underline"
        >
          <FaFacebook
            size={26}
            className="text-gray-700 hover:text-[#8f5735]"
          />
          <span>
            <span className="text-[#8f5735]">@facebook</span> all share them
            with me baby said inspet.
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm opacity-90 hover:underline"
        >
          <FaInstagram
            size={26}
            className="text-gray-700 hover:text-[#8f5735]"
          />
          <span>
            <span className="text-[#8f5735]">@satva_living_designs</span> all
            share them with me baby said inspet.
          </span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm opacity-90 hover:underline"
        >
          <FaTwitter
            size={26}
            className="text-gray-700 hover:text-[#8f5735]"
          />
          <span>
            <span className="text-[#8f5735]">@interior</span> all share them
            with me baby said inspet.
          </span>
        </a>
      </div>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="text-lg font-semibold mb-3 my-4 text-[#8f5735]">
        Contact Us
      </h3>
      <a
  href="https://www.google.com/maps?q=Delhi+NCR,+India"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm flex items-center gap-2 my-4 opacity-90 hover:text-[#8f5735] transition"
>
  <FaMapMarkerAlt size={18} />
  Delhi NCR, India
</a>

      <a
        href="mailto:design.satva@gmail.com"
        className="text-sm flex items-center gap-2 my-4 opacity-90 hover:text-[#8f5735] transition"
      >
        <FaEnvelope size={18} /> design.satva@gmail.com
      </a>
      <a
        href="tel:+918527585779"
        className="text-sm flex items-center gap-2 my-4 opacity-90 hover:text-[#8f5735] transition"
      >
        <FaPhone size={18} className="rotate-90"/> +91 8527585779
      </a>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
    <p>2024 © Copyright - All Rights Reserved.</p>
    <div className="flex space-x-4 mt-3 md:mt-0">
      {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map(
        (Icon, index) => (
          <Icon
            key={index}
            className="cursor-pointer hover:text-[#8f5735] transition"
            size={24}
          />
        )
      )}
    </div>
  </div>
</footer>

  );
};

export default Footer;
