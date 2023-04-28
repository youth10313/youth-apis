"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var CreateProject = function (body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "reports"), {}, { token: token }, body);
};
var UpdateProject = function (id, body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.OFFICIAL_API, "reports/").concat(id), {}, { token: token }, body);
};
var RemoveProject = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "reports/").concat(id), {}, { token: token }, {});
};
var GetProjects = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "reports"), {}, { token: token }, {});
};
var GetUserProjects = function (Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "reports"), {}, { Authorization: Authorization }, {});
};
var SendUserReport = function (projectId, id, answers, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "reports/").concat(projectId), { id: id }, { Authorization: Authorization }, { answers: answers });
};
var GetUserProjectReports = function (id, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "reports/").concat(id), {}, { Authorization: Authorization }, {});
};
var GetProjectReports = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "reports/").concat(id), {}, { token: token }, {});
};
var Reports = { CreateProject: CreateProject, UpdateProject: UpdateProject, RemoveProject: RemoveProject, GetProjects: GetProjects, GetUserProjects: GetUserProjects, SendUserReport: SendUserReport, GetProjectReports: GetProjectReports, GetUserProjectReports: GetUserProjectReports };
exports.default = Reports;
