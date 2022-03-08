"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberList = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const memberSlice = (0, toolkit_1.createSlice)({
    name: "members",
    initialState: [],
    reducers: {
        memberList: (state, action) => {
            state.values = action.payload;
        },
    },
});
exports.memberList = memberSlice.actions.memberList;
exports.default = memberSlice.reducer;
//# sourceMappingURL=memberReducer.js.map