import { createSlice } from "@reduxjs/toolkit";

import { userPrefersDarkMode } from "../../utils/helpers";

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        darkMode: userPrefersDarkMode(),
    },
    reducers: {
        setMode: (state, action) => {
            state.darkMode = action.payload;
        },
    },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
