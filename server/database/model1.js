const db = require("./db");
const Sequelize = require("sequelize");

const model1 = db.define("model1", {
  name: Sequelize.STRING
  // and all fields tha we want our model to have
});

module.exports = model1;
