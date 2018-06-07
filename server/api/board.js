// api/model1.js

const router = require("express").Router();
const { Board } = require("../database/index");
const asyncHandler = require("express-async-handler");

// matches GET requests to /api/model2/
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
// matches POST requests to /api/model2/
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const newRecord = await Board.create(req.body);
    console.log(newRecord);
    res.send(newRecord);
  })
);
// matches PUT requests to /api/model2/:modelId
router.put("/:puppyId", function(req, res, next) {
  /* etc */
});
// matches DELTE requests to /api/model2/:modelId
router.delete("/:puppyId", function(req, res, next) {
  /* etc */
});

module.exports = router;
