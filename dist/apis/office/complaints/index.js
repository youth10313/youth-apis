"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Send = function (body, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "complaints"), {}, { Authorization: Authorization }, body);
};
var Remove = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "complaints/").concat(id), {}, { token: token }, {});
};
var GetUserComplaint = function (id, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "complaints/").concat(id), {}, { Authorization: Authorization }, {});
};
var GetDepartmentComplaint = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "complaints/").concat(id), {}, { token: token }, {});
};
var GetUserComplaints = function (keyword, Authorization) {
    if (keyword === void 0) { keyword = ''; }
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "complaints"), { keyword: keyword }, { Authorization: Authorization }, {});
};
var GetDepartmentComplaints = function (keyword, token) {
    if (keyword === void 0) { keyword = ''; }
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "complaints"), { keyword: keyword }, { token: token }, {});
};
var Complaints = { Send: Send, Remove: Remove, GetDepartmentComplaint: GetDepartmentComplaint, GetUserComplaint: GetUserComplaint, GetDepartmentComplaints: GetDepartmentComplaints, GetUserComplaints: GetUserComplaints };
exports.default = Complaints;
