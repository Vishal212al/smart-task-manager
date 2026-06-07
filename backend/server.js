const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Task Manager Backend Running");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "User Registered Successfully",
    email: email,
  });
});

app.post("/add-task", (req, res) => {
  const { task } = req.body;

  res.json({
    message: "Task Added Successfully",
    task: task,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});