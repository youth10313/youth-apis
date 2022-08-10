"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Upload = function (body, path, token) {
    if (path === void 0) { path = '/'; }
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', api_1.CLOUD_API + 'uploads' + path, {}, { token: token, 'Content-Type': 'multipart/form-data' }, body, 1000 * 60 * 10);
};
exports.default = Upload;
