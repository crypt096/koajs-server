const Koa = require("koa");
const app = new Koa();

// Add a date method to the context
app.context.date = Date();

// Response
app.use((ctx) => {
  // Use the state
  ctx.state.user = "Alex";

  // Request object usage
  let from = ctx.request.origin;

  // Print out date
  ctx.body = `Hello ${ctx.state.user} on ${ctx.date}`;
  console.log(from);
});

app.listen(3001);
