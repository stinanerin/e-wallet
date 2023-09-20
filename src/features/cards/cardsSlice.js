import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api";

const getStateFromLocalStorage = () => {
    const localStorageItem = localStorage.getItem("CARD_INFO");

    return localStorageItem ? JSON.parse(localStorageItem) : {};
};

//todo upådate intital card to new format

const initialCard = {
    cvc: "098",
    date: "2023-11-13",
    card_number: "1234567891234567",
    vendor: "Visa",
    id: crypto.randomUUID(),
};

const initialState = {
    user: getStateFromLocalStorage()?.user || "",
    cards: getStateFromLocalStorage()?.cards || [initialCard],
    activeCard: getStateFromLocalStorage()?.activeCard || initialCard.id,
    status: null,
};

export const getRandomUser = createAsyncThunk(
    "cardSlice/getRandomUser",
    async (route) => {
        const res = await fetchData(route);
        return res.data.results[0].name;
    }
);

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        setActiveCard: (state, action) => {
            state.activeCard = action.payload;
        },
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        delCard: (state, action) => {
            const cardId = action.payload;
            console.log("cardId", cardId);
            const filteredCards = state.cards.filter(
                (card) => card.id !== cardId
            );
            // Pga filter muterar ej ursprungsarrayen
            state.cards = filteredCards;
        },
    },
    extraReducers: {
        [getRandomUser.pending]: (state, action) => {
            state.status = "Loading...";
        },
        [getRandomUser.fulfilled]: (state, action) => {
            console.log("hej", action.payload);
            state.user = action.payload;
            state.status = "Success";
        },
        [getRandomUser.rejected]: (state, action) => {
            state.status = "Failed";
        },
    },
});

export const { setActiveCard, addCard, delCard } = cardSlice.actions;

export default cardSlice.reducer;
