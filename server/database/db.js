const chalk = require("chalk");

console.log(chalk.yellow("Opening board-boarders' database connection"));

const Sequelize = require("sequelize");
const db = new Sequelize(
  //process.envDATABASEURL allows us to only use our local database url if no DATABASE_URL is available.
  process.env.DATABASE_URL || "postgres://localhost:5432/boards-boarders",
  {
    logging: false
  }
);

module.exports = db;
