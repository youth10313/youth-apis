"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var read_1 = __importDefault(require("./components/read"));
var uploaded_1 = __importDefault(require("./components/uploaded"));
var delete_1 = __importDefault(require("./components/delete"));
var Cloud = {
    ReadDirectory: read_1.default,
    Upload: uploaded_1.default,
    Unlink: delete_1.default
};
exports.default = Cloud;
