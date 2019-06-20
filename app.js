const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();

router.get('/test', async function (ctx) {
    ctx.body = {
        name: '1234',
        password: '1234'
    };
});

router.get('/register', async function (ctx) {
    let ctx_query  = ctx.query;
    let phone = ctx_query.phone;
    let pwd = ctx_query.pwd;
    console.log(phone);
    console.log(pwd);
    ctx.body = {
        phone,
        pwd
    };
});
// router.get('/login')

app.use(router.routes());
app.listen(9999, function () {
    console.log('运行');
});
