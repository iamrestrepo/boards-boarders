const db = require("./db");
const Sequelize = require("sequelize");

const model1 = db.define("model2", {
  name: Sequelize.String
  // and all fields tha we want our model to have
});

module.exports = model2;
