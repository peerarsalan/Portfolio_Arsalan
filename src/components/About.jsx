import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const About = () => { 
  return(
    <div
      name="about"
      id="about"
      //#0a192f old bg color
      className="w-full h-screen font-sans bg-gradient-to-l from-gray-700 via-gray-900 to-black text-black flex"
    >
      <div className="flex flex-col  justify-center items-center w-full lg:h-full">
        <div className=" rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right  pl-4">
              <p className="text-4xl animate-wiggle font-bold inline border-b-4 text-white border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4 py-4">
            <div className="text-white stext-3xl font-bold xsm:text-2xl animate-pulse">
              <p>
                Hi. I'm PEER ARSALAN AHMAD, nice to meet you. Do take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in UI/UX principles and
                practices. In addition to software development, I love to work with computer systems, hardware and other tools.
              </p>
            </div>
            
          </div>
          
        </div>
        <div className="py-8">
              <h2 className="text-white animate-typing xsm:text-xl overflow-hidden whitespace-nowrap border-r-3 border-r-white pr-5 text-2xl text-white font-bold">
                Connect with me on Social Media
                <a
              className='flex justify-between items-center w-full text-gray-300 animate-pulse'
              href='https://www.linkedin.com/in/peerarsalan
              '
            >
            <FaArrowLeft size={30} />
            </a>
              </h2>
            </div>
      </div>
    </div>
  );
};
export default About;