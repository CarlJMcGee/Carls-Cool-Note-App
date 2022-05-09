const express = require("express");
const app = express();
const { notes } = require("./db/db.json");

app.listen(3001, () => {
  console.log("API server now on port 3001");
});

const filterByQuery = (query, arr) => {
  let titleArr = [];
  let filtered = arr;

  if (query.title) {
    if (typeof query.title === "string") {
      titleArr = [query.title];
    } else {
      titleArr = query.title;
    }
    titleArr.forEach((title) => {
      filtered = filtered.filter((note) => note.title.indexOf(title) !== -1);
    });
  }

  if (query.title) {
    filtered = filtered.filter((note) => note.title === query.title);
  }
  if (query.text) {
    filtered = filtered.filter((note) => note.text === query.text);
  }
  return filtered;
};

app.get("/note/test", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});
