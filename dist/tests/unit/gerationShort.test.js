"use strict";

var _gerateRandom = require("../../app/utils/gerateRandom");

describe('Gerate Code', () => {
  it('Verify length code', () => {
    const code = (0, _gerateRandom.gerateShort)();
    const result = code.length >= 5 && code.length <= 10 ? true : false;
    expect(result).toBe(true);
  });
  it('Verify value number', () => {
    const number = (0, _gerateRandom.getRandomInt)(5, 10);
    const result = number >= 5 && number <= 10 ? true : false;
    expect(result).toBe(true);
  });
});