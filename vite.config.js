import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Base URL
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
      output: {
        globals: {
          'react-router-dom': 'ReactRouterDOM', // Define how the external module should be available globally
        },
      },
    },
  },
});
