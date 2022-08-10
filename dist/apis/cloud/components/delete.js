"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Unlink = function (path, token) {
    if (path === void 0) { path = '/'; }
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', api_1.CLOUD_API + 'uploads' + path, {}, { token: token, 'Content-Type': 'multipart/form-data' }, {});
};
exports.default = Unlink;
