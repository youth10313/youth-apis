"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var chapters_1 = __importDefault(require("./chapters"));
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'classes');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'lessons');
var Module3 = new entity_request_1.EntityRequest(api_1.DATA_API + 'teachers');
var Classes = Module1.Functions();
var Lessons = Module2.Functions();
var Teachers = Module3.Functions();
var School = {
    Classes: Classes,
    Lessons: Lessons,
    Teachers: Teachers,
    Chapters: chapters_1.default
};
exports.default = School;
