"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const memberReducer_1 = __importDefault(require("./memberReducer"));
const api_1 = __importDefault(require("./middleware/api"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        members: memberReducer_1.default,
    },
    middleware: [api_1.default],
});
exports.default = store;
//# sourceMappingURL=store.js.map