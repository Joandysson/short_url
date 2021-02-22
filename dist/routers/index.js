"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ShortUrlController = _interopRequireDefault(require("../app/controllers/ShortUrlController"));

var _shortUrl = require("../app/validators/shortUrl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routers = (0, _express.Router)();
routers.get('/', (request, response) => {
  return response.status(200).send('Api bank api V1.0.0');
});
routers.get('/:code', _ShortUrlController.default.index);
routers.post('/encurtador', _shortUrl.validStore, _ShortUrlController.default.store);
var _default = routers;
exports.default = _default;