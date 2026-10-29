import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures assets load correctly on GitHub Pages (https://athul3588krishna.github.io/akr-prtflio/)
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
