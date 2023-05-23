"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Save = function (body, id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)(id ? 'patch' : 'post', "".concat(api_1.OFFICIAL_API, "assets").concat(id ? "/".concat(id) : ''), {}, { token: token }, body);
};
var Remove = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "assets/").concat(id), {}, { token: token }, {});
};
var Fetch = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "assets"), {}, { token: token }, {});
};
var Assets = {
    Save: Save,
    Remove: Remove,
    Fetch: Fetch
};
exports.default = Assets;
