import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../services/api";

const getStateFromLocalStorage = () => {
    const localStorageItem = localStorage.getItem("CARD_INFO");

    return localStorageItem ? JSON.parse(localStorageItem) : {};
};

const initialState = {
    user: getStateFromLocalStorage()?.user || null,
    cards: getStateFromLocalStorage()?.cards || [],
    activeCard: null,
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
            console.log(cardId);
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
