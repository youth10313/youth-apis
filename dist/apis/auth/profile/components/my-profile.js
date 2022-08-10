"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var MyProfile = function (Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', api_1.AUTH_API + 'profile', {}, { Authorization: Authorization }, {});
};
exports.default = MyProfile;
