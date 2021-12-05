const express = require("express");
const db = require("./db");

const app = express();
const port = 3000;

const events = [
  {
    id: 1,
    title: "Event 1",
  },
  {
    id: 2,
    title: "Event 2",
  },
  {
    id: 3,
    title: "Event 3",
  },
];

app.get("/", (req, res) => {
  res.send("Events App");
});

app.get("/events", (req, res) => {
  db.serialize(() =>
    db.all("SELECT * from events", (error, events) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
      }
      res.status(200).json({ data: events });
    })
  );
});

app.listen(port, () => {
  console.log(`Events app listening at http://localhost:${port}`);
});
