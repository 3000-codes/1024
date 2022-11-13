// let Koa = require('koa');
// let Router = require('koa-router');
// const next = require('next');
import Koa from 'koa'
import Router from 'koa-router'
import Next from 'next'
const dev = process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handler = app.getRequestHandler()
const init = async () => {
  await app.prepare()
  const server = new Koa()
  const router = new Router()

  // server.use(async (ctx, next) => {
  //     await handler(ctx.req, ctx.res);
  //     ctx.response = false;
  // });
  server.use(async (ctx, next) => {
    const { path, method } = ctx// 提取请求路径和方式
    ctx.body = `<h1>test,${path},${method}</h1>`
    await next()// 执行后续,如果没有这句话则在此中断
  })

  router.get('/test', async (ctx, next) => {
    ctx.body = '测试页面'
    await next()// 执行后续,如果没有这句话则在此中断
  })
  // 匹配 /testid/457
  router.get('/testid/:id', async (ctx, next) => {
    ctx.body = ctx.params.id
    await next()// 执行后续,如果没有这句话则在此中断
  })
  router.get('/resType', async (ctx, next) => {
    ctx.body = { success: true }
    ctx.set('Content-Type', 'application/json')// 告诉客户端响应为application/json
    await next()
  })
  server.use(router.routes())// 需要放在路由配置后面
  server.listen(3000, () => console.log('server started at port 3000'))
}
init()
