"use strict";

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)().then(() => console.log('Successfully connected with database')).catch(error => console.log('Connection database error', error.message));