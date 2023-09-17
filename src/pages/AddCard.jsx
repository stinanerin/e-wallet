import { Form } from "../components/Form";
import chipSvg from "../assets/icons/chip2.svg";
import signalSvg from "../assets/icons/signal.svg";
import amex from "../assets/logos/amex.svg";
import mastercard from "../assets/logos/mastercard.svg";
import visa from "../assets/logos/visa.svg";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCard } from "../features/cards/cardsSlice";
import { generateDisplayFormat } from "../utils/helpers/";

export const AddCard = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        cardNum: [],
        cardMonth: [],
        cardYear: [],
        cardCvc: [],
        cardVendor: "",
    });
    const [vendorSVG, setVendorSVG] = useState(null); // Initialize with null

    const {
        user: { first, last },
    } = useSelector((state) => state.cards);

    const isFormDataValid = () => {
        return (
            formData.cardNum.length === 16 &&
            formData.cardMonth.length === 2 &&
            formData.cardYear.length === 2 &&
            formData.cardCvc.length === 3 &&
            formData.cardVendor !== ""
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormDataValid()) {
            //todo! error msg
            console.log("Form data is invalid");
            return;
        }

        // Continue with form submission
        const cardObj = {
            number: formData.cardNum,
            date: {
                month: formData.cardMonth.join(""),
                year: formData.cardYear.join(""),
            },
            cvc: formData.cardCvc.join(""),
            vendor: formData.cardVendor,
        };
        console.log(cardObj);

        dispatch(addCard(cardObj));
        //todo clear form and maybe navigate the user to the home page
        //todo clear form and maybe navigate user to home page
    };

    useEffect(() => {
        console.log(formData.cardVendor);
        switch (formData.cardVendor) {
            case "Amex":
                setVendorSVG(amex);
                break;
            case "Visa":
                setVendorSVG(visa);
                break;
            case "MasterCard":
                setVendorSVG(mastercard);
                break;
            default:
                setVendorSVG(null);
                break;
        }
    }, [formData.cardVendor]);

    return (
        <div>
            {
                //todo! CARD - break out
            }

            <div className=" px-4 py-6 bg-gray-400 rounded shadow-lg ">
                <div className="flex justify-between svg-icon">
                    <img src={signalSvg} alt="#" className="w-7 " />
                    {
                        //todo! -change to credit card company
                        vendorSVG && (
                            <img src={vendorSVG} alt="#" className="w-10 " />
                        )
                    }
                </div>

                <img src={chipSvg} alt="#" className="w-7 mb-3 mt-1" />

                <p className="text-2xl text-text-contrast flex gap-3">
                    {generateDisplayFormat(formData.cardNum, 16, 4).map(
                        (chunk, i) => {
                            return <span key={chunk + i}>{chunk}</span>;
                        }
                    )}
                </p>
                <div className="flex justify-between mt-6">
                    <div>
                        <p className="uppercase text-xs text-text-contrast font-bold ">
                            Card holder name
                        </p>
                        <p className="uppercase text-sm text-text-contrast ">
                            {first + " " + last}
                        </p>
                    </div>
                    <div>
                        <p className="uppercase text-xs text-text-contrast font-bold ">
                            valid thru
                        </p>
                        <p className="uppercase text-sm text-text-contrast text-end">
                            {generateDisplayFormat(formData.cardMonth, 2)}/
                            {generateDisplayFormat(formData.cardYear, 2)}
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="font-bold text-center mt-4 uppercase">
                Add new card
            </h2>

            <Form
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};
