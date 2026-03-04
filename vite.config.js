// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { plugin as markdown } from "vite-plugin-markdown"; // Correct import

export default defineConfig({
  plugins: [
    react(),
    markdown({
      mode: ["html"], // enable the raw mode
    }),
  ],
  server: {
    host: true, // ฟัง 0.0.0.0 ให้คอนเทนเนอร์เรียกได้
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "host.docker.internal",
      "0xmrjane.com",
      "192.168.99.95", // (ตัวเลือก) ถ้าจะเข้าตรงด้วย IP นี้
    ],
    hmr: {
      host: "0xmrjane.com", // ให้ HMR ใช้โดเมนจริง
      clientPort: 443, // หลัง Cloudflare/NPM คือ HTTPS:443
      protocol: "wss",
    },
  },
});
