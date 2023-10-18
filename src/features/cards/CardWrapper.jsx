"use client";
import { Tooltip } from "flowbite-react";

import { useState } from "react";
import { CreditCard } from "./CreditCard";
import { setActiveCard, delCard } from "./cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button";

export const CardWrapper = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const dispatch = useDispatch();

    const {
        activeCard,
        cards: cardsArr,
        user,
    } = useSelector((state) => state.cards);
    const { darkMode } = useSelector((state) => state.darkMode);

    const activeCardComponent = cardsArr.find((card) => card.id === activeCard);

    const inactiveCards = cardsArr.filter((card) => card.id !== activeCard);

    const handleCardHover = (cardId) => {
        setHoveredCard(cardId);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full  max-w-md">
                <h2 className="font-poppins font-bold text-md uppercase mb-4">
                    Active card
                </h2>
                <div key={activeCardComponent.id} className="mb-5">
                    <CreditCard {...activeCardComponent} user={user} />
                    <p></p>
                </div>
                {cardsArr.length > 1 && (
                    <h2
                        className={`font-bold text-md uppercase ${
                            hoveredCard ? "mb-10" : "mb-4"
                        }`}
                    >
                        Inactive cards
                    </h2>
                )}
                <div className="relative ">
                    {inactiveCards &&
                        inactiveCards.map((card, index) => {
                            const cardStyle = {
                                position: "absolute",
                                top: `${index * 80}px`,
                                left: `${index * 10}px`,
                                zIndex: `${
                                    card.id === hoveredCard ? 100 : 100 - index
                                }`,
                            };
                            if (card.id === activeCard) {
                                return "";
                            }
                            return (
                                <div
                                    key={card.id}
                                    className={`card relative w-full  ${
                                        card.id === hoveredCard
                                            ? "hovered "
                                            : ""
                                    } `}
                                    style={cardStyle}
                                    onMouseEnter={() =>
                                        handleCardHover(card.id)
                                    }
                                    onMouseLeave={() => handleCardHover(null)}
                                >
                                    <div className="w-fit absolute top-0 left-0 duration-300 ">
                                        <div
                                            className="opacity-100 min-w-full"
                                            onClick={() =>
                                                dispatch(setActiveCard(card.id))
                                            }
                                        >
                                            <CreditCard {...card} user={user} />
                                        </div>
                                        <div
                                            className={` absolute -top-3 -right-3 ${
                                                card.id === hoveredCard
                                                    ? ""
                                                    : "invisible"
                                            }`}
                                        >
                                            <Tooltip
                                                content="Delete"
                                                animation="duration-500"
                                                style={
                                                    darkMode ? "light" : "dark"
                                                }
                                            >
                                                <Button
                                                    type="tertiary"
                                                    aria={`Delete credit card with cc number ${card.card_number}`}
                                                    onClick={() =>
                                                        dispatch(
                                                            delCard(card.id)
                                                        )
                                                    }
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="var(--color-danger-50)"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
