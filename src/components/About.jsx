import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import WindowFrame from './WindowFrame';
import profileIcon from '../assets/profile.png';
import '../styles/about.css';

function About() {
  const { t } = useTranslation();
  const { windows, currentLanguage } = useSelector((state) => state.pages);
  const aboutWindow = windows.about;

  if (aboutWindow.state === 'closed') return null;

  const getTitle = () => currentLanguage === 'th' ? aboutWindow.titleTh : aboutWindow.title;

  return (
    <div className={`window-container ${aboutWindow.state === 'minimized' ? 'minimized' : ''}`}>
      <WindowFrame 
        title={getTitle()} 
        windowName="about"
        icon={profileIcon}
      >
        <div className="about-content">
          <div className="about-header-section">
            <div className="profile-image">
              <img src={profileIcon} alt="Profile" />
            </div>
            <div className="profile-intro">
              <h2>{t('about.title')}</h2>
              <p className="tagline">{t('about.tagline')}</p>
            </div>
          </div>
          
          <div className="about-section">
            <h3>{t('about.whoAmI')}</h3>
            <p>{t('about.whoAmIDesc')}</p>
          </div>

          <div className="about-section">
            <h3>{t('about.skills')}</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">UI/UX</span>
            </div>
          </div>

          <div className="about-section">
            <h3>{t('about.interests')}</h3>
            <ul className="interests-list">
              <li>{t('about.interest1')}</li>
              <li>{t('about.interest2')}</li>
              <li>{t('about.interest3')}</li>
              <li>{t('about.interest4')}</li>
            </ul>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

export default About;
