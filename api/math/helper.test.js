const helper = require("./helper");

test("add tow number (1,2): expected (3) for success case ", () => {
  expect(helper.addTwoNumber(1, 2)).toBe(3);
});

test("add tow number(1,2) fairer case", () => {
  expect(helper.addTwoNumber(1, 2)).not.toBe(4);
});
