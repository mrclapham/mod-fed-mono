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
      name: 'host-app',
      remotes: {
        // Update to point to the correct location - now looking in the assets folder
        remote: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
    port: 5000,
    strictPort: true,
    hmr: true, // Enable hot module replacement
    watch: {
      usePolling: true // For watching file changes in certain environments
    }
  }
});