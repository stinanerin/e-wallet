import { Form } from "../components/Form";
import chipImage from "../assets/icons/chip2.svg";

import { useState } from "react";

export const AddCard = () => {
    const [cardNum, setCardNum] = useState([]);

    return (
        <div>
            <h2 className="font-bold">AddCard</h2>

            <div className="h-32 px-4 py-6 bg-gray-900 rounded shadow-lg ">
                <img src={chipImage} alt="" className="w-7" />
                <p className="text-2xl text-text-contrast">
                    {cardNum}xxxx xxxx xxxx
                </p>
            </div>

            <Form cardNum={cardNum} setCardNum={setCardNum} />
        </div>
    );
};
