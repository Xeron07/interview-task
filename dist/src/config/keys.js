"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productionsKey_1 = __importDefault(require("./productionsKey"));
const devKeys_1 = __importDefault(require("./devKeys"));
let keys;
if (process.env.NODE_ENV === "production") {
    keys = productionsKey_1.default;
}
else {
    keys = devKeys_1.default;
}
exports.default = keys;
//# sourceMappingURL=keys.js.map