const request = require("supertest");
const expect = require("chai").expect;
const models = require("../server/database/index");
const app = require("../server/api/index");

describe(" :: API routes :: GET /user", function() {
  it("respond with json", function(done) {
    request(app)
      .get("/model1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
