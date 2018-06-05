"use strict";

const db = require("./db");
const Board = require("./board");
const Boarder = require("./boarder");
const Maker = require("./maker");

// Assosiations go here
Maker.hasMany(Board);
Board.belongsTo(Maker);
Board.belongsTo(Boarder);
Boarder.hasMany(Board);
// Board.belongsToMany(Boarder, { through: 'BoarderBoard' });

module.exports = {
  db,
  Board,
  Boarder,
  Maker
};
