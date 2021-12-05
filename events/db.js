const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./db/events.db",
  sqlite3.OPEN_READWRITE,
  (error) => {
    if (error) {
      console.log(error.message);
      return;
    }
    console.log("Connected to the events database");
  }
);

module.exports = db;
