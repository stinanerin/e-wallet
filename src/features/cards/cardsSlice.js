import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api";

export const getRandomUser = createAsyncThunk(
    "cardSlice/getRandomUser",
    async () => {
        const res = await fetchData("https://randomuser.me/api");
        return res;
    }
);

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        user: null,
        cards: [],
        activeCard: null,
    },
    reducers: {
        setActiveCard: (state, action) => {
            state.activeCard = action.payload;
        },
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        delCard: (state, action) => {
            const cardId = action.payload;
            console.log(cardId);
            const filteredCards = state.cards.filter(
                (card) => card.id !== cardId
            );
            // Pga filter muterar ej ursprungsarrayen
            state.cards = filteredCards;
        },
    },
    extrareducers: {
        [getRandomUser.pending]: (state, action) => {
            state.status = "Loading...";
        },
        [getRandomUser.fulfilled]: (state, action) => {
            state.status = "Success";
        },
        [getRandomUser.rejected]: (state, action) => {
            state.status = "Failed";
        },
    },
});

export const { setActiveCard, addCard, delCard } = cardSlice.actions;

export default cardSlice.reducer;
