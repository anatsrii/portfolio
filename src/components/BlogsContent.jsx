import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import WindowFrame from './WindowFrame';
import blogIcon from '../assets/blog.png';
import '../styles/blogs.css';

function BlogsContent() {
  const { t } = useTranslation();
  const { windows, selectedFile, currentLanguage } = useSelector((state) => state.pages);
  const blogsWindow = windows.blogs;
  const [content, setContent] = useState('');
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setFileList(['welcome.md', 'react-tips.md', 'coding-journey.md']);
  }, []);

  useEffect(() => {
    if (selectedFile) {
      fetch(`/md-files/${selectedFile}`)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(() => {
          setContent(`# ${t('blog.selectPost')}`);
        });
    } else {
      setContent(`# ${t('blog.selectPost')}`);
    }
  }, [selectedFile, t]);

  if (blogsWindow.state === 'closed') return null;

  const getTitle = () => currentLanguage === 'th' ? blogsWindow.titleTh : blogsWindow.title;

  return (
    <div className={`window-container ${blogsWindow.state === 'minimized' ? 'minimized' : ''}`}>
      <WindowFrame 
        title={getTitle()} 
        windowName="blogs"
        icon={blogIcon}
      >
        <div className="blogs-content">
          <div className="blogs-layout">
            <aside className="blogs-sidebar">
              <h3>{t('blog.posts')}</h3>
              <ul className="blog-list">
                {fileList.map((file) => (
                  <li 
                    key={file} 
                    className={selectedFile === file ? 'active' : ''}
                  >
                    📄 {file.replace('.md', '')}
                  </li>
                ))}
              </ul>
            </aside>
            <article className="blogs-article">
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

export default BlogsContent;
