const server = require("./src/server.js");

async function main() {
  await server.listen(8002);
  console.log("Server runnning on port 8002");
}

main();
