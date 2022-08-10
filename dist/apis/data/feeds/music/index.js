"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../../constant/api");
var entity_request_1 = require("../../../../models/entity-request");
var Module1 = new entity_request_1.EntityRequest(api_1.DATA_API + 'tracks');
var Module2 = new entity_request_1.EntityRequest(api_1.DATA_API + 'podcasts');
var Tracks = Module1.Functions();
var Podcasts = Module2.Functions();
var Musics = {
    Tracks: Tracks,
    Podcasts: Podcasts
};
exports.default = Musics;
