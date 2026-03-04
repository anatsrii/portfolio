import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFileList, setSelectedFile } from '../pageReducer';

function BlogsList() {
  const dispatch = useDispatch();
  const {files, blogsList} = useSelector((state) => state.pages);

  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const response = await fetch('/md-files/');
        console.log(response)
        const text = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const fileList = Array.from(doc.querySelectorAll('a'))
          .map(link => link.getAttribute('href'))
          .filter(name => name.endsWith('.md'))
          .map(file => file.replace('/md-files/', ''));

        dispatch(setFileList(fileList));

        // 🟢 ถ้า selectedFile ยังว่าง ให้เลือกไฟล์แรก
        if (fileList.length > 0) {
          dispatch(setSelectedFile(fileList[0]));
        }
      } catch (error) {
        console.error('Error loading file list:', error);
      }
    };

    fetchFileList();
  }, [dispatch]);

  return (
    <>
     {blogsList && (
      <div className='blogs-list-container'>
      <h2>📄 รายชื่อบล็อก</h2>
      {files.length > 0 ? (
        files.map((file, index) => (
          <div key={index}>
            <button onClick={() => dispatch(setSelectedFile(file))}>
              {file}
            </button>
          </div>
        ))
      ) : (
        <p>กำลังโหลด...</p>
      )}
    </div>
     )}
    </>
  );
}

export default BlogsList;
