import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),  // Menggunakan plugin React
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),  // Alias '@' untuk folder 'src'
    },
  },
  base: '/',  // Menetapkan base URL untuk aplikasi
});
