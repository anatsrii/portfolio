import React from 'react';
import computerIcon from '../assets/computer.png';
import profileIcon from '../assets/profile.png';
import robotIcon from '../assets/robot.png';
import mailIcon from '../assets/mail.png';
import '../styles/hearder.css';
import blog from '../assets/blog.png';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <img src={computerIcon} alt="Home" />
          <span className='nav-text'>Home</span>
        </li>
        <li>
          <img src={profileIcon} alt="About" />
          <span className='nav-text'>About</span>
        </li>
        <li>
          <img src={mailIcon} alt="Contact" />
          <span className='nav-text'>Contact</span>
        </li>
        <li>
          <img src={robotIcon} alt="Projects" />
          <span className='nav-text'>Projects</span>
        </li>
        <li>
          <img src={blog} alt="Blog" />
          <span className='nav-text'>Blog</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
