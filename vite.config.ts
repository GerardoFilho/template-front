import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    plugins: [
      react(),
      compression({
        algorithms: ['gzip'],
        threshold: 1024,
        skipIfLargerOrEqual: true,
        deleteOriginalAssets: false,
        filename: '[path][base].gz',
        include: /\.(js|mjs|json|css|html|svg)$/i,
      }),
    ],
    build: {
      target: 'esnext',
      minify: 'esbuild',
      sourcemap: false,
      outDir: 'dist',
      chunkSizeWarningLimit: 600,
      esbuild: isProd ? { drop: ['console', 'debugger'], } : undefined,
      // rollupOptions: {
      //   output: { // TESTER EM PRD E HML PARA SABER SE FUNCIONA NO AMBIENTE DA CAIXA
      //     manualChunks(id: string) {
      //       if (id.includes('node_modules')) {
      //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
      //       }
      //     },
      //   },
      // },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
