"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberModel = void 0;
const mongoose_1 = require("mongoose");
const memberSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    img: { type: String, default: "" },
    age: { type: Number, default: 18 },
    nationality: { type: String, default: "" },
});
exports.memberModel = (0, mongoose_1.model)("members", memberSchema);
//# sourceMappingURL=members.js.map