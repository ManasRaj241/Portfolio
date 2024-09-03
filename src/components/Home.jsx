import React from "react";

import pic from "../../public/pic.avif";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { FaJava } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Having 2 Years of experience in Software development, my aim is to
              find an exciting and challenging entry level position in the IT
              Industry alongside a company who will continuously motivate and
              drive me to do my best and improve on my skills and abilities in
              order to be able to assist the company in achieving its mission
              and goals. I am an excellent team worker.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.instagram.com/manas_ranjan_satapathy_09/"
                      target="_blank"
                    >
                      <FaInstagram
                        color="green"
                        className="text-2xl cursor-pointer"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/manas-ranjan-satapathy-4a83381a8/"
                      target="_blank"
                    >
                      <FaLinkedin
                        color="green"
                        className="text-2xl cursor-pointer"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@manasranjansatapathy5145"
                      target="_blank"
                    >
                      <IoLogoYoutube
                        color="green"
                        className="text-2xl cursor-pointer"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ManasRaj241" target="_blank">
                      <FaGithub
                        color="green"
                        className="text-2xl cursor-pointer"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <BiLogoSpringBoot
                    color="green"
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                  <FaJava
                    color="green"
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                  <FaReact
                    color="green"
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                  <AiOutlineConsoleSql
                    color="green"
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-28 mt-8 order-1">
            <img src={pic} className="md:w-[300px] md:h-[300px]" alt="" />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
