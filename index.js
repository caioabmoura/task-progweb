const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

const Task = require('./models/Tasks');
const tasksRoutes = require("./routes/taskRoutes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.use("/tasks", tasksRoutes);

conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("porta aberta");
    });
  })
  .catch((err) => {
    console.log(err);
  });
