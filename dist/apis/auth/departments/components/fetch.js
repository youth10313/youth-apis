"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var GetDepartments = function (owners, token) {
    if (owners === void 0) { owners = ''; }
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', api_1.AUTH_API + 'departments', { owners: owners }, { token: token }, {});
};
exports.default = GetDepartments;
