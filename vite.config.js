import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginElementPlus from 'vite-plugin-element-plus'

const path = require('path')

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      VitePluginElementPlus({
        // if you need to use the *.scss source file, you need to uncomment this comment
        // useSource: true
        format: mode === 'development' ? 'esm' : 'cjs',
      }),
    ],
    resolve: { alias: { '@': '/src' } },
    server: {
      fs: {
        allow: ['..']
      },
      //host: true,
      port: 3000,
      open: '/'
    },
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {

              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }
})
