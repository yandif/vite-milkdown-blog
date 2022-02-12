import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import tsconfigPaths from 'vite-tsconfig-paths';

const serverHost = 'http://localhost';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  publicDir: './public',
  plugins: [react(), tsconfigPaths(), legacy(), mkcert()],
  server: {
    https: false,
    port: 3002,
    proxy: {
      '/api': {
        target: `${serverHost}/api`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
