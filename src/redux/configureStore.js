import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../features/cards/cardsSlice";

const store = configureStore({
    reducer: {
        cards: cardReducer,
    },
});

export default store;
