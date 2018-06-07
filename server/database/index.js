"use strict";

const db = require("./db");
const Board = require("./board");
const Rider = require("./rider");
const Maker = require("./maker");

// Assosiations go here
Maker.hasMany(Board);
// Rider.hasMany(Board);
Board.belongsTo(Maker);
Board.belongsToMany(Rider, { through: "RiderBoards" });
Rider.belongsToMany(Board, { through: "RiderBoards" });

module.exports = {
  db,
  Board,
  Rider,
  Maker
};
