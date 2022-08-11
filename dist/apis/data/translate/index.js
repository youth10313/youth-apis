"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var Translate = function (app, i18n, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.DATA_API, "translations/").concat(app), {}, { Authorization: Authorization, locale: locale }, { locale: locale, i18n: i18n });
};
var App = function (app) { return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "translations/").concat(app), {}, {}, {}); };
var Locale = function (app, locale) { return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "translations/").concat(app, "/").concat(locale), {}, {}, {}); };
var Module = function (app, locale, module) { return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "translations/").concat(app, "/").concat(locale, "/").concat(module), {}, {}, {}); };
var AppLocales = function (app) { return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "localizations/").concat(app), {}, {}, {}); };
var AddLocale = function (app, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.DATA_API, "localizations/").concat(app, "/").concat(locale), {}, { Authorization: Authorization }, {});
};
var RemoveLocale = function (app, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.DATA_API, "localizations/").concat(app, "/").concat(locale), {}, { Authorization: Authorization }, {});
};
var Translations = {
    Translate: Translate,
    App: App,
    Locale: Locale,
    Module: Module,
    AddLocale: AddLocale,
    AppLocales: AppLocales,
    RemoveLocale: RemoveLocale
};
exports.default = Translations;
