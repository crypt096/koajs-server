const Koa = require("koa");
const app = new Koa();

// Add a date method to the context
app.context.userData = {
  firstName: "Alex",
  occupation: "Software Engineer",
};

// Response
app.use(async (ctx) => {
  ctx.response.body = await ctx.userData;
});

// log
app.use(async (ctx, next) => {
  await next();
  const responseTime = ctx.response.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
});

app.listen(3001);
