const express = require("express");
const app = express();
const morgan = require("morgan");
const apiRoutes = require("./api");

//logging middleware

app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format

app.use("api", apiRoutes);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((req, res, next) => {
  console.log(err);
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || "internal server error.");
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
module.exports = router;
