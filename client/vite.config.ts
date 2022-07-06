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
        { find: '@images', replacement: '/src/assets/images' },
        { find: '@layouts', replacement: '/src/layouts' },
        { find: '@assets', replacement: '/src/assets' },
        { find: '@vendors', replacement: '/src/assets/vendors' },
        { find: '@styles', replacement: '/src/assets/styles' },
      ],
    }),
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
});
