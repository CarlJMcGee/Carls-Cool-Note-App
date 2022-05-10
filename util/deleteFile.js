const fs = require("fs");
const fsProm = require("fs/promises");
let notes = require("../db/db.json");

const deleteFile = function (id) {
  return new Promise(async (res, rej) => {
    keptNotes = notes.filter((note) => note.id !== id);
    await fsProm.writeFile("./db/db.json", JSON.stringify(keptNotes));
    console.log("Note Deleted");
  });
};

module.exports = deleteFile;
