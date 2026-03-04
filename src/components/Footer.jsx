import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleWindow, toggleSidebar, setLanguage } from '../stores/pageReducer';
import computerIcon from '../assets/computer.png';
import profileIcon from '../assets/profile.png';
import robotIcon from '../assets/robot.png';
import mailIcon from '../../email5rm.png';
import blogIcon from '../assets/blog.png';
import '../styles/footer.css';

const iconMap = {
  computer: computerIcon,
  profile: profileIcon,
  robot: robotIcon,
  mail: mailIcon,
  blog: blogIcon,
};

function Footer() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { windows, sidebarOpen, currentLanguage } = useSelector((state) => state.pages);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Realtime clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sync language with i18n
  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  // กรองเฉพาะหน้าต่างที่ไม่ได้ปิด (open หรือ minimized)
  const activeWindows = Object.entries(windows).filter(
    ([_, window]) => window.state !== 'closed'
  );

  const handleTaskbarClick = (windowName) => {
    dispatch(toggleWindow(windowName));
  };

  const handleStartClick = () => {
    dispatch(toggleSidebar());
  };

  const handleLanguageToggle = () => {
    const newLang = currentLanguage === 'en' ? 'th' : 'en';
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
  };

  const getWindowTitle = (window) => {
    return currentLanguage === 'th' ? window.titleTh : window.title;
  };

  return (
    <footer className="taskbar">
      <div className="taskbar-start">
        <button 
          className={`start-btn ${sidebarOpen ? 'active' : ''}`}
          onClick={handleStartClick}
        >
          <span className="start-icon">🪟</span>
          <span>{t('menu.start')}</span>
        </button>
      </div>
      
      <div className="taskbar-windows">
        {activeWindows.map(([name, window]) => (
          <button
            key={name}
            className={`taskbar-item ${window.state === 'open' ? 'active' : ''}`}
            onClick={() => handleTaskbarClick(name)}
          >
            <img 
              src={iconMap[window.icon]} 
              alt={getWindowTitle(window)}
              className="taskbar-icon"
            />
            <span className="taskbar-title">{getWindowTitle(window)}</span>
          </button>
        ))}
      </div>
      
      <div className="taskbar-tray">
        <button 
          className="language-toggle"
          onClick={handleLanguageToggle}
          title={currentLanguage === 'en' ? 'Switch to Thai' : 'Switch to English'}
        >
          {currentLanguage === 'en' ? '🇺🇸 EN' : '🇹🇭 ไทย'}
        </button>
        <span className="clock">
          {currentTime.toLocaleTimeString(currentLanguage === 'th' ? 'th-TH' : 'en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
          })}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
