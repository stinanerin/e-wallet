import { createSlice } from "@reduxjs/toolkit";

import { userPrefersDarkMode } from "../../utils/helpers";

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        darkMode: userPrefersDarkMode(),
    },
    reducers: {
        setMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
