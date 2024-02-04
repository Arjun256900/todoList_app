import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var tasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { tasks });
});

app.post("/addTask", (req, res) => {
  const task = req.body["task"];
  tasks.push(task);
  res.redirect("/");
});
app.get("/deleteTask", (req, res) => {
  const index = req.query.index;
  tasks.splice(index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
