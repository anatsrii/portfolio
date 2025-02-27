import React, { useState, useRef } from 'react';
import '../styles/upload.css'

function UploadBlogs() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const addFiles = (selectedFiles) => {
    const newFiles = selectedFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      progress: 0,
      uploaded: false,
      error: false
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleUpload = () => {
    // Simulate file upload
    files.forEach((file, index) => {
      const timer = setInterval(() => {
        setFiles(prevFiles => {
          const newFiles = [...prevFiles];
          if (newFiles[index].progress < 100) {
            newFiles[index].progress += 5;
          } else {
            newFiles[index].uploaded = true;
            clearInterval(timer);
          }
          return newFiles;
        });
      }, 200);
    });
  };

  const removeFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="upload-container">
      <div 
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          multiple 
          className="file-input" 
        />
        <div className="upload-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </div>
        <p className="upload-text">Drag & Drop files here or click to browse</p>
      </div>

      {files.length > 0 && (
        <div className="files-container">
          <h3>Files to Upload</h3>
          <div className="file-list">
            {files.map(file => (
              <div key={file.id} className="file-item">
                <div className="file-info">
                  <div className="file-type-icon">
                    {file.type.includes('image') ? '🖼️' : 
                     file.type.includes('pdf') ? '📄' : 
                     file.type.includes('document') ? '📝' : '📁'}
                  </div>
                  <div className="file-details">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{formatFileSize(file.size)}</span>
                  </div>
                  <button 
                    className="remove-button"
                    onClick={() => removeFile(file.id)}
                  >
                    ✕
                  </button>
                </div>
                <div className="progress-container">
                  <div 
                    className={`progress-bar ${file.uploaded ? 'complete' : ''}`}
                    style={{ width: `${file.progress}%` }}
                  ></div>
                </div>
                <span className="file-status">
                  {file.uploaded ? 'Uploaded' : `${file.progress}%`}
                </span>
              </div>
            ))}
          </div>
          <button className="upload-button" onClick={handleUpload}>
            Upload All Files
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadBlogs;