const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = (await axios.get(`http://database:8004/Films/${id}`)).data;

  res.status(200).json(film);
};
