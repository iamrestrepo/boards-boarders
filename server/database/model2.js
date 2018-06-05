const db = require("./db");
const Sequelize = require("sequelize");

const model2 = db.define("model2", {
  name: Sequelize.STRING
  // and all fields tha we want our model to have
});

module.exports = model2;
