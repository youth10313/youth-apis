"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'sermons');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'meetings');
var Module3 = new entity_request_1.EntityRequest(api_1.DATA_API + 'statements');
var Module4 = new entity_request_1.EntityRequest(api_1.DATA_API + 'ansar');
var Module5 = new entity_request_1.EntityRequest(api_1.DATA_API + 'history');
var Sermons = Module1.Functions();
var Meetings = Module2.Functions();
var Statements = Module3.Functions();
var Ansars = Module4.Functions();
var Histories = Module5.Functions();
var Main = {
    Sermons: Sermons,
    Meetings: Meetings,
    Statements: Statements,
    Ansars: Ansars,
    Histories: Histories
};
exports.default = Main;
