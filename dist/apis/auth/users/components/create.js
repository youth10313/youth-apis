"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var CreateUser = function (body, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'users', {}, { Authorization: Authorization }, body);
};
exports.default = CreateUser;
