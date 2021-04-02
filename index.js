const Koa = require("koa");
const app = new Koa();

// Add a date method to the context
app.context.date = Date();
app.context.userData = {
  firstName: "Alex",
  occupation: "Software Engineer",
};

// Response
app.use(async (ctx) => {
  try {
    return (ctx.response.body = await ctx.userData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001);
