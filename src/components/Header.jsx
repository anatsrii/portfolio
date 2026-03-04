import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { openWindow } from '../stores/pageReducer';
import computerIcon from '../assets/computer.png';
import profileIcon from '../assets/profile.png';
import robotIcon from '../assets/robot.png';
import mailIcon from '../../email5rm.png';
import blogIcon from '../assets/blog.png';
import '../styles/header.css';

const iconMap = {
  computer: computerIcon,
  profile: profileIcon,
  robot: robotIcon,
  mail: mailIcon,
  blog: blogIcon,
};

function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { windows, sidebarOpen } = useSelector((state) => state.pages);

  const menuItems = [
    { name: 'home', icon: computerIcon, labelKey: 'menu.home' },
    { name: 'about', icon: profileIcon, labelKey: 'menu.about' },
    { name: 'contact', icon: mailIcon, labelKey: 'menu.contact' },
    { name: 'projects', icon: robotIcon, labelKey: 'menu.projects' },
    { name: 'blogs', icon: blogIcon, labelKey: 'menu.blog' },
  ];

  const handleOpenWindow = (windowName) => {
    dispatch(openWindow(windowName));
  };

  return (
    <nav className={`desktop-nav ${sidebarOpen ? 'open' : 'closed'}`}>
      <ul>
        {menuItems.map((item) => (
          <li 
            key={item.name}
            onClick={() => handleOpenWindow(item.name)}
            className={windows[item.name]?.state !== 'closed' ? 'active' : ''}
          >
            <img src={item.icon} alt={t(item.labelKey)} />
            <span className='nav-text'>{t(item.labelKey)}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
