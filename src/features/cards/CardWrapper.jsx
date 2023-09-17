import { CreditCard } from "./CreditCard";

import { setActiveCard, delCard } from "./cardsSlice";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button";

export const CardWrapper = ({ arr, user }) => {
    const dispatch = useDispatch();

    const { activeCard } = useSelector((state) => state.cards);

    return (
        <div>
            <h2>CardWrapper</h2>

            <p>Active card: {activeCard}</p>

            {arr.map((card) => {
                if (card.id === activeCard) {
                    console.log("match", card);
                    return (
                        <div key={card.id}>
                            <CreditCard {...card} user={user} />
                            <p>{card.id}</p>
                        </div>
                    );
                }

                return (
                    <div key={card.id}>
                        <CreditCard {...card} user={user} />
                        <div className="flex gap-10">
                            <Button
                                type="primary"
                                onClick={() => dispatch(setActiveCard(card.id))}
                            >
                                {" "}
                                Activate card
                            </Button>

                            <Button
                                type="secondary"
                                onClick={() => dispatch(delCard(card.id))}
                            >
                                {" "}
                                Delete
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
