"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _gerateRandom = require("../../app/utils/gerateRandom");

var _ShortUrl = _interopRequireDefault(require("../../app/models/ShortUrl"));

require("../../database/connect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

describe('ShortUrl', () => {
  const {
    HOST,
    PORT
  } = process.env;
  const baseUrl = `${HOST}:${PORT}`;
  it('you should check the return of the valid URL', async () => {
    const response = await (0, _supertest.default)(baseUrl).post('/encurtador').send({
      "url": "http://sll.com"
    });
    expect(response.status).toBe(201);
  });
  it('you should check the return of the invalid URL', async () => {
    const response = await (0, _supertest.default)(baseUrl).post('/encurtador').send({
      "url": "httpll.com"
    });
    expect(response.status).toBe(400);
  });
  it('you should check the return 404', async () => {
    const response = await (0, _supertest.default)(baseUrl).get('/sadfas');
    expect(response.status).toBe(404);
  });
  it('you should check return a status redirect', async () => {
    const response = await (0, _supertest.default)(baseUrl).post('/encurtador').send({
      "url": "http://sll.com"
    });
    const response2 = await (0, _supertest.default)(response.body.newUrl).get('');
    expect(response2.status).toBe(302);
  });
  it('you should check code valid', async () => {
    const code = await (0, _gerateRandom.gerateShortURLValid)();
    const valid = await _ShortUrl.default.varifyURLCode(code);
    expect(valid.length).toBe(0);
  });
});