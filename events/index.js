const express = require("express");
const db = require("./db");
const cors = require("cors");
const faker = require("faker");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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

const createInsertQuery = ({ user }) => {
  if (user.startsWith("test_")) {
    return "INSERT INTO events_for_test(id, user, title, description, address) VALUES(?, ?, ?, ?, ?)";
  } else {
    return "INSERT INTO events(id, user, title, description, address) VALUES(?, ?, ?, ?, ?)";
  }
};

app.post("/events", (req, res) => {
  const user = req.body.user;
  db.run(
    createInsertQuery({ user }),
    [
      faker.datatype.number(100000),
      user,
      faker.commerce.productName(),
      faker.commerce.productDescription(),
      faker.address.streetAddress(),
    ],
    (error) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(200).json({ success: true });
    }
  );
});

app.listen(port, () => {
  console.log(`Events app listening at http://localhost:${port}`);
});
