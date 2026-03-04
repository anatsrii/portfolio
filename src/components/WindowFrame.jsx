import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { minimizeWindow, closeWindow } from '../stores/pageReducer';
import '../styles/window.css';

function WindowFrame({ title, windowName, children, icon }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleMinimize = () => {
    dispatch(minimizeWindow(windowName));
  };

  const handleClose = () => {
    dispatch(closeWindow(windowName));
  };

  return (
    <div className="window-frame">
      <div className="window-titlebar">
        <div className="window-title">
          {icon && <img src={icon} alt="" className="window-icon" />}
          <span>{title}</span>
        </div>
        <div className="window-controls">
          <button 
            className="window-btn minimize" 
            onClick={handleMinimize}
            title={t('window.minimize')}
          >
            🗕
          </button>
          <button 
            className="window-btn close" 
            onClick={handleClose}
            title={t('window.close')}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}

export default WindowFrame;
