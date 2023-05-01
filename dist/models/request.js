"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouthRoute = exports.YouthAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var YouthAPI = function (method, url, params, headers, body, onChange, controller, timeout) {
    if (timeout === void 0) { timeout = 1000 * 60; }
    return new Promise(function (resolve, reject) {
        onChange(true);
        var ax = method === 'get' || method === 'delete' ? axios_1.default[method](url, { headers: headers, params: params, timeout: timeout, signal: controller.signal }) : axios_1.default[method](url, body, { headers: headers, params: params, timeout: timeout, signal: controller.signal });
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
    if (timeout === void 0) { timeout = 1000 * 60; }
    var controller = new AbortController();
    var complete = function (res) { return res; };
    var error = function (err) { return err; };
    var change = function (state) { return state; };
    var convert = function (response) { return response; };
    var abort = function () { return controller.abort(); };
    var obj = {
        onComplete: function (func) {
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
        Convert: function (func) {
            convert = func;
            return obj;
        },
        subscribe: function (projects, args) {
            if (args) {
                if (args.id && args.cid) {
                    url = url.replace(args.cid, args.id);
                }
                params = args.params || params;
                headers = args.headers || headers;
                body = args.body || body;
            }
            if (projects && !params)
                params = {};
            if (projects && projects.length) {
                var queryType_1 = "";
                projects.forEach(function (item, i) {
                    queryType_1 += item + (i === projects.length - 1 ? "" : "-");
                });
                params['project'] = queryType_1;
            }
            (0, exports.YouthAPI)(method, url, params, headers, body, change, controller, timeout)
                .then(function (res) { return complete(convert(res)); })
                .catch(function (err) { return error(err); });
        },
        abort: abort
    };
    return obj;
};
exports.YouthRoute = YouthRoute;
