import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "members",
  initialState: {
    value: [],
    selectedMember: { id: "", age: "", nationality: "", img: "", name: "" },
  },
  reducers: {
    memberList: (state: any, action) => {
      state.value = [...action.payload.members];
    },

    selectMember: (state: any, action: any) => {
      state.selectedMember = action.payload;
    },
  },
});

export const { memberList, selectMember } = memberSlice.actions;

export default memberSlice.reducer;
