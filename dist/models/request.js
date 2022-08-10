"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouthRoute = exports.YouthAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var YouthAPI = function (method, url, params, headers, body, onChange, timeout) {
    if (timeout === void 0) { timeout = 1000 * 13; }
    return new Promise(function (resolve, reject) {
        onChange(true);
        var ax = method === 'get' || method === 'delete' ? axios_1.default[method](url, { headers: headers, params: params, timeout: timeout }) : axios_1.default[method](url, body, { headers: headers, params: params, timeout: timeout });
        ax.then(function (res) {
            resolve(res.data);
            onChange(false);
        }).catch(function (err) {
            reject(err);
            onChange(false);
        });
    });
};
exports.YouthAPI = YouthAPI;
var YouthRoute = function (method, url, params, headers, body, timeout) {
    if (timeout === void 0) { timeout = 1000 * 13; }
    var complete;
    var error;
    var change;
    var obj = {
        onComelete: function (func) {
            complete = func;
            return obj;
        },
        onError: function (func) {
            error = func;
            return obj;
        },
        onChange: function (func) {
            change = func;
            return obj;
        },
        subscribe: function () {
            (0, exports.YouthAPI)(method, url, params, headers, body, change, timeout)
                .then(function (res) { return complete(res); })
                .catch(function (err) { return error(err); });
        },
    };
    return obj;
};
exports.YouthRoute = YouthRoute;