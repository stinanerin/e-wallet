import { DropDown } from "../components/DropDown";
import { cardVendors } from "../config/cardVendors";
import { useSelector } from "react-redux";

import { blockInvalidChar } from "../utils/helpers/";

import { Button } from "./Button";

export const Form = ({ formData, setFormData, handleSubmit }) => {
    const {
        user: { first, last },
    } = useSelector((state) => state.cards);

    const handleInputValidation = (inputValue, maxLength, fieldName) => {
        // console.log("inputValue", inputValue);
        const cleansedValue = blockInvalidChar(inputValue);
        // console.log("cleansedValue", cleansedValue);

        if (cleansedValue === "" && inputValue !== "") return;

        const newInputArr = cleansedValue.split("");

        setFormData((prevState) => {
            if (prevState[fieldName].length > newInputArr.length) {
                console.log("user removed a digit");
                console.log(newInputArr);
                return {
                    ...prevState,
                    [fieldName]: newInputArr,
                };
            }
            if (prevState[fieldName].length >= maxLength) {
                console.log("max limit reached");
                return prevState;
            }
            const lastDigit = newInputArr.pop();
            return {
                ...prevState,
                [fieldName]: [...prevState[fieldName], lastDigit],
            };
        });
    };

    return (
        <div className="bg-primary-500 shadow-2xl rounded max-w-lg ">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col  gap-4 bg-gradient-to-t from-transparent-2 to-transparent-0  px-8 pt-6 pb-8 my-4 "
            >
                <div>
                    <label
                        htmlFor="cardNumber"
                        className="block uppercase text-text-default text-xs font-bold mb-2 "
                    >
                        Card number
                    </label>
                    <input
                        id="cardNumber"
                        type="text"
                        value={formData.cardNum.join("")}
                        className="rounded-md bg-elem_bg py-1 px-2  w-full  text-text-default text-sm shadow-md"
                        onChange={(e) => {
                            handleInputValidation(
                                e.target.value,
                                16,
                                "cardNum"
                            );
                        }}
                        required
                    />
                    {
                        //todo! add aria descirbe by?
                    }
                    <p className="uppercase text-text-low-contrast text-xs font-bold my-2 ">
                        enter 16 digits
                    </p>
                </div>
                <div>
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
                        className="uppercase text-sm rounded-md bg-elem_bg py-1 px-2  w-full  text-text-low-contrast  shadow-md"
                        disabled
                    />
                </div>
                <div>
                    <p className="block uppercase text-text-default text-xs font-bold mb-2 ">
                        Valid thru
                    </p>
                    <div className=" flex gap-4 items-end ">
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
                                    value={formData.cardMonth.join("")}
                                    onChange={(e) => {
                                        handleInputValidation(
                                            e.target.value,
                                            2,
                                            "cardMonth"
                                        );
                                    }}
                                />
                            </div>
                            <p className="text-text-low-contrast font-bold">
                                /
                            </p>
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
                                    value={formData.cardYear.join("")}
                                    onChange={(e) => {
                                        handleInputValidation(
                                            e.target.value,
                                            2,
                                            "cardYear"
                                        );
                                    }}
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
                                type="text"
                                className="uppercase text-sm rounded-md bg-elem_bg py-1 px-2 w-full text-text-default shadow-md"
                                required
                                maxLength={3}
                                value={formData.cardCvc.join("")}
                                onChange={(e) => {
                                    handleInputValidation(
                                        e.target.value,
                                        3,
                                        "cardCvc"
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <DropDown
                        optionsObj={{
                            filter: "Choose vendor",
                            arr: cardVendors,
                        }}
                        isReq={true}
                        setSelectedValue={(value) =>
                            setFormData({ ...formData, cardVendor: value })
                        }
                    />
                </div>
                <div className="self-center">
                    <Button type="primary">Add card</Button>
                </div>
            </form>
        </div>
    );
};
