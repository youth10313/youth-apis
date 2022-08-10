"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bigbang_1 = __importDefault(require("./bigbang"));
var blog_1 = __importDefault(require("./blog"));
var club_1 = __importDefault(require("./club"));
var faq_1 = __importDefault(require("./faq"));
var islam_1 = __importDefault(require("./islam"));
var lib_1 = __importDefault(require("./lib"));
var main_1 = __importDefault(require("./main"));
var music_1 = __importDefault(require("./music"));
var reasons_1 = __importDefault(require("./reasons"));
var school_1 = __importDefault(require("./school"));
var Feeds = {
    Bigbang: bigbang_1.default,
    Blog: blog_1.default,
    Prays: club_1.default,
    FAQ: faq_1.default,
    Islam: islam_1.default,
    Library: lib_1.default,
    Main: main_1.default,
    Musics: music_1.default,
    Reasons: reasons_1.default,
    School: school_1.default
};
exports.default = Feeds;
