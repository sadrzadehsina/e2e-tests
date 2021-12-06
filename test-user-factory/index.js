const express = require("express");
const cors = require("cors");
const faker = require("faker");

const app = express();

app.use(cors());

const port = 3000;

app.get("/new_user", async (req, res) => {
  const response = await fetch("http://localhost:3002/auth/local/register", {
    username: faker.internet.userName(),
    email: `test_${faker.internet.email()}`,
    password: "112233qqwwff",
  });

  const user = await response.json();

  if (response.ok) {
    res.status(200).json({ user });
  } else {
    res.status(500);
  }
});

app.post("/login", async (req, res) => {
  const response = await fetch("http://localhost:3002/auth/local", {
    identifier: req.body.user,
    password: "112233qqwwff",
  });

  const user = await response.json();

  if (response.ok) {
    res.status(200).json({ user });
  } else {
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Test User Factory app listening at http://localhost:${port}`);
});
