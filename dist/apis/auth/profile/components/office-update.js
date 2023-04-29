"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var UpdateProfile = function (body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'department/profile', {}, { token: token }, body);
};
var UpdatePassword = function (body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'department/profile', {}, { token: token }, body);
};
exports.default = { UpdatePassword: UpdatePassword, UpdateProfile: UpdateProfile };
