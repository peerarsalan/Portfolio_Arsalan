import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/main.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return(
    <div
    name="home"
    className="h-full w-full bg-[black] md:h-full"
  >
    <div className="max-w-screen-lg mx-auto px-10 pt-24 flex flex-col items-center justify-center h-full px-4  md:flex-row ">
      <div className="flex flex-col justify-center h-full sm:pt-90">
        <h2 className="text-4xl sm:text-7xl font-bold text-white ">
          Hi there! I'm a Front-End Web Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
           I have 4 years of experience in web design and development.
          Currently, I love to work on web application using technologies like
          React JS, Tailwind, CMS and other Frontend Technologies.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;