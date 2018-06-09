const db = require("./db");
const Sequelize = require("sequelize");

const Maker = db.define(
  "maker",
  {
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
  },
  {
    hooks: {
      afterValidate: maker => {
        maker.name = maker.name[0].toUpperCase() + maker.name.split(1);
      }
    }
  }
);

module.exports = Maker;
