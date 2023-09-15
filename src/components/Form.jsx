import { DropDown } from "../components/DropDown";
import { cardCompanies } from "../config/cardCompanies";
export const Form = () => {
    return (
        <form className="bg-gradient-to-b from-transparent_2 to-transparent_1 shadow-lg rounded px-8 pt-6 pb-8 my-4 ">
            <label
                htmlFor=""
                className="block uppercase text-text text-sm font-bold mb-2 "
            >
                Card number
            </label>
            <input
                type="text"
                name=""
                className="rounded-md bg-elem_bg py-1 px-2 sm:w-3/4 text-text mb-4"
            />
            <DropDown
                optionsObj={{
                    filter: "Choose vendor",
                    arr: cardCompanies,
                }}
            />
        </form>
    );
};
