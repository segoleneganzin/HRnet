import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the browser
  },
  build: {
    chunkSizeWarningLimit: 2000, // Set limit to 1000 kB (default is 500 kB)
  },
});
