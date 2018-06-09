// api/model1.js

const router = require("express").Router();
const { Maker } = require("../database/index");
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const allMakers = await Maker.findAll();
    res.json(allMakers);
  })
);

router.get(
  "/:makerId",
  asyncHandler(async (req, res, next) => {
    const id = req.params.makerId;
    const maker = await Maker.findById(id);
    res.json(maker);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const newMaker = await Maker.create(req.body);
    res.json(`${newMaker.name} has been successfully added to database`);
  })
);

router.put(
  "/:makerId",
  asyncHandler(async (req, res, next) => {
    const maker = await Maker.findById(req.params.makerId);
    const updatedMaker = await maker.update(req.body);
    res.json(`${maker.name}'s has been successfully updated`);
  })
);
router.delete(
  "/:makerId",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const maker = await Maker.findById(id);
    await maker.destroy({ where: { id } });
    res.send(`${maker.name} has been successfully deleted from the database`);
  })
);

module.exports = router;
