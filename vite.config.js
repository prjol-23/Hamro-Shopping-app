import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hamro-Shopping-App/', // Replace 'repository-name' with your actual GitHub repo name
});
