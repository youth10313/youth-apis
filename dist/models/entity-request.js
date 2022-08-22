"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRequest = void 0;
var request_1 = require("./request");
var EntityRequest = /** @class */ (function () {
    function EntityRequest(url) {
        this.url = url;
    }
    EntityRequest.prototype.Functions = function () {
        var _this = this;
        var create = function (body, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('post', _this.url, {}, { Authorization: Authorization, locale: locale }, body, 1000 * 60 * 5);
        };
        var update = function (id, body, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('patch', "".concat(_this.url, "/").concat(id), {}, { Authorization: Authorization, locale: locale }, body, 1000 * 60 * 5);
        };
        var remove = function (id, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('delete', "".concat(_this.url, "/").concat(id), {}, { Authorization: Authorization, locale: locale }, {});
        };
        var fetch = function (locale, querystring, Authorization, page, perPage, search, sort_by, sort_order, date_start, date_end, category) {
            if (querystring === void 0) { querystring = {}; }
            if (Authorization === void 0) { Authorization = ''; }
            if (date_start) {
                date_start = date_start.toISOString();
            }
            if (date_end) {
                date_end = date_end.toISOString();
            }
            if (category && category instanceof Array) {
                category = 'category=' + category.reduce(function (t, c) { return t + '&category=' + c; });
            }
            return (0, request_1.YouthRoute)('get', "".concat(_this.url, "?").concat(category || ''), __assign({ page: page, perPage: perPage, search: search, sort_by: sort_by, sort_order: sort_order, locale: locale }, querystring), { Authorization: Authorization, locale: locale }, {});
        };
        var fetchOne = function (latinTitle_or_id, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('get', "".concat(_this.url, "/").concat(latinTitle_or_id), { locale: locale }, { locale: locale, Authorization: Authorization }, {});
        };
        var trash = function (locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('get', "".concat(_this.url, "/trash"), { locale: locale }, { Authorization: Authorization, locale: locale }, {});
        };
        var empty = function (locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('delete', "".concat(_this.url, "/trash"), {}, { Authorization: Authorization, locale: locale }, {});
        };
        var restore = function (id, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('patch', "".concat(_this.url, "/trash/").concat(id), {}, { Authorization: Authorization, locale: locale }, {});
        };
        return { fetchOne: fetchOne, fetch: fetch, create: create, update: update, remove: remove, trash: trash, empty: empty, restore: restore };
    };
    EntityRequest.prototype.CategoryFunctions = function () {
        var _this = this;
        var create = function (body, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('post', "".concat(_this.url, "-category"), {}, { Authorization: Authorization, locale: locale }, body, 1000 * 60 * 5);
        };
        var update = function (id, body, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('patch', "".concat(_this.url, "-category/").concat(id), {}, { Authorization: Authorization, locale: locale }, body, 1000 * 60 * 5);
        };
        var remove = function (id, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('delete', "".concat(_this.url, "-category/").concat(id), {}, { Authorization: Authorization, locale: locale }, {});
        };
        var fetch = function (locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('get', "".concat(_this.url, "-category"), { locale: locale }, { Authorization: Authorization, locale: locale }, {});
        };
        var fetchOne = function (latinTitle_or_id, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('get', "".concat(_this.url, "-category/").concat(latinTitle_or_id), { locale: locale }, { Authorization: Authorization, locale: locale }, {});
        };
        var trash = function (locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('get', "".concat(_this.url, "-category/trash"), { locale: locale }, { Authorization: Authorization, locale: locale }, {});
        };
        var empty = function (locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('delete', "".concat(_this.url, "-category/trash"), {}, { Authorization: Authorization, locale: locale }, {});
        };
        var restore = function (id, locale, Authorization) {
            if (Authorization === void 0) { Authorization = ''; }
            return (0, request_1.YouthRoute)('patch', "".concat(_this.url, "-category/trash/").concat(id), {}, { Authorization: Authorization, locale: locale }, {});
        };
        return { fetchOne: fetchOne, fetch: fetch, create: create, update: update, remove: remove, trash: trash, empty: empty, restore: restore };
    };
    return EntityRequest;
}());
exports.EntityRequest = EntityRequest;
