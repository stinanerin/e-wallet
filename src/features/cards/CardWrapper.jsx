import { CreditCard } from "./CreditCard";

import { setActiveCard } from "./cardsSlice";

import { useDispatch } from "react-redux";

export const CardWrapper = ({ arr, user }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>CardWrapper</h2>
            {arr.map((card) => {
                return (
                    <div key={card.id}>
                        <CreditCard {...card} user={user} />
                        <button
                            onClick={() => dispatch(setActiveCard(card.id))}
                        >
                            Set as active card
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
