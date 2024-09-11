import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import springBoot from "../../public/springBoot.jpg";
function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: springBoot,
      name: "Used Car Sales Portal",
      description:
        "Developed a Microservices and Micro-Frontend based application in which a user can sell his/her used car and can also buy cars which has been posted by others for sale. Implemented concepts like Feign client, eureka naming server, Load balancing, API Gateways, and Fault Tolerance. I have used Technologies like Java, spring cloud, spring boot, JWT authentication and authorization, Microservices, Micro-Frontend, React, SQL ,API Gateway, and Tailwind CSS",
      git: "https://github.com/ManasRaj241/UsedCarSalesPortal",
    },
    {
      id: 2,
      logo: springBoot,
      name: "To-Do List",
      description:
        "Built this project to keep track of tasks that need to be done. This application will act like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list. They can also edit the entered Tasks. Tech: Spring Boot, JSP, JPA, Java",
      git: "https://github.com/ManasRaj241/TodoList",
    },
    {
      id: 3,
      logo: springBoot,
      name: "E-Commerce Website",
      description:
        "Built an E-Commerce Website where user can buy products and admin can add and remove products. Tech: Java, Spring Boot, React, SQL",
      git: "https://github.com/ManasRaj241/ECommerceWebSIteFullStackProject",
    },
    {
      id: 4,
      logo: python,
      name: "Walmart Sales Forecasting",
      description:
        "We have built a machine learning model which will predict the sales of a company for the coming holidays based on the previous trends. User could get an overall idea about the number of employees they need in that period. Tech: Python and Machine Learning",
      git: "https://github.com/ManasRaj241/UsedCarSalesPortal",
    },
    {
      id: 5,
      logo: java,
      name: "Note Taker",
      description:
        "Developed a Web application where we can store, update, delete and view our Notes. Here we have focused mainly on the concepts of Hibernate. We have also used HTML, CSS and JavaScript to design this page. Tech: Java, JDBC, Servlet, Hibernate, SQL",
      git: "https://github.com/ManasRaj241/NoteTaker.github.io",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-green-500">Projects</h1>
        <span className=" underline">Featured Projects</span>
        <div className="flex flex-col gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, git }) => (
            <div
              className="max-w-full md:max-w-[1300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-center text-green-500">
                  {name}
                </div>
                <p className="px-2 text-white text-center">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 flex justify-center">
                <button className="bg-blue-500 hover:bg-slate-700 text-black font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-orange-700 text-black font-bold px-4 py-2 rounded">
                  <a href={git}>Source code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
