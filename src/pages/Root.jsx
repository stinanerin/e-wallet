import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";

import { useDispatch, useSelector } from "react-redux";

import { getRandomUser } from "../features/cards/cardsSlice";

import { useEffect } from "react";

export const Root = () => {
    const dispatch = useDispatch();

    const { user, status } = useSelector((state) => state.cards);

    useEffect(() => {
        !user && dispatch(getRandomUser("https://randomuser.me/api/"));
    }, []);

    return (
        <>
            <Header user={user} />
            <main className="mx-4 mt-10">
                {
                    // <p>Status: {status}</p>
                }
                <Outlet />
            </main>
        </>
    );
};
