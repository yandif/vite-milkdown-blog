import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';
import path from 'path';

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
});
