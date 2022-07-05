import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [
        { find: '@components', replacement: '/src/components' },
        { find: '@routes', replacement: '/src/routes' },
        { find: '@pages', replacement: '/src/pages' },
        { find: '@styles', replacement: '/src/assets/styles' },
        { find: '@vendor', replacement: '/src/assets/vendor' },
      ],
    }),
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
});
