"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'reasons');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'religions');
var ReasonsFeeds = Module1.Functions();
var Religions = Module2.Functions();
var Reasons = {
    ReasonsFeeds: ReasonsFeeds,
    Religions: Religions
};
exports.default = Reasons;
