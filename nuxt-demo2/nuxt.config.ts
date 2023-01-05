// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxt/ui'
  ],
  vite: {
    optimizeDeps: {
      // include: ['@nuxt/kit']
    }
  },
})
