const Films = require("../data");
const axios = require("axios");

module.exports = async (req, res) => {
  const films = (await axios.get("http://database:8004/Films")).data;
  console.log("actualizado");
  res.status(200).json(films);
};
