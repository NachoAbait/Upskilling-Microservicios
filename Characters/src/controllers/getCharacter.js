const Characters = require("../data");

const axios = require("axios");

module.exports = async (req, res) => {
  const character = (await axios.get("http://database:8004/Characters/:id"))
    .data;
  res.status(200).json(character);
};
