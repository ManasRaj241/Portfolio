import React, { useState } from "react";
import { FaBriefcase, FaCheckCircle, FaGraduationCap } from "react-icons/fa";

function Experience() {
  const [activeTab, setActiveTab] = useState("current");

  const experienceData = [
    {
      id: "current",
      position: "Junior Software Developer",
      company: "Amiti Software Technologies Private Limited",
      location: "Bangalore",
      duration: "July 2023 – Present",
      years: "1.5+ Years",
      type: "Full-time",
      highlights: [
        "Delivered microservices-based vehicle remarketing solutions for global clients: GMF, VW, BMW, Honda, Hyundai, Chevrolet, Porsche, Ford, and Toyota",
        "Engineered REST APIs and integrated JWT-based authentication for secure data transactions",
        "Built and deployed 10+ containerized microservices using Docker and Kubernetes",
        "Collaborated in Agile teams using Git for version control with 90%+ test coverage using JUnit",
        "Implemented complex business logic for order-to-cash cycle automation",
      ],
      tech: [
        "ASP.NET Core",
        "Spring Boot",
        "Microservices",
        "Micro-Frontends",
        "React",
        "Docker",
        "Kubernetes",
        "SQL",
        "Xunit",
      ],
      impact: [
        "10+ Microservices Deployed",
        "90%+ Test Coverage",
        "8+ Global Clients",
        "30% Performance Improvement",
      ],
    },
    {
      id: "internship",
      position: "Advanced Robotic Process Automation (Intern)",
      company: "Highradius Technologies",
      location: "Bhubaneswar",
      duration: "June 2022 – May 2023",
      years: "1 Year",
      type: "Internship",
      highlights: [
        "Automated Order-to-Cash cycle by building backend services for data scraping, transformation, and integration",
        "Developed robust JDBC and Hibernate solutions for enterprise data processing",
        "Used Selenium for end-to-end testing and automation of critical workflows",
        "Implemented OOP concepts and design patterns for scalable architecture",
        "Collaborated with senior developers on production-level codebases",
      ],
      tech: [
        "Java",
        "SQL",
        "Hibernate",
        "JDBC",
        "Servlet",
        "Selenium",
        "Postman",
        "OOPs",
        "Spring",
        "Git",
      ],
      impact: [
        "25+ SQL Queries Optimized",
        "End-to-End Automation",
        "Production Deployment",
        "Team Collaboration",
      ],
    },
  ];

  const currentExp = experienceData.find((exp) => exp.id === activeTab);

  const TechStack = ({ techs }) => (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, idx) => (
        <span
          key={idx}
          className="px-3 py-1 text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  const ImpactCard = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center hover:border-green-500 transition-colors"
        >
          <p className="text-green-400 font-bold text-sm">{item}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
            Professional Journey
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl">
          3+ years of hands-on experience building scalable backend systems and
          microservices architectures for enterprise clients worldwide.
        </p>
      </div>

      {/* Experience Tabs */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        {/* Tab Navigation */}
        <div className="md:w-1/3">
          <div className="space-y-3">
            {experienceData.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`w-full text-left p-5 rounded-lg border-2 transition-all duration-300 group ${
                  activeTab === exp.id
                    ? "bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500 shadow-lg shadow-green-500/20"
                    : "bg-slate-800 border-slate-700 hover:border-green-500/50 hover:bg-slate-700/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg mt-1 transition-colors ${
                      activeTab === exp.id
                        ? "bg-green-500/30 text-green-400"
                        : "bg-slate-700 text-slate-400 group-hover:text-green-400"
                    }`}
                  >
                    {exp.type === "Internship" ? (
                      <FaGraduationCap size={20} />
                    ) : (
                      <FaBriefcase size={20} />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-white group-hover:text-green-400 transition-colors">
                      {exp.position}
                    </p>
                    <p className="text-sm text-slate-400">{exp.company}</p>
                    <p className="text-xs text-green-400 mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Details */}
        {currentExp && (
          <div className="md:w-2/3 space-y-6">
            <div className="group relative">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-3xl font-bold text-green-400 mb-1">
                        {currentExp.position}
                      </h2>
                      <p className="text-lg text-slate-300 font-semibold">
                        {currentExp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">
                        {currentExp.duration}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {currentExp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-xs font-semibold">
                      {currentExp.type}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-300 rounded-full text-xs font-semibold">
                      {currentExp.years}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6 pb-6 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-green-400 mb-4">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {currentExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <FaCheckCircle
                          className="text-green-400 mt-1 flex-shrink-0"
                          size={18}
                        />
                        <span className="text-slate-300 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 pb-6 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-green-400 mb-4">
                    Technology Stack
                  </h3>
                  <TechStack techs={currentExp.tech} />
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-4">
                    Impact & Achievements
                  </h3>
                  <ImpactCard items={currentExp.impact} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-slate-700">
        {[
          { label: "Total Experience", value: "3+ Years" },
          { label: "Companies", value: "2" },
          { label: "Projects Delivered", value: "10+" },
          { label: "Technologies", value: "20+" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300"
          >
            <p className="text-green-400 font-bold text-2xl mb-2">
              {stat.value}
            </p>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
