import { DropDown } from "../components/DropDown";
import { cardCompanies } from "../config/cardCompanies";

export const Form = ({ setCardNum, cardNum }) => {
    console.log(cardNum.join(""));

    const handleInputChange = (e) => {
        //todo! Fix so you can't enter -+., and so on
        const inputValue = e.target.value;

        const newInputArr = inputValue.split("");
        setCardNum((prevState) => {
            if (prevState.length > newInputArr.length) {
                console.log("user removed a digit");
                return newInputArr;
            }
            if (prevState.length >= 16) {
                console.log("max limit reached");
                return prevState;
            }
            const lastDigit = newInputArr.pop();
            return [...prevState, lastDigit];
        });
    };

    return (
        <form className="bg-gradient-to-b from-transparent-2 to-transparent-0 shadow-lg rounded px-8 pt-6 pb-8 my-4 ">
            <div className="mb-4">
                <label
                    htmlFor=""
                    className="block uppercase text-text text-xs font-bold mb-2 "
                >
                    Card number
                </label>
                <input
                    type="number"
                    value={cardNum.join("")}
                    className="rounded-md bg-elem_bg py-1 px-2 sm:w-3/4 text-text  shadow-md"
                    onChange={handleInputChange}
                />
                <p className="uppercase text-text-low-contrast text-xs font-bold my-2 ">
                    enter 16 digits
                </p>
            </div>
            <DropDown
                optionsObj={{
                    filter: "Choose vendor",
                    arr: cardCompanies,
                }}
            />
        </form>
    );
};
