import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'cypress/', '**/*.cy.{js,jsx}'],
      extension: ['.js', '.jsx'],
      requireEnv: false,
      forceBuildInstrument: process.env.CYPRESS_COVERAGE === 'true',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src/'),
      '@components': path.resolve('src/components'),
      '@hooks': path.resolve('src/hooks'),
    },
  },
});
