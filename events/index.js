const express = require("express");
const db = require("./db");
const cors = require("cors");
const faker = require("faker");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Events App");
});

app.get("/events", (req, res) => {
  db.serialize(() =>
    db.all("SELECT * from events", (error, events) => {
      if (error) {
        res.status(500).json({ message: error.message });
      }
      res.status(200).json(events);
    })
  );
});

app.post("/events", (req, res) => {
  const user = req.body.user;
  db.run(
    "INSERT INTO events(id, userId, title, description, address) VALUES(?, ?, ?, ?)",
    [
      faker.datatype.number(100000),
      user,
      faker.commerce.productName,
      faker.commerce.productDescription,
      faker.address.streetAddress,
    ],
    (error) => {
      if (error) {
        res.status(500).json({ message: error.message });
      }
      res.status(200);
    }
  );
});

app.listen(port, () => {
  console.log(`Events app listening at http://localhost:${port}`);
});
