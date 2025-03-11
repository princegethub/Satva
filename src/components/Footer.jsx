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
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#f5f5ef] text-gray-800 py-6 pt-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-8">
        {/* Logo & About */}
        <div>
          <Link
            to="/"
            className="flex items-center text-2xl text-[#8f5735] font-serif"
          >
            <img src={Logo} alt="Logo" className="w-12 h-12 mr-3" />
            Satva
          </Link>
          <p className="mt-3 text-sm opacity-80 leading-relaxed">
            Bringing excellence and innovation to the travel industry with
            world-class services.
          </p>
          {/* Google Map iFrame */}
          <div className="mt-5">
            <iframe
              className="w-full h-40 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565131531894!3d-37.81732774201498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df7f6ffbd%3A0x2a0c8f044a524d56!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1641739530655!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 md:ml-12 mt-4 text-[#8f5735]">
            Useful Links
          </h3>
          <ul className="space-y-4  md:ml-12 text-sm flex flex-col">
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
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 my-4 text-[#8f5735]">
            Contact Us
          </h3>

          {/* Map Clickable */}
          <a
            href="https://www.google.com/maps?q=123+Street,+City,+Country"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center gap-2 my-4 opacity-90 hover:text-[#8f5735] transition"
          >
            <FaMapMarkerAlt size={18} /> 123 Street, City, Country
          </a>

          {/* Email Clickable */}
          <a
            href="mailto:contactprince24.7@gmail.com"
            className="text-sm flex items-center gap-2 my-4 opacity-90 hover:text-[#8f5735] transition"
          >
            <FaEnvelope size={18} /> contactprince24.7@gmail.com
          </a>

          {/* Phone Clickable */}
          <a
            href="tel:+919372496705"
            className="text-sm flex items-center gap-2 my-4 opacity-90 hover:text-[#8f5735] transition"
          >
            <FaPhone size={18} /> +91 937 249 6705
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 my-4 text-[#8f5735]">
            Subscribe
          </h3>
          <p className="text-sm opacity-80">
            Join our mailing list for the latest updates and promotions.
          </p>
          <div className="mt-3">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 text-gray-800 focus:outline-none border-b-2 border-[#8f5735] placeholder-transparent"
              />
              <label className="absolute left-2 top-2 text-gray-500 text-sm">
                Your email
              </label>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              We'll never share your email with anyone else.
            </p>
            <button className="bg-[#8f5735] cursor-pointer text-white px-4 py-2 hover:bg-[#704226] transition mt-3 w-full rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="cursor-pointer hover:text-[#8f5735] transition"
                size={20}
              />
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
