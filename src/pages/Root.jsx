import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

import { useDispatch, useSelector } from "react-redux";

import { getRandomUser } from "../features/cards/cardsSlice";

import { useEffect } from "react";
import { Spinner } from "flowbite-react";

export const Root = () => {
    const dispatch = useDispatch();

    const { user, status } = useSelector((state) => state.cards);
    console.log("status", status);

    useEffect(() => {
        !user && dispatch(getRandomUser("https://randomuser.me/api/"));
    }, []);

    return (
        <>
            <Header user={user} />

            <main className="px-4 pt-10 text-text-default h-full ">
                {status === "Loading..." ? (
                    <div className="flex justify-center items-center h-full ">
                        <Spinner size="xl" />
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
        </>
    );
};
