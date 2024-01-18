import React from "react";

const About = () => { 
  return(
    <div
      name="about"
      id="about"
      //#0a192f old bg color
      className="w-full h-screen bg-[black] text-black"
    >
      <div className="flex flex-col justify-center items-center w-full lg:h-full">
        <div className=" rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 flex flex-col justify-center items-center w-4/6 ">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl  font-bold inline border-b-4 text-white border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-white stext-3xl font-bold sm:text-3xl">
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
                practices. In addition to software development, I am also a
                technical writer--simplifying topics/concepts on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;