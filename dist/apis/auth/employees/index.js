"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = __importDefault(require("./components/create"));
var update_1 = __importDefault(require("./components/update"));
var delete_1 = __importDefault(require("./components/delete"));
var fetch_1 = __importDefault(require("./components/fetch"));
var Employees = {
    CreateEmployee: create_1.default,
    UpdateEmployee: update_1.default,
    DeleteEmployee: delete_1.default,
    GetEmployees: fetch_1.default
};
exports.default = Employees;
