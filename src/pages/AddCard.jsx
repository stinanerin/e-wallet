import { Form } from "../components/Form";
import chipSvg from "../assets/icons/chip2.svg";
import signalSvg from "../assets/icons/signal.svg";

import { useState, useEffect } from "react";
import { splitArrIntoChunks } from "../utils/helpers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCard } from "../features/cards/cardsSlice";

export const AddCard = () => {
    const dispatch = useDispatch();

    const [cardNumDisplay, setCardNumDisplay] = useState([]);
    const [cardNum, setCardNum] = useState([]);
    const [cardMonth, setCardMonth] = useState(null);
    const [cardYear, setCardYear] = useState(null);
    const [cardCvc, setCardCvc] = useState(null);
    const [cardVendor, setCardVendor] = useState(null);

    const {
        user: { first, last },
    } = useSelector((state) => state.cards);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hej");
        const cardObj = {
            number: cardNum,
            date: { month: cardMonth, year: cardYear },
            cvc: cardCvc,
            vendor: cardVendor,
        };
        console.log(cardObj);

        dispatch(addCard(cardObj));
        //todo clear form and maybe navigate user to home page
    };

    return (
        <div>
            <h2 className="font-bold">Add card</h2>

            {
                //! CARD - break out
            }

            <div className=" px-4 py-6 bg-gray-400 rounded shadow-lg ">
                <div className="flex justify-between svg-icon">
                    <img src={signalSvg} alt="" className="w-7 " />
                    {
                        //todo! -change to credit card company
                    }
                    <img src={chipSvg} alt="" className="w-7 " />
                </div>

                <img src={chipSvg} alt="" className="w-7 mb-3 mt-1" />

                <p className="text-2xl text-text-contrast flex gap-3">
                    {cardNumDisplay.map((chunk, i) => {
                        return <span key={chunk + i}>{chunk}</span>;
                    })}
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
                            xx/xx
                        </p>
                    </div>
                </div>
            </div>

            <Form
                cardNum={cardNum}
                setCardNum={setCardNum}
                setCardMonth={setCardMonth}
                setCardYear={setCardYear}
                setCardCvc={setCardCvc}
                setCardVendor={setCardVendor}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};
