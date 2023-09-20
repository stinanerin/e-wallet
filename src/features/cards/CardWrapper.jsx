import { CreditCard } from "./CreditCard";

import { setActiveCard, delCard } from "./cardsSlice";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";

export const CardWrapper = () => {
    const dispatch = useDispatch();

    const {
        activeCard,
        cards: cardsArr,
        user,
    } = useSelector((state) => state.cards);

    const activeCardComponent = cardsArr.find((card) => card.id === activeCard);

    return (
        <div>
            <h2 className="font-poppins font-bold text-md">Active card:</h2>

            <div key={activeCardComponent.id}>
                <CreditCard {...activeCardComponent} user={user} />
                <p></p>
            </div>
            {cardsArr.length > 1 && (
                <h2 className="font-bold text-md">Inactive cards</h2>
            )}

            {cardsArr &&
                cardsArr.map((card) => {
                    if (card.id === activeCard) {
                        return "";
                    }

                    return (
                        <div key={card.id}>
                            <div className="opacity-60">
                                <CreditCard {...card} user={user} />
                            </div>
                            <div className="flex gap-10 mb-5">
                                <Button
                                    type="primary"
                                    onClick={() =>
                                        dispatch(setActiveCard(card.id))
                                    }
                                >
                                    Activate
                                </Button>

                                <Button
                                    type="secondary"
                                    onClick={() => dispatch(delCard(card.id))}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
