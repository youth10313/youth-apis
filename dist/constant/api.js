"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OFFICIAL_API = exports.CLOUD_API = exports.DATA_API = exports.AUTH_API = void 0;
exports.AUTH_API = process.env.REACT_APP_AUTH_API_PROXY || 'https://auth.ahmedalhasan.online/';
exports.DATA_API = process.env.REACT_APP_DATA_API_PROXY || 'https://data.ahmedalhasan.online/';
exports.CLOUD_API = process.env.REACT_APP_CLOUD_API_PROXY || 'https://cloud.ahmedalhasan.online/';
exports.OFFICIAL_API = process.env.REACT_APP_OFFICIAL_API_PROXY || 'https://office.ahmedalhasan.online/';
