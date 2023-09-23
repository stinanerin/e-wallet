import { ToggleDarkMode } from "../ToggleDarkMode";

import { Link } from "react-router-dom";

export const Header = ({ user: { first } }) => {
    return (
        <header className=" p-3 bg-gradient-to-b from-transparent-0 to-bkg text-text-default ">
            <div className="flex justify-between items-end max-w-7xl m-auto">
                <div
                    className={`${
                        !first ? "w-[70px]" : ""
                    } flex items-center gap-2 text-md sm:text-lg  font-bold tracking-tight `}
                >
                    <ToggleDarkMode></ToggleDarkMode>
                    {first && (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                            <p>{first}</p>
                        </>
                    )}
                </div>
                <Link
                    to="/"
                    className=" text-2xl sm:text-3xl uppercase font-bold tracking-tight"
                >
                    E-wallet
                </Link>
                <Link
                    to="/add"
                    className=" text-md sm:text-lg uppercase font-bold tracking-tight "
                >
                    Add card
                </Link>
            </div>
        </header>
    );
};
