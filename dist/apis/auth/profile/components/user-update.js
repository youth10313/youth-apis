"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var UpdateProfile = function (body, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'profile', {}, { Authorization: Authorization }, body);
};
var UpdatePassword = function (body, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'profile', {}, { Authorization: Authorization }, body);
};
exports.default = { UpdateProfile: UpdateProfile, UpdatePassword: UpdatePassword };
