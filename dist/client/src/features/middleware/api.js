"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
const apicall = (store) => (next) => (action) => __awaiter(void 0, void 0, void 0, function* () {
    if (action.type != "apiCall")
        return next(action);
    const { url, method, data, onSuccess } = action.payload;
    try {
        const res = axios_1.default.request({
            baseURL: config_1.baseUrl,
            url,
            method,
            data,
        });
        store.dispatch({ type: onSuccess, payload: res.data });
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = apicall;
//# sourceMappingURL=api.js.map