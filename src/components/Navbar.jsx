import React, { useState } from 'react'; 
import me from '../assets/main.png';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[black] text-gray-300'>
      <div>
       <div className='flow-root flex md:flex'>
        <h1 className=' font-bold text-2xl font- flow-right'>ARSALAN</h1>
        <img className='flow-left' src={me} width={35} height={20} />
        </div>
        
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8  duration-500 active:text-black'>
        <li className='hover:text-sky-700'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={24}/> : <FaTimes size={24} />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'lg:hidden xl:hidden md:hidden'
            : 'absolute top-9 right-5 w-[150px] h-[236px] bg-[black] flex flex-col justify-center items-center shadow-sm shadow-white grid text-center grid-rows-5 divide-y bg-opacity-90'
        }
      >
        <li className='py-2 text-2xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className=' lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/peerarsalan
              '
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF69B4] xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/peerzada_arsalan'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/peerarsalan'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:peerarsalan7@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1_e15o6QNNxURVvg2KDejn21BiZMhCgkR/view?usp=drive_link'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;