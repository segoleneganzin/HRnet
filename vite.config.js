import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: [...configDefaults.exclude, '**/node_modules/**', '**/dist/**'],
  },
  server: {
    open: true, // Automatically open the app in the browser
  },
  build: {
    minify: 'esbuild',
  },
});
