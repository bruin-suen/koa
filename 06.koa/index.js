/**
 * =====================================
 *
 *  Koa   Express
 *
 *  HTTP 接收 解析 响应
 *
 *  中间件 执行上下文
 *
 *  Application    Content
 *  Request        Response
 *  Middlewares
 *  Session        Cookie
 *
 *  =====================================
 */

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'Hi Burin';
});


app.listen(8088);