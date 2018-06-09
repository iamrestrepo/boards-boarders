// api/model1.js

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { Rider } = require("../database/index");

//get all riders
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const allRiders = await Rider.findAll();
    res.json(allRiders);
  })
);

//get rider by id
router.get(
  "/:riderId",
  asyncHandler(async (req, res, next) => {
    const riderId = req.params.riderId;
    const rider = await Rider.findById(riderId);
    res.json(rider);
  })
);

//add new rider to database
router.post("/", async (req, res, next) => {
  const newRider = await Rider.create(req.body);
  res.json(`${newRider.name} has been successfully added to the database`);
});

// edit rider's info
router.put("/:riderId", async (req, res, next) => {
  const riderId = req.params.riderId;
  const rider = await Rider.findById(riderId);
  const updatedRider = await rider.update(req.body);
  res.status(200).send(`${updatedRider.name}'s information has been updated`);
});

//delete a rider
router.delete("/:riderId", async (req, res, next) => {
  const id = req.params.riderId;
  const rider = await Rider.findById(id);
  await rider.destroy({ where: { id } });
  res.send(`${rider.name} has been successfully deleted from the database`);
});

module.exports = router;
