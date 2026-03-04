import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import WindowFrame from "./WindowFrame";
import computerIcon from '../assets/computer.png';

function Home() {
  const { t } = useTranslation();
  const { windows, currentLanguage } = useSelector((state) => state.pages);
  const homeWindow = windows.home;

  if (homeWindow.state === 'closed') return null;

  const getTitle = () => currentLanguage === 'th' ? homeWindow.titleTh : homeWindow.title;

  return (
    <div className={`window-container ${homeWindow.state === 'minimized' ? 'minimized' : ''}`}>
      <WindowFrame 
        title={getTitle()} 
        windowName="home"
        icon={computerIcon}
      >
        <div className="home-content">
          <h1>{t('home.title')}</h1>
          <p>{t('home.subtitle')}</p>
          <div className="home-features">
            <div className="feature-card">
              <span className="feature-icon">💻</span>
              <h3>{t('home.featureProjects')}</h3>
              <p>{t('home.featureProjectsDesc')}</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📝</span>
              <h3>{t('home.featureBlog')}</h3>
              <p>{t('home.featureBlogDesc')}</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📧</span>
              <h3>{t('home.featureContact')}</h3>
              <p>{t('home.featureContactDesc')}</p>
            </div>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

export default Home;
