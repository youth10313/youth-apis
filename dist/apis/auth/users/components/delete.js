"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var DeleteUser = function (id, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('delete', api_1.AUTH_API + 'users/' + id, {}, { Authorization: Authorization }, {});
};
exports.default = DeleteUser;
