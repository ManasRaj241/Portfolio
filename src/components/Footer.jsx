import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaHeart,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/manas-ranjan-satapathy-4a83381a8/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/ManasRaj241",
      label: "GitHub",
    },
    {
      icon: <IoLogoYoutube size={20} />,
      url: "https://www.youtube.com/@manasranjansatapathy5145",
      label: "YouTube",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/manas_ranjan_satapathy_09/",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { text: "Home", to: "Home" },
    { text: "About", to: "About" },
    { text: "Projects", to: "Projects" },
    { text: "Experience", to: "Experiance" },
    { text: "Contact", to: "Contact" },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope size={18} />,
      text: "manasranjansatapathy96@gmail.com",
      href: "mailto:manasranjansatapathy96@gmail.com",
    },
    {
      icon: <FaPhone size={18} />,
      text: "+91-7978237226",
      href: "tel:+917978237226",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Manas Ranjan
              </h3>
              <p className="text-green-400 text-sm font-semibold">
                Software Developer
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting scalable backend systems and modern web applications.
              Passionate about clean code and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-slate-400 hover:text-green-400 transition-colors cursor-pointer text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    href={info.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm group"
                  >
                    <span className="text-green-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Follow Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-green-500 hover:bg-slate-700 hover:text-green-400 text-slate-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Manas Ranjan Satapathy. All rights reserved.
          </p>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <FaHeart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Design Credit */}
          <p className="text-slate-500 text-sm text-center md:text-right">
            Designed & Built by{" "}
            <span className="text-green-400 font-semibold">Manas Ranjan</span>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center pb-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
          title="Scroll to top"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
