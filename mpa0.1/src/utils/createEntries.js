import entries from '../constants/entries.js'
import { access, readFile, writeFile } from 'fs/promises'

const createPages = async () => {
  const input = {}
  const temp = await readFile(process.cwd() + '/src/index.html', 'utf8')
  entries.forEach(async item => {
    const pageName = item.name
    try {
      await access(`./src/pages/${pageName}/index.html`)
    } catch (error) {
      console.log(`创建${pageName}.html文件`)
      const titleIndex = temp.toString().indexOf('</head>')
      const scriptIndex = temp.toString().indexOf('</body>')
      const content = temp.toString().slice(0, titleIndex) + `\n<title>${item.title}</title>\n` + temp.toString().slice(titleIndex, scriptIndex) + '\n<script type="module" src="./main.js"></script>\n' + temp.toString().slice(scriptIndex)
      writeFile(`./src/pages/${pageName}/index.html`, content)
    }
    input[pageName] = `/pages/${pageName}/index.html`
  })

  return input
}
export default createPages()
