const router = require("express").Router();

router.use("/model1", require("./model1")); // matches all requests to /api/model1/
router.use("/model2", require("./model2"));

//404's

router.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

module.exports = router;
