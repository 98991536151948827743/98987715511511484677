// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Make sure this import is present

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- This line is crucial for Tailwind to be processed
  ],
});