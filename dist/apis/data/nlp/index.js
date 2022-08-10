"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../constant/api");
var request_1 = require("../../../models/request");
var fetch = function (locale) { return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "nlp"), { locale: locale }, { locale: locale }, {}); };
var create = function (name, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.DATA_API, "nlp"), {}, { Authorization: Authorization, locale: locale }, { name: name });
};
var update = function (id, name, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('patch', "".concat(api_1.DATA_API, "nlp/").concat(id), {}, { Authorization: Authorization, locale: locale }, { name: name });
};
var remove = function (id, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('delete', "".concat(api_1.DATA_API, "nlp/").concat(id), {}, { Authorization: Authorization }, {});
};
var train = function (id, namespace, questions, answers, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('post', "".concat(api_1.DATA_API, "nlp/").concat(id, "/train"), {}, { locale: locale, Authorization: Authorization }, { id: namespace, questions: questions, answers: answers });
};
var ask = function (id, q, locale, Authorization) {
    if (Authorization === void 0) { Authorization = ''; }
    return (0, request_1.YouthRoute)('get', "".concat(api_1.DATA_API, "nlp/").concat(id, "/ask"), { q: q }, { locale: locale, Authorization: Authorization }, {});
};
var NLP = {
    fetch: fetch,
    create: create,
    update: update,
    remove: remove,
    train: train,
    ask: ask
};
exports.default = NLP;
