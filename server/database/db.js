const chalk = require("chalk");

console.log(chalk.yellow("Opening database connection"));

const Sequelize = require("sequelize");
const db = new Sequelize(
  //process.envDATABASEURL allows us to only use our local database url if no DATABASE_URL is available.
  process.env.DATABASE_URL || "postgres://localhost:5432/databaseName",
  {
    logging: false
  }
);

module.exports = db;
