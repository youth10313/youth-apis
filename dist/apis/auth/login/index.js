"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var LoginUserStepOne = function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'login', {}, {}, body); };
var LoginUserStepTwo = function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'login', {}, {}, body); };
var RenewUserToken = function (Private) {
    if (Private === void 0) { Private = ''; }
    return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'login', {}, { private: Private }, {});
};
var LoginOfficial = function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'login', {}, {}, body); };
var ResetPassword = {
    StepOne: function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'email-check', {}, {}, body); },
    StepTwo: function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'activate', {}, {}, body); },
};
var GetSessions = function (Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', api_1.AUTH_API + 'login', {}, { Authorization: Authorization }, {});
};
var LogoutUser = function (Private, tokenId) {
    if (Private === void 0) { Private = ''; }
    if (tokenId === void 0) { tokenId = ''; }
    return (0, request_1.YouthRoute)('delete', api_1.AUTH_API + 'login', { tokenId: tokenId }, { Private: Private }, {});
};
var LogoutOffice = function (token) {
    if (token === void 0) { token = ''; }
    return (0, request_1.YouthRoute)('delete', api_1.AUTH_API + 'login', { office: 'true' }, { token: token }, {});
};
var Login = {
    LoginUserStepOne: LoginUserStepOne,
    LoginUserStepTwo: LoginUserStepTwo,
    RenewUserToken: RenewUserToken,
    LoginOfficial: LoginOfficial,
    GetSessions: GetSessions,
    ResetPassword: ResetPassword,
    LogoutOffice: LogoutOffice,
    LogoutUser: LogoutUser
};
exports.default = Login;
