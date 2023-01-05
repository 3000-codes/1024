import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app.js'
const server = express()
server.use(express.static('.'))
server.get('/', (req, res) => {
  const app = createApp()

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
        {
          "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
          }
        }
      </script>
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="module" src="/client.js"></script>
      </body>
    </html>
    `)
  })
})

server.listen(3000, () => {
  console.log('ready')
})