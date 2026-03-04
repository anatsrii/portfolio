import { createSlice } from "@reduxjs/toolkit";

const initialPage = {
  // Window states: 'open', 'minimized', 'closed'
  windows: {
    home: { state: 'open', title: 'Home', titleTh: 'หน้าแรก', icon: 'computer' },
    about: { state: 'open', title: 'About Me', titleTh: 'เกี่ยวกับฉัน', icon: 'profile' },
    contact: { state: 'open', title: 'Contact', titleTh: 'ติดต่อ', icon: 'mail' },
    projects: { state: 'closed', title: 'Projects', titleTh: 'โปรเจกต์', icon: 'robot' },
    blogs: { state: 'closed', title: 'Blog', titleTh: 'บล็อก', icon: 'blog' },
  },
  // UI States
  sidebarOpen: true,
  currentLanguage: 'en',
  blogsList: true,
  blogsContent: true,
  fileList: [],
  selectedFile: "",
};

const pageSlice = createSlice({
  name: "pages",
  initialState: initialPage,
  reducers: {
    // เปิดหน้าต่าง (จาก taskbar หรือเมนู)
    openWindow: (state, action) => {
      const windowName = action.payload;
      if (state.windows[windowName]) {
        state.windows[windowName].state = 'open';
      }
    },
    
    // ปิดหน้าต่าง (close button)
    closeWindow: (state, action) => {
      const windowName = action.payload;
      if (state.windows[windowName]) {
        state.windows[windowName].state = 'closed';
      }
    },
    
    // ย่อหน้าต่าง (minimize button)
    minimizeWindow: (state, action) => {
      const windowName = action.payload;
      if (state.windows[windowName]) {
        state.windows[windowName].state = 'minimized';
      }
    },
    
    // Toggle หน้าต่างจาก taskbar (restore ถ้า minimized, minimize ถ้า open)
    toggleWindow: (state, action) => {
      const windowName = action.payload;
      if (state.windows[windowName]) {
        const currentState = state.windows[windowName].state;
        if (currentState === 'open') {
          state.windows[windowName].state = 'minimized';
        } else {
          state.windows[windowName].state = 'open';
        }
      }
    },
    
    // Toggle Sidebar
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    
    // Set Language
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
    
    // สำหรับ Blogs (เก่า)
    toggleBlogsList: (state) => {
      state.blogsList = !state.blogsList;
    },
    toggleBlogsContent: (state) => {
      state.blogsContent = !state.blogsContent;
    },
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
    setFileList: (state, action) => {
      state.fileList = action.payload;
      if (action.payload.length > 0) {
        state.selectedFile = action.payload[0];
      }
    },
  },
});

export const { 
  openWindow, 
  closeWindow, 
  minimizeWindow, 
  toggleWindow,
  toggleSidebar,
  setLanguage,
  toggleBlogsList, 
  toggleBlogsContent, 
  setSelectedFile, 
  setFileList 
} = pageSlice.actions;

export default pageSlice.reducer;
