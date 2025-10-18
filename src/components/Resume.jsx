import React, { useState } from "react";
import pdf from "../../public/resumePDF.pdf";
import resumeImage from "../../public/resumeIMG.jpg";
import { FaDownload, FaExternalLinkAlt, FaEye } from "react-icons/fa";

const Resume = () => {
  const [showPreview, setShowPreview] = useState(true);
  const pdfUrl = pdf;
  const pdfPreviewImage = resumeImage;

  return (
    <div name="Resume" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
            Professional Document
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            My Resume
          </span>
        </h1>
        <p className="max-w-2xl">
          A comprehensive overview of my professional experience, technical
          skills, and educational background as a Java Backend Developer.
        </p>
      </div>

      {/* Resume Preview Section */}
      <div className="mb-8 flex justify-center">
        <div className="group relative w-full max-w-2xl">
          {/* Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

          {/* Preview Container */}
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
            <div className="relative w-full bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:p-6">
              {/* Preview Image */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={pdfPreviewImage}
                  alt="Resume Preview"
                  className="w-full h-auto border-2 border-green-500/30 rounded-xl transition duration-500 group-hover:shadow-2xl group-hover:shadow-green-500/20 group-hover:scale-105 transform"
                  style={{ maxWidth: "100%" }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        {/* Download Button */}
        <a
          href={pdfUrl}
          download="Manas_Ranjan_Satapathy_Resume.pdf"
          className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 shadow-md"
        >
          <FaDownload size={20} className="group-hover:animate-bounce" />
          Download PDF
        </a>

        {/* View Full Resume Button */}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-green-400 font-bold text-lg rounded-lg border-2 border-slate-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 shadow-md"
        >
          <FaExternalLinkAlt size={20} />
          Open in New Tab
        </a>
      </div>

      {/* Resume Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            icon: "💼",
            title: "Professional Experience",
            description:
              "3+ years as Java Backend Developer at leading tech companies",
          },
          {
            icon: "🛠️",
            title: "Technical Expertise",
            description:
              "Spring Boot, Microservices, Kubernetes, AWS, and modern DevOps practices",
          },
          {
            icon: "🎓",
            title: "Education & Certifications",
            description:
              "B.Tech in Computer Science (9.07 CGPA) + Multiple professional certifications",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div>
                <h3 className="font-bold text-green-400 text-lg mb-2 group-hover:text-green-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Skills Preview */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-green-400 mb-6">
          Key Skills Snapshot
        </h3>
        <div className="space-y-4">
          {[
            {
              category: "Backend",
              skills: [
                "Java",
                "Spring Boot",
                "Spring Cloud",
                "Microservices",
                "REST APIs",
              ],
            },
            {
              category: "Cloud & DevOps",
              skills: [
                "AWS (EC2, S3, RDS, ECR, Lambda)",
                "Docker",
                "Kubernetes",
                "GitHub Actions",
                "CI/CD",
              ],
            },
            {
              category: "Databases & Tools",
              skills: ["MySQL", "SQL", "Redis", "Git", "Postman", "Kafka"],
            },
            {
              category: "Frontend",
              skills: [
                "React.js",
                "Tailwind CSS",
                "JavaScript",
                "HTML5",
                "CSS3",
              ],
            },
          ].map((skill, idx) => (
            <div key={idx} className="pb-4 last:pb-0">
              <p className="text-green-400 font-semibold mb-2">
                {skill.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-sm font-medium hover:border-green-500/50 hover:bg-green-500/20 transition-all duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 pt-8 border-t border-slate-700">
        <p className="text-center">
          For a complete view of my professional background, download or view
          the full PDF resume.
          <br />
          <span className="text-green-400 font-semibold">
            Last updated: October 2025
          </span>
        </p>
      </div>
    </div>
  );
};

export default Resume;
