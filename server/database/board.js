const db = require("./db");
const Sequelize = require("sequelize");
const shortUrl = require("short-url");

const Board = db.define(
  "board",
  {
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
  },
  {
    hooks: {
      afterValidate: board => {
        board.name = board.name[0].toUpperCase() + board.name.slice(1);
        board.img = shortUrl.shorten(board.img);
      }
    }
  }
);

module.exports = Board;
