"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Create = function (body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "storages"), {}, { token: token }, body);
};
var Update = function (id, body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.OFFICIAL_API, "storages/").concat(id), {}, { token: token }, body);
};
var Remove = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "storages/").concat(id), {}, { token: token }, {});
};
var Fetch = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "storages"), {}, { token: token }, {});
};
var FetchOne = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "storages/").concat(id), {}, { token: token }, {});
};
var FetchUsersStorage = function (Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "storages"), {}, { Authorization: Authorization }, {});
};
var FetchOneUserStorage = function (id, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "storages/").concat(id), {}, { Authorization: Authorization }, {});
};
var Send = function (id, items, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "storages/").concat(id), {}, { Authorization: Authorization }, { items: items });
};
var Storages = { Create: Create, Update: Update, Remove: Remove, Fetch: Fetch, FetchOne: FetchOne, FetchOneUserStorage: FetchOneUserStorage, FetchUsersStorage: FetchUsersStorage, Send: Send };
exports.default = Storages;
