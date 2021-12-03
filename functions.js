const fs = require("fs");

const add = (title, body) => {
  let oldNotes = loadNotes();
  let newNote = `Konu: ${title} || Note: ${body} \n`
  const newNotes = oldNotes.concat(newNote)

  fs.writeFileSync("./notes.txt", newNotes, "utf-8")
}
const loadNotes = () => {
  try {
    const notes = fs.readFileSync("./notes.txt", "utf-8")
    return notes
  } catch (e) { /* if there is no notes.txt */
    return ""
  }
}

module.exports = {
  add
}