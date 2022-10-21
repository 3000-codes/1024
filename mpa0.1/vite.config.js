import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import input from './src/utils/createEntries.js'

export default defineConfig(({ command, mode }) => {
  const rootDir = resolve(__dirname, 'src')
  const envDir = resolve(__dirname)
  const ENV = loadEnv(mode, envDir, ['AG', 'DEV'])
  return {
    base: ENV.AG_PROJECT_NAME, // 项目的构建目录
    // base: process.env.BASE_URL,// 项目的构建目录
    root: rootDir, // 项目的根目录
    envPrefix: 'AG',
    envDir,
    plugins: [
      vue(),
      vueJsx(), // 支持使用vue jsx
      AutoImport({
        // 自动导入组件
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@components': '/components',
        '@utils': '/utils',
        '@constants': '/constants',
        '@store': '/store',
        '@styles': '/styles',
        '@views': '/views'
      },
      extensions: ['.js', '.vue', '.json', 'jsx'] // 允许不写后缀导入的文件扩展名
    },
    publicDir: '../public',
    build: {
      sourcemap: 'inline', // 开启源码映射
      emptyOutDir: true, // 二次打包清空输出目录
      rollupOptions: {
        input
      },
      outDir: '../dist', // 输出目录
      assetsDir: './assets' // 静态资源目录
    },
    server: {
      port: ENV.DEV_PORT || 3000,
      host: ENV.DEV_NODE_ENV === 'romote' ? '0.0.0.0' : ENV.DEV_HOST || '127.0.0.1',
      proxy: {},
      hmr: true
      // open: ENV.AG_PROJECT_NAME+'/pages/resource/index.html' // 自动打开浏览器的页面
    },
    preview: {// 预览配置,基本和server配置一样

    }
  }
})
