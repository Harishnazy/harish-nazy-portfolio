import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2400, // Change this number to your preferred port
    open: true, // Automatically open browser
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});