"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var CreateUserAd = function (body, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "ads"), {}, { Authorization: Authorization }, body);
};
var UpdateUserAd = function (body, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.OFFICIAL_API, "ads"), {}, { Authorization: Authorization }, body);
};
var SignAds = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "ads"), {}, { token: token }, {});
};
var RemoveAd = function (id, token, Authorization) {
    if (token === void 0) { token = ''; }
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "ads/").concat(id), {}, { token: token, Authorization: Authorization }, {});
};
var GetUserAds = function (from, to, signed, count, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "ads"), {
        from: typeof from === typeof Date ? from === null || from === void 0 ? void 0 : from.toISOString() : '', to: typeof to === typeof Date ? to === null || to === void 0 ? void 0 : to.toISOString() : '', signed: signed ? signed : '', count: count ? count : ''
    }, { Authorization: Authorization }, {});
};
var GetDepartmentAds = function (from, to, signed, count, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "ads"), {
        from: typeof from === typeof Date ? from === null || from === void 0 ? void 0 : from.toISOString() : '', to: typeof to === typeof Date ? to === null || to === void 0 ? void 0 : to.toISOString() : '', signed: signed ? signed : '', count: count ? count : ''
    }, { token: token }, {});
};
var Ads = {
    CreateUserAd: CreateUserAd,
    UpdateUserAd: UpdateUserAd,
    SignAds: SignAds,
    RemoveAd: RemoveAd,
    GetDepartmentAds: GetDepartmentAds,
    GetUserAds: GetUserAds
};
exports.default = Ads;
