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
        // vendor: "",
    });

    const {
        // user: { first, last },
        cards,
    } = useSelector((state) => state.cards);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log("data", data);

        const cardData = Object.fromEntries(data.entries());
        console.log("Object: entries", cardData);
        //todo make sure vendor exisits

        const newCardObj = {
            // Include props from formDataObj
            ...cardData,
            id: crypto.randomUUID(),
        };

        console.log("newCardObj", newCardObj);

        // dispatch(addCard(newCardObj));
        // navigate("/");
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
                    {
                        //     <CreditCard
                        //     date={formData.date}
                        //     number={formData.card_number}
                        //     vendor={formData.vendor}
                        //     user={{
                        //         first,
                        //         last,
                        //     }}
                        //     useDisplayFormat={true}
                        // />
                    }
                    <h2 className="font-bold text-center mt-4 uppercase">
                        Add new card
                    </h2>
                    <Form
                        handleSubmit={handleSubmit}
                        setFormData={setFormData}
                        formData={formData}
                    />
                </>
            )}
        </div>
    );
};
