const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  {
    userId: 1,
    username: "tyler",
    password: "password",
  },
];

// create operation
app.post("/api/users", (req, res) => {
  const user = {
    userId: users.length + 1,
    username: req.body.username,
    password: req.body.password,
  };

  users.push(user);
  res.send(user);
});

// read operation
app.get("/api/users/:user", (req, res) => {
  const user = users.find((u) => u.userId === parseInt(req.params.user));

  if (!user) {
    res.status(404).send("Error, there was no user found!");
  } else {
    res.send(user);
  }
});

app.get("/api/users", (req, res) => {
  res.send(jobs);
});

// update operation
app.put("api/users/:user", (req, res) => {
  const user = users.find((u) => u.userId === parseInt(req.params.user));

  if (!user) {
    res.status(404).send("Error, there was no user found!");
  } else {
    res.status(400).send(error.details[0].message);
  }

  user.userId = req.body.userId;
  user.username = req.body.username;
  user.password = req.body.password;

  res.send(user);
});

// delete operation
app.delete("/api/users/:user", (req, res) => {
  const user = users.find((u) => u.userId === parseInt(req.params.user));

  if (!user) {
    res.status(404).send("Error, there was no user found!");
  } else {
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(users);
  }
});

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));