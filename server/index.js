const express = require("express");
const session = require("express-session"); // sessions allow us to keep user autheticated even after refreshing their browser window
const app = express();
const morgan = require("morgan");
const path = require("path");
const apiRoutes = require("./api");
const db = require("./database/db");
const passport = require("passport");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db: db });

dbStore.sync();

//logging middleware

app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format

app.use("api", apiRoutes);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "Some insecurely saved secret", // the process.env.SESSION_SECRET allows us to use the secret from the enviroment variable instead of exposing our own secret
    resave: false,
    saveUninitialized: false,
    store: dbStore
    // duration: -> how long willthe session be alive for
    // activeDuration: INT -> before logging an user out, it allows INT extra time if require by the user
  })
);

app.use(passport.initialize()); // We initilize passport so that it will consume our req.session object, and attach the user to the request object.
app.use(passport.session());

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((req, res, next) => {
  console.log(err);
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || "internal server error.");
});

module.exports = app;
