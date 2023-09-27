const app = require("./src");

async function main() {
  await app.listen(8000);
  console.log("Gateway running on port 8000");
}

main();
