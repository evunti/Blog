import express from "express";
var cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log("Server is running on http://localhost:3000");
});

app.use(express.static("resources"));

let title = "This is my blog post";

app.get("/", (req, res) => {
  console.log("Test", title);

  res.json({
    title,
    status: 200,
  });
});

app.post("/", (req, res) => {
  console.log("Creating Post", req.body);

  title = req.body?.title;

  console.log("title", title);

  res.json({
    post: req.body,
    text: "Created!",
    status: 201,
  });
});
