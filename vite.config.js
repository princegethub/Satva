import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),      // "@/..." ke liye "src" ko resolve karega
      "@assets": path.resolve(__dirname, "src/assets") // "@assets/..." ke liye "src/assets" ko resolve karega
    }
  }
});
