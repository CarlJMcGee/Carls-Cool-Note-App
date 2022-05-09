const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require("./db/db.json");

app.listen(PORT, () => {
  console.log("API server now on port " + PORT);
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

const findById = (id, arr) => {
  const result = arr.filter((note) => note.id === id)[0];
  return result;
};
app.get("/note/test", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

app.get("/note/test/:id", (req, res) => {
  let result = findById(req.params.id, notes);

  res.json(result);
});
