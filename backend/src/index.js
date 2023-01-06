require('dotenv').config() // Variables de entorno preparadas

const app = require("./app");

require('./database')

// Arranca el servidor
async function main() {
  await app.listen(app.get("port"));
  console.log("server on port ", app.get("port"));
}

main();
