const helloWorldFunction = require("../src/helloWorld.js");

describe("GIVEN we coded the helloWorld function", () => {
  describe("WHEN invoking the function", () => {
    it("THEN it should return a person with age=24", () => {
      const person = helloWorldFunction();
      expect(person.age).toBe(24);
    });
  });
});
