"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var ReadDirectory = function (path, token) {
    if (path === void 0) { path = '/'; }
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', api_1.CLOUD_API + 'uploads' + path, {}, { token: token }, {});
};
exports.default = ReadDirectory;
