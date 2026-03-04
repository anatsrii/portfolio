import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import WindowFrame from './WindowFrame';
import robotIcon from '../assets/robot.png';
import '../styles/projects.css';

function Projects() {
  const { t } = useTranslation();
  const { windows, currentLanguage } = useSelector((state) => state.pages);
  const projectsWindow = windows.projects;

  if (projectsWindow.state === 'closed') return null;

  const getTitle = () => currentLanguage === 'th' ? projectsWindow.titleTh : projectsWindow.title;

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      tech: ['React', 'Socket.io', 'Express'],
      status: 'inProgress'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This very website! A desktop-inspired portfolio',
      tech: ['React', 'Redux', 'Vite'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with beautiful visualizations',
      tech: ['React', 'Chart.js', 'API'],
      status: 'completed'
    }
  ];

  const getStatusText = (status) => {
    return status === 'completed' ? t('projects.statusCompleted') : t('projects.statusInProgress');
  };

  return (
    <div className={`window-container ${projectsWindow.state === 'minimized' ? 'minimized' : ''}`}>
      <WindowFrame 
        title={getTitle()} 
        windowName="projects"
        icon={robotIcon}
      >
        <div className="projects-content">
          <h2>{t('projects.title')}</h2>
          <p className="projects-intro">{t('projects.subtitle')}</p>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`status-badge ${project.status}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

export default Projects;
