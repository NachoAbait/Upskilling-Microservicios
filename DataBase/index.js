const server = require("./src/server.js");
const { Characters } = require("./src/database");

async function main() {
  await server.listen(8004);
  console.log("Server runnning on port 8004");
}
main();

/*

Characters.list()
  .then((res) => console.log(res))

Characters.get(1).then((res) => console.log(res));


Characters.insert({
  _id: "2020",
  name: "nachoAbait",
  birth_year: "2000"
}).then((res) => console.log(res))

*/