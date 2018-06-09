// api/model1.js

const router = require("express").Router();
const { Board } = require("../database/index");
const asyncHandler = require("express-async-handler");

router.get("/", async (req, res, next) => {
  try {
    const allBoards = await Board.findAll({});
    res.json(allBoards);
  } catch (err) {
    next(err);
  }
});

router.get("/:boardId", async (req, res, next) => {
  try {
    const boardId = req.params.boardId;
    const board = await Board.findById(boardId);
    res.json(board);
  } catch (err) {
    next(err);
  }
});
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const newRecord = await Board.create(req.body);
    res.send(newRecord);
  })
);
router.put(
  "/:boardId",
  asyncHandler(async (req, res, next) => {
    const board = await Board.findById(req.params.boardId);
    board.update(req.body);
    res
      .status(200)
      .send(`${board.name}'s information has been successfully updated`);
  })
);
router.delete(
  "/:boardId",
  asyncHandler(async (req, res, next) => {
    const id = req.params.boardId;
    const board = await Board.findById(id);
    await Board.destroy({ where: { id } });
    res.send(`${board.name} has been successfully deleted from the database`);
  })
);

module.exports = router;
