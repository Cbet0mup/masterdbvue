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
    resolve:{
      alias: [
        {
          find: '@', replacement: path.resolve(__dirname,'src')
        }
      ]
    },
    server: {
      fs: {
        allow: ['..']
      },
      port: 3000,
      open: '/'
    }
  }
})
