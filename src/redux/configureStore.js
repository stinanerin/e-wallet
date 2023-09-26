import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../features/cards/cardsSlice";
import modeReducer from "../features/mode/modeSlice";

const store = configureStore({
    reducer: {
        cards: cardReducer,
        darkMode: modeReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("CARD_INFO", JSON.stringify(state.cards));
});

export default store;
