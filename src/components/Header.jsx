import computerIcon from '../assets/computer.png';
import profileIcon from '../assets/profile.png';
import robotIcon from '../assets/robot.png';
import mailIcon from '../../email5rm.png';
import '../styles/header.css';
import blog from '../assets/blog.png';
import { useDispatch } from 'react-redux';
import { toggleContact, toggleHome, toggleAbout, toggleProjects, toggleBlogs} from '../stores/pageReducer';
import { useSelector } from 'react-redux';


function Header() {
  const { home,contact, about, projects, blogs } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  const handlerBlogs = () => {
    dispatch(toggleContact(true));
    dispatch(toggleHome(true));
    dispatch(toggleAbout(true));
    dispatch(toggleProjects(true));
    dispatch(toggleBlogs(blogs));
  }

  return (
    <nav>
      <ul>
        <li onClick={() => dispatch(toggleHome(home))}>
          <img src={computerIcon} alt="Home" />
          <span className='nav-text'>Home</span>
        </li>
        <li onClick={() => dispatch(toggleAbout(about))}>
          <img src={profileIcon} alt="About" />
          <span className='nav-text'>About</span>
        </li>
        <li onClick={() => dispatch(toggleContact(contact))}>
  
          <img src={mailIcon} alt="Contact" />
          <span className='nav-text'>Contact</span>
     
        </li>

        <li onClick={() => dispatch(toggleProjects(projects))}>
          <img src={robotIcon} alt="Projects" />
          <span className='nav-text'>Projects</span>
        </li>
        <li onClick={() => handlerBlogs()}>
          <img src={blog} alt="Blog" />
          <span className='nav-text'>Blog</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
