import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Menu
      menu: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        projects: 'Projects',
        blog: 'Blog',
        start: 'Start',
      },
      // Home
      home: {
        title: 'Welcome to My Portfolio! 👋',
        subtitle: 'Hi! I\'m a passionate developer who loves creating amazing things. This is my digital workspace where you can explore my work and get to know me better.',
        featureProjects: 'Projects',
        featureProjectsDesc: 'Check out my latest work',
        featureBlog: 'Blog',
        featureBlogDesc: 'Read my thoughts & tutorials',
        featureContact: 'Contact',
        featureContactDesc: 'Get in touch with me',
      },
      // About
      about: {
        title: 'About Me',
        tagline: 'Developer | Designer | Creator',
        whoAmI: '🎯 Who I Am',
        whoAmIDesc: '7+ years as IT Support — solving problems, keeping systems running, and making users happy. Web3 contributor since 2018, shipped code through bull and bear markets. Now vibing with AI-assisted development, building fast and breaking things (then fixing them).',
        skills: '🛠️ Skills',
        interests: '🌟 Interests',
        interest1: '🎮 Game Development',
        interest2: '🎨 Pixel Art',
        interest3: '📚 Learning New Tech',
        interest4: '☕ Coffee & Code',
      },
      // Contact
      contact: {
        title: '📧 Get In Touch',
        subtitle: 'Have a question or want to work together? Send me a message!',
        name: 'Name:',
        namePlaceholder: 'Your name',
        email: 'Email:',
        emailPlaceholder: 'your@email.com',
        message: 'Message:',
        messagePlaceholder: 'Your message...',
        send: 'Send Message 🚀',
        success: 'Thank you for your message! We will get back to you soon.',
        findMe: 'Or find me on:',
      },
      // Projects
      projects: {
        title: '🚀 My Projects',
        subtitle: 'Here are some of the projects I\'ve been working on. Click on any project to learn more!',
        statusCompleted: 'Completed',
        statusInProgress: 'In Progress',
      },
      // Blog
      blog: {
        title: 'Blog',
        posts: '📚 Posts',
        selectPost: 'Select a post from the list to start reading.',
      },
      // Window Controls
      window: {
        minimize: 'Minimize',
        close: 'Close',
      },
    },
  },
  th: {
    translation: {
      // Menu
      menu: {
        home: 'หน้าแรก',
        about: 'เกี่ยวกับ',
        contact: 'ติดต่อ',
        projects: 'โปรเจกต์',
        blog: 'บล็อก',
        start: 'เริ่ม',
      },
      // Home
      home: {
        title: 'ยินดีต้อนรับสู่พอร์ตโฟลิโอ! 👋',
        subtitle: 'สวัสดี! ผมเป็นนักพัฒนาที่หลงใหลในการสร้างสรรค์สิ่งต่างๆ นี่คือพื้นที่ดิจิตอลของผมที่คุณสามารถสำรวจผลงานและรู้จักผมได้มากขึ้น',
        featureProjects: 'โปรเจกต์',
        featureProjectsDesc: 'ดูผลงานล่าสุด',
        featureBlog: 'บล็อก',
        featureBlogDesc: 'อ่านความคิดและบทความ',
        featureContact: 'ติดต่อ',
        featureContactDesc: 'ติดต่อกับผม',
      },
      // About
      about: {
        title: 'เกี่ยวกับฉัน',
        tagline: 'นักพัฒนา | นักออกแบบ | ผู้สร้าง',
        whoAmI: '🎯 ใครคือฉัน',
        whoAmIDesc: 'IT Support มากว่า 7 ปี — แก้ปัญหา, ดูแลระบบ, ทำให้ผู้ใช้มีความสุข 🛠️ Web3 Contributor ตั้งแต่ปี 2018, ผ่าน bull market และ bear market มาหมดแล้ว ⛓️ ตอนนี้เน้น vibe coding กับ AI — build fast, break things, then fix them 🤖⚡',
        skills: '🛠️ ทักษะ',
        interests: '🌟 ความสนใจ',
        interest1: '🎮 พัฒนาเกม',
        interest2: '🎨 ศิลปะพิกเซล',
        interest3: '📚 เรียนรู้เทคโนโลยีใหม่',
        interest4: '☕ กาแฟ & โค้ด',
      },
      // Contact
      contact: {
        title: '📧 ติดต่อฉัน',
        subtitle: 'มีคำถามหรือต้องการร่วมงานกัน? ส่งข้อความถึงผม!',
        name: 'ชื่อ:',
        namePlaceholder: 'ชื่อของคุณ',
        email: 'อีเมล:',
        emailPlaceholder: 'your@email.com',
        message: 'ข้อความ:',
        messagePlaceholder: 'ข้อความของคุณ...',
        send: 'ส่งข้อความ 🚀',
        success: 'ขอบคุณสำหรับข้อความ! ผมจะติดต่อกลับโดยเร็วที่สุด',
        findMe: 'หรือติดต่อผมที่:',
      },
      // Projects
      projects: {
        title: '🚀 โปรเจกต์ของฉัน',
        subtitle: 'นี่คือบางส่วนของโปรเจกต์ที่ผมกำลังทำงานอยู่ คลิกที่โปรเจกต์เพื่อดูรายละเอียดเพิ่มเติม!',
        statusCompleted: 'เสร็จสิ้น',
        statusInProgress: 'กำลังทำ',
      },
      // Blog
      blog: {
        title: 'บล็อก',
        posts: '📚 บทความ',
        selectPost: 'เลือกบทความจากรายการเพื่ออ่าน',
      },
      // Window Controls
      window: {
        minimize: 'ย่อ',
        close: 'ปิด',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
