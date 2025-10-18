import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaCalendarAlt,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: "email",
      icon: <FaEnvelope size={32} />,
      title: "Email",
      description: "Send me an email directly",
      value: "manasranjansatapathy96@gmail.com",
      action: "mailto:manasranjansatapathy96@gmail.com",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:shadow-red-500/20",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin size={32} />,
      title: "LinkedIn",
      description: "Connect and message me on LinkedIn",
      value: "Manas Ranjan Satapathy",
      action: "https://www.linkedin.com/in/manas-ranjan-satapathy-4a83381a8/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/20",
    },
    {
      id: "github",
      icon: <FaGithub size={32} />,
      title: "GitHub",
      description: "Check out my projects and repositories",
      value: "@ManasRaj241",
      action: "https://github.com/ManasRaj241",
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:shadow-gray-500/20",
    },
    {
      id: "phone",
      icon: <FaPhone size={32} />,
      title: "Phone",
      description: "Call or WhatsApp me",
      value: "+91-7978237226",
      action: "tel:+917978237226",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/20",
    },
    {
      id: "calendar",
      icon: <FaCalendarAlt size={32} />,
      title: "Schedule a Call",
      description: "Book a 1-on-1 meeting with me",
      value: "15-30 min call",
      action:
        "mailto:manasranjansatapathy96@gmail.com?subject=Let's%20Schedule%20a%20Call",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:shadow-purple-500/20",
    },
  ];

  const ContactCard = ({ method }) => (
    <a
      href={method.action}
      target={
        method.id !== "email" && method.id !== "phone" ? "_blank" : "_self"
      }
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredCard(method.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className="group relative block h-full"
    >
      {/* Gradient Border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${method.color} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur`}
      ></div>

      {/* Card */}
      <div
        className={`relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-slate-600 ${method.hoverColor}`}
      >
        {/* Icon Background */}
        <div
          className={`p-4 bg-gradient-to-br ${method.color} rounded-xl w-fit mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
        >
          {method.icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors mb-2">
            {method.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4">{method.description}</p>
          <p className="text-slate-300 font-semibold break-words">
            {method.value}
          </p>
        </div>

        {/* CTA Arrow */}
        <div className="flex items-center gap-2 mt-4 text-green-400 group-hover:text-green-300 transition-colors">
          <span className="font-semibold">Get in touch</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </a>
  );

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <ContactCard key={method.id} method={method} />
          ))}
        </div>

        {/* Alternative Contact Info */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Preferred Contact Method
          </h2>
          <p className="text-slate-300 mb-6 text-lg">
            You can reach me most quickly through{" "}
            <span className="font-bold text-green-400">Email</span> or{" "}
            <span className="font-bold text-green-400">LinkedIn</span>. I
            typically respond within 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:manasranjansatapathy96@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope size={18} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/manas-ranjan-satapathy-4a83381a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <FaLinkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-12 border-t border-slate-700">
          <h3 className="text-center text-slate-400 text-sm uppercase tracking-wider mb-6">
            Follow me on social media
          </h3>
          <div className="flex justify-center gap-6">
            {[
              {
                icon: <FaLinkedin size={28} />,
                url: "https://www.linkedin.com/in/manas-ranjan-satapathy-4a83381a8/",
                label: "LinkedIn",
              },
              {
                icon: <FaGithub size={28} />,
                url: "https://github.com/ManasRaj241",
                label: "GitHub",
              },
              {
                icon: <FaTwitter size={28} />,
                url: "https://twitter.com",
                label: "Twitter",
              },
              {
                icon: <IoLogoYoutube size={28} />,
                url: "https://www.youtube.com/@manasranjansatapathy5145",
                label: "YouTube",
              },
              {
                icon: <FaInstagram size={28} />,
                url: "https://www.instagram.com/manas_ranjan_satapathy_09/",
                label: "Instagram",
              },
            ].map((social, idx) => (
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

      <hr className="border-slate-700" />
    </>
  );
}

export default Contact;
