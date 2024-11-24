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

