import React from "react";
import pic from "../../public/pic.avif";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaJava, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiKubernetes, SiDocker, SiAmazonaws } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  const socialLinks = [
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/manas_ranjan_satapathy_09/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/manas-ranjan-satapathy-4a83381a8/",
      label: "LinkedIn",
    },
    {
      icon: <IoLogoYoutube size={24} />,
      url: "https://www.youtube.com/@manasranjansatapathy5145",
      label: "YouTube",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/ManasRaj241",
      label: "GitHub",
    },
  ];

  const techStack = [
    { icon: <BiLogoSpringBoot size={32} />, label: "Spring Boot" },
    { icon: <FaJava size={32} />, label: "Java" },
    { icon: <FaReact size={32} />, label: "React" },
    { icon: <AiOutlineConsoleSql size={32} />, label: "SQL" },
    { icon: <SiKubernetes size={32} />, label: "Kubernetes" },
    { icon: <SiDocker size={32} />, label: "Docker" },
    { icon: <SiAmazonaws size={32} />, label: "AWS" },
  ];

  const handleExploreClick = () => {
    const element = document.querySelector('[name="Projects"]');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-green-400 text-lg font-semibold">
                Welcome to my digital space
              </p>

              {/* Main Heading with Typing Effect */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Hello, I'm a{" "}
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
                    <ReactTyped
                      strings={[
                        "Java Backend Developer",
                        "Cloud Architect",
                        "Microservices Specialist",
                        "Full-Stack Engineer",
                      ]}
                      typeSpeed={50}
                      backSpeed={40}
                      loop={true}
                      cursorChar="|"
                    />
                  </span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              With{" "}
              <span className="text-green-400 font-semibold">
                3+ years of experience
              </span>{" "}
              building scalable microservices and cloud-native applications, I
              specialize in Java, Spring Boot, Kubernetes, and AWS. I transform
              complex problems into elegant solutions that drive business
              impact.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Microservices", value: "20+" },
                { label: "Cloud Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-3 hover:border-green-500/50 transition-colors"
                >
                  <div className="text-green-400 font-bold text-lg">
                    {item.value}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social & Tech Section */}
            <div className="space-y-6 pt-4">
              {/* Available On */}
              <div className="space-y-3">
                <p className="font-bold text-white text-sm uppercase tracking-wider">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-green-500 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                      title={social.label}
                    >
                      <span className="text-green-400 group-hover:text-green-300 transition-colors">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Currently Working On */}
              <div className="space-y-3">
                <p className="font-bold text-white text-sm uppercase tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-center w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg hover:border-green-500 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-blue-500/20 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-green-500/20"
                      title={tech.label}
                    >
                      <span className="text-green-400 group-hover:text-green-300 transition-colors group-hover:scale-125 transform duration-300">
                        {tech.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleExploreClick}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer"
              >
                Explore My Work
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Animated Background Blur */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Image Container */}
              <div
                className="relative bg-slate-900 rounded-3xl overflow-hidden group border-2 border-green-500/30"
                style={{ width: "280px", height: "360px" }}
              >
                <img
                  src={pic}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  alt="Manas Ranjan Satapathy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-green-400 font-bold text-lg">
                    Java Backend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 pt-12 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "3+", label: "Years Exp." },
              { number: "20+", label: "Microservices" },
              { number: "10+", label: "Projects" },
              { number: "15+", label: "Tech Stack" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="text-xs md:text-sm text-slate-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-slate-700" />
    </>
  );
}

export default Home;
