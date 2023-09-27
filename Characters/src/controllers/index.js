const catchedAsync = require("../utils/catchedAsync");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
};
