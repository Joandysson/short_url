"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ShortUrl = _interopRequireDefault(require("../models/ShortUrl"));

var _gerateRandom = require("../utils/gerateRandom");

var _short_url = require("../../views/short_url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShortUrlController {
  async index(request, response) {
    const existsCode = await _ShortUrl.default.varifyURLCode(request.params.code);
    if (existsCode.length > 0) return response.status(302).redirect(existsCode[0].redirect);
    response.sendStatus(404);
  }

  async store(request, response) {
    const {
      HOST,
      PORT
    } = process.env;
    const existsShort = await _ShortUrl.default.findOne({
      redirect: request.body.url
    }, {
      order: {
        createdAt: "DESC"
      }
    });

    if (existsShort) {
      const isValid = await _ShortUrl.default.varifyURLCode(existsShort.code);
      if (isValid) return response.status(201).json((0, _short_url.renderShortUrl)(existsShort));
    }

    try {
      const code = await (0, _gerateRandom.gerateShortURLValid)();

      const insertShortUrl = _ShortUrl.default.create({
        url: `${HOST}:${PORT}/${code}`,
        redirect: request.body.url,
        code: code
      });

      insertShortUrl.save();
      response.status(201).json((0, _short_url.renderShortUrl)(insertShortUrl));
    } catch (error) {
      response.status(500).json({
        error: error.message
      });
    }
  }

}

var _default = new ShortUrlController();

exports.default = _default;