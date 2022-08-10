"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var DeleteEmployee = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', api_1.AUTH_API + 'employees/' + id, {}, { token: token }, {});
};
exports.default = DeleteEmployee;
