import React, { useState } from "react";
import springBoot from "../../public/springBoot.jpg";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import aws from "../../public/AWs.png";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    aws: [
      {
        id: 1,
        logo: aws,
        name: "AWS Serverless Event Announcement System",
        description:
          "A fully serverless event announcement platform built with AWS services. Users can subscribe to events and receive email notifications when new events are created.",
        technologies: [
          "AWS Lambda",
          "DynamoDB",
          "SNS",
          "API Gateway",
          "S3",
          "Python",
          "IAM",
        ],
        git: "https://github.com/ManasRaj241/AWS-Event-Announcement-System",
        category: "aws",
        highlights: [
          "Completely FREE - runs within AWS free tier",
          "Scalable to thousands of users",
          "Email notifications via SNS",
          "REST API with API Gateway",
          "No servers to maintain",
        ],
        architecture: [
          "AWS S3 (Static Website Hosting)",
          "AWS Lambda (Serverless Functions)",
          "AWS API Gateway (REST API)",
          "AWS DynamoDB (NoSQL Database)",
          "AWS SNS (Email Notifications)",
          "AWS IAM (Access Control)",
        ],
        keyLearnings: [
          "Serverless architecture design",
          "AWS Lambda functions",
          "REST API design with API Gateway",
          "NoSQL database design (DynamoDB)",
          "Event-driven architecture",
          "AWS IAM for security",
          "Cost optimization (free tier)",
        ],
      },
    ],
    development: [
      {
        id: 2,
        logo: springBoot,
        name: "Used Car Sales Portal",
        description:
          "A distributed web platform for buying and selling used cars with 9 independently deployable microservices. Improved request latency by 25% with Kafka-based async communication and Kubernetes orchestration.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Cloud",
          "React",
          "Kafka",
          "Docker",
          "Kubernetes",
          "JWT",
          "SQL",
          "Tailwind CSS",
        ],
        git: "https://github.com/ManasRaj241/UsedCarSalesPortal-Microservice-java-",
        category: "development",
        highlights: [
          "9 independently deployable microservices",
          "25% improvement in request latency",
          "Secure JWT authentication",
          "Real-time notifications with Kafka",
          "30% reduction in downtime via K8s",
          "Docker containerization",
        ],
        architecture: [
          "Microservice Architecture",
          "Spring Cloud Config",
          "Eureka Service Discovery",
          "API Gateway",
          "Kafka Message Broker",
          "Docker Containerization",
          "Kubernetes Orchestration",
          "Helm Charts",
        ],
        keyLearnings: [
          "Distributed system design",
          "Microservices architecture",
          "Async communication with Kafka",
          "Container orchestration with K8s",
          "Service discovery",
          "API Gateway patterns",
          "Load balancing",
        ],
      },
      {
        id: 3,
        logo: java,
        name: "TinyURL Microservices",
        description:
          "A scalable URL shortener with two Spring Boot microservices, Redis caching for O(1) lookups, and full CI/CD pipeline with GitHub Actions. Deployed on Kubernetes via Helm charts.",
        technologies: [
          "Java",
          "Spring Boot",
          "Redis",
          "Docker",
          "Kubernetes",
          "Helm",
          "GitHub Actions",
          "Keycloak",
          "Minikube",
        ],
        git: "https://github.com/ManasRaj241/TinyUrl",
        category: "development",
        highlights: [
          "O(1) constant-time URL lookup with Redis",
          "Two independent Spring Boot microservices",
          "Keycloak centralized authentication",
          "Full CI/CD pipeline with GitHub Actions",
          "40% reduction in deployment time",
          "Helm charts for K8s deployment",
          "Minikube for local development",
        ],
        architecture: [
          "Microservice Architecture",
          "Redis Cache Layer",
          "Spring Security with Keycloak",
          "Docker Containerization",
          "Kubernetes Deployment",
          "Helm Charts",
          "GitHub Actions CI/CD",
        ],
        keyLearnings: [
          "Microservices design patterns",
          "Caching strategies",
          "Centralized authentication (Keycloak)",
          "CI/CD automation",
          "Container orchestration",
          "Infrastructure as Code (Helm)",
          "Performance optimization",
        ],
      },
      {
        id: 4,
        logo: springBoot,
        name: "E-Commerce Website",
        description:
          "Full-stack e-commerce platform with Spring Boot backend, React frontend, and comprehensive product management system. Features user roles, shopping cart, and order processing.",
        technologies: [
          "Java",
          "Spring Boot",
          "React",
          "SQL",
          "REST APIs",
          "Authentication",
        ],
        git: "https://github.com/ManasRaj241/ECommerceWebSIteFullStackProject",
        category: "development",
        highlights: [
          "User and admin role management",
          "Shopping cart functionality",
          "Product management system",
          "Order processing pipeline",
          "REST API architecture",
          "Responsive React UI",
        ],
        architecture: [
          "Spring Boot Backend",
          "React Frontend",
          "REST API Layer",
          "SQL Database",
          "Authentication System",
        ],
        keyLearnings: [
          "Full-stack development",
          "Role-based access control",
          "REST API design",
          "Database schema design",
          "Frontend-backend integration",
        ],
      },
    ],
    other: [
      {
        id: 5,
        logo: springBoot,
        name: "To-Do List Application",
        description:
          "A task management application focused on Hibernate ORM concepts. Features include task creation, editing, deletion, and persistent storage with a clean UI.",
        technologies: ["Spring Boot", "JSP", "JPA", "Hibernate", "Java", "SQL"],
        git: "https://github.com/ManasRaj241/TodoList",
        category: "other",
        highlights: [
          "Hibernate ORM implementation",
          "JPA annotations",
          "Task CRUD operations",
          "Persistent data storage",
          "Clean JSP templates",
        ],
        architecture: [
          "Spring Boot",
          "Hibernate ORM",
          "JPA",
          "JSP Views",
          "SQL Database",
        ],
        keyLearnings: [
          "Hibernate fundamentals",
          "ORM concepts",
          "JPA annotations",
          "Transaction management",
        ],
      },
      {
        id: 6,
        logo: java,
        name: "Note Taker Web Application",
        description:
          "A web application for storing, updating, deleting, and viewing notes. Focused on Hibernate concepts with a clean HTML/CSS/JavaScript frontend.",
        technologies: [
          "Java",
          "JDBC",
          "Servlet",
          "Hibernate",
          "SQL",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        git: "https://github.com/ManasRaj241/NoteTaker.github.io",
        category: "other",
        highlights: [
          "Hibernate-focused implementation",
          "CRUD operations",
          "Note persistence",
          "Clean UI design",
          "Servlet-based architecture",
        ],
        architecture: [
          "Java Servlet",
          "Hibernate",
          "JDBC",
          "SQL Database",
          "JSP/HTML/CSS/JS Frontend",
        ],
        keyLearnings: [
          "Hibernate ORM",
          "Servlet lifecycle",
          "Database operations",
          "Frontend-backend communication",
        ],
      },
      {
        id: 7,
        logo: python,
        name: "Walmart Sales Forecasting",
        description:
          "A machine learning model that predicts company sales for upcoming holidays based on historical trends. Helps with workforce planning and inventory management.",
        technologies: [
          "Python",
          "Machine Learning",
          "Data Analysis",
          "Pandas",
          "Scikit-learn",
        ],
        git: "https://github.com/ManasRaj241/WalmartSalesForecasting",
        category: "other",
        highlights: [
          "Predictive analytics model",
          "Holiday sales forecasting",
          "Workforce planning insights",
          "Data-driven predictions",
          "Historical trend analysis",
        ],
        architecture: [
          "Python",
          "Pandas for Data Processing",
          "Scikit-learn ML Models",
          "Data Analysis",
        ],
        keyLearnings: [
          "Machine learning algorithms",
          "Time series forecasting",
          "Data preprocessing",
          "Model evaluation",
        ],
      },
    ],
  };

  const allProjects = [
    ...projects.aws,
    ...projects.development,
    ...projects.other,
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const getCategoryLabel = (category) => {
    const labels = {
      development: "Development",
      other: "Other",
      aws: "AWS & Cloud",
    };
    return labels[category];
  };

  const getCategoryColor = (category) => {
    const colors = {
      development: "from-blue-500 to-blue-600",
      other: "from-purple-500 to-purple-600",
      aws: "from-orange-500 to-orange-600",
    };
    return colors[category];
  };

  const ProjectCard = ({ project }) => (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

      <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 h-full flex flex-col">
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-lg"></div>
            <img
              src={project.logo}
              className="w-full h-full object-cover rounded-full border-2 border-green-500/50 group-hover:border-green-400 transition-colors relative z-10"
              alt={project.name}
            />
          </div>
        </div>

        <div className="mb-3 text-center">
          <span
            className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(
              project.category
            )} bg-clip-text text-transparent border border-current rounded-full text-xs font-semibold`}
          >
            {getCategoryLabel(project.category)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-green-400 mb-3 text-center group-hover:text-green-300 transition-colors line-clamp-2">
          {project.name}
        </h3>

        <p className="text-slate-300 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="inline-block px-2.5 py-1 text-xs bg-slate-800 border border-slate-600 text-slate-300 rounded-md group-hover:border-green-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="inline-block px-2.5 py-1 text-xs bg-slate-800 border border-slate-600 text-slate-300 rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3 justify-center pt-4 border-t border-slate-700">
          <a
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub size={16} />
            Code
          </a>
          <button
            onClick={() => setSelectedProject(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-green-400 font-semibold rounded-lg border border-slate-600 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <FaExternalLinkAlt size={14} />
            Details
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div className="bg-slate-900 rounded-xl border border-slate-700 max-w-3xl w-full my-8">
          {/* Header */}
          <div
            className={`bg-gradient-to-r ${getCategoryColor(
              project.category
            )} p-6 rounded-t-xl relative`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-lg transition"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-3xl font-bold text-white pr-8">
              {project.name}
            </h2>
            <p className="text-white/80 mt-2">
              {getCategoryLabel(project.category)}
            </p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-2">
                Overview
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-300"
                    >
                      <span className="text-green-400 font-bold mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture */}
            {project.architecture && (
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">
                  Architecture & Stack
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Learnings */}
            {project.keyLearnings && (
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-3">
                  Key Learnings & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.keyLearnings.map((learning, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800 border border-green-500/30 text-green-300 rounded-full text-sm"
                    >
                      {learning}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-700">
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
            Featured Work
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        <p className="max-w-2xl">
          Full-stack applications, microservices architectures, serverless
          platforms, and ML models showcasing expertise in modern cloud-native
          development.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
        {[
          { id: "all", label: "All Projects" },
          { id: "aws", label: "AWS & Cloud" },
          { id: "development", label: "Development" },
          { id: "other", label: "Other" },
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50"
                : "bg-slate-800 text-slate-300 border border-slate-700 hover:border-green-500/50 hover:text-green-400"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Modal */}
      <ProjectModal project={selectedProject} />
    </div>
  );
}

export default Projects;
