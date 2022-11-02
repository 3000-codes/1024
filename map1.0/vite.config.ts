import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mpa from 'vite-plugin-mpa'
import htmlTemplate from 'vite-plugin-html-template'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [htmlTemplate.default({
    // pagesDir: 'src/pages',
    pages:{
      index:{
        template: 'public/template.html',
        title: 'Index Page',
        entry: 'src/pages/index/main.ts',
      },
      subpage:{
        template: 'public/template.html',
        title: 'SubPage Page',
        entry: 'src/pages/subpage/main.ts',
      }
    },
    // expose to template
    data: {
      // title: 'Homepage',
    },
  }),mpa.default(),vue(),vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  })],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
