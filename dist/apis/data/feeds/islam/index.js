"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'ethics');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'beliefs');
var Module3 = new entity_request_1.EntityRequest(api_1.DATA_API + 'sharia');
var Module4 = new entity_request_1.EntityRequest(api_1.DATA_API + 'civilizations');
var Ethics = {
    posts: Module1.Functions(),
    categories: Module1.CategoryFunctions()
};
var Beliefs = {
    posts: Module2.Functions(),
    categories: Module2.CategoryFunctions()
};
var Sharia = {
    posts: Module3.Functions(),
    categories: Module3.CategoryFunctions()
};
var Civilizations = {
    posts: Module4.Functions(),
    categories: Module4.CategoryFunctions()
};
var Islam = {
    Ethics: Ethics,
    Beliefs: Beliefs,
    Sharia: Sharia,
    Civilizations: Civilizations
};
exports.default = Islam;
