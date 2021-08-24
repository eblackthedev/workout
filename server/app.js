const Express = require("express");
const app = Express();
const dbConnection = require("./db");

app.use(Express.json());

const controllers = require("./controllers");

app.use("/log", controllers.logController);

dbConnection
  .authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(3000, () => {
      console.log(`[Server]: App is listening on 3000.`);
    });
  })

  // app.use("test", (req, res) => {
  //   res.send("This is a message from the test endpoint on the server!");
  // });

  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });