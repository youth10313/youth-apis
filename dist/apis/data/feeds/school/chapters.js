"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var request_1 = require("../../../../models/request");
var Passed = function (Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "chapters"), {}, { Authorization: Authorization }, {});
};
var Pass = function (lessonId, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.DATA_API, "chapters"), {}, { Authorization: Authorization }, { lessonId: lessonId });
};
var UnPass = function (lessonId, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "chapters/").concat(lessonId), {}, { Authorization: Authorization }, {});
};
var Chapters = {
    Passed: Passed,
    Pass: Pass,
    UnPass: UnPass
};
exports.default = Chapters;
