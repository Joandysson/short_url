"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomInt = getRandomInt;
exports.gerateShort = gerateShort;
exports.gerateShortURLValid = gerateShortURLValid;

var _ShortUrl = _interopRequireDefault(require("../models/ShortUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerateShort() {
  return Math.random().toString(36).substring(2, 15).substr(0, getRandomInt(5, 10));
}

async function gerateShortURLValid() {
  const code = gerateShort();
  const existsCode = await _ShortUrl.default.varifyURLCode(code);

  if (existsCode) {
    gerateShortURLValid();
  }

  return code;
}