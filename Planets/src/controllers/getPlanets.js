const Planets = require("../data");
const axios = require("axios");

module.exports = async (req, res) => {
  const planets = (await axios.get("http://database:8004/Planets")).data;
  res.status(200).json(planets);
};
