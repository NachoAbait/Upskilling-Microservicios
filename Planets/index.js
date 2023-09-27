const server = require("./src/server.js");

async function main() {
  await server.listen(8003);
  console.log("Server running on port 8003");
}

main();
