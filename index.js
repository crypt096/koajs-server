const Koa = require("koa");
const app = new Koa();

// Add a date method to the context
app.context.date = Date();
app.context.userData = {
  firstName: "Alex",
  occupation: "Software Engineer",
};

// Response
app.use((ctx) => {
  // Use the state
  ctx.state.user = "Alex";

  // Request object usage
  let from = ctx.request.origin;

  // Print out date
  ctx.response.body = `Hello ${ctx.userData.firstName} --- ${ctx.userData.occupation}`;
  // ctx.response.body = ctx.userData;
  console.log(from);
});

app.listen(3001);
