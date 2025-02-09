import React from 'react'
import logo from '../assets/felixLogo.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full flex items-center justify-between  z-50 mx-auto px-8'style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
         <Link to="/">
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo'/>
        </div>
        </Link>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://www.linkedin.com/in/%E7%A5%A5-%E9%84%AD-430778225/' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          <a href='https://github.com/zlix1214' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
    </nav>
  );
}

export default Navbar;