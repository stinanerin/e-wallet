import { Form } from "../components/form/Form";

import { CreditCard } from "../features/cards/CreditCard";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCard } from "../features/cards/cardsSlice";

export const AddCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        card_number: "",
        cvc: "",
        date: "",
        vendor: "",
        gradient: "gradient-default",
    });
    const [isDatePassed, setIsDatePassed] = useState(false);

    const {
        user: { first, last },
        cards,
    } = useSelector((state) => state.cards);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const cardData = Object.fromEntries(form.entries());

        if (!isDatePassed) {
            const newCardObj = {
                // Include props from formDataObj
                ...cardData,
                id: crypto.randomUUID(),
            };

            dispatch(addCard(newCardObj));
            navigate("/");
        }
    };

    return (
        <div className=" flex flex-col items-center lg:flex-row gap-10 md:justify-center">
            {cards.length >= 4 ? (
                <p>
                    You have reached your limit of four credit cards. You need
                    to remove a card before adding another one.
                </p>
            ) : (
                <>
                    <div className="w-full max-w-md">
                        <CreditCard
                            {...formData}
                            user={{
                                first,
                                last,
                            }}
                            useDisplayFormat={true}
                        />
                    </div>

                    <Form
                        handleSubmit={handleSubmit}
                        setFormData={setFormData}
                        formData={formData}
                        setIsDatePassed={setIsDatePassed}
                        isDatePassed={isDatePassed}
                    />
                </>
            )}
        </div>
    );
};
