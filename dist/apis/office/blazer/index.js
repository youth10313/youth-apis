"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Send = function (departments, date, message, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "blazer"), {}, { token: token }, { departments: departments, message: message, date: date });
};
var Cancel = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "blazer/").concat(id), {}, { token: token }, {});
};
var History = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "blazer"), {}, { token: token }, {});
};
var Blazer = { Send: Send, Cancel: Cancel, History: History };
exports.default = Blazer;
