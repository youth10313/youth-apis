"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OFFICIAL_API = exports.CLOUD_API = exports.DATA_API = exports.AUTH_API = void 0;
exports.AUTH_API = process.env.NODE_ENV === 'development' ? 'http://localhost:1301/' : 'https://auth.ahmedalhasan.online/';
exports.DATA_API = process.env.NODE_ENV === 'development' ? 'http://localhost:1302/' : 'https://data.ahmedalhasan.online/';
exports.CLOUD_API = process.env.NODE_ENV === 'development' ? 'http://localhost:1304/' : 'https://cloud.ahmedalhasan.online/';
exports.OFFICIAL_API = process.env.NODE_ENV === 'development' ? 'http://localhost:1303/' : 'https://office.ahmedalhasan.online/';
