const db = require("./database/db");
const app = require("./index");

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync({ force: true }) //REMOVE THIS IN PRODUCTION (this destroys the database and rebuilds it)
  .then(() => {
    app.listen(port, function() {
      console.log(`App listening on port ${port}`);
    });
  });
