// api/model1.js

const router = require("express").Router();

// matches GET requests to /api/model1/
router.get("/", function(req, res, next) {
  /* etc */
});
// matches POST requests to /api/model1/
router.post("/", function(req, res, next) {
  /* etc */
});
// matches PUT requests to /api/model1/:modelId
router.put("/:puppyId", function(req, res, next) {
  /* etc */
});
// matches DELTE requests to /api/model1/:modelId
router.delete("/:puppyId", function(req, res, next) {
  /* etc */
});

module.exports = router;
