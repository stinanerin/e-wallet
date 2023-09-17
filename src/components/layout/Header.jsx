import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className=" flex justify-between items-end w-full  p-3 bg-gradient-to-b from-transparent-0 to-bkg ">
            <div className="w-[70px]"></div>
            <Link
                to="/"
                className=" text-xl sm:text-3xl uppercase font-bold tracking-tight text-text-default"
            >
                E-wallet
            </Link>
            <Link
                to="/add"
                className=" text-sm sm:text-md uppercase font-bold tracking-tight text-text-default"
            >
                Add card
            </Link>
        </header>
    );
};
