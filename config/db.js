const mongoose = require ("mongoose")

require("dotenv").config({path: ".env"})

const ConectarBD = async () => {
  mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>console.log("Estamos conectados con MongoDB😎") )
  .catch((error) => console.error(error))
}

module.exports = ConectarBD