"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var my_profile_1 = __importDefault(require("./components/my-profile"));
var user_update_1 = __importDefault(require("./components/user-update"));
var office_update_1 = __importDefault(require("./components/office-update"));
var Profile = {
    MyProfile: my_profile_1.default,
    User: user_update_1.default,
    Department: office_update_1.default
};
exports.default = Profile;
