"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Core = function (q, locale) { return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "core"), { q: q, locale: locale }, { locale: locale }, {}); };
exports.default = Core;
