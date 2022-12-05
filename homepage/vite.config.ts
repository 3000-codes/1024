import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
const SRC_PATH = resolve(__dirname, 'src')
export default defineConfig({
  plugins: [vue(), jsx()],
  resolve: {
    alias: {
      '@': SRC_PATH
    }
  }
})
