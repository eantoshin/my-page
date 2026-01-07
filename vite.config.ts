import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), preact()],
  logLevel: 'info',
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: false,
    hmr: {
      overlay: true,
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          preact: ['preact'],
          webfontloader: ['webfontloader'],
        },
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@use "@styles/_variables" as *;',
        sassOptions: {
          outputStyle: 'compressed',
          quietDeps: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@styles': resolve(__dirname, './src/styles'),
    },
  },
});
