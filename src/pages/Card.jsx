import { CardWrapper } from "../features/cards/CardWrapper";

import { useDispatch, useSelector } from "react-redux";

import { getRandomUser } from "../features/cards/cardsSlice";

import { useEffect } from "react";

export const Card = () => {
    console.log("Card component rendered");

    const dispatch = useDispatch();

    const { user, status, cards } = useSelector((state) => state.cards);

    console.log(cards);

    useEffect(() => {
        !user && dispatch(getRandomUser("https://randomuser.me/api/"));
    }, []);

    return (
        <div>
            <p>Status: {status}</p>
            {user && <p>{user.first}</p>}
            <CardWrapper />
        </div>
    );
};
