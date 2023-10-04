const Characters = require("../data");
const axios = require("axios");

module.exports = async (req, res) => {
  const characters = (await axios.get("http://database:8004/Characters")).data;
  console.log("actualizado");
  res.status(200).json(characters);
};
