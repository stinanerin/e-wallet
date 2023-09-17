import { Form } from "../components/Form";

import { CreditCard } from "../features/cards/CreditCard";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCard } from "../features/cards/cardsSlice";

export const AddCard = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        cardNum: [],
        cardMonth: [],
        cardYear: [],
        cardCvc: [],
        cardVendor: "",
    });

    const {
        user: { first, last },
        cards,
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

    console.log(cards);

    return (
        <div>
            {cards.length >= 4 ? (
                <p>
                    You have reached your limit of four credit cards. You need
                    to remove a card before adding another one.
                </p>
            ) : (
                <>
                    <CreditCard
                        date={{
                            month: formData.cardMonth.join(""),
                            year: formData.cardYear.join(""),
                        }}
                        number={formData.cardNum}
                        vendor={formData.cardVendor}
                        user={{
                            first,
                            last,
                        }}
                        useDisplayFormat={true}
                    />
                    <h2 className="font-bold text-center mt-4 uppercase">
                        Add new card
                    </h2>
                    <Form
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                    />
                </>
            )}
        </div>
    );
};
