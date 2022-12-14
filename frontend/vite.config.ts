/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      };
    },
    {},
  );

  return {
    define: envWithProcessPrefix,
    plugins: [react()],
    server: {
      port: 8080,
    },
    test: {
      setupFiles: 'src/setupTests.ts',
      globals: true,
      environment: 'jsdom'
    }
  };
});
