import { CreditCard } from "./CreditCard";

import { setActiveCard, delCard } from "./cardsSlice";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";

export const CardWrapper = ({ arr, user }) => {
    const dispatch = useDispatch();

    const { activeCard } = useSelector((state) => state.cards);

    const activeCardComponent = arr.find((card) => card.id === activeCard);
    console.log(activeCardComponent);

    return (
        <div>
            <h2 className="font-bold text-md">
                Active card:
                {
                    // activeCard
                }
            </h2>

            <div key={activeCardComponent.id}>
                <CreditCard {...activeCardComponent} user={user} />
                <p>
                    {
                        // activeCardComponent.id
                    }
                </p>
            </div>

            <h2 className="font-bold text-md">Inactive cards</h2>

            {arr.map((card) => {
                if (card.id === activeCard) {
                    console.log("match", card);
                    return "";
                }

                return (
                    <div key={card.id}>
                        <div className="opacity-60">
                            <CreditCard {...card} user={user} />
                        </div>
                        <div className="flex gap-10">
                            <Button
                                type="primary"
                                onClick={() => dispatch(setActiveCard(card.id))}
                            >
                                Activate card
                            </Button>

                            {
                                // card.id
                            }

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
