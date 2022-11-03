import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@entries':'/pages-entries',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@store': '/src/store',
      '@styles': '/src/styles',
      '@views': '/src/views'
    }
  },
  build:{
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages-entries/pageA/indexA.html'),
        main2: resolve(__dirname, '/index.html'),
        nested: resolve(__dirname, 'pages-entries/pageB/indexB.html')
      }
    }
  }
})
