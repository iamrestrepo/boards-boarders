const db = require("./db");
const Sequelize = require("sequelize");

const Maker = db.define("maker", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: Sequelize.STRING,
  bestAt: Sequelize.STRING,
  logo: {
    type: Sequelize.TEXT,
    defaultValue:
      "/Users/moniquerz/Documents/FULLSTACK/JUNIOR/week8-selfStudy/boards-boarders/public/images/imgNotFound.png"
  }
  // and all fields tha we want our model to have
});

module.exports = Maker;
