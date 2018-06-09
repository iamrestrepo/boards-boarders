const db = require("./db");
const Sequelize = require("sequelize");

//(w / WSL ranking, Last tournament won, Country, favorite wave, current board).
const Rider = db.define(
  "rider",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    country: Sequelize.STRING,
    wsa: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    currentBoard: {
      type: Sequelize.STRING,
      allowNull: false
    },
    favWave: Sequelize.STRING,
    lastTournamentWon: Sequelize.STRING,
    img: {
      type: Sequelize.TEXT,
      defaultValue:
        "/Users/moniquerz/Documents/FULLSTACK/JUNIOR/week8-selfStudy/boards-boarders/public/images/imgNotFound.png"
    }
  },
  {
    hooks: {
      afterValidate: rider => {
        rider.name = rider.name[0].toUpperCase() + rider.name.slice(1);
      }
    }
  }
);

module.exports = Rider;
