"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = __importDefault(require("./apis/auth/login"));
var register_1 = __importDefault(require("./apis/auth/register"));
var profile_1 = __importDefault(require("./apis/auth/profile"));
var users_1 = __importDefault(require("./apis/auth/users"));
var departments_1 = __importDefault(require("./apis/auth/departments"));
var employees_1 = __importDefault(require("./apis/auth/employees"));
var cloud_1 = __importDefault(require("./apis/cloud"));
var nlp_1 = __importDefault(require("./apis/data/nlp"));
var core_1 = __importDefault(require("./apis/data/core"));
var feeds_1 = __importDefault(require("./apis/data/feeds"));
var settings_1 = __importDefault(require("./apis/data/settings"));
var translate_1 = __importDefault(require("./apis/data/translate"));
var ads_1 = __importDefault(require("./apis/office/ads"));
var blazer_1 = __importDefault(require("./apis/office/blazer"));
var citizens_1 = __importDefault(require("./apis/office/citizens"));
var communication_1 = __importDefault(require("./apis/office/communication"));
var reports_1 = __importDefault(require("./apis/office/reports"));
var complaints_1 = __importDefault(require("./apis/office/complaints"));
var YouthServers = {
    Auth: {
        Login: login_1.default,
        Register: register_1.default,
        Profile: profile_1.default,
        Users: users_1.default,
        Departments: departments_1.default,
        Employees: employees_1.default
    },
    Cloud: cloud_1.default,
    Data: {
        NLP: nlp_1.default,
        Core: core_1.default,
        Feeds: feeds_1.default,
        Settings: settings_1.default,
        Translations: translate_1.default
    },
    Office: {
        Ads: ads_1.default,
        Blazer: blazer_1.default,
        Citizens: citizens_1.default,
        Communication: communication_1.default,
        Complaints: complaints_1.default,
        Reports: reports_1.default
    }
};
exports.default = YouthServers;
