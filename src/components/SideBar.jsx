import React from "react";
import { X, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@assets/logo.png"; // ✅ Apna logo import karo

const Sidebar = ({ menuOpen, setMenuOpen, navLinks, socialIcons }) => {
  return (
    <div
      className={`fixed top-0 block md:hidden right-0 h-full w-64 bg-[#f5f5ef] text-gray-700 transform ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 shadow-lg flex flex-col`}
    >
      {/* ❌ Close Button */}
      <button
        className="absolute cursor-pointer top-5 right-5 text-gray-700"
        onClick={() => setMenuOpen(false)}
      >
        <X size={32} />
      </button>

      {/* 🔥 Logo Section */}
      <div className="flex items-center justify-center mt-6 mb-4">
        <img src={Logo} alt="Logo" className="w-20 h-20" />
      </div>

      {/* 🌟 Navigation Links */}
      <div className="flex flex-col px-6 mt-2">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="text-lg font-medium py-3 border-b border-gray-300 hover:text-[#8f5735] transition-all duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* 🌍 Social Media Icons */}
      <div className="flex flex-col px-6 mt-4">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg font-medium py-3 border-b border-gray-300 hover:text-[#8f5735] transition-all duration-300 ease-in-out"
          >
            {social.icon} {social.name}
          </a>
        ))}
      </div>

      {/* 📞 Contact Section (Animated Hover Effect) */}
      <div className="bg-gray-200 py-4 px-6 mt-auto text-left">
  <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
  <a
    href="mailto:contactprince24.7@gmail.com"
    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8f5735] transition-all duration-300"
  >
    <Mail size={18} /> contactprince24.7@gmail
  </a>
  <a
    href="tel:+919372496705"
    className="flex items-center gap-2 text-sm text-gray-600 mt-2 hover:text-[#8f5735] transition-all duration-300"
  >
    <Phone size={18} /> +91 9372496705
  </a>
</div>

    </div>
  );
};

export default Sidebar;
