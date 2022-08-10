"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Send = function (body, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.OFFICIAL_API, "communication"), {}, { token: token }, body);
};
var Remove = function (id, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.OFFICIAL_API, "communication/").concat(id), {}, { token: token }, {});
};
var Mails = function (box, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "communication"), { box: box }, { token: token }, {});
};
var Mail = function (id, box, token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.OFFICIAL_API, "communication/").concat(id), { box: box }, { token: token }, {});
};
var Communication = { Send: Send, Remove: Remove, Mails: Mails, Mail: Mail };
exports.default = Communication;
