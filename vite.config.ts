import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/gcs': {
        target: 'https://storage.googleapis.com/cj-mok-stash/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gcs/, ''),
      },
    },
    middlewareMode: false,
  },
  plugins: [
    react(),
    {
      name: 'cors-middleware',
      configureServer(server) {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', '*');
          next();
        });
      },
    },
  ],
})
