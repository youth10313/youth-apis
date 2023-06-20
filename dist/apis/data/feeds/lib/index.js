"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module = new entity_request_1.EntityRequest(api_1.DATA_API + 'books');
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'ledgers');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'seasons');
var Ledgers = Module1.Functions();
var Seasons = Module2.Functions();
var Library = {
    posts: Module.Functions(),
    categories: Module.CategoryFunctions(),
    ledgers: Ledgers,
    seasons: Seasons
};
exports.default = Library;
