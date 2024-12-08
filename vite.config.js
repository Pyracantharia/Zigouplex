import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js

export default defineConfig({
  plugins: [react()],
  base: '/', // Correct root path
});
