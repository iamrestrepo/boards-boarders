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

router.post("/", function(req, res, next) {
  /* etc */
});
router.put("/:puppyId", function(req, res, next) {
  /* etc */
});
router.delete("/:puppyId", function(req, res, next) {
  /* etc */
});

module.exports = router;
