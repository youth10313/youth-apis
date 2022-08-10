"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module = new entity_request_1.EntityRequest(api_1.DATA_API + 'prays');
var Prays = {
    posts: Module.Functions(),
    categories: Module.CategoryFunctions()
};
exports.default = Prays;
