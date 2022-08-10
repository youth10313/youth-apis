"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = __importDefault(require("./components/create"));
var update_1 = __importDefault(require("./components/update"));
var delete_1 = __importDefault(require("./components/delete"));
var fetch_1 = __importDefault(require("./components/fetch"));
var fetchOne_1 = __importDefault(require("./components/fetchOne"));
var Users = {
    CreateUser: create_1.default,
    UpdateUser: update_1.default,
    DeleteUser: delete_1.default,
    GetUsers: fetch_1.default,
    GetUser: fetchOne_1.default
};
exports.default = Users;
