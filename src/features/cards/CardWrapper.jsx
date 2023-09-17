import { CreditCard } from "./CreditCard";

export const CardWrapper = ({ arr, user }) => {
    return (
        <div>
            <h2>CardWrapper</h2>
            {arr.map((card, i) => {
                return <CreditCard key={i} {...card} user={user} />;
            })}
        </div>
    );
};
