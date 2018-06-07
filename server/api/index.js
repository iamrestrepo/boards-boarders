const router = require("express").Router();

router.use("/rider", require("./rider")); // matches all requests to /api/model1/
router.use("/board", require("./board"));
router.use("/maker", require("./maker"));

//404's

router.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

module.exports = router;
