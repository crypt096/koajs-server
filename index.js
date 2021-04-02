const Koa = require("koa");
const app = new Koa();

// Add a date method to the context
app.context.userData = {
  firstName: "Alex",
  occupation: "Software Engineer",
};

// log
app.use(async (ctx, next) => {
  await next();
  const responseTime = ctx.response.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const milisecond = Date.now() - start;
  ctx.set("X-Response-Time", `${milisecond} ms`);
});

// Response
app.use(async (ctx) => {
  ctx.response.body = await ctx.userData;
});

app.listen(3001);
