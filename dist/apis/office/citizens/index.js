"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var CreateLink = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "citizens/link"), {}, { token: token }, {});
};
var DeleteLink = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "citizens/link"), {}, { token: token }, {});
};
var Join = function (linkHash, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "citizens/join/").concat(linkHash), {}, { Authorization: Authorization }, {});
};
var Left = function (id, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "citizens/join/").concat(id), {}, { Authorization: Authorization }, {});
};
var ApproveCitizen = function (userId, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "citizens/").concat(userId), {}, { token: token }, {});
};
var KickCitizen = function (userId, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "citizens/").concat(userId), {}, { token: token }, {});
};
var GetUserDepartments = function (Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "citizens"), {}, { Authorization: Authorization }, {});
};
var GetDepartmentCitizens = function (type, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "citizens"), { type: type }, { token: token }, {});
};
var Citizens = { CreateLink: CreateLink, DeleteLink: DeleteLink, Join: Join, Left: Left, ApproveCitizen: ApproveCitizen, KickCitizen: KickCitizen, GetUserDepartments: GetUserDepartments, GetDepartmentCitizens: GetDepartmentCitizens };
exports.default = Citizens;
