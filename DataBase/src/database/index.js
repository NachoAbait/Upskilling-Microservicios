const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const connection = mongoose.createConnection(MONGO_URI);

/*
const Characters = connection.model("Characters",require("./Schemas/characterSchema"));
const Films = connection.model("Films", require("./Schemas/filmSchema"));
const Planets = connection.model("Planets", require("./Schemas/planetSchema"));

Characters.find()
  .populate("films", ["id", "title"])
  .then((res) => console.log(res[0]));
Planets.find().then((res) => console.log(res[0]));
*/



module.exports = {
  Characters: connection.model(
    "Characters",
    require("./Schemas/characterSchema")
  ),
  Films: connection.model("Films", require("./Schemas/filmSchema")),
  Planets: connection.model("Planets", require("./Schemas/planetSchema")),
};
