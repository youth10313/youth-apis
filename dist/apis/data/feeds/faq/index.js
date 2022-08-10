"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'doubts');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'questions');
var Doubts = {
    posts: Module1.Functions(),
    categories: Module1.CategoryFunctions()
};
var Questions = {
    posts: Module2.Functions(),
    categories: Module2.CategoryFunctions()
};
var FAQ = {
    Doubts: Doubts,
    Questions: Questions
};
exports.default = FAQ;
