import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['**/*.test.ts', '**/*.test.tsx', 'node_modules/**'],
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'UILibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
        // Removed preserveModules: true which conflicts with inlineDynamicImports
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});