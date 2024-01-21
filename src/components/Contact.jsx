import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithubSquare,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return(
    <div className='flex xsm:justify-center  flex-col items-center w-full'> 

    <div name='contact' className='flex-col flex md:w-full w-full h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black md:justify-center  items-center p-4'>

        <div className='flex flex-col max-w-[60%] md:full w-full md:justify-center'>
            <div className='pb-4 flex flex-col  md:justify-center w-full h-full items-center'>
                
                <p className='text-4xl pt-8 font-bold inline border-b-4 border-cyan-500 text-gray-300 xsm:justify-center w-full'>Contact</p>
                <p className='text-gray-300 py-4 xsm:justify-center'>Send me a message</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
        
    </div>
    <div className='w-full  h-[20px] bg-gradient-to-l from-gray-700 via-gray-900 to-black bottom-10 pb-10 pt-10 items-center flex bg-[black] md:justify-center xsm:justify-center'>
      <div className='w- gap-2 bg-gradient-to-l from-gray-700 via-gray-900 to-black items-center flex flex'>
    <a
          className='flex  w-full text-gray-300  '
          href='https://www.github.com/in/peerarsalan
          '
        >
           <FaGithubSquare size={30} />
        </a>
        <a
          className='flex  w-full  text-gray-300'
          href='https://www.linkedin.com/in/peerarsalan
          '
        >
           <FaLinkedin size={30} />
        </a>
        <a
          className='flex w-full text-gray-300'
          href='https://www.instagram.com/in/peerzada_arsalan
          '
        >
           <FaInstagramSquare size={30} />
        </a>
        <a
          className='flex w-full text-gray-300'
          href='https://mailto:peerarsalan7@gmail.com
          '
        >
           <FaEnvelopeSquare size={30} />
        </a>
        </div>
    </div>
    </div>
  )
}
export default Contact