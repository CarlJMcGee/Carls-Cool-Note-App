const fs = require("fs");
let notes = require("../db/db.json");

const writeFile = function (newNote) {
  newNote.id = notes.length.toString();
  notes.push(newNote);
  let packedData = JSON.stringify(notes, null, 2);
  fs.writeFileSync("./db/db.json", packedData);
  console.log(newNote);
  console.log("Database Updated");
};

module.exports = writeFile;
