import bluebird from "bluebird"; // promises
import bodyParser from "body-parser";
import compression from "compression"; // compresses requests
import express from "express";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
// app.set('views', path.join(__dirname, '../views'));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(app.get("port"), () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${app.get("port")}`);
});
