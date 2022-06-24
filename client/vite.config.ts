import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [
        { find: '@components', replacement: '/src/components' },
        { find: '@styles', replacement: '/src/styles' },
      ],
    }),
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
});
