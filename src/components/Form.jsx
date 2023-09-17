import { DropDown } from "../components/DropDown";
import { cardCompanies } from "../config/cardCompanies";
import { useSelector } from "react-redux";

export const Form = ({
    setCardNum,
    cardNum,
    setCardVendor,
    setCardMonth,
    setCardYear,
    setCardCvc,
    handleSubmit,
}) => {
    const {
        user: { first, last },
    } = useSelector((state) => state.cards);

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
        <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-transparent-2 to-transparent-0 shadow-lg rounded px-8 pt-6 pb-8 my-4 "
        >
            <div className="mb-4">
                <label
                    htmlFor="cardNumber"
                    className="block uppercase text-text-default text-xs font-bold mb-2 "
                >
                    Card number
                </label>
                <input
                    id="cardNumber"
                    type="number"
                    value={cardNum.join("")}
                    className="rounded-md bg-elem_bg py-1 px-2  w-full sm:w-3/4 text-text-default text-sm shadow-md"
                    onChange={handleInputChange}
                    required
                />
                {
                    //todo! add aria descirbe by?
                }
                <p className="uppercase text-text-low-contrast text-xs font-bold my-2 ">
                    enter 16 digits
                </p>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="cardHolder"
                    className="block uppercase text-text-default text-xs font-bold mb-2 "
                >
                    card holder name
                </label>
                <input
                    id="cardHolder"
                    type="text"
                    value={first + " " + last}
                    className="uppercase text-sm rounded-md bg-elem_bg py-1 px-2  w-full sm:w-3/4 text-text-low-contrast  shadow-md"
                    disabled
                />
            </div>
            <p className="block uppercase text-text-default text-xs font-bold mb-2 ">
                Valid thru
            </p>
            <div className=" flex gap-4 items-end mb-4 sm:w-3/4">
                <div className="flex gap-4 items-end w-full">
                    <div>
                        <label
                            htmlFor="monthPicker"
                            className="block uppercase text-text-low-contrast text-xs font-bold mb-2 "
                        >
                            Month
                        </label>
                        <input
                            id="monthPicker"
                            type="number"
                            className="uppercase text-sm rounded-md bg-elem_bg py-1 px-2  w-full  text-text-default shadow-md"
                            required
                            onChange={(e) => setCardMonth(e.target.value)}
                        />
                    </div>
                    <p className="text-text-low-contrast font-bold">/</p>
                    <div>
                        <label
                            htmlFor="yearPicker"
                            className="block uppercase text-text-low-contrast text-xs font-bold mb-2 "
                        >
                            Year
                        </label>
                        <input
                            id="yearPicker"
                            type="number"
                            className="uppercase text-sm rounded-md bg-elem_bg py-1 px-2  w-full  text-text-default shadow-md"
                            required
                            onChange={(e) => setCardYear(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full ">
                    <label
                        htmlFor="cvc"
                        className="block uppercase text-text-default text-xs font-bold mb-2 "
                    >
                        cvc
                    </label>
                    <input
                        id="cvc"
                        type="number"
                        className="uppercase text-sm rounded-md bg-elem_bg py-1 px-2 w-full text-text-default shadow-md"
                        required
                        onChange={(e) => setCardCvc(e.target.value)}
                    />
                </div>
            </div>
            <DropDown
                optionsObj={{
                    filter: "Choose vendor",
                    arr: cardCompanies,
                }}
                isReq={true}
                setSelectedValue={setCardVendor}
            />
            <button className="block bg-black px-4 py-2 border-2 border-black rounded-lg uppercase text-text-contrast text-sm font-bold my-4 hover:bg-text-contrast hover:text-text-default hover:border-text">
                Add card
            </button>
        </form>
    );
};
