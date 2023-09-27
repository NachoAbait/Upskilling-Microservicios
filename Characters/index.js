const server = require("./src/server.js");

async function main() {
  await server.listen(8001);
  console.log("Server running on port 8001");
}

main();
