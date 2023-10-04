const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planets = (await axios.get(`http://database:8004/Planets/${id}`)).data;
  res.status(200).json(planets);
};
