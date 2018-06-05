const expect = require("chai");
const models = require("../server/database/index");
const app = require("../server/api/index");

describe("::Models ::  model1", () => {
  it("tests that model exists", () => {
    expect(models.model1).to.eql([]);
  });
});
