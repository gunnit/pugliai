import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  publicDir: false,
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: fileURLToPath(new URL('../../src/assets/js/cinematic', import.meta.url)),
    emptyOutDir: true,
    minify: true,
    rolldownOptions: {
      output: { chunkFileNames: 'motion-[hash].js' },
    },
    lib: {
      entry: {
        home: fileURLToPath(new URL('./home.js', import.meta.url)),
        interior: fileURLToPath(new URL('./interior.js', import.meta.url)),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
  },
});
