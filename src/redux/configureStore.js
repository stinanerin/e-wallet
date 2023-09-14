import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../features/cards/cardsSlice";

const store = configureStore({
    reducer: {
        cards: cardReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    localStorage.setItem("CARD_INFO", JSON.stringify(state.cards));
});

export default store;
