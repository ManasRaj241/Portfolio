import React, { useState } from "react";
import {
  FaCode,
  FaCloud,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState("overview");

  const skills = [
    {
      category: "Languages",
      icon: <FaCode className="text-xl" />,
      items: ["Java", "JavaScript", "C#"],
    },
    {
      category: "Backend & Frameworks",
      icon: <FaBriefcase className="text-xl" />,
      items: [
        "Spring Boot",
        "Spring Cloud",
        "Spring",
        "Hibernate",
        "ASP.NET Core",
        "JSP",
        "JUnit",
        "Mockito",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="text-xl" />,
      items: [
        "AWS (EC2, S3, RDS, ECR, Lambda)",
        "Docker",
        "Kubernetes",
        "Helm",
        "GitHub Actions",
        "Jenkins",
        "Kafka",
      ],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-xl" />,
      items: ["MySQL", "SQL", "DynamoDB", "Redis", "Oracle"],
    },
    {
      category: "Frontend",
      icon: <FaCode className="text-xl" />,
      items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
  ];

  const experience = [
    {
      title: "Junior Software Developer",
      company: "Amiti Software Technologies Private Limited",
      location: "Bangalore",
      period: "July 2023 – Present",
      duration: "1.5+ Years",
      highlights: [
        "Delivered microservices-based vehicle remarketing solutions for global clients: GMF, VW, BMW, Honda, Hyundai, Chevrolet, Porsche, Ford, and Toyota",
        "Engineered REST APIs and integrated JWT-based authentication for secure data transactions",
        "Built and deployed 10+ containerized microservices using Docker and Kubernetes",
        "Collaborated in Agile teams using Git for version control and JUnit, ensuring 90%+ test coverage",
      ],
      tech: "ASP.NET Core, Spring Boot, Microservices, Micro-Frontends, React, GIT, SQL, Xunit",
    },
    {
      title: "Advanced Robotic Process Automation (Intern)",
      company: "Highradius Technologies",
      location: "Bhubaneswar",
      period: "June 2022 – May 2023",
      duration: "1 Year",
      highlights: [
        "Automated Order-to-Cash cycle by building backend services for data scraping, transformation, and integration",
        "Developed robust JDBC and Hibernate solutions for enterprise data processing",
        "Used Selenium for end-to-end testing and automation",
        "Implemented OOP concepts and design patterns for scalable architecture",
      ],
      tech: "Java, SQL, Hibernate, Postman, OOPs, JDBC, Servlet, Selenium, Git, Spring",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution:
        "Gandhi Institute of Engineering And Technology, Gunupur, Odisha",
      period: "2019 – 2023",
      cgpa: "CGPA: 9.07",
      details:
        "Strong foundation in data structures, algorithms, and software engineering principles",
    },
    {
      degree: "Board of Secondary Education (Odisha) 12th",
      institution:
        "Saraswati Sishu Vidya Mandir, Neelakantha Nagar, Berhampur, Odisha",
      period: "2016 – 2018",
      percentage: "81.33%",
    },
    {
      degree: "Higher Secondary Education (Odisha) 10th",
      institution:
        "Saraswati Sishu Vidya Mandir, Neelakantha Nagar, Berhampur, Odisha",
      period: "2015 – 2016",
      percentage: "92%",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Spring Boot 3 in 100 Steps",
      category: "Certification",
      issuer: "Udemy",
    },
    {
      icon: "🏅",
      title: "Highway to Highradius Internship",
      category: "Award",
      issuer: "Highradius",
    },
    {
      icon: "🤖",
      title: "Machine Learning using Python",
      category: "Certification",
      issuer: "Course",
    },
    {
      icon: "🌍",
      title: "Global Rank 17k in GeeksForGeeks",
      category: "Achievement",
      issuer: "GFG",
    },
    {
      icon: "📊",
      title: "SQL (Intermediate) Certificate",
      category: "Certification",
      issuer: "HackerRank",
    },
    {
      icon: "📊",
      title: "SQL (Basic) Certificate",
      category: "Certification",
      issuer: "HackerRank",
    },
    {
      icon: "🐍",
      title: "Python (Basic) Certificate",
      category: "Certification",
      issuer: "HackerRank",
    },
    {
      icon: "☕",
      title: "Learn Java",
      category: "Certification",
      issuer: "Great Learning",
    },
  ];

  const SkillCard = ({ category, icon, items }) => (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-green-400">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full border border-slate-600 hover:border-green-500/50 hover:text-green-300 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
            Know Me Better
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-700 pb-4">
        {[
          { id: "overview", label: "Overview", icon: "👤" },
          { id: "experience", label: "Experience", icon: "💼" },
          { id: "skills", label: "Skills", icon: "⚡" },
          { id: "education", label: "Education", icon: "🎓" },
          { id: "achievements", label: "Achievements", icon: "🏆" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50"
                : "bg-slate-800 text-slate-300 border border-slate-700 hover:border-green-500/50 hover:text-green-400"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate{" "}
                <span className="text-green-400 font-semibold">
                  Java Backend Developer
                </span>{" "}
                with{" "}
                <span className="text-green-400 font-semibold">
                  3+ years of professional experience
                </span>{" "}
                in designing and deploying scalable microservices architectures.
                My expertise spans across cloud technologies, containerization,
                and modern development practices.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Currently working as a{" "}
                <span className="text-green-400 font-semibold">
                  Junior Software Developer at Amiti Software Technologies
                </span>
                , where I deliver microservices-based solutions for global
                clients including GMF, BMW, Honda, and Porsche. I specialize in
                REST API design, Kafka-based asynchronous communication, and
                CI/CD automation.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My mission is to build robust, scalable, and efficient systems
                while continuously learning and adapting to emerging
                technologies. I excel in Agile environments and believe in
                writing clean, testable code with comprehensive documentation.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Years of Experience", value: "3+" },
                { label: "Projects Completed", value: "10+" },
                { label: "Microservices Built", value: "20+" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="space-y-6 animate-fadeIn">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-slate-400 text-lg mt-1">{job.company}</p>
                  </div>
                  <div className="text-right mt-3 md:mt-0">
                    <p className="text-green-400 font-semibold">{job.period}</p>
                    <p className="text-slate-400 text-sm">{job.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-4">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-green-400 font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-700 pt-4 mt-4">
                  <p className="text-sm text-slate-400">
                    <span className="text-green-400 font-semibold">
                      Technologies:
                    </span>{" "}
                    {job.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <SkillCard
                  key={idx}
                  category={skill.category}
                  icon={skill.icon}
                  items={skill.items}
                />
              ))}
            </div>

            {/* Core Competencies */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4">
                Core Competencies
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-300 font-semibold mb-2">
                    Software Architecture
                  </p>
                  <p className="text-slate-400">
                    Microservices, RESTful APIs, Event-driven architecture,
                    CI/CD pipelines
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold mb-2">
                    Cloud & DevOps
                  </p>
                  <p className="text-slate-400">
                    AWS services, Docker containerization, Kubernetes
                    orchestration, Infrastructure as Code
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold mb-2">
                    Development Practices
                  </p>
                  <p className="text-slate-400">
                    Agile methodology, Test-driven development, Code reviews,
                    Git version control
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="space-y-6 animate-fadeIn">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg text-green-400 group-hover:text-green-300 transition-colors flex-shrink-0">
                    <FaGraduationCap size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-300 mt-2">{edu.institution}</p>
                    <div className="flex flex-col md:flex-row md:justify-between mt-3 text-sm text-slate-400">
                      <span>{edu.period}</span>
                      <span className="text-green-400 font-semibold">
                        {edu.cgpa || edu.percentage}
                      </span>
                    </div>
                    {edu.details && (
                      <p className="text-slate-400 mt-3">{edu.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-bold text-green-400 group-hover:text-green-300 transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {achievement.issuer}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                        {achievement.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default About;
