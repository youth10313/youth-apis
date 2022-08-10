"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var AdjustFont = function (app, url, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.DATA_API, "settings/").concat(app, "/font"), {}, { Authorization: Authorization, locale: locale }, { url: url, locale: locale });
};
var AdjustCluster = function (app, size, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.DATA_API, "settings/").concat(app, "/").concat(size), {}, { Authorization: Authorization, locale: locale }, {});
};
var Refresh = function (app, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.DATA_API, "settings/").concat(app), {}, { Authorization: Authorization, locale: locale }, {});
};
var Settings = {
    AdjustCluster: AdjustCluster,
    AdjustFont: AdjustFont,
    Refresh: Refresh
};
exports.default = Settings;
