"use strict";

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _routers = _interopRequireDefault(require("./routers"));

var _handler = _interopRequireDefault(require("./app/errors/handler"));

var _cors = _interopRequireDefault(require("cors"));

require("./database/connect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  HOST,
  PORT
} = process.env;
const app = (0, _express.default)();
app.use((0, _cors.default)({
  exposedHeaders: ['*']
}));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_routers.default);
app.use(_handler.default);
app.listen(PORT, () => console.log('api', `server ${HOST}:${PORT}`));