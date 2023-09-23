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
                            console.log(index * 80);
                            if (card.id === activeCard) {
                                return "";
                            }
                            return (
                                <div
                                    key={card.id}
                                    className={`card w-full  ${
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
                                    <div className="w-full absolute top-0 left-0 duration-300 flex flex-col  sm:flex-row gap-4">
                                        <div className="opacity-100 min-w-full">
                                            <CreditCard {...card} user={user} />
                                        </div>
                                        <div
                                            className={`flex sm:flex-col justify-evenly ${
                                                card.id === hoveredCard
                                                    ? ""
                                                    : "invisible"
                                            }`}
                                        >
                                            <Button
                                                type="primary"
                                                onClick={() =>
                                                    dispatch(
                                                        setActiveCard(card.id)
                                                    )
                                                }
                                            >
                                                Activate
                                            </Button>
                                            <Button
                                                type="secondary"
                                                onClick={() =>
                                                    dispatch(delCard(card.id))
                                                }
                                            >
                                                Delete
                                            </Button>
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
