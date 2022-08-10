"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = __importDefault(require("./components/create"));
var update_1 = __importDefault(require("./components/update"));
var delete_1 = __importDefault(require("./components/delete"));
var fetch_1 = __importDefault(require("./components/fetch"));
var fetch_department_heads_1 = __importDefault(require("./components/fetch-department-heads"));
var Departments = {
    CreateDepartment: create_1.default,
    UpdateDepartment: update_1.default,
    DeleteDepartment: delete_1.default,
    GetDepartmentLevels: fetch_department_heads_1.default,
    GetDepartments: fetch_1.default
};
exports.default = Departments;
