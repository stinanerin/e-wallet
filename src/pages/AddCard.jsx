import { Form } from "../components/Form";
import chipImage from "../assets/icons/chip2.svg";

import { useState, useEffect } from "react";

import { splitArrIntoChunks } from "../utils/helpers";

export const AddCard = () => {
    const [cardNum, setCardNum] = useState([1, 5, 6, 7, 4, 4, 4, 4]);

    const [cardNumDisplay, setCardNumDisplay] = useState([]);

    useEffect(() => {
        // Shallow copy
        const arr = [...cardNum];

        // Add 'x' to the newArray until it reaches a length of 16
        while (arr.length < 16) {
            arr.push("X");
        }

        const numChunkArr = splitArrIntoChunks(arr, 4);
        setCardNumDisplay(numChunkArr);
    }, [cardNum]);

    return (
        <div>
            <h2 className="font-bold">AddCard</h2>

            <div className="h-32 px-4 py-6 bg-gray-900 rounded shadow-lg ">
                <img src={chipImage} alt="" className="w-7" />
                <p className="text-2xl text-text-contrast flex gap-3">
                    {cardNumDisplay.map((chunk, i) => {
                        return <span key={chunk + i}>{chunk}</span>;
                    })}
                </p>
            </div>

            <Form cardNum={cardNum} setCardNum={setCardNum} />
        </div>
    );
};
