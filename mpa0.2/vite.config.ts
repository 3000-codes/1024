import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })],
  resolve: {
    alias: {
      '@entries': '/pages-entries',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@store': '/src/store',
      '@styles': '/src/styles',
      '@views': '/src/views'
    }
  },
  server: {
    open: '/index.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages-entries/pageA/indexA.html'),
        main2: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'pages-entries/pageB/indexB.html')
      }
    }
  }
})
