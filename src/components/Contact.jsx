import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import WindowFrame from './WindowFrame';
import mailIcon from '../../email5rm.png';
import '../styles/contact.css';

function Contact() {
  const { t } = useTranslation();
  const { windows, currentLanguage } = useSelector((state) => state.pages);
  const contactWindow = windows.contact;

  const submitForm = (e) => {
    e.preventDefault();
    alert(t('contact.success'));
  };

  if (contactWindow.state === 'closed') return null;

  const getTitle = () => currentLanguage === 'th' ? contactWindow.titleTh : contactWindow.title;

  return (
    <div className={`window-container ${contactWindow.state === 'minimized' ? 'minimized' : ''}`}>
      <WindowFrame 
        title={getTitle()} 
        windowName="contact"
        icon={mailIcon}
      >
        <div className="contact-content-wrapper">
          <h2>{t('contact.title')}</h2>
          <p className="contact-intro">{t('contact.subtitle')}</p>
          
          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                placeholder={t('contact.messagePlaceholder')}
                rows={5}
              />
            </div>
            
            <button type="submit" className="submit-btn">
              {t('contact.send')}
            </button>
          </form>

          <div className="contact-links">
            <h3>{t('contact.findMe')}</h3>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

export default Contact;
