import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mpa from 'vite-plugin-mpa'
import htmlTemplate from 'vite-plugin-html-template'
const pages = {
  index: {
    // template: 'src/pages/template.html',
    template: path.resolve(process.cwd(), 'src/pages/template.html'),
    title: 'Index Page',
    entry: 'src/pages/agcim-rs/index/main.js'
  },
  subpage: {
    template: path.resolve(process.cwd(), 'src/pages/template.html'),
    title: 'SubPage Page',
    entry: 'src/pages/agcim-rs/subpage/main.js'
  }
}
export default defineConfig(() => {
  // console.log(path.resolve(process.cwd(), 'src/pages/template.html'))
  return {
    plugins: [
      mpa.default(),
      htmlTemplate.default({ pages }),
      vue(),
      vueJsx(), // 支持使用vue jsx
      AutoImport({
        resolvers: [ElementPlusResolver()] // 自动导入组件
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })],
    resolve: {
      alias: {
        '@components': '/src/components',
        '@utils': '/src/utils',
        '@constants': '/src/constants',
        '@store': '/src/store',
        '@styles': '/src/styles',
        '@views': '/src/views'
      }
    },
    server: {
      open: false
    }
  }
})
