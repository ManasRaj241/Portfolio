import React from "react";

function About() {
  const achievements = [
    "Spring Boot 3 in 100 Steps (Udemy)",
    "Highway to HighRadius Internship",
    "Machine Learning using Python",
    "Global rank of 17k in GFG for problem Solving",
    "SQL (Intermediate) certificate on Hackerrank",
    "SQL (Basic) certificate on Hackerrank",
    "Python (Basic) certificate on Hackerrank",
    "Learn Java (Great Learning)",
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2 text-green-500">About</h1>
        <p>
          Hello, I'm Manas Ranjan Satapathy, a passionate Software developer
          Having 2 Years of experience in Software development, my aim is to
          find an exciting and challenging entry-level position in the IT
          Industry alongside a company who will continuously motivate and drive
          me to do my best and improve on my skills and abilities in order to be
          able to assist the company in achieving its mission and goals. I am an
          excellent team worker.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <ol>
          <li className="list-disc ml-4">
            <div className="flex justify-between items-center">
              <span>
                <b>Bachelor of Technology, Computer Science,</b> Gandhi
                Institute Of Engineering And Technology, Gunupur, Odisha, CGPA :
                9.07
              </span>
              <span className="ml-auto">2019-2023</span>
            </div>
          </li>
          <li className="list-disc ml-4">
            <div className="flex justify-between items-center">
              <span>
                <b>Board of Secondary Education (Odisha) 12TH,</b> Saraswati
                Sishu Vidya Mandir, Neelakantha Nagar, Berhampur, Odisha,
                Percentage : 81.33%
              </span>
              <span className="ml-auto">2016-2018</span>
            </div>
          </li>
          <li className="list-disc ml-4">
            <div className="flex justify-between items-center">
              <span>
                <b>Higher Secondary Education (Odisha) 10TH,</b> Saraswati Sishu
                Vidya Mandir, Neelakantha Nagar, Berhampur, Odisha, Percentage :
                92%
              </span>
              <span className="ml-auto">2015-2016</span>
            </div>
          </li>
        </ol>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ol>
          <li className="list-disc ml-4">
            <b>Programming Languages: </b> Java, Javascript, C#
          </li>
          <li className="list-disc ml-4">
            <b>Database: </b> SQL
          </li>
          <li className="list-disc ml-4">
            <b>Frameworks & Libraries: </b> Spring Boot, Spring Cloud, Spring,
            Hibernate, React, DOT NET, JSP, JUnit, Mockito, Xunit
          </li>
          <li className="list-disc ml-4">
            <b>Software Development Concepts: </b> Data Structures and
            Algorithms, OOP (Object-Oriented Programming) Concepts,
            Microservices, REST
          </li>
          <li className="list-disc ml-4">
            <b>Tools & Technologies: </b> Selenium, Postman, GIT, JPA
          </li>
        </ol>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <ol>
          <li>
            <div className="flex justify-between items-center">
              <span>
                <b>Junior Software Developer</b>
              </span>
              <span className="ml-auto">
                <b>July 2023 - Present</b>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Amiti Software Technologies Private Limited</span>
              <span className="ml-auto">
                <b>Bangalore</b>
              </span>
            </div>
            <ul className="list-disc ml-4">
              <li>
                I am working as a junior software developer in which we are
                providing end-to-end solutions for vehicle remarketing for
                automobile companies in Canada/USA/Europe such as GMF, VW, BMW,
                Honda, Chevrolet, Porsche, Ford, and Toyota.
              </li>
              <li>
                <b>Technologies Used: </b>ASP DOTNET Core, Spring Boot,
                Microservices, Micro-Frontends, React, GIT, SQL, Xunit
              </li>
            </ul>
          </li>
          <li className="mt-4">
            <div className="flex justify-between items-center">
              <span>
                <b>Advanced Robotic Process Automation</b> (Intern)
              </span>
              <span className="ml-auto">
                <b>June 2022 - May 2023</b>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Highradius Technologies</span>
              <span className="ml-auto">
                <b>Bhubaneswar</b>
              </span>
            </div>
            <ul className="list-disc ml-4">
              <li>
                I was working as an Intern for Advanced Robotic Process
                Automation which builds features to automate the process for the
                order-to-cash cycle by scraping data from any source of data.
              </li>
              <li>
                <b>Technologies Used: </b>Java, SQL, Hibernate, Postman, OOPs
                Concepts, JDBC, Servlet, Selenium, Git, Spring
              </li>
            </ul>
          </li>
        </ol>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-1.5 list-disc ml-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="break-words">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
