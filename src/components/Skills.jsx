import React from 'react';

const Skills = () => {
  return(
    <div name='skills' className='w-full h-screen pt-16 bg-[black] text-gray-300 sm:h-full'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-center px-10 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I love to work with</p>
          </div> 
          <div className='w-full grid md:grid-cols-4 xsm:grid-cols-2 gap-4 text-center py-8'>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>WORDPRESS</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>CMS</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>SEO</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>WEB DESIGN</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-white text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-500'>
                  <p className='my-4'>MYSQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;