const fs = require("fs");
const fsProm = require("fs/promises");
let notes = require("../db/db.json");

const deleteFile = function (id) {
  keptNotes = notes.filter((note) => note.id !== id);
  fs.writeFileSync("./db/db.json", JSON.stringify(keptNotes));
  console.log("Note Deleted");
};

module.exports = deleteFile;
