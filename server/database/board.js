const db = require("./db");
const Sequelize = require("sequelize");

const Board = db.define("board", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: Sequelize.STRING, //snowboard/surfboard?
  experience: Sequelize.STRING,
  conditions: Sequelize.STRING,
  size: Sequelize.FLOAT,
  year: Sequelize.INTEGER,
  img: {
    type: Sequelize.TEXT,
    defaultValue:
      "/Users/moniquerz/Documents/FULLSTACK/JUNIOR/week8-selfStudy/boards-boarders/public/images/imgNotFound.png"
  }
  // and all fields tha we want our model to have
});

module.exports = Board;
