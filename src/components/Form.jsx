import { DropDown } from "../components/DropDown";
import { cardCompanies } from "../config/cardCompanies";
export const Form = ({ setCardNum }) => {
    return (
        <form className="bg-gradient-to-b from-transparent-2 to-transparent-0 shadow-lg rounded px-8 pt-6 pb-8 my-4 ">
            <label
                htmlFor=""
                className="block uppercase text-text text-xs font-bold mb-2 "
            >
                Card number
            </label>
            <input
                type="number"
                name=""
                className="rounded-md bg-elem_bg py-1 px-2 sm:w-3/4 text-text mb-4 shadow-md"
                onChange={(e) => {
                    setCardNum((prevState) => {
                        const arr = e.target.value.split("");
                        const lastDigit = arr.pop();
                        return [...prevState, lastDigit];
                    });
                }}
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
