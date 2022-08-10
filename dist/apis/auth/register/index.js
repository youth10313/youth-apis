"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var CheckEmail = function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'email-check', {}, {}, body); };
var SendForm = function (body) { return (0, request_1.YouthRoute)('post', api_1.AUTH_API + 'register', {}, {}, body); };
var Register = {
    CheckEmail: CheckEmail,
    SendForm: SendForm
};
exports.default = Register;
