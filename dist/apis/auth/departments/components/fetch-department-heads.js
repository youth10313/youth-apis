"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var GetDepartmentLevels = function (direction, departmentId) { return (0, request_1.YouthRoute)('get', api_1.AUTH_API + 'departments/' + departmentId, { direction: direction }, {}, {}); };
exports.default = GetDepartmentLevels;
