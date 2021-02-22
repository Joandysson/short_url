"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validStore = validStore;
exports.validCode = validCode;

var Yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function validStore(resquest, response, next) {
  const schema = Yup.object().shape({
    url: Yup.string().url('URL invalid').required('Url is required.')
  });
  await schema.validate(resquest.body, {
    abortEarly: false
  });
  next();
}

async function validCode(resquest, response, next) {
  const schema = Yup.object().shape({
    code: Yup.string().max(10, 'short url bigggert than 10').min(5, 'short url less than 10').required('Url code is required')
  });
  await schema.validate(resquest.params, {
    abortEarly: false
  });
  next();
}