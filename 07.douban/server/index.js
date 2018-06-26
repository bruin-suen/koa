
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const koaTemplate = require('koa-art-template');

// 配置模板引擎
koaTemplate(app, {
	root: path.join(__dirname, 'views'),
	extname: '.html',
	debug: process.env.NODE_ENV !== 'production'
});

app.use(async (ctx, next) => {

	await ctx.render('index', {
		you: 'Luke',
		me: 'Burin'
	})
});

app.listen(8088);
console.log('Server run http://localhost:8088/');