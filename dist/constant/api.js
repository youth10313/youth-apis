"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OFFICIAL_API = exports.CLOUD_API = exports.DATA_API = exports.AUTH_API = void 0;
exports.AUTH_API = process.env.AUTH_API_PROXY || 'https://auth.ahmedalhasan.online/';
exports.DATA_API = process.env.DATA_API_PROXY || 'https://data.ahmedalhasan.online/';
exports.CLOUD_API = process.env.CLOUD_API_PROXY || 'https://cloud.ahmedalhasan.online/';
exports.OFFICIAL_API = process.env.OFFICIAL_API_PROXY || 'https://office.ahmedalhasan.online/';
