import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js', // This should be at the root of the dist directory
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
  },
  server: {
    port: 5001,
    strictPort: true,
    hmr: true
  },
  preview: {
    port: 5001,
    strictPort: true
  }
});